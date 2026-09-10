"use client";

import React, { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Code2,
  Database,
  Cpu,
  ShieldCheck,
  BookOpen,
  Terminal,
  Activity,
  ChevronRight,
  TrendingUp,
  Boxes,
} from "lucide-react";

export default function Roadmap90Day() {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      id: "phase-1",
      days: "Days 1–30",
      theme: "Listen, Map Multi-Tenant Delta Lake & Audit Presidio PII Latency",
      goal: "Gain deep context across Paylocity's core ERP services, shadow Artem's data squad and Muhtasim's parsing workflows, and eliminate developer friction.",
      milestone: "First Production PR Merged in Week 1 · PII Sanitization Under 12ms",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
      accentGradiant: "from-orange-500/20 via-amber-500/10 to-transparent",
      summary:
        "Deep context acquisition, shadowing Artem's Delta Lake pipelines, auditing PII redaction latency, and locking Pydantic V2 data contracts.",
      initiatives: [
        {
          title: "Multi-Tenant Delta Lake Schema & Ingestion Audit",
          icon: Database,
          impact: "Maps exact partition structures across Bronze, Silver, and Gold tiers",
          description:
            "Shadow Artem's team to trace time-clock, payroll, and benefits ingestion into Databricks Delta Lake. Audit partition strategies on tenant_id and date boundaries to optimize Z-order indexing and eliminate query skew.",
          deliverables: [
            "Delta Lake partition pruning matrix for 30,000+ client enterprises",
            "Schema evolution guidelines preventing downstream pipeline breaks",
            "Audit of Medallion architecture transition latencies",
          ],
          tags: ["Databricks", "Delta Lake", "PySpark", "Medallion Architecture"],
        },
        {
          title: "Microsoft Presidio PII Sanitization Benchmark",
          icon: ShieldCheck,
          impact: "Guarantees sub-12ms redaction of SSNs and direct deposit routing numbers",
          description:
            "Benchmark in-process Presidio analyzer and anonymizer engines against high-volume employee text streams. Validate that zero PII escapes beyond the VPC to foundation model endpoints.",
          deliverables: [
            "Sub-12ms PII redaction pipeline with custom ABA routing recognizers",
            "Automated test harness with 500+ synthetic edge-case PII samples",
            "Compliance verification documentation for SOC-2 and HIPAA audits",
          ],
          tags: ["Presidio", "PII Redaction", "NER", "Zero-Trust"],
        },
        {
          title: "Pydantic V2 Runtime Data Contract Deployment",
          icon: Code2,
          impact: "Eliminates silent schema drift between Python services and frontend APIs",
          description:
            "Deploy strict Pydantic V2 contract validators across microservice boundaries, enforcing mathematical invariants (e.g., overtime requires 40h regular hours, positive gross pay).",
          deliverables: [
            "Reusable Pydantic V2 base models for payroll and time-tracking",
            "Automated CI linting verifying zero schema mismatch on pull requests",
            "Deterministic JSON serialization with zero overhead",
          ],
          tags: ["Pydantic V2", "Type-Safety", "FastAPI", "CI/CD"],
        },
        {
          title: "Developer Friction Audit & Local Sandbox Setup",
          icon: Activity,
          impact: "Accelerates onboarding velocity for emerging tech engineers",
          description:
            "Trace the end-to-end PR lifecycle from local sandbox to staging to identify local dev environment spin-up delays and mock data deficiencies.",
          deliverables: [
            "One-command Docker Compose local development stack",
            "Synthetic multi-tenant seed database for fast local testing",
            "1-on-1 alignment sessions with Artem and Muhtasim on platform pain points",
          ],
          tags: ["DevEx", "Docker", "FastAPI", "Testing"],
        },
      ],
    },
    {
      id: "phase-2",
      days: "Days 31–60",
      theme: "Dual-Tier Feature Store & LangGraph Human-in-the-Loop Prototype",
      goal: "Deploy production-grade feature infrastructure for anomaly detection and establish stateful agentic workflows.",
      milestone: "Sub-5ms Online Feature Retrieval · LangGraph Checkpoint Interrupt Gates",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      accentGradiant: "from-blue-500/20 via-cyan-500/10 to-transparent",
      summary:
        "Standardizing offline/online feature parity using Redis/Feast and deploying LangGraph state machines with interrupt-before payroll release gates.",
      initiatives: [
        {
          title: "Dual-Tier Feature Store Architecture (Feast + Redis)",
          icon: Cpu,
          impact: "Zero training-serving skew with sub-5ms online feature lookup",
          description:
            "Build unified feature store connecting Databricks Delta Lake (offline training) and Redis Cluster (sub-5ms online inference) for employee tenure, historical pay variance, and PTO accrual ratios.",
          deliverables: [
            "Point-in-time correct historical feature retrieval pipeline",
            "Sub-5ms Redis caching layer for real-time model scoring",
            "Automated feature drift monitoring alerting on statistical deviations",
          ],
          tags: ["Feast", "Redis", "Feature Store", "Machine Learning"],
        },
        {
          title: "LangGraph Multi-Turn Agent with Human Approval Gate",
          icon: Zap,
          impact: "Enables autonomous HR assistance while preventing unauthorized payroll release",
          description:
            "Implement stateful LangGraph agent with MemorySaver checkpointing. Configures conditional interrupt-before gates that halt automated execution whenever an anomaly score exceeds 3-sigma thresholds.",
          deliverables: [
            "StateGraph agent with multi-turn conversation memory",
            "Human-in-the-loop review UI and approval webhook workflow",
            "Full execution trace logging with OpenTelemetry",
          ],
          tags: ["LangGraph", "StateGraph", "HITL", "Agentic AI"],
        },
        {
          title: "Statistical & ML Anomaly Detection Ensemble",
          icon: Boxes,
          impact: "Combines 3-sigma rolling z-scores with Isolation Forest for 98%+ precision",
          description:
            "Deploy dual-layer anomaly detection pipeline running rolling 7-day departmental z-scores in Delta Lake alongside an Isolation Forest model for multivariate clerical error flags.",
          deliverables: [
            "Production anomaly scoring service with configurable sensitivity per tenant",
            "Explainability payload highlighting exact drivers of anomalous gross pay",
            "Benchmarking against historical clerical error incidents",
          ],
          tags: ["Anomaly Detection", "Scikit-Learn", "Isolation Forest", "Statistics"],
        },
      ],
    },
    {
      id: "phase-3",
      days: "Days 61–90",
      theme: "Autonomous Scale & Enterprise Hardening: MCP Tool Governance",
      goal: "Open enterprise-wide Model Context Protocol (MCP) server for internal ERP tooling and lock in 25-version regression evaluation harnesses.",
      milestone: "Enterprise MCP Registry · 99.9% Uptime Error Budget · Zero Regression",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      accentGradiant: "from-emerald-500/20 via-teal-500/10 to-transparent",
      summary:
        "Governed tool execution via Anthropic MCP, automated regression benchmarking against 1,500+ payroll test cases, and cross-team developer enablement.",
      initiatives: [
        {
          title: "Anthropic Model Context Protocol (MCP) ERP Tool Host",
          icon: Layers,
          impact: "Transforms Paylocity APIs into standardized, zero-hallucination agent tools",
          description:
            "Design and deploy production FastMCP tool server exposing verified employee PTO lookups, shift scheduling, and payroll summary queries with strict tenant isolation.",
          deliverables: [
            "Production MCP tool server with JSON-RPC schemas and tenant token auth",
            "Rate-limiting and circuit breaker middleware preventing backend saturation",
            "Interactive developer playground for testing agent tool invocations",
          ],
          tags: ["Model Context Protocol", "FastMCP", "JSON-RPC", "Security"],
        },
        {
          title: "Automated 25-Version Evaluation Harness (1,500+ Test Cases)",
          icon: CheckCircle2,
          impact: "Guarantees zero model regression or semantic drift on upstream LLM upgrades",
          description:
            "Build automated CI regression test harness evaluating synthetic and anonymized payroll scenarios across model releases (Claude 3.7 Sonnet, GPT-4o, Llama 3.3).",
          deliverables: [
            "Curated golden evaluation dataset of 1,500+ edge-case payroll scenarios",
            "Automated scoring pipeline evaluating accuracy, latency, and cost per run",
            "CI/CD gating mechanism blocking deployments with regression > 1%",
          ],
          tags: ["Eval Harness", "LLM Evaluation", "CI/CD", "Quality Assurance"],
        },
        {
          title: "Paylocity Engineering Tech Talk & Architecture Playbook",
          icon: BookOpen,
          impact: "Scales engineering best practices across all product engineering squads",
          description:
            "Host internal tech talk and publish comprehensive architecture playbook on building production AI agents with Delta Lake, Presidio, and LangGraph.",
          deliverables: [
            "Paylocity Ignite AI Architecture Best Practices Playbook",
            "Internal tech talk recording and interactive demonstration",
            "Mentorship framework for onboarding junior engineers to AI systems",
          ],
          tags: ["Engineering Culture", "Tech Talks", "Mentorship", "Documentation"],
        },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-[#070D18] border-b border-slate-800 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>30-60-90 Day Execution Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Structured Impact Plan: From Listen to Scale
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A concrete, phased blueprint demonstrating how I will create immediate value for Artem
            Žukov, Muhtasim Billah, and the Paylocity Emerging Tech & AI platform teams without friction.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center p-1 rounded-xl bg-slate-900 border border-slate-800 gap-1">
            {phases.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activePhase === idx
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>{phase.days}</span>
                <span className="hidden sm:inline text-xs opacity-75">
                  ({phase.theme.split(" ")[0]})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Phase Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          {/* Phase Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border ${phases[activePhase].badgeColor}`}
                >
                  {phases[activePhase].days}
                </span>
                <span className="text-xs text-slate-400 font-mono">· Phase {activePhase + 1}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {phases[activePhase].theme}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {phases[activePhase].goal}
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 shrink-0">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                Target Milestone
              </span>
              <span className="text-xs font-mono text-orange-400 font-bold">
                {phases[activePhase].milestone}
              </span>
            </div>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases[activePhase].initiatives.map((init, idx) => {
              const Icon = init.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 hover:border-orange-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
                        {init.impact}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{init.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {init.description}
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {init.deliverables.map((d, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start space-x-2 text-[11px] text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-800/60">
                    {init.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
