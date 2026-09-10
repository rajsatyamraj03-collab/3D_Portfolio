"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Trophy,
  ShieldCheck,
  Sparkles,
  GitBranch,
  CheckCircle2,
  Award,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { ACHIEVEMENTS_DATA } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

// Dynamically load the 3D Trophy Canvas
const TrophyCanvas = dynamic(() => import("@/components/3d/TrophyCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[360px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-mono text-amber-400">Rendering 3D Trophy...</span>
      </div>
    </div>
  ),
});

export default function AchievementsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case "Trophy":
        return <Trophy className="w-5 h-5 text-purple-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Distinctions & Badges"
          title="Achievements & Honors"
          subtitle="Quantifiable developer milestones spanning Google Cloud skills, Microsoft Learn trophies, AI distinctions, and open-source contributions."
        />

        {/* Central 3D Trophy Display with Achievement Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Achievements (2 Cards) */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {ACHIEVEMENTS_DATA.slice(0, 2).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <GlassCard
                  glowColor={idx === 0 ? "cyan" : "purple"}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-6 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      {item.issuer}
                    </span>
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                    {item.highlight}
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    {item.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Center 3D Interactive Trophy Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full rounded-3xl bg-space-950/60 border border-amber-500/30 p-4 shadow-2xl shadow-amber-500/10">
              <div className="text-center mb-1">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  3D HOLOGRAPHIC RECOGNITION
                </span>
              </div>
              <TrophyCanvas />
              <div className="text-center mt-2 text-xs font-mono text-slate-400">
                65+ Google Badges • 30+ MS Badges • 4 Trophies
              </div>
            </div>
          </motion.div>

          {/* Right Column Achievements (2 Cards) */}
          <div className="lg:col-span-4 space-y-6 order-3">
            {ACHIEVEMENTS_DATA.slice(2, 4).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <GlassCard
                  glowColor={idx === 0 ? "emerald" : "amber"}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-6 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      {item.issuer}
                    </span>
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 mt-1 mb-3">
                    {item.highlight}
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    {item.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
