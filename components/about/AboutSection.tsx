"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Trophy,
  Award,
  Layers,
  Code2,
  CheckCircle2,
  MapPin,
  Calendar,
  Building2,
  Cpu,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import StatCounter from "./StatCounter";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  const statsList = [
    {
      label: "Major Projects Built",
      value: 2,
      suffix: "+",
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300",
      description: "Full-Stack Web & AI Platforms",
    },
    {
      label: "Google Skill Badges",
      value: 65,
      suffix: "+",
      icon: <Award className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300",
      description: "Cloud, AI & Cybersecurity",
    },
    {
      label: "Microsoft Badges",
      value: 30,
      suffix: "+",
      icon: <Award className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300",
      description: "Developer & System Modules",
    },
    {
      label: "Microsoft Trophies",
      value: 4,
      suffix: "",
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-300",
      description: "Milestone Technical Achievements",
    },
  ];

  const coreFocusAreas = [
    "Artificial Intelligence & Machine Learning Architectures",
    "Data Structures & Algorithmic Problem Solving",
    "Intelligent Web & Backend Engineering",
    "Active Technical Community Leadership (GSA)",
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Profile Overview"
          title="Who I Am"
          subtitle="Engineering practical solutions at the intersection of modern software, artificial intelligence, and algorithmic logic."
        />

        {/* 3-Column Info & Portrait Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Authentic Portrait Photo Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col"
          >
            <GlassCard glowColor="cyan" className="h-full p-6 flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* Image Container with Cyber Framing */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 group">
                  <Image
                    src="/satyam-raj.png"
                    alt="Satyam Raj - Computer Science & AI/ML Engineer"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle cyber vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent opacity-80" />

                  {/* Corner cyber brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

                  {/* Floating Badge on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-space-950/85 backdrop-blur-md border border-white/10">
                    <h4 className="font-heading font-bold text-white text-base leading-tight">
                      Satyam Raj
                    </h4>
                    <p className="text-[11px] font-mono text-cyan-300 mt-0.5">
                      AI/ML Engineer &amp; CS Student
                    </p>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="mt-4 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to AI / ML Roles</span>
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" /> Indore, MP
                  </span>
                </div>
              </div>

              {/* Bottom Quote Tag */}
              <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-300">
                &gt; &ldquo;Transforming ideas into intelligent real-world systems.&rdquo;
              </div>
            </GlassCard>
          </motion.div>

          {/* Column 2: Detailed Bio & Core Pillars (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col"
          >
            <GlassCard glowColor="purple" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Passionate Computer Science &amp; AI Builder
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {PERSONAL_INFO.aboutDetailed}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Core Technical Focus
                  </h4>
                  <div className="space-y-2.5">
                    {coreFocusAreas.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quote Pill */}
              <div className="mt-6 p-3.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-center gap-3">
                <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <p className="text-xs font-mono text-cyan-200">
                  &ldquo;Building software with clean architecture and solid DSA foundations.&rdquo;
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Column 3: Education & Academic Base (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col"
          >
            <GlassCard glowColor="amber" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Academic Base
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-[10px] font-mono text-amber-300">
                    {PERSONAL_INFO.education.status}
                  </span>

                  <h4 className="font-heading font-bold text-base text-white">
                    {PERSONAL_INFO.education.degree}
                  </h4>

                  <div className="space-y-1.5 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{PERSONAL_INFO.education.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{PERSONAL_INFO.education.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Indore, Madhya Pradesh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-center">
                <span className="text-[10px] font-mono text-slate-400 block">CAMPUS INITIATIVE</span>
                <span className="text-xs font-mono text-amber-300 font-semibold">Google Student Ambassador</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Animated Statistics Counters Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                tilt={false}
                className="p-6 text-center flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 mb-3 shadow-inner">
                  {stat.icon}
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight gradient-text-cyan">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <div className="mt-1 font-semibold text-sm text-slate-200">
                  {stat.label}
                </div>

                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  {stat.description}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
