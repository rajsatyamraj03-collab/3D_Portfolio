"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Copy,
  Check,
  Sparkles,
  MapPin,
  MessageSquare,
  User,
  AtSign,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

// Dynamically load the 3D Contact Orb
const ContactOrb = dynamic(() => import("@/components/3d/ContactOrb"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[360px] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playSuccess();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00f0ff", "#a855f7", "#10b981", "#fbbf24"],
        });
      } catch {
        // Ignore
      }
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Together"
          subtitle="Have an idea, opportunity, or project? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard glowColor="cyan" className="p-6 sm:p-10 relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Message Transmitted!
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out, {formData.name}. I will review your message and respond promptly!
                    </p>
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", message: "" });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Johnson"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-space-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <AtSign className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          required
                          placeholder="e.g. alex@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-space-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                        Message / Project Scope
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell me about your project, role, or collaboration idea..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-space-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                      className="w-full"
                    >
                      {isSubmitting ? "Transmitting Signal..." : "Send Message 🚀"}
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>

          {/* Right Info & 3D Interactive Cyber Orb */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center text-center lg:text-left"
          >
            {/* 3D Orb */}
            <div className="w-full relative">
              <ContactOrb />
            </div>

            {/* Direct Contact Cards */}
            <div className="w-full space-y-3 mt-4">
              {/* Copy Email Card */}
              <div className="p-4 rounded-2xl bg-space-900/80 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-slate-400 block">DIRECT INBOX</span>
                    <span className="text-xs sm:text-sm font-mono text-white font-medium truncate">
                      {PERSONAL_INFO.socialLinks.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors shrink-0"
                  title="Copy Email Address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-2xl bg-space-900/80 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-400/30 text-purple-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">BASE LOCATION</span>
                  <span className="text-xs sm:text-sm font-mono text-white font-medium">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
