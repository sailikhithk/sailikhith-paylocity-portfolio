"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Compass,
  Terminal,
  Layers,
  Cpu,
  ShieldCheck,
  Users,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Zap,
  Code2,
  GitBranch,
  Bot,
} from "lucide-react";

export default function FetchCoreValues() {
  const [activePillar, setActivePillar] = useState(0);

  const coreValues = [
    {
      title: "AI-Assisted Engineering Acceleration",
      tagline: "High-velocity iteration with human architectural ownership.",
      quote:
        "Leverage AI harnesses to automate test matrices, explore edge cases, and eliminate contract boilerplate—while keeping critical system invariants human-governed.",
      fetchAlignment:
        "Accelerated platform development by integrating AI harnesses to automate 1,690 unit/regression test suites and generate OpenAPI-to-Zod schemas, keeping architectural decisions and failure-mode analysis strictly at the helm.",
      badge: "Engineering Velocity",
      icon: Bot,
    },
    {
      title: "Working Prototypes & Proof of Concepts",
      tagline: "Functional software de-risks architecture faster than theoretical proposals.",
      quote:
        "When evaluating high-throughput distributed systems, an interactive proof-of-concept reveals empirical bottleneck thresholds that static documents overlook.",
      fetchAlignment:
        "Rather than presenting abstract slides or static specs, engineered this interactive FAST AI Platform prototype and live SSE telemetry stream to validate concrete distributed systems patterns under simulated 250+ concurrent receipt scans.",
      badge: "Execution Creed",
      icon: Terminal,
    },
    {
      title: "Small Teams Ship Exponentially Faster",
      tagline: "High agency, direct stakeholder feedback, zero bureaucratic drag.",
      quote:
        "Engage directly with power users, ship focused resilient slices, verify real metrics, and iterate rapidly.",
      fetchAlignment:
        "Partnered closely with power analysts at Airbnb, locked a 1-page Pydantic data contract, and shipped BPI Virtual Analyst in 48 hours, scaling from 3 pilot users to 128+ daily active analysts with 99.9% reliability.",
      badge: "High-Agency Delivery",
      icon: Users,
    },
  ];

  const interviewPillars = [
    {
      id: "pillar-1",
      number: "01",
      title: "Technical Experience & Project Ownership",
      subtitle: "7+ years leading complex platform architectures",
      icon: Layers,
      color: "from-amber-500 to-orange-500",
      bullets: [
        {
          heading: "Senior Leadership at Scale:",
          text: "Spearheaded platform foundations across Airbnb GenAI Platform, Eli Lilly FDA Part 11 validation, and Southwest Airlines high-throughput event streaming.",
        },
        {
          heading: "End-to-End Delivery:",
          text: "Delivered 16x throughput scaling (from 600 to 10,000 rows/run, 40MB batch uploads) by implementing bounded memory queues and decoupled async workers.",
        },
        {
          heading: "IP & Algorithmic Rigor:",
          text: "Authored Indian Patent 202541026299 for modular deep learning architecture with cross-domain transfer learning.",
        },
      ],
      fetchImpact:
        "Ready to own 0-to-1 FAST AI platform modules, mentoring engineers and establishing reusable platform patterns across Fetch.",
    },
    {
      id: "pillar-2",
      number: "02",
      title: "Fullstack Technical Depth (Backend Core + Modern TS)",
      subtitle: "Bridging async Python microservices with TanStack/React",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      bullets: [
        {
          heading: "Backend Concurrency:",
          text: "Async Python, FastAPI, asyncio event loops, Redis semantic caching (38% hit rate saving $180k/yr), and distributed Kafka event streams (4M req/m).",
        },
        {
          heading: "Modern Frontend Mastery:",
          text: "Next.js, TypeScript, React 19, TanStack Query v5 server state sync, TanStack Virtual (<16ms INP under 5,000 records), and Tailwind CSS.",
        },
        {
          heading: "End-to-End Type Safety:",
          text: "Automated compile-time contract enforcement bridging backend Pydantic V2 models to frontend Zod schemas, eliminating runtime shape mismatches.",
        },
      ],
      fetchImpact:
        "Bridges Fetch's Python/PyTorch data lakehouse with intuitive, zero-latency brand partner analytics dashboards.",
    },
    {
      id: "pillar-3",
      number: "03",
      title: "Operational Ownership & Production Infrastructure",
      subtitle: "Full-lifecycle ownership: telemetry, reliability & resilience",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      bullets: [
        {
          heading: "Zero-Downtime Reliability:",
          text: "Sustained 99.9% platform uptime under stringent FDA 21 CFR Part 11 regulatory compliance with cryptographically signed audit logs.",
        },
        {
          heading: "Streaming Resilience:",
          text: "Engineered Server-Sent Events (SSE) with 15-second heartbeat keep-alives and Redis replay ring buffers, preventing stream dropouts across long queries.",
        },
        {
          heading: "Observability & Telemetry:",
          text: "Prometheus metrics, Grafana dashboards, OpenTelemetry distributed tracing, and automated alerting on P99 latency and queue backlog depth.",
        },
      ],
      fetchImpact:
        "Ensures the FAST platform operates with enterprise resilience across Fetch's 27PB data lake and high-volume receipt ingestion.",
    },
    {
      id: "pillar-4",
      number: "04",
      title: "Working Style & Cross-Functional 0-to-1 Collaboration",
      subtitle: "Tight feedback loops with brand managers, PMs & data teams",
      icon: GitBranch,
      color: "from-purple-500 to-pink-500",
      bullets: [
        {
          heading: "Stakeholder Empathy:",
          text: "Collaborates closely with brand managers, ML research scientists, and product teams to translate ambiguous mandates into crisp, phased roadmaps.",
        },
        {
          heading: "Empirical Feedback Loops:",
          text: "Replaces speculation with 24-hour benchmark prototypes ('Demos > Memos') to build team consensus using real operational data.",
        },
        {
          heading: "DevEx Multiplication:",
          text: "Authored modular CLI scaffolding and shared component registries, reducing new service onboarding time from 3 weeks to under 2 hours.",
        },
      ],
      fetchImpact:
        "Accelerates time-to-market for brand partner features (PepsiCo, Unilever, Molson Coors) while maintaining high platform quality.",
    },
  ];

  const reverseQuestions = [
    {
      title: "Background Agent Sandboxing & Skills Registry",
      question:
        "In multi-step autonomous agent workflows, how does the FAST platform approach type-safe tool schemas, runtime execution sandboxing, and dynamic skill registration across shared microservices?",
      context:
        "Explores how Fetch safely coordinates autonomous workers across brand analytics and internal toolchains.",
    },
    {
      title: "Real-Time Streaming vs. 27PB Batch Analytics",
      question:
        "For analytical platform UIs, what does the architectural trade-off look like between real-time streaming interfaces (WebSockets/SSE) and asynchronous background batch processing across the 27PB data lake?",
      context:
        "Discusses caching tiers, streaming backpressure, and maintaining sub-second UI responsiveness over massive datasets.",
    },
    {
      title: "0-to-1 Velocity vs. Platform Foundations",
      question:
        "How does the engineering org balance rapid 0-to-1 feature velocity for brand managers with long-term platform stability and shared component developer experience for the rest of Fetch's engineering teams?",
      context:
        "Examines DevEx patterns, component libraries, and maintaining architectural hygiene during hyper-growth.",
    },
  ];

  return (
    <section
      id="values"
      className="py-20 bg-slate-50 dark:bg-[#070D18] border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Operating Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            High-Agency Execution:{" "}
            <span className="text-amber-600 dark:text-amber-400">
              Working Prototypes &amp; Proof of Concepts
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Complex distributed systems and high-throughput data platforms are best de-risked
            through functional prototypes and empirical metrics rather than speculative
            documentation. Here is how I approach rapid discovery, system design, and platform
            ownership.
          </p>
        </div>

        {/* 3 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-mono">
                      {val.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-xs text-amber-700 dark:text-amber-400 font-medium mb-3">
                    {val.tagline}
                  </p>
                  <blockquote className="text-xs italic text-slate-600 dark:text-slate-400 border-l-2 border-amber-500/40 pl-3 mb-4 leading-relaxed">
                    "{val.quote}"
                  </blockquote>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-amber-700 dark:text-amber-400 block mb-0.5">
                    How I Put This Into Practice:
                  </strong>
                  {val.fetchAlignment}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Pillars Interactive Tab Section */}
        <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm dark:shadow-2xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-2">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Interview Technical Focus Areas</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              The 4 Core Evaluation Pillars
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Mapped directly to Fetch's senior engineering scope and technical expectations.
            </p>
          </div>

          {/* Pillar Selector Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
            {interviewPillars.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = activePillar === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-amber-500/10 border-amber-500 text-slate-900 dark:text-white shadow-md"
                      : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-mono font-bold ${isSelected ? "text-amber-600 dark:text-amber-400" : "text-slate-400"}`}
                    >
                      PILLAR {p.number}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${isSelected ? "text-amber-500" : "text-slate-400"}`}
                    />
                  </div>
                  <div className="text-xs sm:text-sm font-bold line-clamp-1">{p.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Card */}
          {(() => {
            const pillar = interviewPillars[activePillar];
            const Icon = pillar.icon;
            return (
              <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
                      <Icon className="w-5 h-5 text-slate-950" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        Pillar {pillar.number} · Discussion Scope
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono self-start sm:self-center">
                    {pillar.subtitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {pillar.bullets.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-xs"
                    >
                      <div className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{b.heading}</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {b.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-xs text-slate-800 dark:text-slate-200 flex items-center space-x-2.5">
                  <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-amber-700 dark:text-amber-400 mr-1.5">
                      Direct Fetch Impact:
                    </strong>
                    <span>{pillar.fetchImpact}</span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Reverse Architectural Inquiries */}
        <div className="w-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-xl">
          <div className="flex items-center space-x-2.5 text-amber-600 dark:text-amber-400 mb-2">
            <MessageSquare className="w-5 h-5" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Architectural Deep Dive & Open System Inquiries
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
            Prepared high-agency inquiries exploring the FAST AI platform architecture, distributed
            lakehouse streaming, and developer foundations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reverseQuestions.map((rq, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-400">
                      {rq.title}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">Inquiry {idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium mb-3 italic">
                    "{rq.question}"
                  </p>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <strong className="text-slate-700 dark:text-slate-300">
                    Technical Context:{" "}
                  </strong>
                  {rq.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
