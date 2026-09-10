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
  CheckCircle2,
  ArrowRight,
  Zap,
  Code2,
  Bot,
} from "lucide-react";

export default function PaylocityCoreValues() {
  const [activePillar, setActivePillar] = useState(0);

  const coreValues = [
    {
      title: "Think Next Generation (AI-Native Automation)",
      tagline: "High-velocity iteration with human architectural governance.",
      quote:
        "Leverage AI harnesses and agentic architectures to automate tedious ERP tasks, eliminate schema drift, and detect anomalies before payroll locks.",
      paylocityAlignment:
        "Accelerated platform development by integrating AI harnesses to automate 1,690 unit/regression test suites and generate AST Pydantic contracts, keeping architectural invariants strictly human-governed.",
      badge: "Emerging Tech",
      icon: Bot,
    },
    {
      title: "Be Responsive (Zero-Downtime Reliability)",
      tagline: "Payroll and HR compliance tolerate zero downtime or mathematical drift.",
      quote:
        "When handling 30,000+ client enterprises and billions in disbursements, system reliability, data contracts, and auditability are non-negotiable.",
      paylocityAlignment:
        "Maintained 99.9% uptime over 6 months on FDA 21 CFR Part 11 compliant systems and engineered atomic gap-free ID generation preventing sequence skips.",
      badge: "Production Rigor",
      icon: ShieldCheck,
    },
    {
      title: "Live the Culture (Demos > Memos)",
      tagline: "Working prototypes de-risk architecture faster than theoretical slide decks.",
      quote:
        "Rather than presenting abstract slide decks, engineering an interactive working prototype proves technical feasibility under simulated production loads.",
      paylocityAlignment:
        "Engineered this live interactive Paylocity Ignite AI Platform simulator and multi-tenant Delta Lake architecture workbench to validate concrete engineering decisions.",
      badge: "High Agency",
      icon: Terminal,
    },
  ];

  const interviewPillars = [
    {
      id: "pillar-1",
      number: "01",
      title: "Multi-Tenant Delta Lake Data Ingestion",
      concept: "Lakehouse Medallion Architecture (Bronze -> Silver -> Gold)",
      roleTarget: "Paylocity Principal Data/ML Engineer Track",
      description:
        "Ingesting continuous time-clock, PTO, and compensation events from 30,000+ client tenants into Databricks Delta Lake with ACID guarantees, schema evolution, and row-level tenant security.",
      keyTechniques: [
        "Spark Structured Streaming partitioned by tenant_id",
        "Pydantic V2 runtime contracts for Silver-tier ingestion",
        "Delta Lake time travel for reproducible payroll audits",
      ],
      icon: DatabaseIcon,
    },
    {
      id: "pillar-2",
      number: "02",
      title: "Microsoft Presidio PII & Direct Deposit Redaction",
      concept: "Sub-12ms Local NER and Deterministic Regex Tokenization",
      roleTarget: "Zero-Trust Security & SOC-2 Compliance",
      description:
        "Deterministic sanitization of SSNs, employee bank account numbers, and phone numbers before any model boundary, preventing catastrophic PII leakage.",
      keyTechniques: [
        "In-process regex + Spacy small model execution under 12ms",
        "Custom ABA routing number recognizers with checksum validation",
        "Zero external network calls during token redaction",
      ],
      icon: ShieldCheck,
    },
    {
      id: "pillar-3",
      number: "03",
      title: "LangGraph Multi-Turn Agent & MCP Tool Execution",
      concept: "Stateful Agentic Workflows with Human-in-the-Loop Approval",
      roleTarget: "Ignite AI Autonomous Workforce Integration",
      description:
        "Multi-turn agent orchestration using LangGraph StateGraph, allowing HR assistants to query verified ERP APIs via Model Context Protocol (MCP) while enforcing human sign-off on anomalous payroll releases.",
      keyTechniques: [
        "MemorySaver checkpointing for pause-and-resume workflows",
        "Anthropic Model Context Protocol (MCP) JSON-RPC tools",
        "Statistical 3-sigma anomaly scoring gates before disbursement",
      ],
      icon: Zap,
    },
  ];

  return (
    <section id="values" className="py-20 bg-[#070D18] border-b border-slate-800 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Cultural Alignment & Technical Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Paylocity Core Values & Architectural Pillars
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Directly mapping 7+ years of Staff/Principal engineering principles to Paylocity's high-scale
            SaaS ecosystem and emerging AI initiatives.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl hover:border-orange-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                      {val.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{val.title}</h3>
                  <p className="text-xs font-medium text-orange-400/90 mb-3">{val.tagline}</p>
                  <blockquote className="text-xs text-slate-400 italic border-l-2 border-slate-700 pl-3 mb-4">
                    &ldquo;{val.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="pt-3 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Paylocity Track Record
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{val.paylocityAlignment}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Pillars */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider">
                Strategic Interview Deep Dives
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                The 3 Core Engineering Focus Areas for Paylocity
              </h3>
            </div>
            <div className="flex space-x-2">
              {interviewPillars.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    activePillar === idx
                      ? "bg-orange-500 text-white"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  Pillar {p.number}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-orange-400 font-bold">
                {interviewPillars[activePillar].concept}
              </span>
              <h4 className="text-2xl font-bold text-white">
                {interviewPillars[activePillar].title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {interviewPillars[activePillar].description}
              </p>
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider">
                  Key Production Techniques:
                </span>
                {interviewPillars[activePillar].keyTechniques.map((tech, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                  Staff Engineer Relevance
                </span>
                <p className="text-xs font-semibold text-orange-400 mb-4">
                  {interviewPillars[activePillar].roleTarget}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Demonstrates immediate ownership over Paylocity's core data infrastructure, Lakehouse
                  migration milestones, and AI compliance requirements without ramp-up friction.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Domain: Enterprise HCM / FinTech</span>
                <span className="text-emerald-400 font-bold">Battle-Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
