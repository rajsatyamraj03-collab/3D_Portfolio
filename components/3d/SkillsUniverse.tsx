"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Line } from "@react-three/drei";
import * as THREE from "three";

interface SkillNodeData {
  id: string;
  name: string;
  category: string;
  color: string;
  radius: number;
  speed: number;
  offset: number;
  elevation: number;
}

const NODES_DATA: SkillNodeData[] = [
  // Core Programming (Inner Orbit)
  { id: "c", name: "C", category: "Programming", color: "#60a5fa", radius: 2.2, speed: 0.35, offset: 0, elevation: 0.3 },
  { id: "cpp", name: "C++", category: "Programming", color: "#38bdf8", radius: 2.2, speed: 0.35, offset: (Math.PI * 2) / 4, elevation: -0.2 },
  { id: "java", name: "Java", category: "Programming", color: "#f87171", radius: 2.2, speed: 0.35, offset: (Math.PI * 2) * 2 / 4, elevation: 0.4 },
  { id: "python", name: "Python", category: "Programming", color: "#facc15", radius: 2.2, speed: 0.35, offset: (Math.PI * 2) * 3 / 4, elevation: -0.3 },

  // Web Development (Mid-Inner Orbit)
  { id: "react", name: "React JS", category: "Web", color: "#00f0ff", radius: 3.3, speed: -0.25, offset: 0.5, elevation: 0.5 },
  { id: "js", name: "JavaScript", category: "Web", color: "#fde047", radius: 3.3, speed: -0.25, offset: 0.5 + (Math.PI * 2) / 3, elevation: -0.4 },
  { id: "htmlcss", name: "HTML / CSS", category: "Web", color: "#fb923c", radius: 3.3, speed: -0.25, offset: 0.5 + (Math.PI * 2) * 2 / 3, elevation: 0.2 },

  // AI & CS (Mid-Outer Orbit)
  { id: "ai", name: "AI / ML", category: "AI / ML", color: "#c084fc", radius: 4.4, speed: 0.18, offset: 1.2, elevation: 0.6 },
  { id: "genai", name: "Generative AI", category: "AI / ML", color: "#e879f9", radius: 4.4, speed: 0.18, offset: 1.2 + (Math.PI * 2) / 4, elevation: -0.5 },
  { id: "dsa", name: "DSA & Algorithmic Logic", category: "CS", color: "#34d399", radius: 4.4, speed: 0.18, offset: 1.2 + (Math.PI * 2) * 2 / 4, elevation: 0.3 },
  { id: "oop", name: "OOP Principles", category: "CS", color: "#4ade80", radius: 4.4, speed: 0.18, offset: 1.2 + (Math.PI * 2) * 3 / 4, elevation: -0.2 },

  // Cloud & Tools (Outer Orbit)
  { id: "oracle", name: "Oracle Cloud (OCI)", category: "Cloud & Tools", color: "#f97316", radius: 5.4, speed: -0.12, offset: 2.0, elevation: 0.4 },
  { id: "google", name: "Google Dev Tools", category: "Cloud & Tools", color: "#38bdf8", radius: 5.4, speed: -0.12, offset: 2.0 + (Math.PI * 2) / 3, elevation: -0.3 },
  { id: "github", name: "GitHub & Git", category: "Cloud & Tools", color: "#a78bfa", radius: 5.4, speed: -0.12, offset: 2.0 + (Math.PI * 2) * 2 / 3, elevation: 0.5 },
];

function OrbitRing({ radius, color }: { radius: number; color: string }) {
  const points = useMemo(() => {
    const pts = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return pts;
  }, [radius]);

  return <Line points={points} color={color} opacity={0.18} transparent lineWidth={1} />;
}

function OrbitingSkillNode({
  node,
  isSelected,
  onSelect,
}: {
  node: SkillNodeData;
  isSelected: boolean;
  onSelect: (node: SkillNodeData) => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * node.speed + node.offset;
    const x = Math.cos(t) * node.radius;
    const z = Math.sin(t) * node.radius;
    const y = node.elevation + Math.sin(t * 2) * 0.15;
    meshRef.current.position.set(x, y, z);
  });

  return (
    <group
      ref={meshRef}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(node);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <mesh scale={hovered || isSelected ? 1.35 : 1}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered || isSelected ? 0.9 : 0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Label above node */}
      <Text
        position={[0, 0.38, 0]}
        fontSize={0.2}
        color={hovered || isSelected ? "#ffffff" : node.color}
        anchorX="center"
        anchorY="bottom"
      >
        {node.name}
      </Text>
    </group>
  );
}

function CentralCore() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y += delta * 0.5;
    coreRef.current.rotation.x += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <group>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>
        {/* Inner Solid Core */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#0b132b"
            emissive="#3b82f6"
            emissiveIntensity={0.5}
            roughness={0.1}
          />
        </mesh>
        <Text position={[0, 0, 0.55]} fontSize={0.18} color="#00f0ff" anchorX="center" anchorY="middle">
          CS & AI
        </Text>
        <pointLight intensity={2} color="#00f0ff" distance={6} />
      </group>
    </Float>
  );
}

export default function SkillsUniverse({ onNodeSelect }: { onNodeSelect?: (nodeName: string) => void }) {
  const [selectedNode, setSelectedNode] = useState<SkillNodeData | null>(null);

  const handleNodeClick = (node: SkillNodeData) => {
    setSelectedNode(node);
    if (onNodeSelect) {
      onNodeSelect(node.name);
    }
  };

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 4.8, 6.8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <React.Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[4, 10, 5]} intensity={1.2} />
          <pointLight position={[-5, 5, -5]} intensity={0.6} color="#a855f7" />

          <CentralCore />

          {/* Orbit Rings */}
          <OrbitRing radius={2.2} color="#60a5fa" />
          <OrbitRing radius={3.3} color="#00f0ff" />
          <OrbitRing radius={4.4} color="#c084fc" />
          <OrbitRing radius={5.4} color="#f97316" />

          {/* Orbiting Skill Nodes */}
          {NODES_DATA.map((node) => (
            <OrbitingSkillNode
              key={node.id}
              node={node}
              isSelected={selectedNode?.id === node.id}
              onSelect={handleNodeClick}
            />
          ))}
        </React.Suspense>
      </Canvas>
    </div>
  );
}
