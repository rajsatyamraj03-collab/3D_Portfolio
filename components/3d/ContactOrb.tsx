"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function DigitalOrb({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, mouse.current[1] * 0.4, 4, delta);
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.5;
      ring1Ref.current.rotation.x += delta * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.6;
      ring2Ref.current.rotation.z -= delta * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <group position={[0, 0, 0]}>
        {/* Distorting Cyber Pulse Sphere */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.1, 48, 48]} />
          <MeshDistortMaterial
            color="#00f0ff"
            emissive="#3b82f6"
            emissiveIntensity={0.65}
            roughness={0.15}
            metalness={0.85}
            distort={0.42}
            speed={2.8}
          />
        </mesh>

        {/* Orbit Ring 1 */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.65, 0.025, 16, 64]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.8} />
        </mesh>

        {/* Orbit Ring 2 */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.9, 0.02, 16, 64]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
        </mesh>

        <pointLight intensity={2} color="#00f0ff" distance={5} />
        <pointLight intensity={1.5} color="#a855f7" distance={4} position={[0, -1, 1]} />
      </group>
    </Float>
  );
}

export default function ContactOrb() {
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
      className="w-full h-[320px] sm:h-[400px] lg:h-[460px] cursor-grab active:cursor-grabbing select-none"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <React.Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 6, 4]} intensity={1.2} />
          <DigitalOrb mouse={mouse} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
