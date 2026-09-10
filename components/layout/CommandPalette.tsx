"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderGit2,
  Cpu,
  GraduationCap,
  Trophy,
  Mail,
  FileText,
  Linkedin,
  Github,
  Code,
  X,
  ArrowRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  const items = [
    {
      title: "View Featured Projects",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.location.hash = "projects";
        onClose();
      },
    },
    {
      title: "Explore Technical Skills Constellation",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      action: () => {
        window.location.hash = "skills";
        onClose();
      },
    },
    {
      title: "Experience & Journey (Google Student Ambassador, CodSoft)",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.hash = "experience";
        onClose();
      },
    },
    {
      title: "Achievements & Google/Microsoft Badges",
      category: "Navigation",
      icon: <Trophy className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.location.hash = "achievements";
        onClose();
      },
    },
    {
      title: "Certifications & Oracle Cloud AI 2025",
      category: "Navigation",
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.location.hash = "certifications";
        onClose();
      },
    },
    {
      title: "Open Interactive Resume Viewer",
      category: "Action",
      icon: <FileText className="w-4 h-4 text-cyan-300" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      title: "Send Message / Contact Satyam",
      category: "Action",
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.hash = "contact";
        onClose();
      },
    },
    {
      title: "Open LinkedIn Profile",
      category: "External",
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      action: () => window.open(PERSONAL_INFO.socialLinks.linkedin, "_blank"),
    },
    {
      title: "Open GitHub Profile (rajsatyamraj03-collab)",
      category: "External",
      icon: <Github className="w-4 h-4 text-purple-400" />,
      action: () => window.open(PERSONAL_INFO.socialLinks.github, "_blank"),
    },
    {
      title: "Open LeetCode Profile",
      category: "External",
      icon: <Code className="w-4 h-4 text-amber-400" />,
      action: () => window.open(PERSONAL_INFO.socialLinks.leetcode, "_blank"),
    },
  ];

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        soundFx.playClick();
        if (isOpen) onClose();
        else {
          // Open triggered by parent or keyboard
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-space-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-2xl bg-space-900 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <Search className="w-5 h-5 text-cyan-400" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command, project, or section..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none font-mono"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
              {filtered.length > 0 ? (
                filtered.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundFx.playClick();
                      item.action();
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-cyan-500/10 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/40">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                          {item.title}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500">{item.category}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-sm text-slate-500 font-mono">
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="px-4 py-2 bg-space-950/80 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Navigation &amp; Quick Actions</span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">ESC</kbd> to close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
