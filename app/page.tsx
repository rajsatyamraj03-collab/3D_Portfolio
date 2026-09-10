"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import CertificationsWall from "@/components/certifications/CertificationsWall";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import ProfilesSection from "@/components/profiles/ProfilesSection";
import GitHubIntegration from "@/components/github/GitHubIntegration";
import ResumeSection from "@/components/resume/ResumeSection";
import ResumeModal from "@/components/resume/ResumeModal";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import CommandPalette from "@/components/layout/CommandPalette";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <>
      {/* Interactive Cyber Loading Sequence */}
      <LoadingScreen onComplete={() => setHasLoaded(true)} />

      {/* Main Experience Container */}
      <div className="relative min-h-screen bg-space-950 text-white overflow-hidden bg-grid-pattern">
        {/* Navigation */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandOpen(true)}
        />

        {/* Core Sections */}
        <main className="relative z-10">
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceTimeline />
          <CertificationsWall />
          <AchievementsSection />
          <ProfilesSection />
          <GitHubIntegration />
          <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Modals */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        <CommandPalette
          isOpen={isCommandOpen}
          onClose={() => setIsCommandOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </div>
    </>
  );
}
