"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Brain,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { EXPERIENCE_DATA } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

export default function ExperienceTimeline() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="w-5 h-5 text-cyan-400" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-purple-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getGlowColor = (idx: number): "cyan" | "purple" | "amber" => {
    if (idx === 0) return "cyan";
    if (idx === 1) return "purple";
    return "amber";
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Milestones"
          title="My Journey"
          subtitle="Leadership roles, artificial intelligence internships, and campus ambassadorships shaping my software engineering trajectory."
        />

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Glowing central vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-500 opacity-30 pointer-events-none" />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const glow = getGlowColor(idx);

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-8`}
                >
                  {/* Center Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-space-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card Column */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                    <GlassCard
                      glowColor={glow}
                      onMouseEnter={() => soundFx.playHover()}
                      className="p-6 sm:p-7 relative"
                    >
                      {/* Badge & Period Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono">
                          {exp.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <div className="flex items-start gap-3 mt-2">
                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
                          {getIcon(exp.icon)}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-semibold text-cyan-400">
                            {exp.company}
                          </div>
                          <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mt-5 space-y-2">
                        {exp.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Skills Pills */}
                      <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                        {exp.techSkills.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
