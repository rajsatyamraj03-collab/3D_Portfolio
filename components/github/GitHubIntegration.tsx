"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  GitFork,
  Star,
  BookOpen,
  Code2,
  ExternalLink,
  FolderGit2,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

interface RepoItem {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const FEATURED_REPOS: RepoItem[] = [
  {
    id: 1,
    name: "Job-Junction-Portal",
    description: "Interactive job portal platform engineered with React JS, modular atomic architecture, and real-time faceted search filtering.",
    html_url: "https://github.com/rajsatyamraj03-collab",
    stargazers_count: 6,
    forks_count: 2,
    language: "React / JavaScript",
  },
  {
    id: 2,
    name: "AI-Health-Assistant",
    description: "AI-powered healthcare assistant providing symptom-based disease risk triage, NLP medical report PDF summarization, and voice interaction.",
    html_url: "https://github.com/rajsatyamraj03-collab",
    stargazers_count: 12,
    forks_count: 4,
    language: "Python / AI / ML",
  },
  {
    id: 3,
    name: "DSA-Problem-Solving-Algorithms",
    description: "Algorithmic data structures, competitive programming solutions, and time-space optimized implementations in C++ and Java.",
    html_url: "https://github.com/rajsatyamraj03-collab",
    stargazers_count: 8,
    forks_count: 3,
    language: "C++ / Data Structures",
  },
];

export default function GitHubIntegration() {
  const [repos, setRepos] = useState<RepoItem[]>(FEATURED_REPOS);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch("https://api.github.com/users/rajsatyamraj03-collab/repos?sort=updated&per_page=15");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            // Strictly filter out any assignment markdown files, DBMS assignments, or homework repos
            const filtered = data
              .filter((repo: { name: string; description?: string }) => {
                const nameLower = (repo.name || "").toLowerCase();
                const descLower = (repo.description || "").toLowerCase();
                const isAssignment =
                  nameLower.includes("dbms") ||
                  nameLower.includes("assignment") ||
                  nameLower.includes(".md") ||
                  descLower.includes("assignment") ||
                  descLower.includes("dbms");
                return !isAssignment;
              })
              .map((r: { id: number; name: string; description: string; html_url: string; stargazers_count: number; forks_count: number; language: string }) => ({
                id: r.id,
                name: r.name,
                description: r.description || "Public software project by Satyam Raj.",
                html_url: r.html_url,
                stargazers_count: r.stargazers_count || 0,
                forks_count: r.forks_count || 0,
                language: r.language || "TypeScript / Python",
              }));

            if (filtered.length > 0) {
              setRepos(filtered.slice(0, 3));
            }
          }
        }
      } catch {
        // Retain curated portfolio repositories
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-400/30 text-purple-300">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Live GitHub Activity
              </h3>
              <p className="text-xs font-mono text-purple-400">
                @rajsatyamraj03-collab • Curated Public Repositories
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            href="https://github.com/rajsatyamraj03-collab"
            target="_blank"
            icon={<ExternalLink className="w-3.5 h-3.5" />}
          >
            Explore All Repositories
          </Button>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard
                glowColor="purple"
                className="h-full flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-purple-400" />
                      <h4 className="font-heading font-bold text-base text-white truncate max-w-[180px]">
                        {repo.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                      Public
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1 text-cyan-400">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-purple-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
