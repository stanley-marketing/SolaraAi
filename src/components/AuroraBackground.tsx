"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p = p * 2.03 + vec2(11.7, 9.2);
    amplitude *= 0.5;
  }

  return value;
}

float gaussian(vec2 uv, vec2 center, vec2 sigma) {
  vec2 d = (uv - center) / sigma;
  return exp(-dot(d, d));
}

vec3 pastelSpectrum(float x) {
  vec3 p = 0.5 + 0.5 * cos(6.28318 * (x + vec3(0.0, 0.33, 0.67)));
  p = mix(p, vec3(1.0), 0.32);
  return p;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 st = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);

  float t = uTime * 0.08;

  float flowA = fbm(st * vec2(2.6, 1.8) + vec2(t, -t * 0.4));
  float flowB = fbm(st * vec2(3.2, 2.4) + vec2(-t * 1.2, t * 0.7));
  float flowC = fbm(st * vec2(5.0, 1.6) + vec2(t * 0.5, t * 1.4));

  vec3 color = vec3(0.991, 0.988, 0.983);

  float core = gaussian(
    uv,
    vec2(0.50 + sin(t * 0.7) * 0.03, 0.50 + cos(t * 0.5) * 0.03),
    vec2(0.30, 0.22)
  );

  float left = gaussian(
    uv,
    vec2(0.30 + sin(t * 0.9 + 1.4) * 0.05, 0.52 + flowA * 0.06),
    vec2(0.26, 0.24)
  );

  float right = gaussian(
    uv,
    vec2(0.70 + cos(t * 0.8 + 0.6) * 0.05, 0.52 + flowB * 0.06),
    vec2(0.26, 0.24)
  );

  float topMist = gaussian(uv, vec2(0.52 + sin(t * 0.3) * 0.02, 0.64), vec2(0.46, 0.32));

  float raysMask =
    pow(clamp(1.0 - abs(uv.x - 0.5) * 2.0, 0.0, 1.0), 1.3) *
    pow(clamp(1.0 - uv.y * 0.92, 0.0, 1.0), 0.9);
  raysMask *= gaussian(uv, vec2(0.5, 0.52), vec2(0.58, 0.40));

  float raysNoise = fbm(vec2(uv.x * 8.0 + t * 1.8, uv.y * 1.6 - t * 0.7));
  float rays = raysMask * smoothstep(0.28, 0.9, raysNoise);

  float ribbonY = 0.46 + (flowA - 0.5) * 0.12 + sin((uv.x + t * 0.35) * 6.6) * 0.013;
  float ribbon = exp(-pow((uv.y - ribbonY) * 8.8, 2.0));
  float ribbon2 = exp(-pow((uv.y - (ribbonY + 0.1 + (flowB - 0.5) * 0.05)) * 9.2, 2.0));
  float rainbowBandY = 0.55 + sin((uv.x + t * 0.44) * 4.2) * 0.06 + (flowC - 0.5) * 0.08;
  float rainbowBand = exp(-pow((uv.y - rainbowBandY) * 5.8, 2.0));
  vec3 spectrumA = pastelSpectrum(uv.x * 0.92 + flowC * 0.2 - t * 0.11);
  vec3 spectrumB = pastelSpectrum(uv.x * 1.25 - flowA * 0.28 + t * 0.08 + 0.18);
  vec3 spectrumC = pastelSpectrum(uv.x * 1.58 - t * 0.16 + flowB * 0.3 + 0.11);

  vec3 gold = vec3(0.96, 0.83, 0.63);
  vec3 amber = vec3(0.93, 0.72, 0.48);
  vec3 rose = vec3(0.90, 0.76, 0.70);
  vec3 pearl = vec3(0.99, 0.96, 0.93);
  vec3 rayTint = pastelSpectrum(uv.x * 1.4 - t * 0.09 + flowB * 0.2);
  float arch = gaussian(uv, vec2(0.5, 0.42), vec2(0.44, 0.12));
  vec3 archTint = mix(vec3(1.0), pastelSpectrum(uv.x * 0.85 - t * 0.06), 0.22);

  color += pearl * topMist * 0.2;
  color += gold * core * 0.36;
  color += rose * left * (0.22 + flowC * 0.08);
  color += amber * right * (0.22 + flowA * 0.08);
  color += spectrumA * ribbon * 0.32;
  color += spectrumB * ribbon2 * 0.26;
  color += spectrumC * rainbowBand * 0.22;
  color += rayTint * rays * 0.24;
  color += archTint * arch * 0.5;

  float horizon = gaussian(uv, vec2(0.5, 0.24), vec2(0.50, 0.14));
  color += vec3(1.00, 0.95, 0.86) * horizon * 0.22;

  float vignette = smoothstep(1.12, 0.24, distance(uv, vec2(0.5, 0.52)));
  color = mix(vec3(1.0), color, vignette * 0.95 + 0.05);

  float grain = hash(uv * uResolution + uTime * 25.0) - 0.5;
  color += grain * 0.011;

  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 0.82);
}
`;

function AuroraPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame((state) => {
    if (!materialRef.current) {
      return;
    }

    materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_44%,rgba(171,212,255,0.32)_0%,transparent_60%),radial-gradient(120%_90%_at_88%_44%,rgba(224,191,255,0.32)_0%,transparent_60%),radial-gradient(110%_90%_at_50%_52%,rgba(198,255,220,0.22)_0%,transparent_66%),radial-gradient(95%_55%_at_50%_58%,rgba(255,240,206,0.36)_0%,transparent_70%),linear-gradient(180deg,#fdfcf9_0%,#ffffff_100%)]" />

      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="!absolute inset-0 h-full w-full opacity-[0.9]"
      >
        <AuroraPlane />
      </Canvas>

      <div className="aurora-fallback absolute inset-[-8%] opacity-[0.74] blur-[72px]" />
      <div className="aurora-columns absolute inset-x-[-4%] bottom-[14%] top-[4%] opacity-[0.58] blur-[20px]" />

      <div className="grain-overlay absolute inset-0 opacity-[0.12]" />

      <div className="absolute inset-0 bg-[radial-gradient(105%_75%_at_50%_50%,transparent_64%,rgba(255,255,255,0.07)_100%)]" />
    </div>
  );
}
