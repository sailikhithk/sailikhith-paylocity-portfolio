"use client";

import React, { useState } from "react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import {
  Layers,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Lock,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export default function HighLevelDesign() {
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const tiers = [
    {
      id: 1,
      title: "Tier 1: Multi-Tenant Ingestion, Presidio PII Gate & Streaming",
      subtitle: "30,000+ Enterprise Tenants & Strict Sub-12ms PII Scrubbing",
      badge: "Ingestion & PII Guardrails",
      color: "from-orange-500 to-amber-500",
      components: [
        {
          name: "API Gateway & Multi-Tenant Routing",
          role: "TLS termination, mTLS tenant isolation, JWT validation, and token-bucket rate limiting.",
          tech: "Kong Gateway / AWS ALB",
        },
        {
          name: "Microsoft Presidio PII Sanitization (<12ms)",
          role: "Deterministic regex + NER redaction of SSNs, banking account numbers, and phone numbers before any model boundary.",
          tech: "FastAPI Presidio Sidecar",
        },
        {
          name: "Spark Structured Streaming Ingestion",
          role: "High-throughput real-time stream processing partitioned by `tenant_id` ensuring FIFO ordering per payroll run.",
          tech: "Apache Spark / Kafka MSK",
        },
      ],
      tradeoffs: [
        "Partitioning by `tenant_id` prevents cross-tenant noisy neighbor locks and guarantees isolation.",
        "Deterministic local PII sanitization satisfies SOC-2 and HIPAA before data ever touches an external LLM.",
      ],
    },
    {
      id: 2,
      title: "Tier 2: Databricks Delta Lake (Bronze/Silver/Gold) & Feature Store",
      subtitle: "ACID Transactions, Time Travel & Online/Offline Feature Parity",
      badge: "Lakehouse & Features",
      color: "from-amber-500 to-orange-500",
      components: [
        {
          name: "Delta Lake Medallion Architecture",
          role: "Bronze raw immutable logs -> Silver scrubbed & typed tables -> Gold aggregated 7-day/30-day client baselines.",
          tech: "Databricks Delta Lake / S3",
        },
        {
          name: "Dual-Tier Feature Store",
          role: "Redis cluster for sub-5ms online feature lookups; Parquet offline store for reproducible backtesting.",
          tech: "Redis Enterprise / Feast",
        },
        {
          name: "Multivariate Anomaly Inference Engine",
          role: "Isolation Forest + XGBoost ensemble scoring payroll runs against rolling department z-scores.",
          tech: "Triton / TorchServe / ONNX",
        },
      ],
      tradeoffs: [
        "Delta Lake time-travel allows auditing historical payroll runs exactly as they existed at calculation time.",
        "Online/offline feature store parity eliminates training-serving skew.",
      ],
    },
    {
      id: 3,
      title: "Tier 3: LangGraph Agent Orchestration & Model Context Protocol (MCP)",
      subtitle: "Stateful Multi-Turn Agents, MCP Tool Invocation & Audit Trails",
      badge: "Agentic MCP Layer",
      color: "from-orange-400 to-amber-600",
      components: [
        {
          name: "LangGraph Stateful Orchestration",
          role: "StateGraph with checkpointing, recursive reflection, and Human-in-the-Loop review gates for payroll releases.",
          tech: "LangGraph / Python 3.12",
        },
        {
          name: "Model Context Protocol (MCP) Tool Host",
          role: "Standardized JSON-RPC protocol allowing agents to invoke internal APIs (PTO balance, tax withholding) safely.",
          tech: "Anthropic MCP / Pydantic V2",
        },
        {
          name: "CI/CD Safety: Shadow Mode & Golden Sets",
          role: "Shadow inference against production traffic with PR-AUC evaluation before automated canary deployment.",
          tech: "GitHub Actions / Databricks MLflow",
        },
      ],
      tradeoffs: [
        "LangGraph human-in-the-loop interruption ensures high-dollar payroll discrepancies are never auto-disbursed.",
        "MCP tool decoupling separates LLM logic from core ERP database drivers.",
      ],
    },
  ];

  const activeTier = tiers.find((t) => t.id === selectedTier) || tiers[0];

  return (
    <section id="architecture" className="py-20 bg-[#0A1128]/50 border-b border-slate-800 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>High-Level Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            3-Tier Multi-Tenant Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Engineered for high-volume payroll streaming, Databricks Delta Lake lakehouse scale, and
            LangGraph agentic MCP integration.
          </p>
        </div>

        {/* Tier Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedTier === tier.id
                  ? "bg-orange-500/15 border-orange-500 text-white shadow-lg shadow-orange-500/10"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Tier {tier.id}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                  {tier.badge}
                </span>
              </div>
              <h3 className="font-bold text-sm text-white truncate">{tier.title.split(":")[1]}</h3>
              <p className="text-[11px] text-slate-400 truncate mt-0.5">{tier.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Active Tier Deep Dive Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider">
                Active Tier Breakdown
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">{activeTier.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{activeTier.subtitle}</p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-4 h-4" />
              <span>Production Validated</span>
            </div>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {activeTier.components.map((comp, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 hover:border-orange-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold font-mono">
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {comp.tech}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white mb-2">{comp.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{comp.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Trade-offs */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="text-xs font-mono uppercase font-bold text-orange-400 mb-2 flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5" />
              <span>Architectural Rationale & Trade-offs</span>
            </h4>
            <ul className="space-y-1.5">
              {activeTier.tradeoffs.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs text-slate-300 gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
