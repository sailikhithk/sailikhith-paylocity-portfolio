"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Mic,
  Zap,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function MultiplierImpact() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "brand" | "velocity" | "culture"
  >("all");

  const pillars = [
    {
      id: "blog",
      category: "brand",
      title: "Paylocity Tech Blog & Engineering Brand",
      subtitle: "Elevating Paylocity to a Premier Data & AI Engineering Brand",
      tldr: "Authoring deep technical breakdowns of Paylocity's multi-tenant Delta Lake Lakehouse and agentic LLM governance to attract tier-1 engineering talent.",
      icon: BookOpen,
      badge: "Brand Authority",
      iconColor: "text-orange-400",
      deliverables: [
        "Scaling a Multi-Tenant Delta Lake: How Paylocity Delivers Sub-Second Analytics for 30,000+ Enterprises",
        "Zero-Trust PII Redaction at the Boundary: Sub-12ms In-Process Anonymization with Microsoft Presidio",
        "Deterministic Agentic Workflows: State Machines with Human-in-the-Loop Safeguards for Payroll Runs",
      ],
    },
    {
      id: "keynotes",
      category: "brand",
      title: "Conference Keynotes & Industry Ambassador",
      subtitle: "Representing Paylocity at Major Industry Engineering Summits",
      tldr: "Representing Paylocity at premier tech conferences (Databricks Data+AI Summit, PyData, AWS re:Invent) on multi-tenant lakehouse architectures and agentic AI.",
      icon: Mic,
      badge: "Thought Leadership",
      iconColor: "text-blue-400",
      deliverables: [
        "Databricks Data+AI Summit: Real-Time Stream Processing & Multi-Tenant Delta Lake Optimization",
        "PyData / AI Engineer Summit: State Machine Architectures for Regulated FinTech & HR AI Agents",
        "Open-Source Advocacy: Contributing upstream improvements to agent frameworks (LiteLLM, LangChain, LiveKit)",
      ],
    },
    {
      id: "hackathons",
      category: "velocity",
      title: "Hackathon Leadership & 0-to-1 Culture",
      subtitle: "Turning 48-Hour Experiments into Durable Platform Primitives",
      tldr: "Leading cross-functional hackathon sprints bridging Product and Eng, championing 'Demos > Memos' by rapidly proving value with running software.",
      icon: Zap,
      badge: "Velocity Catalyst",
      iconColor: "text-amber-400",
      deliverables: [
        "Organizing annual Paylocity Hackathons driving high-impact AI feature prototypes",
        "Mentoring cross-functional squads to transition hackathon proofs-of-concept into production pipelines",
        "Rapid prototyping culture: delivering working software to validate customer problems in days",
      ],
    },
    {
      id: "mentorship",
      category: "culture",
      title: "Staff Architecture Guild & Mentorship",
      subtitle: "Raising the Engineering Bar Across All Squads",
      tldr: "Instituting rigorous RFC architecture review templates, running technical book clubs, and mentoring senior engineers toward Staff/Principal scope.",
      icon: Users,
      badge: "Culture & Guild",
      iconColor: "text-emerald-400",
      deliverables: [
        "Paylocity Architecture Guild: bi-weekly RFC peer reviews and system design critiques",
        "1-on-1 career coaching and technical growth tracks for senior engineers",
        "Establishing automated data contract standards to prevent cross-squad integration bottlenecks",
      ],
    },
  ];

  const filteredPillars =
    selectedCategory === "all"
      ? pillars
      : pillars.filter((p) => p.category === selectedCategory);

  return (
    <section id="multiplier" className="py-20 bg-[#0A1128]/40 border-b border-slate-800 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Staff Engineer Multiplier Impact</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Force Multiplier Beyond Individual Code
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Staff engineers don&apos;t just write code—they elevate team velocity, shape engineering
            brand, mentor colleagues, and establish durable architectural standards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 gap-1">
            {(
              [
                { id: "all", label: "All Pillars" },
                { id: "brand", label: "Tech Brand" },
                { id: "velocity", label: "Engineering Velocity" },
                { id: "culture", label: "Mentorship & Guild" },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-orange-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-orange-400/90 mb-3">{pillar.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{pillar.tldr}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Key Deliverables & Initiatives
                    </span>
                    {pillar.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
