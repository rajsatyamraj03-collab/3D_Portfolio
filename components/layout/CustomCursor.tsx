"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    } else {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("cursor-pointer") ||
          target.getAttribute("role") === "button")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Cyber Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen shadow-[0_0_8px_rgba(0,240,255,0.8)]"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/40 pointer-events-none z-50"
        animate={{
          x: pos.x - (isPointer ? 24 : 14),
          y: pos.y - (isPointer ? 24 : 14),
          width: isPointer ? 48 : 28,
          height: isPointer ? 48 : 28,
          borderColor: isPointer ? "rgba(0, 240, 255, 0.8)" : "rgba(0, 240, 255, 0.3)",
          backgroundColor: isPointer ? "rgba(0, 240, 255, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350, mass: 0.2 }}
      />
    </>
  );
}
