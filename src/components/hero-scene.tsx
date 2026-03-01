"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

function WireShape({
  position,
  geometry,
  speed = 0.3,
  opacity = 0.15,
  scale = 1,
}: {
  position: [number, number, number];
  geometry: "torus" | "icosahedron" | "octahedron" | "torusKnot";
  speed?: number;
  opacity?: number;
  scale?: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed * 0.5;
    ref.current.rotation.y += delta * speed;
  });

  const geometryNode = (() => {
    switch (geometry) {
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.8, 0.3, 64, 8]} />;
    }
  })();

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometryNode}
        <meshBasicMaterial
          wireframe
          color="#ffffff"
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <WireShape
        position={[-3.5, 1.5, -2]}
        geometry="torusKnot"
        speed={0.2}
        opacity={0.12}
        scale={0.7}
      />
      <WireShape
        position={[3.8, -1, -3]}
        geometry="icosahedron"
        speed={0.35}
        opacity={0.1}
        scale={0.9}
      />
      <WireShape
        position={[-2, -2, -4]}
        geometry="octahedron"
        speed={0.25}
        opacity={0.08}
        scale={0.6}
      />
      <WireShape
        position={[2, 2.5, -5]}
        geometry="torus"
        speed={0.15}
        opacity={0.1}
        scale={0.8}
      />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
