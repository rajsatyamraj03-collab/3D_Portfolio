"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tilt?: boolean;
  glowColor?: "cyan" | "purple" | "emerald" | "amber" | "none";
  borderGlow?: boolean;
}

export default function GlassCard({
  children,
  tilt = true,
  glowColor = "cyan",
  borderGlow = true,
  className,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -7;
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const glowStyles = {
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_12px_40px_-15px_rgba(0,240,255,0.25)]",
    purple: "hover:border-purple-500/40 hover:shadow-[0_12px_40px_-15px_rgba(168,85,247,0.25)]",
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_12px_40px_-15px_rgba(16,185,129,0.25)]",
    amber: "hover:border-amber-500/40 hover:shadow-[0_12px_40px_-15px_rgba(245,158,11,0.25)]",
    none: "hover:border-white/20",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt && isHovered ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : "none",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
      className={cn(
        "relative rounded-2xl bg-space-850/75 backdrop-blur-xl border border-white/10 p-6 sm:p-8 transition-all duration-300 overflow-hidden group",
        borderGlow && glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {/* Radial Hover Spotlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.1), transparent 70%)`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
