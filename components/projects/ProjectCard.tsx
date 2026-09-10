"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Briefcase,
  HeartPulse,
  Code2,
} from "lucide-react";
import { Project } from "@/data/portfolioData";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { soundFx } from "@/lib/sound";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const isHealth = project.id === "ai-health-assistant";

  return (
    <GlassCard
      glowColor={isHealth ? "emerald" : "cyan"}
      className="h-full flex flex-col justify-between p-6 sm:p-8"
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-inner ${
                isHealth
                  ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-300 shadow-emerald-500/20"
                  : "bg-cyan-500/20 border-cyan-400/40 text-cyan-300 shadow-cyan-500/20"
              }`}
            >
              {isHealth ? <HeartPulse className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                {project.category}
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
            </div>
          </div>

          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${
              isHealth
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
            }`}
          >
            {project.subtitle}
          </span>
        </div>

        {/* Visual Mockup Box / Cyber Wireframe */}
        <div className="my-5 p-4 rounded-xl bg-space-950/80 border border-white/10 relative overflow-hidden font-mono text-xs">
          {/* Top terminal dots */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] text-slate-500">
              {isHealth ? "ai-health-core.py" : "job-portal-app.tsx"}
            </span>
          </div>

          {/* Terminal / Wireframe snippet */}
          <div className="space-y-1.5 text-[11px]">
            {isHealth ? (
              <>
                <div className="text-emerald-400">&gt; Initializing Health Predictor...</div>
                <div className="text-slate-400">
                  • Symptom NLP &amp; PDF parser: <span className="text-white">Active</span>
                </div>
                <div className="text-slate-400">
                  • Risk Score Matrix: <span className="text-cyan-300">Optimal (98.4%)</span>
                </div>
                <div className="text-purple-300">&gt; Voice triage &amp; AI chatbot ready.</div>
              </>
            ) : (
              <>
                <div className="text-cyan-400">&gt; Mounting Job Junction Engine...</div>
                <div className="text-slate-400">
                  • Filter facets: <span className="text-white">Location / Role / Experience</span>
                </div>
                <div className="text-slate-400">
                  • State re-renders: <span className="text-emerald-300">Debounced &amp; Optimized</span>
                </div>
                <div className="text-blue-300">&gt; Company listings synchronized.</div>
              </>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-sm leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Features Checklist */}
        <div className="mt-5 space-y-2">
          {project.features.slice(0, 4).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2
                className={`w-3.5 h-3.5 shrink-0 ${
                  isHealth ? "text-emerald-400" : "text-cyan-400"
                }`}
              />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.liveDemoUrl && (
            <Button
              variant={isHealth ? "cyber" : "primary"}
              size="sm"
              href={project.liveDemoUrl}
              target="_blank"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Live Demo
            </Button>
          )}

          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              href={project.githubUrl}
              target="_blank"
              icon={<Github className="w-3.5 h-3.5" />}
            >
              GitHub
            </Button>
          )}
        </div>

        <button
          onClick={() => {
            soundFx.playClick();
            onOpenDetails(project);
          }}
          onMouseEnter={() => soundFx.playHover()}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
        >
          <span>Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </GlassCard>
  );
}
