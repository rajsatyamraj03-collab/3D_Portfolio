"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Globe,
  Binary,
  Brain,
  Wrench,
  Sparkles,
  Layers,
  Orbit,
  Info,
  CheckCircle2,
  ChevronRight,
  Terminal,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { SKILLS_DATA, SkillItem } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

// Dynamically load the 3D Skills Universe
const SkillsUniverse = dynamic(() => import("@/components/3d/SkillsUniverse"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-mono text-cyan-400">Loading 3D Skills Constellation...</span>
      </div>
    </div>
  ),
});

const CATEGORIES = [
  { id: "All", label: "All Skills", icon: <Layers className="w-3.5 h-3.5" /> },
  { id: "AI / ML", label: "AI / ML & GenAI", icon: <Brain className="w-3.5 h-3.5" /> },
  { id: "Computer Science", label: "CS & DSA", icon: <Binary className="w-3.5 h-3.5" /> },
  { id: "Programming", label: "Programming", icon: <Code2 className="w-3.5 h-3.5" /> },
  { id: "Web Development", label: "Web Systems", icon: <Globe className="w-3.5 h-3.5" /> },
  { id: "Tools & Platforms", label: "Cloud & Tools", icon: <Wrench className="w-3.5 h-3.5" /> },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[13]); // Default AI/ML skill

  const handleCategoryChange = (cat: string) => {
    soundFx.playClick();
    setActiveCategory(cat);
    const firstInCat = SKILLS_DATA.find((s) => (cat === "All" ? true : s.category === cat));
    if (firstInCat) setSelectedSkill(firstInCat);
  };

  const handleNodeSelect = (nodeName: string) => {
    soundFx.playHover();
    const skill = SKILLS_DATA.find((s) => s.name.toLowerCase().includes(nodeName.toLowerCase()));
    if (skill) {
      setSelectedSkill(skill);
    }
  };

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="3D Constellation"
          title="Technical Skills Universe"
          subtitle="Explore the orbital 3D constellation of programming languages, artificial intelligence architectures, algorithms, and cloud tools."
        />

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  isSelected
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-lg shadow-cyan-500/20 scale-105"
                    : "bg-space-850/80 text-slate-400 border border-white/10 hover:text-slate-200 hover:bg-white/[0.08]"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Pure 3D Interactive Universe Display Container */}
        <div className="relative rounded-3xl bg-space-950/80 border border-cyan-500/30 p-4 sm:p-8 overflow-hidden shadow-2xl shadow-cyan-500/10">
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Orbit className="w-4 h-4 animate-spin-slow" />
              <span>ORBITAL CONSTELLATION: LIVE 3D SIMULATION</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Click or rotate spheres to inspect telemetry</span>
            </div>
          </div>

          {/* 3D Skills Canvas */}
          <SkillsUniverse onNodeSelect={handleNodeSelect} />

          {/* Interactive Live Telemetry HUD Panel */}
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Selected Skill Deep Dive Card */}
            <div className="lg:col-span-6 p-5 rounded-2xl bg-space-900/90 border border-cyan-400/30 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> INSPECTED TELEMETRY
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                  {selectedSkill.level}
                </span>
              </div>

              <h4 className="text-xl font-bold font-heading text-white">
                {selectedSkill.name}
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {selectedSkill.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {selectedSkill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[10px] font-mono text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Quick Orbit Nodes Selector */}
            <div className="lg:col-span-6 flex flex-wrap gap-2">
              {filteredSkills.map((skill) => {
                const isCurrent = selectedSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedSkill(skill);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      isCurrent
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-sm shadow-cyan-500/30"
                        : "bg-white/[0.03] text-slate-400 border border-white/10 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {skill.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
