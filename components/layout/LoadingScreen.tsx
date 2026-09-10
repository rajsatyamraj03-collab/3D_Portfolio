"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Loading Neural Mesh...");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const statuses = [
      "Initializing 3D Developer Engine...",
      "Calibrating Neural Shaders...",
      "Connecting Skill Constellations...",
      "Loading Project Holograms...",
      "Universe Ready.",
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 18) + 12;
        const statusIdx = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
        setStatusText(statuses[statusIdx]);
        return Math.min(next, 100);
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-space-950 text-white select-none px-6"
        >
          {/* Animated Matrix Background glow */}
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

          {/* Logo Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-cyan-400/50 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
              <span className="font-heading font-extrabold text-3xl tracking-wider gradient-text-cyan">
                SR
              </span>
            </div>
            {/* Spinning Ring */}
            <div className="absolute -inset-2 rounded-2xl border border-cyan-400/20 animate-spin-slow pointer-events-none" />
          </motion.div>

          {/* Subtitle */}
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-white mb-1.5">
              Satyam Raj
            </h2>
            <p className="text-xs font-mono text-cyan-400 tracking-wider">
              INITIALIZING DEVELOPER UNIVERSE...
            </p>
          </div>

          {/* Progress Bar Container */}
          <div className="w-64 sm:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden relative mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Dynamic Status Text & % */}
          <div className="flex items-center justify-between w-64 sm:w-80 text-xs font-mono text-slate-400">
            <span className="truncate max-w-[200px]">{statusText}</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
