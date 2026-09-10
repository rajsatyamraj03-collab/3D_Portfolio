"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
  X,
  FileCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { CERTIFICATIONS_DATA, CertificationItem } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

export default function CertificationsWall() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const handleOpenCert = (cert: CertificationItem) => {
    soundFx.playClick();
    setSelectedCert(cert);
  };

  const handleCloseCert = () => {
    soundFx.playClick();
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications & Learning"
          subtitle="Formal industry accreditations and technical evaluations in AI Foundations, Data Structures, Cloud Computing, and Professional Systems."
        />

        {/* 4-Card Holographic Certificate Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <GlassCard
                glowColor={
                  idx === 0
                    ? "amber"
                    : idx === 1
                    ? "emerald"
                    : idx === 2
                    ? "cyan"
                    : "purple"
                }
                className="h-full flex flex-col justify-between p-6 sm:p-8"
              >
                <div>
                  {/* Top Header Badge & Year */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono border bg-gradient-to-r ${cert.badgeColor}`}
                    >
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.year}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                    {cert.description}
                  </p>

                  {/* Focus Topic Badges */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Core Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.focus.map((f, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-xs font-mono text-slate-200"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Credential</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={<FileCheck className="w-3.5 h-3.5" />}
                    onClick={() => handleOpenCert(cert)}
                  >
                    View Certificate
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Certificate Inspection Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseCert}
                className="fixed inset-0 bg-space-950/80 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-xl rounded-3xl bg-space-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 z-10"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>AUTHENTICATED ACCREDITATION</span>
                  </div>
                  <button
                    onClick={handleCloseCert}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Certificate Details */}
                <div className="mt-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-300 mb-4 shadow-lg shadow-cyan-500/20">
                    <Award className="w-8 h-8" />
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm font-mono text-cyan-400 mt-1">
                    Issued Year: {selectedCert.year}
                  </p>

                  <div className="my-6 p-4 rounded-2xl bg-space-950/80 border border-white/10 text-left">
                    <h4 className="text-xs font-mono text-slate-400 uppercase mb-3">
                      Mastered Competencies:
                    </h4>
                    <div className="space-y-2 text-xs text-slate-300">
                      {selectedCert.topics.map((t, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 italic">
                    Recipient: Satyam Raj (B.Tech Computer Science, SAGE University)
                  </p>
                </div>

                {/* Bottom Close Action */}
                <div className="mt-6 pt-5 border-t border-white/10 flex justify-end">
                  <Button variant="primary" size="sm" onClick={handleCloseCert}>
                    Done
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
