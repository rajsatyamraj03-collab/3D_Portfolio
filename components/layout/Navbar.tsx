"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  FileText,
  Terminal,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { soundFx } from "@/lib/sound";
import Button from "@/components/ui/Button";

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenCommandPalette?: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume, onOpenCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const state = soundFx.toggle();
    setSoundEnabled(state);
  };

  const handleNavClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-space-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center font-heading font-extrabold text-cyan-300 text-lg group-hover:scale-105 group-hover:border-cyan-400 transition-all shadow-md shadow-cyan-500/10">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-white text-base tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                Satyam Raj
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
                PORTFOLIO.3D
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-space-850/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 shadow-sm shadow-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Command Palette Trigger */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                onMouseEnter={() => soundFx.playHover()}
                title="Open Command Palette (Cmd + K)"
                className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-all flex items-center gap-1.5 text-xs font-mono"
              >
                <Terminal className="w-4 h-4" />
                <span className="text-[10px] text-slate-400 bg-white/10 px-1.5 py-0.5 rounded">⌘K</span>
              </button>
            )}

            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              onMouseEnter={() => soundFx.playHover()}
              title={soundEnabled ? "Mute UI Audio" : "Enable Futuristic UI Audio"}
              className={`p-2 rounded-xl border transition-all ${
                soundEnabled
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-sm shadow-cyan-500/30"
                  : "bg-white/[0.04] border-white/10 text-slate-400 hover:text-slate-200"
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <Button
              variant="outline"
              size="sm"
              icon={<FileText className="w-3.5 h-3.5" />}
              onClick={onOpenResume}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu & Sound Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-xl border ${
                soundEnabled
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50"
                  : "bg-white/[0.04] border-white/10 text-slate-400"
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-space-950/95 backdrop-blur-2xl border-b border-white/15 p-6 flex flex-col gap-4 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 rounded-xl text-slate-200 hover:text-cyan-300 hover:bg-white/[0.05] font-medium text-base transition-colors flex items-center justify-between border border-transparent hover:border-white/10"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-cyan-400">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={<FileText className="w-4 h-4" />}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenResume) onOpenResume();
                }}
              >
                View Full Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
