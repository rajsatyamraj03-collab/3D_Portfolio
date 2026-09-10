"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Code,
  ExternalLink,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { CODING_PROFILES } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";

export default function ProfilesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin className="w-6 h-6 text-blue-400" />;
      case "Github":
        return <Github className="w-6 h-6 text-purple-400" />;
      case "Code":
        return <Code className="w-6 h-6 text-amber-400" />;
      default:
        return <Terminal className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="profiles" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Online Presence"
          title="Find Me Online"
          subtitle="Connect across industry platforms, inspect open-source software repositories, and review algorithmic problem-solving practice."
        />

        {/* 3 Large Interactive Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CODING_PROFILES.map((profile, idx) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlassCard
                glowColor={idx === 0 ? "cyan" : idx === 1 ? "purple" : "amber"}
                className="h-full flex flex-col justify-between p-7 relative overflow-hidden"
              >
                <div>
                  {/* Top Header & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-inner">
                      {getIcon(profile.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-400">
                      {profile.statValue}
                    </span>
                  </div>

                  {/* Profile Category & Platform Name */}
                  <span className="text-xs font-mono text-cyan-400 block mb-1">
                    {profile.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {profile.name}
                  </h3>

                  {/* Handle Tag */}
                  <div className="mt-2 text-xs font-mono text-slate-400 bg-space-950/60 p-2 rounded-lg border border-white/5 truncate">
                    @{profile.handle}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                    {profile.description}
                  </p>
                </div>

                {/* Card Button */}
                <div className="mt-8 pt-5 border-t border-white/10">
                  <Button
                    variant={idx === 0 ? "primary" : idx === 1 ? "secondary" : "cyber"}
                    size="md"
                    href={profile.url}
                    target="_blank"
                    icon={<ExternalLink className="w-4 h-4" />}
                    className="w-full justify-between"
                  >
                    <span>{profile.ctaText}</span>
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
