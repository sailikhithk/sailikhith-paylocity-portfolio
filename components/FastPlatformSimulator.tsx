"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  RotateCcw,
  Sparkles,
  Layers,
  Receipt,
  Cpu,
  Database,
  CheckCircle2,
  AlertCircle,
  Zap,
  Activity,
  BarChart3,
  Clock,
  ShieldCheck,
  Terminal,
  Bot,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

interface ReceiptItem {
  sku: string;
  name: string;
  brand: string;
  price: number;
  partner: boolean;
  basePoints: number;
  multiplier: number;
}

export default function FastPlatformSimulator() {
  const [activeTab, setActiveTab] = useState<"receipt" | "agent">("receipt");

  // Receipt Simulator State
  const [isRunning, setIsRunning] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<"groceries" | "superstore" | "quickmart">(
    "groceries"
  );
  const [concurrency, setConcurrency] = useState(250);
  const [brandMultiplier, setBrandMultiplier] = useState(2.0);
  const [ocrConfidence, setOcrConfidence] = useState(96);
  const [processedCount, setProcessedCount] = useState(1420);
  const [totalPointsAwarded, setTotalPointsAwarded] = useState(84520);
  const [currentLatency, setCurrentLatency] = useState(38);
  const [cacheHitRate, setCacheHitRate] = useState(42.5);
  const [receiptItems, setReceiptItems] = useState<ReceiptItem[]>([]);
  const [streamLogs, setStreamLogs] = useState<string[]>([]);

  // Background Agent Runner State (Autonomous Worker Queue)
  const [agentStatus, setAgentStatus] = useState<"idle" | "running" | "completed">("idle");
  const [agentLogs, setAgentLogs] = useState<string[]>([]);
  const [selectedAgentTask, setSelectedAgentTask] = useState("pepsico-brand-analytics");

  const logEndRef = useRef<HTMLDivElement>(null);

  const presets = {
    groceries: {
      title: "Pantry & Groceries Run",
      partner: "PepsiCo & Unilever",
      store: "Kroger #4910",
      items: [
        {
          sku: "028400064286",
          name: "Lay's Classic Potato Chips 8oz",
          brand: "Frito-Lay (PepsiCo)",
          price: 4.49,
          partner: true,
          basePoints: 25,
          multiplier: 2.5,
        },
        {
          sku: "012000001291",
          name: "Pepsi Zero Sugar 12pk",
          brand: "PepsiCo",
          price: 7.99,
          partner: true,
          basePoints: 35,
          multiplier: 3.0,
        },
        {
          sku: "011111614210",
          name: "Hellmann's Real Mayonnaise 30oz",
          brand: "Unilever",
          price: 5.99,
          partner: true,
          basePoints: 30,
          multiplier: 2.0,
        },
        {
          sku: "079400060907",
          name: "Dove Deep Moisture Body Wash",
          brand: "Unilever",
          price: 8.49,
          partner: true,
          basePoints: 40,
          multiplier: 2.0,
        },
        {
          sku: "036000291452",
          name: "Kleenex Facial Tissues 3pk",
          brand: "Kimberly-Clark",
          price: 6.29,
          partner: false,
          basePoints: 25,
          multiplier: 1.0,
        },
      ],
    },
    superstore: {
      title: "Superstore Mega Haul",
      partner: "Molson Coors & General Mills",
      store: "Target Store #1842",
      items: [
        {
          sku: "071990000485",
          name: "Coors Light 24pk Cans",
          brand: "Molson Coors",
          price: 21.99,
          partner: true,
          basePoints: 100,
          multiplier: 3.5,
        },
        {
          sku: "016000169661",
          name: "Cheerios Honey Nut 18.8oz",
          brand: "General Mills",
          price: 5.49,
          partner: true,
          basePoints: 30,
          multiplier: 2.0,
        },
        {
          sku: "028400589888",
          name: "Doritos Nacho Cheese 9.25oz",
          brand: "Frito-Lay (PepsiCo)",
          price: 4.99,
          partner: true,
          basePoints: 25,
          multiplier: 2.0,
        },
        {
          sku: "037000762282",
          name: "Tide PODS Laundry Detergent 42ct",
          brand: "P&G",
          price: 13.99,
          partner: false,
          basePoints: 25,
          multiplier: 1.0,
        },
      ],
    },
    quickmart: {
      title: "Convenience Quick Stop",
      partner: "PepsiCo Beverages",
      store: "7-Eleven #3290",
      items: [
        {
          sku: "012000163159",
          name: "Mountain Dew 20oz Bottle",
          brand: "PepsiCo",
          price: 2.39,
          partner: true,
          basePoints: 25,
          multiplier: 2.5,
        },
        {
          sku: "028400040112",
          name: "Ruffles Cheddar & Sour Cream",
          brand: "Frito-Lay (PepsiCo)",
          price: 2.69,
          partner: true,
          basePoints: 25,
          multiplier: 2.0,
        },
        {
          sku: "040000002461",
          name: "Snickers King Size Bar",
          brand: "Mars Inc.",
          price: 2.19,
          partner: false,
          basePoints: 25,
          multiplier: 1.0,
        },
      ],
    },
  };

  useEffect(() => {
    setReceiptItems(presets[selectedPreset].items);
  }, [selectedPreset]);

  // Live Stream Simulation Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProcessedCount((prev) => prev + Math.floor(Math.random() * 8 + 4));
        setTotalPointsAwarded((prev) => prev + Math.floor(Math.random() * 350 + 150));
        setCurrentLatency((prev) =>
          Math.max(22, Math.min(65, prev + (Math.floor(Math.random() * 9) - 4)))
        );
        setCacheHitRate((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));

        const item =
          presets[selectedPreset].items[
            Math.floor(Math.random() * presets[selectedPreset].items.length)
          ];
        const points = Math.round(item.basePoints * (item.partner ? brandMultiplier : 1.0));
        const newLog = `[SSE :${new Date().toISOString().split("T")[1].slice(0, 8)}] OCR Extracted: "${item.name}" (SKU: ${item.sku}) → Brand: ${item.brand} | Points: +${points} (Multi: ${item.partner ? brandMultiplier : 1.0}x)`;

        setStreamLogs((prev) => [newLog, ...prev.slice(0, 19)]);
      }, 700);
    }
    return () => clearInterval(interval);
  }, [isRunning, selectedPreset, brandMultiplier]);

  const handleRunAgent = () => {
    setAgentStatus("running");

    const traces: Record<string, string[]> = {
      "pepsico-brand-analytics": [
        `[00.00s] Initializing Background Agent Runner (Task: PepsiCo Brand Lift & Basket Affinity)...`,
        `[00.12s] Consulting Fetch Skills Registry: Loaded 4 tools [TrinoLakehouseClient, SemanticEmbeddingCache, MultiModelFacade, BrandAggregator]`,
        `[00.35s] Executing Trino query pushdown over 27PB Iceberg Lakehouse: Partition scan (ds='2026-09-03', brand_partner='pepsico')`,
        `[00.82s] Retrieved 148,290 receipt line items. Memory footprint: 18.4MB (streaming cursor bounded)`,
        `[01.20s] Invoking FacadeDriver (Claude 3.5 Sonnet proxy via Bedrock): Synthesizing SKU brand lift & basket affinities...`,
        `[01.65s] Pydantic V2 Schema Validation passed: Exporting OpenAPI JSON report payload`,
        `[01.90s] Redis Semantic Cache warmed: Key 'analytics:pepsico:basket_affinity:2026-09-03' cached (TTL: 3600s)`,
        `[02.15s] Execution complete: Saved $42.10 in redundant model inferences. Status: 200 OK.`,
      ],
      "unilever-cross-category": [
        `[00.00s] Initializing Background Agent Runner (Task: Unilever Cross-Category Cannibalization Scan)...`,
        `[00.14s] Consulting Fetch Skills Registry: Loaded 3 tools [TrinoLakehouseClient, VectorSKUMatcher, BasketCannibalizationEvaluator]`,
        `[00.41s] Scanning Iceberg tables: receipt_items joined with catalog_products (Dove, Hellmann's, Knorr, Axe)`,
        `[00.94s] Processed 312,400 multi-category baskets across 1,840 retail partner chains (Kroger, Target, Walmart)`,
        `[01.35s] Invoking FacadeDriver (Mistral-Large on Bedrock): Calculating cross-elasticity and promotional cannibalization index...`,
        `[01.78s] Generated AST SQL pivot: Aggregated cross-purchase probability matrix (Dove Body Wash + Knorr Sides)`,
        `[02.05s] Emitting event to Kafka topic 'fast.analytics.unilever.reports' for B2B brand partner portal delivery`,
        `[02.25s] Execution complete: Generated 42-page executive insight matrix. Status: 200 OK.`,
      ],
      "molson-fraud-anomaly": [
        `[00.00s] Initializing Background Agent Runner (Task: Real-Time Receipt Velocity Anomaly Sweep)...`,
        `[00.11s] Consulting Fetch Skills Registry: Loaded 4 tools [KafkaConsumerOffsetInspector, SlidingWindowVelocityEngine, RedisBloomFilter, FraudClassifier]`,
        `[00.28s] Inspecting Kafka consumer partition lag across 64 catalog topics: Current consumer lag = 48,210 msgs (Normal <50k)`,
        `[00.65s] Sliding window scan (60s rolling window): Evaluated 84,200 receipt uploads for duplicate timestamp collisions`,
        `[01.02s] Detected 14 suspicious cluster uploads from 3 IP subnets attempting promotional point farming on Coors Light 24pk`,
        `[01.45s] Redis Token Bucket rule updated: Enforced dynamic rate-limit throttle (max 3 uploads/10m) on flagged device fingerprints`,
        `[01.85s] Dispatched alert to PagerDuty & Fetch Fraud Ops Slack channel (#security-ops-alerts)`,
        `[02.10s] Execution complete: Blocked 24,500 illicit promotional points. Status: 200 OK.`,
      ],
    };

    setAgentLogs(traces[selectedAgentTask] || traces["pepsico-brand-analytics"]);

    setTimeout(() => {
      setAgentStatus("completed");
    }, 2200);
  };

  return (
    <section id="simulator" className="py-20 bg-[#070D18] border-b border-slate-800 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Live Systems Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            FAST Real-Time Ingestion, OCR & Agent Execution Engine
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Test the live architecture under simulated high-throughput receipt traffic. Benchmarks
            Server-Sent Events (SSE), SKU brand matching, and background agent orchestration over
            the 27PB lakehouse.
          </p>
        </div>

        {/* Simulator Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab("receipt")}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "receipt"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Receipt className="w-4 h-4" />
              <span>Real-Time Receipt Ingestion & OCR</span>
            </button>
            <button
              onClick={() => setActiveTab("agent")}
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "agent"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>Background Agent & Skills Registry</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Real-Time Receipt Ingestion & OCR */}
        {activeTab === "receipt" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls Panel (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Pipeline Controls</span>
                </h3>

                {/* Preset Selector */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Receipt Ingestion Preset
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(["groceries", "superstore", "quickmart"] as const).map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setSelectedPreset(preset)}
                        className={`py-2 px-2 text-[11px] font-bold rounded-lg border capitalize transition-all ${
                          selectedPreset === preset
                            ? "bg-amber-500/20 border-amber-500 text-amber-400"
                            : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Multiplier Slider */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Brand Reward Multiplier</span>
                    <span className="text-amber-400 font-mono">{brandMultiplier.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="4.0"
                    step="0.5"
                    value={brandMultiplier}
                    onChange={(e) => setBrandMultiplier(parseFloat(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-950 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                    <span>1.0x (Standard)</span>
                    <span>2.0x (Featured)</span>
                    <span>4.0x (Mega Promo)</span>
                  </div>
                </div>

                {/* Concurrency Simulator */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Simulated Ingestion Load</span>
                    <span className="text-orange-400 font-mono">{concurrency} req/sec</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={concurrency}
                    onChange={(e) => setConcurrency(parseInt(e.target.value))}
                    className="w-full accent-orange-500 bg-slate-950 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Run / Pause Stream */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isRunning
                        ? "bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30"
                        : "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-400 hover:to-orange-400 shadow-md shadow-amber-500/20"
                    }`}
                  >
                    {isRunning ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin" />
                        <span>Pause Streaming Feed</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Start Live Receipt Stream</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setProcessedCount(1420);
                      setTotalPointsAwarded(84520);
                      setStreamLogs([]);
                    }}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                    title="Reset Telemetry Counters"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Real-Time Telemetry Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Receipts Processed
                  </span>
                  <span className="text-xl font-black text-white font-mono">
                    {processedCount.toLocaleString()}
                  </span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Points Allocated
                  </span>
                  <span className="text-xl font-black text-amber-400 font-mono">
                    +{totalPointsAwarded.toLocaleString()}
                  </span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    P99 Ingestion Latency
                  </span>
                  <span className="text-xl font-black text-emerald-400 font-mono">
                    {currentLatency}ms
                  </span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Redis Cache Hit Rate
                  </span>
                  <span className="text-xl font-black text-sky-400 font-mono">{cacheHitRate}%</span>
                </div>
              </div>
            </div>

            {/* Right Display: Extracted Receipt Line Items & Live SSE Log (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              {/* Receipt Line Items Preview */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                      <Receipt className="w-4 h-4 text-amber-400" />
                      <span>
                        {presets[selectedPreset].title} ({presets[selectedPreset].store})
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Target Brand Partners:{" "}
                      <span className="text-amber-400 font-semibold">
                        {presets[selectedPreset].partner}
                      </span>
                    </p>
                  </div>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>OCR Confidence: {ocrConfidence}%</span>
                  </span>
                </div>

                {/* Items Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono">
                        <th className="pb-2.5">SKU / Item Name</th>
                        <th className="pb-2.5">Brand Attribution</th>
                        <th className="pb-2.5 text-right">Price</th>
                        <th className="pb-2.5 text-right">Base Pts</th>
                        <th className="pb-2.5 text-right">Earned Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      {receiptItems.map((item, idx) => {
                        const earned = Math.round(
                          item.basePoints * (item.partner ? brandMultiplier : 1.0)
                        );
                        return (
                          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                            <td className="py-2.5 pr-2">
                              <span className="font-semibold text-slate-200 block">
                                {item.name}
                              </span>
                              <span className="text-[10px] text-slate-500">UPC: {item.sku}</span>
                            </td>
                            <td className="py-2.5 pr-2">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold ${
                                  item.partner
                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                    : "bg-slate-800 text-slate-400"
                                }`}
                              >
                                {item.brand} {item.partner && `(${brandMultiplier}x)`}
                              </span>
                            </td>
                            <td className="py-2.5 text-right text-slate-300">
                              ${item.price.toFixed(2)}
                            </td>
                            <td className="py-2.5 text-right text-slate-400">{item.basePoints}</td>
                            <td className="py-2.5 text-right font-bold text-amber-400">
                              +{earned} pts
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Real-Time SSE Streaming Output Terminal */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-bold text-slate-200">
                      Server-Sent Events (SSE) Live Feed
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Socket: Connected (Heartbeat: 15s)</span>
                  </span>
                </div>

                <div className="h-44 overflow-y-auto space-y-1.5 text-[11px] text-slate-300 pr-2">
                  {streamLogs.length === 0 ? (
                    <div className="text-slate-600 text-center py-12 italic">
                      Click "Start Live Receipt Stream" to simulate high-throughput receipt
                      processing.
                    </div>
                  ) : (
                    streamLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className="leading-relaxed hover:text-amber-300 transition-colors"
                      >
                        {log}
                      </div>
                    ))
                  )}
                  <div ref={logEndRef} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Background Agent Runner */}
        {activeTab === "agent" && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Agent Settings (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center space-x-2 text-amber-400 mb-1">
                  <Bot className="w-5 h-5" />
                  <h3 className="font-bold text-sm text-white uppercase tracking-wider">
                    Background Agent Runner
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enterprise multiplayer background-agent execution platform. Orchestrates
                  asynchronous tasks, tools from the internal Skills Registry, and multi-model
                  synthesis with empirical eval gates.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Target Background Task
                  </label>
                  <select
                    value={selectedAgentTask}
                    onChange={(e) => setSelectedAgentTask(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="pepsico-brand-analytics">
                      Task: PepsiCo Brand Lift & Basket Affinity
                    </option>
                    <option value="unilever-cross-category">
                      Task: Unilever Cross-Category Cannibalization Scan
                    </option>
                    <option value="molson-fraud-anomaly">
                      Task: Real-Time Receipt Velocity Anomaly Sweep
                    </option>
                  </select>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Orchestrator:</span>
                    <span className="font-mono text-slate-200">Async Celery + Redis Pub/Sub</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Model Facade:</span>
                    <span className="font-mono text-amber-400">Universal FacadeDriver</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Data Source:</span>
                    <span className="font-mono text-sky-400">27PB S3 Lakehouse (Trino)</span>
                  </div>
                </div>

                <button
                  onClick={handleRunAgent}
                  disabled={agentStatus === "running"}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-orange-400 disabled:opacity-50 shadow-lg shadow-amber-500/20 transition-all"
                >
                  {agentStatus === "running" ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Executing Agent Workflow...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Dispatch Agent Task</span>
                    </>
                  )}
                </button>
              </div>

              {/* Agent Execution Trace (8 cols) */}
              <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                  <span className="font-bold text-slate-200">Agent Execution Telemetry Trace</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      agentStatus === "running"
                        ? "bg-amber-500/20 text-amber-400 animate-pulse"
                        : agentStatus === "completed"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {agentStatus.toUpperCase()}
                  </span>
                </div>

                <div className="h-64 overflow-y-auto space-y-2 text-xs text-slate-300">
                  {agentLogs.length === 0 ? (
                    <div className="text-slate-600 text-center py-20 italic">
                      Click "Dispatch Agent Task" to trigger the multi-step background agent
                      execution flow.
                    </div>
                  ) : (
                    agentLogs.map((log, idx) => (
                      <div key={idx} className="leading-relaxed font-mono">
                        <span className="text-amber-400">{log.slice(0, 9)}</span>
                        <span className="text-slate-300">{log.slice(9)}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Narrative Connector to Next Chapter: HLD */}
        <div className="mt-14 p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-mono font-bold text-amber-500">
                Next Chapter · System Architecture
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Curious how this scales to 4M req/min across a 27PB Lakehouse?
              </h4>
            </div>
          </div>
          <a
            href="#architecture"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all shrink-0"
          >
            <span>Explore 3-Tier HLD</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
