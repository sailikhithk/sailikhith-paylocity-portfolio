"use client";

import React from "react";
import {
  Compass,
  Terminal,
  Sparkles,
  MessageSquare,
  Zap,
  CheckCircle2,
  ArrowRight,
  Code2,
  Users,
} from "lucide-react";

export default function OperatingPrinciples() {
  const creeds = [
    {
      title: "Demos > Memos",
      quote:
        "You could have built a working prototype during the meeting. Ship what solves the immediate friction, then iterate.",
      example:
        "Built a 24-hour benchmark prototype of SSE streaming vs 5-second polling under 50 concurrent users at Airbnb to resolve an architectural debate with empirical data.",
    },
    {
      title: "Small Teams Ship Faster",
      quote:
        "Small teams with clear ownership and zero bureaucracy ship exponentially faster. Bias toward shipping.",
      example:
        "Shadowed 3 power analysts, locked a 1-page Pydantic data contract, and launched BPI Virtual Analyst in 48 hours, scaling from 3 pilot users to 128+ daily active enterprise analysts.",
    },
    {
      title: "Landings > Launches (Adoption > Volume)",
      quote:
        "Product adoption and user impact outweigh raw code volume. Listen, build, ship, verify, repeat.",
      example:
        "Treated AI as an empirical engineering problem by building a 23-version evaluation harness (1,690 test cases), ensuring zero regression or hallucination on business metrics.",
    },
  ];

  const reverseQuestions = [
    {
      q: "Background Agent Sandboxing & Skills Registry",
      detail:
        "In multi-step autonomous agent workflows, how does the FAST platform approach type-safe tool schemas, runtime execution sandboxing, and dynamic skill registration across shared microservices?",
    },
    {
      q: "Real-Time Streaming vs. 27PB Batch Analytics",
      detail:
        "For analytical platform UIs, what does the architectural trade-off look like between real-time streaming interfaces (WebSockets/SSE) and asynchronous background batch processing across the 27PB data lake?",
    },
    {
      q: "0-to-1 Velocity vs. Platform Foundations",
      detail:
        "How does the engineering org balance rapid 0-to-1 feature velocity for brand managers with long-term platform stability and shared component developer experience for the rest of Fetch's engineering teams?",
    },
  ];

  return (
    <section
      id="principles"
      className="py-20 bg-slate-50 dark:bg-[#070D18] border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Philosophy & Culture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            My Operating Principles: Engineering Velocity & High-Agency Ownership
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Core creeds on rapid prototyping, empirical evaluation, small high-velocity teams, and
            end-to-end type safety.
          </p>
        </div>

        {/* Creeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {creeds.map((creed, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono block mb-2">
                  Principle {idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {creed.title}
                </h3>
                <blockquote className="text-xs italic text-slate-600 dark:text-slate-400 border-l-2 border-amber-500/40 pl-3 mb-4 leading-relaxed">
                  "{creed.quote}"
                </blockquote>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-amber-600 dark:text-amber-400 block mb-0.5">
                  Production Proof:
                </strong>
                {creed.example}
              </div>
            </div>
          ))}
        </div>

        {/* Reverse Questions */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-xl">
          <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 mb-4">
            <MessageSquare className="w-5 h-5" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Architectural Deep Dive & Open System Inquiries
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
            Targeted explorations into the FAST AI Platform architecture, high-throughput data
            access, and developer platform foundations:
          </p>
          <div className="space-y-4">
            {reverseQuestions.map((rq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800"
              >
                <h4 className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">
                  {rq.q}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{rq.detail}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
