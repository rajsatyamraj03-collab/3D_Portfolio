"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  MapPin,
  Linkedin,
  Github,
  CheckCircle2,
} from "lucide-react";
import { RESUME_DETAILS } from "@/data/resumeData";
import { soundFx } from "@/lib/sound";
import Button from "@/components/ui/Button";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-space-950/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl rounded-3xl bg-space-900 border border-white/20 shadow-2xl shadow-cyan-500/10 overflow-hidden z-10 max-h-[92vh] flex flex-col"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-space-950/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="font-heading font-bold text-white text-base">
                  Satyam Raj — Curriculum Vitae
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  icon={<Printer className="w-3.5 h-3.5" />}
                  onClick={handlePrint}
                >
                  Print / Save PDF
                </Button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onClose();
                  }}
                  className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Printable Resume Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-space-900 text-slate-200">
              {/* Header with Photo */}
              <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-bold font-heading text-white">
                    {RESUME_DETAILS.header.name}
                  </h1>
                  <p className="text-sm font-mono text-cyan-400 mt-1">
                    {RESUME_DETAILS.header.title}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" /> {RESUME_DETAILS.header.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-cyan-400" /> {RESUME_DETAILS.header.email}
                    </span>
                  </div>
                </div>

                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20 shrink-0">
                  <Image
                    src="/satyam-raj.png"
                    alt="Satyam Raj"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  Professional Summary
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {RESUME_DETAILS.summary}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                  Education
                </h2>
                {RESUME_DETAILS.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-white">{edu.institution}</h3>
                        <p className="text-xs text-cyan-300 font-mono">{edu.degree}</p>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-slate-300">
                      {edu.details.map((d, dIdx) => (
                        <li key={dIdx}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                  Experience &amp; Leadership
                </h2>
                <div className="space-y-4">
                  {RESUME_DETAILS.experience.map((exp) => (
                    <div key={exp.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-base font-bold text-white">{exp.role}</h3>
                          <p className="text-xs text-cyan-300 font-mono">{exp.company} — {exp.location}</p>
                        </div>
                        <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                      </div>
                      <ul className="mt-2 space-y-1 text-xs text-slate-300">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx}>• {h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                  Featured Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {RESUME_DETAILS.projects.map((proj) => (
                    <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <h3 className="text-base font-bold text-white">{proj.title}</h3>
                      <p className="text-xs text-cyan-300 font-mono mb-2">{proj.subtitle}</p>
                      <p className="text-xs text-slate-300 mb-3">{proj.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {proj.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Badges */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                  Certifications &amp; Achievements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {RESUME_DETAILS.certifications.map((cert) => (
                    <div key={cert.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">{cert.title}</span>
                        <span className="text-slate-400 block text-[11px] font-mono">{cert.issuer} ({cert.year})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
