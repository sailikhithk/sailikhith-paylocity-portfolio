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
  const laneOpacity = (tier: number) => (isActive(tier) ? 1 : 0.35);

  return (
    <div className="w-full overflow-x-auto mb-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-6">
      <svg
        viewBox="0 0 1080 600"
        className="w-full h-auto min-w-[720px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="FAST AI Platform 3-Tier Architecture Diagram"
      >
        {/* ========== LANE BACKGROUNDS ========== */}

        {/* Lane 1: Edge & Ingestion (teal) */}
        <g
          onClick={() => onTierClick(1)}
          className="cursor-pointer"
          style={{ transition: "opacity 0.4s ease" }}
          opacity={laneOpacity(1)}
        >
          <rect
            x="155"
            y="10"
            width="260"
            height="575"
            rx="12"
            fill="rgba(20,184,166,0.08)"
            stroke="rgba(20,184,166,0.25)"
            strokeWidth="1"
          />
          <text
            x="285"
            y="38"
            textAnchor="middle"
            fill="#14b8a6"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.5"
          >
            Edge &amp; Ingestion
          </text>
          <text
            x="285"
            y="52"
            textAnchor="middle"
            fill="#5eead4"
            fontSize="9"
            fontWeight="500"
            opacity="0.7"
          >
            Tier 1 · 4M req/min
          </text>
        </g>

        {/* Lane 2: Compute & ML (amber) */}
        <g
          onClick={() => onTierClick(2)}
          className="cursor-pointer"
          style={{ transition: "opacity 0.4s ease" }}
          opacity={laneOpacity(2)}
        >
          <rect
            x="425"
            y="10"
            width="270"
            height="575"
            rx="12"
            fill="rgba(245,158,11,0.07)"
            stroke="rgba(245,158,11,0.25)"
            strokeWidth="1"
          />
          <text
            x="560"
            y="38"
            textAnchor="middle"
            fill="#f59e0b"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.5"
          >
            Compute &amp; ML
          </text>
          <text
            x="560"
            y="52"
            textAnchor="middle"
            fill="#fcd34d"
            fontSize="9"
            fontWeight="500"
            opacity="0.7"
          >
            Tier 2 · 30+ LLMs
          </text>
        </g>

        {/* Lane 3: Data & Presentation (purple) */}
        <g
          onClick={() => onTierClick(3)}
          className="cursor-pointer"
          style={{ transition: "opacity 0.4s ease" }}
          opacity={laneOpacity(3)}
        >
          <rect
            x="705"
            y="10"
            width="265"
            height="575"
            rx="12"
            fill="rgba(139,92,246,0.07)"
            stroke="rgba(139,92,246,0.25)"
            strokeWidth="1"
          />
          <text
            x="837"
            y="38"
            textAnchor="middle"
            fill="#a78bfa"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.5"
          >
            Data &amp; Presentation
          </text>
          <text
            x="837"
            y="52"
            textAnchor="middle"
            fill="#c4b5fd"
            fontSize="9"
            fontWeight="500"
            opacity="0.7"
          >
            Tier 3 · 27PB Lakehouse
          </text>
        </g>

        {/* ========== ACTOR ICONS (left side) ========== */}

        {/* Actor 1: Mobile Users */}
        <g opacity={isActive(1) ? 1 : 0.5} style={{ transition: "opacity 0.4s ease" }}>
          {/* User group icon */}
          <circle cx="45" cy="98" r="10" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="45" cy="92" r="5" fill="#94a3b8" />
          <path d="M 32 108 Q 45 118 58 108" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Second person behind */}
          <circle cx="60" cy="90" r="4" fill="#64748b" />
          <path d="M 50 100 Q 60 108 70 100" fill="none" stroke="#64748b" strokeWidth="1" />
          <text x="48" y="128" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="700">
            Mobile
          </text>
          <text x="48" y="140" textAnchor="middle" fill="#64748b" fontSize="9">
            Users
          </text>

          {/* Phone icon */}
          <rect
            x="95"
            y="87"
            width="22"
            height="34"
            rx="3"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.2"
          />
          <line x1="103" y1="115" x2="110" y2="115" stroke="#94a3b8" strokeWidth="1" />
          <rect x="99" y="92" width="14" height="16" rx="1" fill="rgba(148,163,184,0.15)" />
        </g>

        {/* Actor 2: Brand Partners */}
        <g opacity={isActive(2) ? 1 : 0.5} style={{ transition: "opacity 0.4s ease" }}>
          <circle cx="45" cy="268" r="10" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="45" cy="262" r="5" fill="#94a3b8" />
          <path d="M 32 278 Q 45 288 58 278" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="60" cy="260" r="4" fill="#64748b" />
          <path d="M 50 270 Q 60 278 70 270" fill="none" stroke="#64748b" strokeWidth="1" />
          <text x="48" y="300" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="700">
            Brand
          </text>
          <text x="48" y="312" textAnchor="middle" fill="#64748b" fontSize="9">
            Partners
          </text>

          {/* Monitor icon */}
          <rect
            x="93"
            y="257"
            width="28"
            height="20"
            rx="2"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.2"
          />
          <rect x="97" y="260" width="20" height="13" rx="1" fill="rgba(148,163,184,0.15)" />
          <line x1="107" y1="277" x2="107" y2="283" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="99" y1="283" x2="115" y2="283" stroke="#94a3b8" strokeWidth="1.2" />
        </g>

        {/* Actor 3: Analytics Team */}
        <g opacity={isActive(3) ? 1 : 0.5} style={{ transition: "opacity 0.4s ease" }}>
          <circle cx="45" cy="438" r="10" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="45" cy="432" r="5" fill="#94a3b8" />
          <path d="M 32 448 Q 45 458 58 448" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="60" cy="430" r="4" fill="#64748b" />
          <path d="M 50 440 Q 60 448 70 440" fill="none" stroke="#64748b" strokeWidth="1" />
          <text x="48" y="470" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="700">
            Analytics
          </text>
          <text x="48" y="482" textAnchor="middle" fill="#64748b" fontSize="9">
            Team
          </text>

          {/* Chart icon */}
          <rect
            x="93"
            y="427"
            width="28"
            height="20"
            rx="2"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.2"
          />
          <rect x="97" y="439" width="4" height="5" fill="#94a3b8" />
          <rect x="103" y="434" width="4" height="10" fill="#94a3b8" />
          <rect x="109" y="431" width="4" height="13" fill="#94a3b8" />
        </g>

        {/* ========== ACTOR TO LANE ARROWS ========== */}

        {/* Mobile → Cloudflare */}
        <line
          x1="122"
          y1="104"
          x2="168"
          y2="104"
          stroke={isActive(1) ? "#14b8a6" : "#334155"}
          strokeWidth="1.5"
          markerEnd="url(#arrowTeal)"
          style={{ transition: "stroke 0.4s ease" }}
          opacity={isActive(1) ? 0.8 : 0.2}
        />

        {/* Partners → Kafka */}
        <line
          x1="122"
          y1="270"
          x2="168"
          y2="270"
          stroke={isActive(1) ? "#14b8a6" : "#334155"}
          strokeWidth="1.5"
          markerEnd="url(#arrowTeal)"
          style={{ transition: "stroke 0.4s ease" }}
          opacity={isActive(1) ? 0.8 : 0.2}
        />

        {/* Analytics → Lakehouse (long arrow to tier 3) */}
        <line
          x1="122"
          y1="440"
          x2="168"
          y2="440"
          stroke={isActive(3) ? "#a78bfa" : "#334155"}
          strokeWidth="1.5"
          markerEnd="url(#arrowPurple)"
          style={{ transition: "stroke 0.4s ease" }}
          opacity={isActive(3) ? 0.8 : 0.2}
        />

        {/* ========== DEFS: Arrow markers ========== */}
        <defs>
          <marker
            id="arrowTeal"
            viewBox="0 0 10 7"
            refX="9"
            refY="3.5"
            markerWidth="8"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 3.5 L 0 7 z" fill="#14b8a6" />
          </marker>
          <marker
            id="arrowAmber"
            viewBox="0 0 10 7"
            refX="9"
            refY="3.5"
            markerWidth="8"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 3.5 L 0 7 z" fill="#f59e0b" />
          </marker>
          <marker
            id="arrowPurple"
            viewBox="0 0 10 7"
            refX="9"
            refY="3.5"
            markerWidth="8"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 3.5 L 0 7 z" fill="#a78bfa" />
          </marker>
          <marker
            id="arrowSlate"
            viewBox="0 0 10 7"
            refX="9"
            refY="3.5"
            markerWidth="8"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 3.5 L 0 7 z" fill="#475569" />
          </marker>
        </defs>

        {/* ========== TIER 1 COMPONENT BOXES (Teal) ========== */}
        <g
          onClick={() => onTierClick(1)}
          className="cursor-pointer"
          style={{ transition: "opacity 0.4s ease" }}
          opacity={laneOpacity(1)}
        >
          {/* Cloudflare WAF */}
          <rect
            x="175"
            y="80"
            width="225"
            height="48"
            rx="6"
            fill="#0d9488"
            stroke="#14b8a6"
            strokeWidth="0.5"
          />
          <text x="287" y="101" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            Cloudflare Edge / WAF
          </text>
          <text x="287" y="118" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            TLS · Anycast · DDoS Mitigation
          </text>

          {/* Kafka Bus */}
          <rect
            x="175"
            y="195"
            width="225"
            height="48"
            rx="6"
            fill="#0d9488"
            stroke="#14b8a6"
            strokeWidth="0.5"
          />
          <text x="287" y="216" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            Kafka Ingestion Bus
          </text>
          <text x="287" y="233" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            4M req/min · MSK · Partitioned
          </text>

          {/* Circuit Breaker */}
          <rect
            x="175"
            y="310"
            width="225"
            height="48"
            rx="6"
            fill="#0d9488"
            stroke="#14b8a6"
            strokeWidth="0.5"
          />
          <text x="287" y="331" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            Circuit Breaker / Rate Limiter
          </text>
          <text x="287" y="348" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            Redis Token Bucket · Backpressure
          </text>

          {/* 202 Accepted badge */}
          <rect
            x="175"
            y="415"
            width="225"
            height="38"
            rx="6"
            fill="rgba(20,184,166,0.12)"
            stroke="rgba(20,184,166,0.3)"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          />
          <text x="287" y="432" textAnchor="middle" fill="#5eead4" fontSize="9" fontWeight="600">
            &lt; 45ms · 202 Accepted
          </text>
          <text x="287" y="446" textAnchor="middle" fill="#2dd4bf" fontSize="8" opacity="0.7">
            Async event decoupling
          </text>

          {/* Internal arrows: Cloudflare → Kafka */}
          <line
            x1="287"
            y1="128"
            x2="287"
            y2="190"
            stroke="#14b8a6"
            strokeWidth="1.2"
            markerEnd="url(#arrowTeal)"
          />
          {/* Kafka → Circuit Breaker */}
          <line
            x1="287"
            y1="243"
            x2="287"
            y2="305"
            stroke="#14b8a6"
            strokeWidth="1.2"
            markerEnd="url(#arrowTeal)"
          />
        </g>

        {/* ========== TIER 2 COMPONENT BOXES (Amber) ========== */}
        <g
          onClick={() => onTierClick(2)}
          className="cursor-pointer"
          style={{ transition: "opacity 0.4s ease" }}
          opacity={laneOpacity(2)}
        >
          {/* FastAPI Workers */}
          <rect
            x="440"
            y="80"
            width="240"
            height="48"
            rx="6"
            fill="#d97706"
            stroke="#f59e0b"
            strokeWidth="0.5"
          />
          <text x="560" y="101" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            Async Python Workers
          </text>
          <text x="560" y="118" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            FastAPI · asyncio · Pydantic V2
          </text>

          {/* FacadeDriver */}
          <rect
            x="440"
            y="195"
            width="240"
            height="48"
            rx="6"
            fill="#d97706"
            stroke="#f59e0b"
            strokeWidth="0.5"
          />
          <text x="560" y="216" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            Multi-Model FacadeDriver
          </text>
          <text x="560" y="233" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            30+ LLMs · Bedrock · Azure · Vertex
          </text>

          {/* Semantic Cache */}
          <rect
            x="440"
            y="310"
            width="240"
            height="48"
            rx="6"
            fill="#d97706"
            stroke="#f59e0b"
            strokeWidth="0.5"
          />
          <text x="560" y="331" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            Redis Semantic Cache
          </text>
          <text x="560" y="348" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            38% hit rate · $180k/yr saved
          </text>

          {/* Guardrails badge */}
          <rect
            x="440"
            y="415"
            width="240"
            height="38"
            rx="6"
            fill="rgba(245,158,11,0.12)"
            stroke="rgba(245,158,11,0.3)"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          />
          <text x="560" y="432" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="600">
            Queue(maxsize=100) · No OOM
          </text>
          <text x="560" y="446" textAnchor="middle" fill="#fcd34d" fontSize="8" opacity="0.7">
            Bounded memory queues
          </text>

          {/* Internal arrows */}
          <line
            x1="560"
            y1="128"
            x2="560"
            y2="190"
            stroke="#f59e0b"
            strokeWidth="1.2"
            markerEnd="url(#arrowAmber)"
          />
          <line
            x1="560"
            y1="243"
            x2="560"
            y2="305"
            stroke="#f59e0b"
            strokeWidth="1.2"
            markerEnd="url(#arrowAmber)"
          />
        </g>

        {/* ========== TIER 3 COMPONENT BOXES (Purple) ========== */}
        <g
          onClick={() => onTierClick(3)}
          className="cursor-pointer"
          style={{ transition: "opacity 0.4s ease" }}
          opacity={laneOpacity(3)}
        >
          {/* 27PB Lakehouse */}
          <rect
            x="720"
            y="80"
            width="235"
            height="48"
            rx="6"
            fill="#7c3aed"
            stroke="#a78bfa"
            strokeWidth="0.5"
          />
          <text x="837" y="101" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            27PB Iceberg Lakehouse
          </text>
          <text x="837" y="118" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            Trino · S3 · Analytical Engine
          </text>

          {/* SSE Stream */}
          <rect
            x="720"
            y="195"
            width="235"
            height="48"
            rx="6"
            fill="#7c3aed"
            stroke="#a78bfa"
            strokeWidth="0.5"
          />
          <text x="837" y="216" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            SSE Token Stream
          </text>
          <text x="837" y="233" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            15s heartbeat · Redis replay buffer
          </text>

          {/* TanStack + Virtual Tables */}
          <rect
            x="720"
            y="310"
            width="235"
            height="48"
            rx="6"
            fill="#7c3aed"
            stroke="#a78bfa"
            strokeWidth="0.5"
          />
          <text x="837" y="331" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">
            TanStack Query + Jotai
          </text>
          <text x="837" y="348" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9">
            60fps Virtual Tables · &lt;16ms INP
          </text>

          {/* DevEx badge */}
          <rect
            x="720"
            y="415"
            width="235"
            height="38"
            rx="6"
            fill="rgba(139,92,246,0.12)"
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          />
          <text x="837" y="432" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontWeight="600">
            OpenAPI → Zod compile gate
          </text>
          <text x="837" y="446" textAnchor="middle" fill="#a78bfa" fontSize="8" opacity="0.7">
            -65% network roundtrips
          </text>

          {/* Internal arrows */}
          <line
            x1="837"
            y1="128"
            x2="837"
            y2="190"
            stroke="#a78bfa"
            strokeWidth="1.2"
            markerEnd="url(#arrowPurple)"
          />
          <line
            x1="837"
            y1="243"
            x2="837"
            y2="305"
            stroke="#a78bfa"
            strokeWidth="1.2"
            markerEnd="url(#arrowPurple)"
          />
        </g>

        {/* ========== CROSS-LANE ARROWS ========== */}

        {/* Tier 1 → Tier 2: Cloudflare → FastAPI Workers */}
        <line
          x1="400"
          y1="104"
          x2="435"
          y2="104"
          stroke={isActive(1) || isActive(2) ? "#94a3b8" : "#1e293b"}
          strokeWidth="1.5"
          markerEnd="url(#arrowSlate)"
          opacity={isActive(1) || isActive(2) ? 0.7 : 0.15}
          style={{ transition: "opacity 0.4s ease, stroke 0.4s ease" }}
        />

        {/* Tier 1 → Tier 2: Kafka → FacadeDriver */}
        <line
          x1="400"
          y1="219"
          x2="435"
          y2="219"
          stroke={isActive(1) || isActive(2) ? "#94a3b8" : "#1e293b"}
          strokeWidth="1.5"
          markerEnd="url(#arrowSlate)"
          opacity={isActive(1) || isActive(2) ? 0.7 : 0.15}
          style={{ transition: "opacity 0.4s ease, stroke 0.4s ease" }}
        />

        {/* Tier 1 → Tier 2: Circuit Breaker → Semantic Cache */}
        <line
          x1="400"
          y1="334"
          x2="435"
          y2="334"
          stroke={isActive(1) || isActive(2) ? "#94a3b8" : "#1e293b"}
          strokeWidth="1.5"
          markerEnd="url(#arrowSlate)"
          opacity={isActive(1) || isActive(2) ? 0.7 : 0.15}
          style={{ transition: "opacity 0.4s ease, stroke 0.4s ease" }}
        />

        {/* Tier 2 → Tier 3: FastAPI → Lakehouse */}
        <line
          x1="680"
          y1="104"
          x2="715"
          y2="104"
          stroke={isActive(2) || isActive(3) ? "#94a3b8" : "#1e293b"}
          strokeWidth="1.5"
          markerEnd="url(#arrowSlate)"
          opacity={isActive(2) || isActive(3) ? 0.7 : 0.15}
          style={{ transition: "opacity 0.4s ease, stroke 0.4s ease" }}
        />

        {/* Tier 2 → Tier 3: FacadeDriver → SSE */}
        <line
          x1="680"
          y1="219"
          x2="715"
          y2="219"
          stroke={isActive(2) || isActive(3) ? "#94a3b8" : "#1e293b"}
          strokeWidth="1.5"
          markerEnd="url(#arrowSlate)"
          opacity={isActive(2) || isActive(3) ? 0.7 : 0.15}
          style={{ transition: "opacity 0.4s ease, stroke 0.4s ease" }}
        />

        {/* Tier 2 → Tier 3: Cache → TanStack */}
        <line
          x1="680"
          y1="334"
          x2="715"
          y2="334"
          stroke={isActive(2) || isActive(3) ? "#94a3b8" : "#1e293b"}
          strokeWidth="1.5"
          markerEnd="url(#arrowSlate)"
          opacity={isActive(2) || isActive(3) ? 0.7 : 0.15}
          style={{ transition: "opacity 0.4s ease, stroke 0.4s ease" }}
        />

        {/* Diagonal: Kafka → FastAPI (async consume label) */}
        <g
          opacity={isActive(1) || isActive(2) ? 0.65 : 0.1}
          style={{ transition: "opacity 0.4s ease" }}
        >
          <line
            x1="400"
            y1="230"
            x2="435"
            y2="104"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeDasharray="5 3"
            markerEnd="url(#arrowSlate)"
          />
          <text
            x="420"
            y="158"
            fill="#94a3b8"
            fontSize="7"
            fontStyle="italic"
            transform="rotate(-50, 420, 158)"
          >
            async
          </text>
        </g>

        {/* Diagonal: FacadeDriver → Lakehouse */}
        <g
          opacity={isActive(2) || isActive(3) ? 0.65 : 0.1}
          style={{ transition: "opacity 0.4s ease" }}
        >
          <line
            x1="680"
            y1="230"
            x2="715"
            y2="104"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeDasharray="5 3"
            markerEnd="url(#arrowSlate)"
          />
          <text
            x="700"
            y="158"
            fill="#94a3b8"
            fontSize="7"
            fontStyle="italic"
            transform="rotate(-50, 700, 158)"
          >
            query
          </text>
        </g>

        {/* Analytics → Lakehouse (long diagonal) */}
        <g opacity={isActive(3) ? 0.65 : 0.1} style={{ transition: "opacity 0.4s ease" }}>
          <line
            x1="170"
            y1="440"
            x2="715"
            y2="104"
            stroke="#a78bfa"
            strokeWidth="1"
            strokeDasharray="6 3"
            markerEnd="url(#arrowPurple)"
          />
        </g>

        {/* ========== FLOW LABELS ========== */}

        {/* Label: between lane 1 and 2 */}
        <g
          opacity={isActive(1) || isActive(2) ? 0.8 : 0.15}
          style={{ transition: "opacity 0.4s ease" }}
        >
          <rect
            x="402"
            y="490"
            width="30"
            height="40"
            rx="4"
            fill="rgba(148,163,184,0.08)"
            stroke="rgba(148,163,184,0.2)"
            strokeWidth="0.5"
          />
          <text x="417" y="506" textAnchor="middle" fill="#94a3b8" fontSize="7" fontWeight="600">
            async
          </text>
          <text x="417" y="520" textAnchor="middle" fill="#94a3b8" fontSize="7" fontWeight="600">
            consume
          </text>
        </g>

        {/* Label: between lane 2 and 3 */}
        <g
          opacity={isActive(2) || isActive(3) ? 0.8 : 0.15}
          style={{ transition: "opacity 0.4s ease" }}
        >
          <rect
            x="683"
            y="490"
            width="30"
            height="40"
            rx="4"
            fill="rgba(148,163,184,0.08)"
            stroke="rgba(148,163,184,0.2)"
            strokeWidth="0.5"
          />
          <text x="698" y="506" textAnchor="middle" fill="#94a3b8" fontSize="7" fontWeight="600">
            SSE
          </text>
          <text x="698" y="520" textAnchor="middle" fill="#94a3b8" fontSize="7" fontWeight="600">
            stream
          </text>
        </g>

        {/* ========== BRAND MARKERS ========== */}

        {/* PepsiCo / Unilever / CPG label under Brand Partners */}
        <g opacity={isActive(2) ? 0.8 : 0.3} style={{ transition: "opacity 0.4s ease" }}>
          <text x="48" y="328" textAnchor="middle" fill="#64748b" fontSize="7.5" fontStyle="italic">
            PepsiCo · Unilever
          </text>
          <text x="48" y="340" textAnchor="middle" fill="#64748b" fontSize="7.5" fontStyle="italic">
            CPG · Brands
          </text>
        </g>

        {/* Bottom hint */}
        <text x="540" y="570" textAnchor="middle" fill="#475569" fontSize="9">
          Click a column to highlight · Architecture syncs with detail panel below
        </text>
      </svg>
    </div>
  );
}
