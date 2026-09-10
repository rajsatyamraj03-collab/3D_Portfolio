"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FolderGit2,
  FileText,
  Linkedin,
  Github,
  Code,
  ArrowDown,
  Sparkles,
  MapPin,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";
import Button from "@/components/ui/Button";

// Dynamically import the 3D Canvas with SSR disabled
const HeroCanvas = dynamic(() => import("@/components/3d/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] sm:h-[520px] lg:h-[620px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-2xl border-2 border-cyan-400 border-t-transparent animate-spin" />
        <span className="text-xs font-mono text-cyan-400">Loading 3D Canvas...</span>
      </div>
    </div>
  ),
});

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start z-10"
          >
            {/* Status & Location Pill with Micro Avatar */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-space-850/90 border border-cyan-400/40 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <div className="relative w-5 h-5 rounded-full overflow-hidden border border-cyan-400 shrink-0">
                <Image
                  src="/satyam-raj.png"
                  alt="Satyam Raj"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-200 font-medium">Satyam Raj</span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-cyan-400" /> {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="gradient-text-cyan drop-shadow-sm">
                Satyam Raj
              </span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="mt-3 flex items-center gap-2 min-h-[36px] text-lg sm:text-xl lg:text-2xl font-mono text-cyan-300">
              <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>{displayedText}</span>
              <span className="w-2 h-6 bg-cyan-400 animate-pulse" />
            </div>

            {/* Hero Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              &ldquo;{PERSONAL_INFO.heroDescription}&rdquo;
            </p>

            {/* Key Quick Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300">
                AI / ML &amp; Computer Science
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-purple-300">
                Google Student Ambassador
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-emerald-300">
                65+ Google Badges
              </span>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                icon={<FolderGit2 className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={<FileText className="w-4 h-4" />}
                onClick={onOpenResume}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Icons Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 w-full">
              <span className="text-xs font-mono text-slate-400">CONNECT:</span>
              
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-purple-300 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all group"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 hover:bg-amber-500/10 transition-all group"
                aria-label="LeetCode Profile"
              >
                <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right 3D Interactive Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* 3D Canvas */}
            <HeroCanvas />

            {/* Interactive hint overlay */}
            <div className="absolute bottom-2 right-4 pointer-events-none bg-space-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              Interactive 3D • Drag to inspect
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 lg:mt-16 flex flex-col items-center justify-center text-center select-none"
        >
          <a
            href="#about"
            onMouseEnter={() => soundFx.playHover()}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span>Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-cyan-400/50 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
