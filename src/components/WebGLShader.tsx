"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

type ShaderUniforms = {
  resolution: { value: [number, number] }
  time: { value: number }
  xScale: { value: number }
  yScale: { value: number }
  distortion: { value: number }
}

const SKYBOX_COLOR_HEX = 0xffffff

export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.PerspectiveCamera | null
    renderer: THREE.WebGLRenderer | null
    skybox: THREE.Mesh | null
    softLight: THREE.HemisphereLight | null
    fillLight: THREE.DirectionalLight | null
    mesh: THREE.Mesh | null
    uniforms: ShaderUniforms | null
    animationId: number | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    skybox: null,
    softLight: null,
    fillLight: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const { current: refs } = sceneRef

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        float d = length(p) * distortion;
        
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.03 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.03 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.03 / abs(p.y + sin((bx + time) * xScale) * yScale);

        vec3 color = clamp(vec3(r, g, b), 0.0, 1.0);
        color = mix(vec3(1.0), color, 0.34);
        float intensity = max(max(color.r, color.g), color.b);
        float alpha = smoothstep(0.18, 0.95, intensity) * 0.4;
        
        gl_FragColor = vec4(color, alpha);
      }
    `

    const initScene = () => {
      const skyboxColor = new THREE.Color(SKYBOX_COLOR_HEX)

      refs.scene = new THREE.Scene()
      refs.scene.background = skyboxColor.clone()

      refs.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      refs.renderer.setClearColor(skyboxColor, 1)

      refs.camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 200)
      refs.camera.position.set(0, 0, 2)

      refs.skybox = new THREE.Mesh(
        new THREE.BoxGeometry(120, 120, 120),
        new THREE.MeshBasicMaterial({ color: skyboxColor, side: THREE.BackSide })
      )
      refs.scene.add(refs.skybox)

      refs.softLight = new THREE.HemisphereLight(0xffffff, 0xf5f7ff, 0.65)
      refs.fillLight = new THREE.DirectionalLight(0xffffff, 0.35)
      refs.fillLight.position.set(2.5, 3, 4)

      refs.scene.add(refs.softLight, refs.fillLight)

      refs.uniforms = {
        resolution: { value: [1, 1] as [number, number] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
      }

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ]

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", positions)

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)

      handleResize()
    }

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.01
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms || !refs.camera) return
      const width = window.innerWidth
      const height = window.innerHeight
      const pixelRatio = Math.min(window.devicePixelRatio, 2)

      refs.renderer.setPixelRatio(pixelRatio)
      refs.renderer.setSize(width, height, false)

      const drawingBuffer = new THREE.Vector2()
      refs.renderer.getDrawingBufferSize(drawingBuffer)
      refs.uniforms.resolution.value = [drawingBuffer.x, drawingBuffer.y]

      refs.camera.aspect = width / Math.max(height, 1)
      refs.camera.updateProjectionMatrix()
    }

    initScene()
    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      window.removeEventListener("resize", handleResize)
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose()
        }
      }

      if (refs.skybox) {
        refs.scene?.remove(refs.skybox)
        refs.skybox.geometry.dispose()
        if (refs.skybox.material instanceof THREE.Material) {
          refs.skybox.material.dispose()
        }
      }

      if (refs.softLight) {
        refs.scene?.remove(refs.softLight)
      }

      if (refs.fillLight) {
        refs.scene?.remove(refs.fillLight)
      }

      refs.renderer?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full block"
    />
  )
}
