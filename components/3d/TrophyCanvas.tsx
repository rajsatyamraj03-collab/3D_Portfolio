"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Cylinder, Torus, Octahedron } from "@react-three/drei";
import * as THREE from "three";

function HolographicTrophy() {
  const groupRef = useRef<THREE.Group>(null);
  const gemRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.45;
    }
    if (gemRef.current) {
      gemRef.current.rotation.x += delta * 0.6;
      gemRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Trophy Base Pedestal */}
      <Cylinder args={[0.9, 1.1, 0.35, 32]} position={[0, -1.2, 0]}>
        <meshStandardMaterial color="#0b132b" metalness={0.9} roughness={0.15} />
      </Cylinder>
      <Cylinder args={[0.65, 0.85, 0.25, 32]} position={[0, -0.9, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
      </Cylinder>

      {/* Trophy Stem */}
      <Cylinder args={[0.2, 0.35, 0.8, 16]} position={[0, -0.4, 0]}>
        <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.4} metalness={0.9} roughness={0.2} />
      </Cylinder>

      {/* Main Trophy Cup */}
      <Cylinder args={[0.95, 0.35, 1.1, 32, 1, true]} position={[0, 0.5, 0]}>
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#fbbf24"
          emissiveIntensity={0.35}
          metalness={0.95}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </Cylinder>

      {/* Trophy Handles */}
      <group position={[-0.9, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <Torus args={[0.45, 0.08, 16, 32]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
        </Torus>
      </group>
      <group position={[0.9, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <Torus args={[0.45, 0.08, 16, 32]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
        </Torus>
      </group>

      {/* Floating Glowing Diamond Gem inside Cup */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={1.2}>
        <mesh ref={gemRef} position={[0, 1.4, 0]}>
          <octahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.8}
            metalness={0.8}
            roughness={0.1}
          />
          <pointLight color="#00f0ff" intensity={1.8} distance={4} />
        </mesh>
      </Float>
    </group>
  );
}

// Orbiting Badge Shields
function OrbitingBadges() {
  const g1Ref = useRef<THREE.Group>(null);
  const g2Ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (g1Ref.current) g1Ref.current.rotation.y += delta * 0.35;
    if (g2Ref.current) g2Ref.current.rotation.y -= delta * 0.28;
  });

  return (
    <>
      <group ref={g1Ref}>
        <Float speed={2} position={[1.8, 0.6, 0]}>
          <Octahedron args={[0.26, 0]}>
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.6} wireframe />
          </Octahedron>
        </Float>
        <Float speed={2} position={[-1.8, -0.4, 0]}>
          <Octahedron args={[0.26, 0]}>
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.6} wireframe />
          </Octahedron>
        </Float>
      </group>

      <group ref={g2Ref}>
        <Float speed={2.5} position={[0, 0.8, 1.8]}>
          <Octahedron args={[0.22, 0]}>
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.6} wireframe />
          </Octahedron>
        </Float>
        <Float speed={2.5} position={[0, -0.6, -1.8]}>
          <Octahedron args={[0.22, 0]}>
            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.6} wireframe />
          </Octahedron>
        </Float>
      </group>
    </>
  );
}

export default function TrophyCanvas() {
  return (
    <div className="w-full h-[360px] sm:h-[420px] select-none">
      <Canvas
        camera={{ position: [0, 0.6, 4.4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <React.Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-4, 2, 3]} intensity={1} color="#fbbf24" />
          <pointLight position={[4, -2, 3]} intensity={0.8} color="#00f0ff" />

          <HolographicTrophy />
          <OrbitingBadges />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
