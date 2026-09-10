"use client";

import React from "react";

interface ArchitectureDiagramProps {
  selectedTier: number;
  onTierClick: (tier: number) => void;
}

export default function ArchitectureDiagram({
  selectedTier,
  onTierClick,
}: ArchitectureDiagramProps) {
  const isActive = (tier: number) => selectedTier === tier;
  const laneOpacity = (tier: number) => (isActive(tier) ? 1 : 0.4);

  return (
    <div className="w-full overflow-x-auto mb-10 rounded-2xl border border-slate-800 bg-[#070D18]/90 p-4 sm:p-6 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
          <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
            Interactive System Flow Diagram · Paylocity Ignite AI Platform
          </h3>
        </div>
        <div className="text-xs text-slate-400 font-mono hidden sm:block">
          <span className="text-orange-400">Click any tier</span> to toggle architectural focus
        </div>
      </div>

      <svg
        viewBox="0 0 1100 640"
        className="w-full h-auto min-w-[840px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Paylocity Ignite AI Platform 3-Tier Architecture Diagram"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="tier1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF5C00" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FF5C00" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="tier2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="tier3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
          </linearGradient>

          {/* Arrow markers */}
          <marker
            id="arrow-orange"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#FF5C00" />
          </marker>
          <marker
            id="arrow-cyan"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#00D2FF" />
          </marker>
          <marker
            id="arrow-emerald"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#10B981" />
          </marker>
          <marker
            id="arrow-slate"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B" />
          </marker>
        </defs>

        {/* ========== LEFT ACTORS PANEL ========== */}
        <g>
          <rect
            x="10"
            y="15"
            width="135"
            height="610"
            rx="12"
            fill="rgba(15,23,42,0.6)"
            stroke="#1E293B"
            strokeWidth="1"
          />
          <text
            x="77"
            y="42"
            textAnchor="middle"
            fill="#94A3B8"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.8"
            className="font-mono"
          >
            ENTERPRISE ACTORS
          </text>
          <line x1="20" y1="52" x2="135" y2="52" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />

          {/* Actor 1: HR Admins & Payroll Ops */}
          <g transform="translate(18, 75)">
            <rect x="0" y="0" width="118" height="150" rx="8" fill="#0B1329" stroke="#334155" strokeWidth="1" />
            <circle cx="59" cy="32" r="14" fill="rgba(255,92,0,0.15)" stroke="#FF5C00" strokeWidth="1.5" />
            {/* User Icon */}
            <path d="M 52 44 C 52 38, 66 38, 66 44" fill="none" stroke="#FF5C00" strokeWidth="1.5" />
            <circle cx="59" cy="28" r="5" fill="#FF5C00" />
            <text x="59" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
              HR &amp; Payroll Ops
            </text>
            <text x="59" y="80" textAnchor="middle" fill="#FF8A3D" fontSize="9" fontWeight="600">
              30,000+ Tenants
            </text>
            <text x="59" y="102" textAnchor="middle" fill="#94A3B8" fontSize="8">
              Bulk Payroll Runs
            </text>
            <text x="59" y="115" textAnchor="middle" fill="#94A3B8" fontSize="8">
              Direct Deposit Edits
            </text>
            <text x="59" y="128" textAnchor="middle" fill="#94A3B8" fontSize="8">
              Tax Disbursements
            </text>
            <rect x="10" y="136" width="98" height="2" fill="#FF5C00" opacity="0.6" />
          </g>

          {/* Actor 2: Recruiters & Talent Acquisition */}
          <g transform="translate(18, 250)">
            <rect x="0" y="0" width="118" height="150" rx="8" fill="#0B1329" stroke="#334155" strokeWidth="1" />
            <circle cx="59" cy="32" r="14" fill="rgba(0,210,255,0.15)" stroke="#00D2FF" strokeWidth="1.5" />
            {/* Document / Candidate Icon */}
            <rect x="52" y="22" width="14" height="18" rx="2" fill="none" stroke="#00D2FF" strokeWidth="1.5" />
            <line x1="56" y1="27" x2="62" y2="27" stroke="#00D2FF" strokeWidth="1" />
            <line x1="56" y1="32" x2="62" y2="32" stroke="#00D2FF" strokeWidth="1" />
            <text x="59" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
              Talent &amp; Recruiting
            </text>
            <text x="59" y="80" textAnchor="middle" fill="#38BDF8" fontSize="9" fontWeight="600">
              Ignite AI Ingestion
            </text>
            <text x="59" y="102" textAnchor="middle" fill="#94A3B8" fontSize="8">
              PDF Resumes
            </text>
            <text x="59" y="115" textAnchor="middle" fill="#94A3B8" fontSize="8">
              Applicant Profiles
            </text>
            <text x="59" y="128" textAnchor="middle" fill="#94A3B8" fontSize="8">
              RRF Job Matching
            </text>
            <rect x="10" y="136" width="98" height="2" fill="#00D2FF" opacity="0.6" />
          </g>

          {/* Actor 3: Employees & Timeclock */}
          <g transform="translate(18, 425)">
            <rect x="0" y="0" width="118" height="150" rx="8" fill="#0B1329" stroke="#334155" strokeWidth="1" />
            <circle cx="59" cy="32" r="14" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.5" />
            {/* Clock / Mobile Icon */}
            <circle cx="59" cy="32" r="7" fill="none" stroke="#10B981" strokeWidth="1.5" />
            <path d="M 59 29 L 59 32 L 62 34" fill="none" stroke="#10B981" strokeWidth="1.2" />
            <text x="59" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">
              Employees (Mobile)
            </text>
            <text x="59" y="80" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="600">
              Time &amp; Labor Mgmt
            </text>
            <text x="59" y="102" textAnchor="middle" fill="#94A3B8" fontSize="8">
              Mobile Clock Punch
            </text>
            <text x="59" y="115" textAnchor="middle" fill="#94A3B8" fontSize="8">
              W-2 Self-Service
            </text>
            <text x="59" y="128" textAnchor="middle" fill="#94A3B8" fontSize="8">
              PTO Accrual Requests
            </text>
            <rect x="10" y="136" width="98" height="2" fill="#10B981" opacity="0.6" />
          </g>
        </g>

        {/* ========== CONNECTIONS: ACTORS -> TIER 1 ========== */}
        <path
          d="M 136 150 L 175 150"
          fill="none"
          stroke="#FF5C00"
          strokeWidth="2"
          markerEnd="url(#arrow-orange)"
        />
        <path
          d="M 136 325 L 175 325"
          fill="none"
          stroke="#00D2FF"
          strokeWidth="2"
          markerEnd="url(#arrow-cyan)"
        />
        <path
          d="M 136 500 L 175 500"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          markerEnd="url(#arrow-emerald)"
        />

        {/* ========== LANE 1: TIER 1 (INGESTION & PII BOUNDARY) ========== */}
        <g
          onClick={() => onTierClick(1)}
          className="cursor-pointer transition-opacity duration-300"
          opacity={laneOpacity(1)}
        >
          {/* Lane Box */}
          <rect
            x="175"
            y="15"
            width="280"
            height="610"
            rx="12"
            fill="url(#tier1Grad)"
            stroke={isActive(1) ? "#FF5C00" : "rgba(255,92,0,0.3)"}
            strokeWidth={isActive(1) ? "2" : "1"}
          />

          {/* Lane Header */}
          <rect x="185" y="25" width="260" height="42" rx="8" fill="#0B1329" stroke="#FF5C00" strokeWidth="1" />
          <text x="315" y="44" textAnchor="middle" fill="#FF5C00" fontSize="12" fontWeight="800" letterSpacing="0.5">
            TIER 1: INGESTION &amp; PII BOUNDARY
          </text>
          <text x="315" y="58" textAnchor="middle" fill="#FFB088" fontSize="9" fontWeight="600">
            Zero-Trust Gateway · Sub-12ms Presidio Sidecar
          </text>

          {/* Component 1: Envoy API Gateway */}
          <g transform="translate(190, 80)">
            <rect x="0" y="0" width="250" height="90" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Envoy Multi-Tenant Gateway
            </text>
            <text x="14" y="42" fill="#94A3B8" fontSize="9">
              • mTLS Client Certificates &amp; Auth0 JWT
            </text>
            <text x="14" y="57" fill="#94A3B8" fontSize="9">
              • Tenant ID Header Validation &amp; Routing
            </text>
            <text x="14" y="72" fill="#FF8A3D" fontSize="9" fontWeight="600">
              • Token-Bucket Rate Limiter (Per-Tenant SLA)
            </text>
            <circle cx="232" cy="20" r="4" fill="#FF5C00" />
          </g>

          {/* Connector inside Tier 1 */}
          <line x1="315" y1="170" x2="315" y2="188" stroke="#FF5C00" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-orange)" />

          {/* Component 2: Microsoft Presidio Sidecar */}
          <g transform="translate(190, 190)">
            <rect
              x="0"
              y="0"
              width="250"
              height="125"
              rx="8"
              fill="#0F172A"
              stroke="#FF5C00"
              strokeWidth="1.5"
            />
            <rect x="8" y="8" width="100" height="16" rx="4" fill="rgba(255,92,0,0.15)" />
            <text x="14" y="20" fill="#FF5C00" fontSize="9" fontWeight="700" className="font-mono">
              SUITE SECURITY
            </text>
            <text x="14" y="42" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Microsoft Presidio Sidecar
            </text>
            <text x="14" y="60" fill="#38BDF8" fontSize="9" fontWeight="600">
              • Deterministic Regex + Small NER
            </text>
            <text x="14" y="75" fill="#94A3B8" fontSize="9">
              • Direct Deposit ABA Routing Number Masking
            </text>
            <text x="14" y="90" fill="#94A3B8" fontSize="9">
              • SSN, TIN, Phone, Personal Email Scrubber
            </text>
            <text x="14" y="107" fill="#34D399" fontSize="9" fontWeight="700">
              ✓ Zero Network Call · P99 &lt; 12ms Latency
            </text>
          </g>

          {/* Connector */}
          <line x1="315" y1="315" x2="315" y2="333" stroke="#FF5C00" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-orange)" />

          {/* Component 3: Kafka Streaming Event Bus */}
          <g transform="translate(190, 335)">
            <rect x="0" y="0" width="250" height="110" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Apache Kafka Event Mesh
            </text>
            <text x="14" y="42" fill="#FF8A3D" fontSize="9" fontWeight="600">
              Keyed by Tenant UUID (Zero Cross-Talk):
            </text>
            <text x="14" y="58" fill="#94A3B8" fontSize="9" className="font-mono">
              • payroll.raw_disbursement.v1
            </text>
            <text x="14" y="73" fill="#94A3B8" fontSize="9" className="font-mono">
              • recruiting.resumes.sanitized.v1
            </text>
            <text x="14" y="88" fill="#94A3B8" fontSize="9" className="font-mono">
              • time.shift_punches.v1
            </text>
          </g>

          {/* Connector */}
          <line x1="315" y1="445" x2="315" y2="463" stroke="#FF5C00" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-orange)" />

          {/* Component 4: Schema Registry & DLQ */}
          <g transform="translate(190, 465)">
            <rect x="0" y="0" width="250" height="95" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Schema Registry &amp; Dead-Letter Queue
            </text>
            <text x="14" y="42" fill="#94A3B8" fontSize="9">
              • Confluent Avro / Pydantic Contract Enforcement
            </text>
            <text x="14" y="58" fill="#94A3B8" fontSize="9">
              • Poison Pill Isolation &amp; Reprocessing Topic
            </text>
            <text x="14" y="74" fill="#38BDF8" fontSize="9" fontWeight="600">
              • 100% Guaranteed Exactly-Once Semantics
            </text>
          </g>

          {/* Tier 1 Footer Metric */}
          <rect x="185" y="575" width="260" height="35" rx="6" fill="#0B1329" stroke="#334155" />
          <text x="315" y="597" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="700">
            SLA: 4,000,000 req/min · P99 &lt; 12ms · 99.9% Up
          </text>
        </g>

        {/* ========== CONNECTIONS: TIER 1 -> TIER 2 ========== */}
        <path
          d="M 455 240 L 485 240"
          fill="none"
          stroke="#FF5C00"
          strokeWidth="2"
          markerEnd="url(#arrow-cyan)"
        />
        <path
          d="M 455 385 L 485 385"
          fill="none"
          stroke="#00D2FF"
          strokeWidth="2"
          markerEnd="url(#arrow-cyan)"
        />
        <path
          d="M 455 510 L 485 510"
          fill="none"
          stroke="#00D2FF"
          strokeWidth="2"
          markerEnd="url(#arrow-cyan)"
        />

        {/* ========== LANE 2: TIER 2 (DUAL-LAYER ML & STATE MACHINE) ========== */}
        <g
          onClick={() => onTierClick(2)}
          className="cursor-pointer transition-opacity duration-300"
          opacity={laneOpacity(2)}
        >
          {/* Lane Box */}
          <rect
            x="485"
            y="15"
            width="280"
            height="610"
            rx="12"
            fill="url(#tier2Grad)"
            stroke={isActive(2) ? "#00D2FF" : "rgba(0,210,255,0.3)"}
            strokeWidth={isActive(2) ? "2" : "1"}
          />

          {/* Lane Header */}
          <rect x="495" y="25" width="260" height="42" rx="8" fill="#0B1329" stroke="#00D2FF" strokeWidth="1" />
          <text x="625" y="44" textAnchor="middle" fill="#00D2FF" fontSize="12" fontWeight="800" letterSpacing="0.5">
            TIER 2: DUAL ML &amp; STATE MACHINE
          </text>
          <text x="625" y="58" textAnchor="middle" fill="#7DD3FC" fontSize="9" fontWeight="600">
            Triton / ONNX · LangGraph HITL State Machine
          </text>

          {/* Component 1: Dual-Layer Anomaly Detector */}
          <g transform="translate(500, 80)">
            <rect
              x="0"
              y="0"
              width="250"
              height="115"
              rx="8"
              fill="#0F172A"
              stroke={isActive(2) ? "#00D2FF" : "#334155"}
              strokeWidth={isActive(2) ? "1.5" : "1"}
            />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Dual-Engine Anomaly Detector
            </text>
            <text x="14" y="44" fill="#38BDF8" fontSize="9" fontWeight="600">
              1. 3-Sigma Rolling Z-Score (Stream Engine):
            </text>
            <text x="14" y="58" fill="#94A3B8" fontSize="9">
              • Real-time peer baseline (hours, gross pay)
            </text>
            <text x="14" y="76" fill="#38BDF8" fontSize="9" fontWeight="600">
              2. Isolation Forest + Autoencoder:
            </text>
            <text x="14" y="90" fill="#94A3B8" fontSize="9">
              • Multivariate fraud &amp; 48hr bank account edits
            </text>
            <text x="14" y="105" fill="#34D399" fontSize="9" fontWeight="700">
              ✓ 98.4% Precision · Explains via SHAP Vectors
            </text>
          </g>

          {/* Connector */}
          <line x1="625" y1="195" x2="625" y2="213" stroke="#00D2FF" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-cyan)" />

          {/* Component 2: Triton & ONNX Inference */}
          <g transform="translate(500, 215)">
            <rect x="0" y="0" width="250" height="110" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Triton Inference Server (ONNX)
            </text>
            <text x="14" y="44" fill="#94A3B8" fontSize="9">
              • BAAI/bge-large Dense Embeddings (768-dim)
            </text>
            <text x="14" y="59" fill="#94A3B8" fontSize="9">
              • BM25 Sparse Inverted Index Tokenizer
            </text>
            <text x="14" y="74" fill="#FF8A3D" fontSize="9" fontWeight="600">
              • Reciprocal Rank Fusion (RRF k=60)
            </text>
            <text x="14" y="94" fill="#34D399" fontSize="9" fontWeight="700">
              ✓ P99 Inference Latency &lt; 20ms on GPU/vCPU
            </text>
          </g>

          {/* Connector */}
          <line x1="625" y1="325" x2="625" y2="343" stroke="#00D2FF" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-cyan)" />

          {/* Component 3: LangGraph HITL State Machine */}
          <g transform="translate(500, 345)">
            <rect
              x="0"
              y="0"
              width="250"
              height="120"
              rx="8"
              fill="#0F172A"
              stroke="#00D2FF"
              strokeWidth="1.5"
            />
            <rect x="8" y="8" width="125" height="16" rx="4" fill="rgba(0,210,255,0.15)" />
            <text x="14" y="20" fill="#00D2FF" fontSize="9" fontWeight="700" className="font-mono">
              HITL CHECKPOINTER
            </text>
            <text x="14" y="42" fill="#FFFFFF" fontSize="12" fontWeight="700">
              LangGraph StateGraph Agent
            </text>
            <text x="14" y="60" fill="#94A3B8" fontSize="9">
              • Checkpointing via MemorySaver / Redis
            </text>
            <text x="14" y="76" fill="#F43F5E" fontSize="9" fontWeight="700">
              • Conditional Interrupt-Before Gate (P &gt; 0.70)
            </text>
            <text x="14" y="92" fill="#94A3B8" fontSize="9">
              • Generates cryptographic HR sign-off token
            </text>
            <text x="14" y="108" fill="#34D399" fontSize="9" fontWeight="700">
              ✓ Zero Unauthorized Out-of-Band Disbursals
            </text>
          </g>

          {/* Connector */}
          <line x1="625" y1="465" x2="625" y2="483" stroke="#00D2FF" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-cyan)" />

          {/* Component 4: FastMCP Tool Integration Gateway */}
          <g transform="translate(500, 485)">
            <rect x="0" y="0" width="250" height="85" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              FastMCP Tool Gateway
            </text>
            <text x="14" y="42" fill="#94A3B8" fontSize="9">
              • Decoupled Core ERP &amp; Tax Disbursal Drivers
            </text>
            <text x="14" y="58" fill="#94A3B8" fontSize="9">
              • Strict Pydantic v2 Schema Input Verification
            </text>
            <text x="14" y="74" fill="#38BDF8" fontSize="9" fontWeight="600">
              • In-Memory Mocking Harness for Unit Testing
            </text>
          </g>

          {/* Tier 2 Footer Metric */}
          <rect x="495" y="575" width="260" height="35" rx="6" fill="#0B1329" stroke="#334155" />
          <text x="625" y="597" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700">
            SLA: Anomaly P99 &lt; 25ms · 100% HITL Audit Trace
          </text>
        </g>

        {/* ========== CONNECTIONS: TIER 2 -> TIER 3 ========== */}
        <path
          d="M 765 140 L 795 140"
          fill="none"
          stroke="#00D2FF"
          strokeWidth="2"
          markerEnd="url(#arrow-emerald)"
        />
        <path
          d="M 765 270 L 795 270"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          markerEnd="url(#arrow-emerald)"
        />
        <path
          d="M 765 405 L 795 405"
          fill="none"
          stroke="#10B981"
          strokeWidth="2"
          markerEnd="url(#arrow-emerald)"
        />

        {/* ========== LANE 3: TIER 3 (LAKEHOUSE & FEATURE STORE) ========== */}
        <g
          onClick={() => onTierClick(3)}
          className="cursor-pointer transition-opacity duration-300"
          opacity={laneOpacity(3)}
        >
          {/* Lane Box */}
          <rect
            x="795"
            y="15"
            width="280"
            height="610"
            rx="12"
            fill="url(#tier3Grad)"
            stroke={isActive(3) ? "#10B981" : "rgba(16,185,129,0.3)"}
            strokeWidth={isActive(3) ? "2" : "1"}
          />

          {/* Lane Header */}
          <rect x="805" y="25" width="260" height="42" rx="8" fill="#0B1329" stroke="#10B981" strokeWidth="1" />
          <text x="935" y="44" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="800" letterSpacing="0.5">
            TIER 3: LAKEHOUSE &amp; FEATURE STORE
          </text>
          <text x="935" y="58" textAnchor="middle" fill="#6EE7B7" fontSize="9" fontWeight="600">
            Databricks Delta Lake · Feast + Redis Cluster
          </text>

          {/* Component 1: Databricks Delta Lake Medallion */}
          <g transform="translate(810, 80)">
            <rect
              x="0"
              y="0"
              width="250"
              height="120"
              rx="8"
              fill="#0F172A"
              stroke={isActive(3) ? "#10B981" : "#334155"}
              strokeWidth={isActive(3) ? "1.5" : "1"}
            />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Databricks Delta Lakehouse
            </text>
            <text x="14" y="44" fill="#F59E0B" fontSize="9" fontWeight="600">
              • Bronze Layer: Raw Kafka Streams (Append-Only)
            </text>
            <text x="14" y="60" fill="#94A3B8" fontSize="9">
              • Silver Layer: Cleaned Multi-Tenant Partitioned
            </text>
            <text x="14" y="76" fill="#10B981" fontSize="9" fontWeight="600">
              • Gold Layer: Business Aggregates &amp; ML Baselines
            </text>
            <text x="14" y="94" fill="#38BDF8" fontSize="9" className="font-mono">
              Partition Key: tenant_id, pay_period_year
            </text>
            <text x="14" y="108" fill="#34D399" fontSize="9" fontWeight="700">
              ✓ ACID Transactions &amp; Time Travel Recovery
            </text>
          </g>

          {/* Connector */}
          <line x1="935" y1="200" x2="935" y2="218" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-emerald)" />

          {/* Component 2: Redis Online Feature Store */}
          <g transform="translate(810, 220)">
            <rect
              x="0"
              y="0"
              width="250"
              height="115"
              rx="8"
              fill="#0F172A"
              stroke="#10B981"
              strokeWidth="1.5"
            />
            <rect x="8" y="8" width="110" height="16" rx="4" fill="rgba(16,185,129,0.15)" />
            <text x="14" y="20" fill="#10B981" fontSize="9" fontWeight="700" className="font-mono">
              ONLINE SERVING
            </text>
            <text x="14" y="42" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Redis Cluster Feature Store
            </text>
            <text x="14" y="60" fill="#94A3B8" fontSize="9">
              • Key: tenant:{`{tenant_id}`}:emp:{`{emp_id}`}
            </text>
            <text x="14" y="75" fill="#94A3B8" fontSize="9">
              • Historical 7-day rolling mean &amp; stddev
            </text>
            <text x="14" y="90" fill="#94A3B8" fontSize="9">
              • Peer group salary percentiles &amp; tenure
            </text>
            <text x="14" y="107" fill="#34D399" fontSize="9" fontWeight="700">
              ✓ Sub-5ms Read Latency · Zero Training Skew
            </text>
          </g>

          {/* Connector */}
          <line x1="935" y1="335" x2="935" y2="353" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-emerald)" />

          {/* Component 3: Feast Offline Feature Sync */}
          <g transform="translate(810, 355)">
            <rect x="0" y="0" width="250" height="95" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              Feast Feature Store Sync
            </text>
            <text x="14" y="42" fill="#94A3B8" fontSize="9">
              • Point-In-Time Correct Joins for Retraining
            </text>
            <text x="14" y="58" fill="#94A3B8" fontSize="9">
              • Automated Feature Drift Alerting via Evidently AI
            </text>
            <text x="14" y="74" fill="#38BDF8" fontSize="9" fontWeight="600">
              • Dual Offline/Online Unified Definition
            </text>
          </g>

          {/* Connector */}
          <line x1="935" y1="450" x2="935" y2="468" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#arrow-emerald)" />

          {/* Component 4: Compliance & Audit Vault */}
          <g transform="translate(810, 470)">
            <rect x="0" y="0" width="250" height="100" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="700">
              SOC-2 &amp; Compliance Audit Vault
            </text>
            <text x="14" y="42" fill="#94A3B8" fontSize="9">
              • Immutable Hash Chains (21 CFR Part 11 / SOC-2)
            </text>
            <text x="14" y="58" fill="#94A3B8" fontSize="9">
              • Full SHAP Driver &amp; Explanations Persistence
            </text>
            <text x="14" y="74" fill="#F59E0B" fontSize="9" fontWeight="600">
              • Cryptographic Signature for Every Disbursement
            </text>
            <text x="14" y="90" fill="#34D399" fontSize="9" fontWeight="700">
              ✓ 7-Year Audit Trail Retention Guaranteed
            </text>
          </g>

          {/* Tier 3 Footer Metric */}
          <rect x="805" y="575" width="260" height="35" rx="6" fill="#0B1329" stroke="#334155" />
          <text x="935" y="597" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="700">
            SLA: Sub-5ms Online Lookup · Petabyte Scale
          </text>
        </g>
      </svg>

      {/* Interactive Diagram Helper Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00]" /> Tier 1: Ingestion &amp; PII
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF]" /> Tier 2: Dual ML &amp; HITL
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" /> Tier 3: Lakehouse &amp; Features
          </span>
        </div>
        <div className="text-slate-400">
          Currently Focusing:{" "}
          <span className="text-orange-400 font-bold">
            Tier {selectedTier}: {selectedTier === 1 ? "Ingestion & PII" : selectedTier === 2 ? "Dual ML & Agents" : "Lakehouse & Features"}
          </span>
        </div>
      </div>
    </div>
  );
}
