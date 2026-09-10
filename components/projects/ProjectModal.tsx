"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  HeartPulse,
  Briefcase,
} from "lucide-react";
import { Project } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";
import Button from "@/components/ui/Button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-space-950/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl rounded-3xl bg-space-900 border border-white/15 p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header Badge & Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Featured Showcase
                </span>
              </div>
              <button
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project Title & Subtitle */}
            <div className="mt-5">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {project.subtitle}
              </p>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-cyan-400" /> Technologies &amp; Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-400" /> Key Features &amp; Engineering Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && (
              <div className="mt-6 pt-5 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" /> Architectural Implementations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architectureHighlights.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-purple-500/5 border border-purple-500/20 text-xs font-mono text-purple-200"
                    >
                      &gt; {arch}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveDemoUrl && (
                  <Button
                    variant="primary"
                    size="md"
                    href={project.liveDemoUrl}
                    target="_blank"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="md"
                    href={project.githubUrl}
                    target="_blank"
                    icon={<Github className="w-4 h-4" />}
                  >
                    Source Code
                  </Button>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close Details
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
