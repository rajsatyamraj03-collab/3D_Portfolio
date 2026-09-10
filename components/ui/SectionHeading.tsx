"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("flex flex-col mb-12 sm:mb-16 max-w-3xl", alignClasses[align], className)}
    >
      {/* Cyber Category Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm shadow-cyan-500/10">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {badge}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-white">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Futuristic accent bar */}
      <div className="mt-5 flex items-center gap-1.5">
        <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-cyan-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
        <div className="w-10 h-0.5 bg-gradient-to-l from-transparent to-cyan-500" />
      </div>
    </motion.div>
  );
}
