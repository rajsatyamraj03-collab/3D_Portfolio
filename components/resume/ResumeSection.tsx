"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import ResumeModal from "./ResumeModal";
import { soundFx } from "@/lib/sound";

export default function ResumeSection({ onOpenResume }: { onOpenResume?: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    soundFx.playClick();
    if (onOpenResume) {
      onOpenResume();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section id="resume" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard glowColor="cyan" className="p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>OFFICIAL CANDIDATE CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
              Want the full story?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore my complete experience, projects, skills, certifications, and achievements in an interactive, verified format.
            </p>

            {/* Feature Checklist */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> SAGE University CSE
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Oracle AI Associate
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> 65+ Google Badges
              </span>
            </div>

            {/* Dual CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={<Eye className="w-4 h-4" />}
                onClick={handleOpen}
              >
                View Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                onClick={handleOpen}
              >
                Download Resume (PDF)
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
