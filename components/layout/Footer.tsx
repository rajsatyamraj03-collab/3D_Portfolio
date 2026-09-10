"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Code, Mail, Sparkles, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playWarp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-space-950/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center font-heading font-bold text-cyan-300 text-sm">
              SR
            </div>
            <span className="font-heading font-bold text-lg text-white">Satyam Raj</span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm">
            &ldquo;Building, learning, and turning ideas into reality.&rdquo;
          </p>
          <div className="mt-2 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" />
            <span className="font-semibold text-slate-200">Made by Satyam Raj</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open to AI / ML &amp; Software Engineering Roles</span>
          </div>
        </div>

        {/* Middle Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all shadow-sm"
            aria-label="LeetCode Profile"
          >
            <Code className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
            onMouseEnter={() => soundFx.playHover()}
            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all shadow-sm"
            aria-label="Email Satyam Raj"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
          <p className="text-xs text-slate-400 font-mono">
            © 2026 Satyam Raj. Made with React, Next.js &amp; Three.js.
          </p>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 flex items-center justify-center transition-all shadow-sm group"
            title="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
