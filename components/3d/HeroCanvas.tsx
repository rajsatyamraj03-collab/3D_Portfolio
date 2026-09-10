"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox, Sphere, Torus, Octahedron, Icosahedron, Cylinder } from "@react-three/drei";
import * as THREE from "three";

// Floating Holographic Neural Core
function HolographicNeuralCore() {
  const coreRef = useRef<THREE.Group>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.45;
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = Math.sin(t * 0.8) * 0.5;
      icosaRef.current.rotation.z = Math.cos(t * 0.6) * 0.5;
    }
    if (innerSphereRef.current) {
      const scale = 1 + Math.sin(t * 4) * 0.08;
      innerSphereRef.current.scale.set(scale, scale, scale);
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.7;
      ring1Ref.current.rotation.y += delta * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.6;
      ring2Ref.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <Float speed={2.8} rotationIntensity={1.4} floatIntensity={1.8} position={[0, 0.4, 0]}>
      <group ref={coreRef} scale={[0.85, 0.85, 0.85]}>
        {/* Holographic Wireframe Neural Brain */}
        <mesh ref={icosaRef}>
          <icosahedronGeometry args={[0.78, 1]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.85}
            wireframe
          />
        </mesh>

        {/* Pulsating Glowing Core Sphere */}
        <mesh ref={innerSphereRef}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.9}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Inner Synapse Point Light */}
        <pointLight intensity={2} color="#00f0ff" distance={4} />
        <pointLight intensity={1.5} color="#a855f7" distance={3} />

        {/* Gyroscopic Orbital Rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.15, 0.022, 16, 64]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.9} />
        </mesh>

        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.35, 0.018, 16, 64]} />
          <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

// 3D Cyber Developer Laptop Workstation
function CyberLaptop({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const groupRef = useRef<THREE.Group>(null);
  const glowLight = useRef<THREE.PointLight>(null);

  // Dynamic canvas texture for the code screen (100% offline, zero network requests, instant load)
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Dark cyber terminal background
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, 1024, 640);

      // Terminal header bar
      ctx.fillStyle = "#0b132b";
      ctx.fillRect(0, 0, 1024, 60);

      // Window controls dots
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(36, 30, 12, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#eab308";
      ctx.beginPath();
      ctx.arc(72, 30, 12, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(108, 30, 12, 0, Math.PI * 2);
      ctx.fill();

      // Title
      ctx.font = "bold 24px monospace";
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("satyam-neural-core.py — AI & CS Engine", 150, 38);

      // Code Lines
      ctx.font = "28px monospace";
      ctx.fillStyle = "#00f0ff";
      ctx.fillText("> import neural_engine as ai", 40, 120);

      ctx.fillStyle = "#a855f7";
      ctx.fillText("engineer = {", 40, 180);
      ctx.fillText('  "name": "Satyam Raj",', 80, 230);

      ctx.fillStyle = "#10b981";
      ctx.fillText('  "role": "AI/ML Engineer & CS Student",', 80, 280);

      ctx.fillStyle = "#38bdf8";
      ctx.fillText('  "location": "Indore, Madhya Pradesh",', 80, 330);
      ctx.fillText('  "skills": ["PyTorch", "TensorFlow", "DSA", "LLMs"],', 80, 380);

      ctx.fillStyle = "#fbbf24";
      ctx.fillText('  "achievements": "65+ Google Badges | 30+ MS Badges",', 80, 430);

      ctx.fillStyle = "#a855f7";
      ctx.fillText("}", 40, 480);

      ctx.fillStyle = "#00f0ff";
      ctx.fillText("> ai.deploy_intelligent_system(satyam)", 40, 540);

      ctx.fillStyle = "#34d399";
      ctx.fillText("✓ System Status: 100% OPERATIONAL & REAL-TIME", 40, 600);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const targetX = mouse.current[0] * 0.35;
    const targetY = mouse.current[1] * 0.28;
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetX - 0.12, 4, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, -targetY + 0.15, 4, delta);

    if (glowLight.current) {
      glowLight.current.intensity = 1.4 + Math.sin(state.clock.getElapsedTime() * 3) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.65, 0]} scale={[1.2, 1.2, 1.2]}>
      {/* Laptop Base Body */}
      <RoundedBox args={[3.2, 0.14, 2.1]} radius={0.05} smoothness={4} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#080f24" metalness={0.9} roughness={0.15} />
      </RoundedBox>

      {/* Cyber Edge Glow Strip on Base */}
      <mesh position={[0, -0.44, 1.04]}>
        <boxGeometry args={[3.15, 0.02, 0.02]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.9} />
      </mesh>

      {/* Keyboard Bed */}
      <mesh position={[0, -0.42, -0.15]}>
        <boxGeometry args={[2.8, 0.025, 1.2]} />
        <meshStandardMaterial color="#030712" roughness={0.6} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, -0.42, 0.65]}>
        <boxGeometry args={[1.0, 0.02, 0.6]} />
        <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.6} />
      </mesh>

      {/* Laptop Screen Hinge & Display */}
      <group position={[0, 0.65, -0.95]} rotation={[-0.28, 0, 0]}>
        <RoundedBox args={[3.2, 2.05, 0.09]} radius={0.04} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color="#060c1d" metalness={0.95} roughness={0.1} />
        </RoundedBox>

        {/* Screen Display with Dynamic Canvas Texture */}
        <mesh position={[0, 0.02, 0.05]}>
          <planeGeometry args={[2.98, 1.85]} />
          {screenTexture ? (
            <meshBasicMaterial map={screenTexture} />
          ) : (
            <meshBasicMaterial color="#030712" />
          )}
        </mesh>

        {/* Screen Dynamic Glow Light */}
        <pointLight ref={glowLight} position={[0, 0, 0.6]} intensity={1.5} color="#00f0ff" distance={3.5} />
      </group>

      {/* Floating Holographic AI Core inside workstation */}
      <HolographicNeuralCore />
    </group>
  );
}

// Orbiting Satellites (AI Octahedron, Python Torus, C++ Cube)
function OrbitingSatellites() {
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);
  const group3 = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group1.current) group1.current.rotation.y += delta * 0.35;
    if (group2.current) group2.current.rotation.y -= delta * 0.28;
    if (group3.current) group3.current.rotation.y += delta * 0.42;
  });

  return (
    <>
      {/* Satellite 1: AI Octahedron */}
      <group ref={group1}>
        <Float speed={3} position={[2.6, 1.4, -0.8]}>
          <mesh>
            <octahedronGeometry args={[0.38, 0]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#a855f7"
              emissiveIntensity={0.8}
              wireframe
            />
            <pointLight color="#a855f7" intensity={1} distance={3} />
          </mesh>
        </Float>
      </group>

      {/* Satellite 2: Python / ML Torus */}
      <group ref={group2}>
        <Float speed={2.5} position={[-2.7, 0.8, 0.5]}>
          <mesh>
            <torusGeometry args={[0.34, 0.09, 16, 32]} />
            <meshStandardMaterial
              color="#10b981"
              emissive="#10b981"
              emissiveIntensity={0.7}
              metalness={0.8}
              roughness={0.2}
            />
            <pointLight color="#10b981" intensity={0.9} distance={3} />
          </mesh>
        </Float>
      </group>

      {/* Satellite 3: C++ & DSA Wireframe Cube */}
      <group ref={group3}>
        <Float speed={2.8} position={[2.2, -1.1, 0.8]}>
          <mesh>
            <boxGeometry args={[0.45, 0.45, 0.45]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={0.8}
              wireframe
            />
            <pointLight color="#38bdf8" intensity={0.8} distance={3} />
          </mesh>
        </Float>
      </group>
    </>
  );
}

// Particle Constellation Storm in 3D Space
function ParticleStorm({ count = 240 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 16;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.035;
    pointsRef.current.rotation.x += delta * 0.018;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00f0ff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  const mouse = useRef<[number, number]>([0, 0]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 2 - 1;
    const y = -(((clientY - top) / height) * 2 - 1);
    mouse.current = [x, y];
  };

  return (
    <div
      className="relative w-full h-[480px] sm:h-[550px] lg:h-[660px] cursor-grab active:cursor-grabbing select-none"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0.3, 5.4], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[6, 9, 6]} intensity={1.4} color="#ffffff" />
          <pointLight position={[-5, 4, 3]} intensity={1.2} color="#a855f7" />
          <pointLight position={[5, -3, 3]} intensity={1.3} color="#00f0ff" />
          <pointLight position={[0, 4, -3]} intensity={0.9} color="#10b981" />

          <CyberLaptop mouse={mouse} />
          <OrbitingSatellites />
          <ParticleStorm count={240} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.5}
            maxAzimuthAngle={Math.PI / 3.5}
            minAzimuthAngle={-Math.PI / 3.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
