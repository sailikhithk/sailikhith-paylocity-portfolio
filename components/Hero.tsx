"use client";

import React from "react";
import {
  Zap,
  Layers,
  Activity,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Compass,
  LineChart,
} from "lucide-react";

export default function Hero() {
  const metrics = [
    {
      value: "80%",
      label: "Discrepancy Reduction",
      subtext: "Targeted payroll variance elimination",
      icon: TrendingUp,
      accent: "from-orange-500 to-amber-500",
    },
    {
      value: "PR-AUC",
      label: "Offline ML Benchmark",
      subtext: "Calibrated on <1% imbalanced anomalies",
      icon: LineChart,
      accent: "from-amber-500 to-orange-500",
    },
    {
      value: "<50ms",
      label: "P99 Serving SLA",
      subtext: "Real-time inference budget on AWS",
      icon: Zap,
      accent: "from-orange-400 to-yellow-500",
    },
    {
      value: "100%",
      label: "Golden Set Gate",
      subtext: "Automated regression CI/CD validation",
      icon: ShieldCheck,
      accent: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <section className="hero-section relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0F172A]/80 via-[#070D18] to-[#070D18]">
      {/* Background ambient lighting */}
      <div className="hero-glow absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="hero-glow absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Candidate Portrait & Live Status */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative group mb-3.5">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 opacity-75 blur-md group-hover:opacity-100 transition-opacity" />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-slate-900 ring-2 ring-orange-400/60 shadow-2xl overflow-hidden">
                <img
                  src="/profile_photo.jpg"
                  alt="Sai Likhith Kanuparthi - Senior Machine Learning Engineer"
                  className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="absolute bottom-1 right-1 px-2.5 py-0.5 rounded-full bg-emerald-500 border-2 border-[#070D18] flex items-center space-x-1 shadow-lg"
                title="Verified Candidate for Paylocity Senior MLE"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-black text-slate-950 uppercase tracking-tight font-mono">
                  Verified
                </span>
              </div>
            </div>

            {/* Candidate Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner candidate-pill">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-200">
                Sai Likhith Kanuparthi · 7+ Years Experience · Houston, TX / Remote
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
            Architecting Enterprise{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Paylocity Ignite AI
            </span>
            , Streaming ML & Delta Lake
          </h1>

          {/* Subtitle / Positioning Statement */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Architectural blueprint and interactive platform prototype engineered for{" "}
            <strong className="font-bold text-slate-950 dark:text-white">Artem Žukov</strong>{" "}
            (Staff MLE) and{" "}
            <strong className="font-bold text-slate-950 dark:text-white">Muhtasim Billah</strong>{" "}
            (Senior Data Scientist). Unifying real-time payroll anomaly detection, Delta Lake feature
            engineering, and Model Context Protocol (MCP) agentic workflows across{" "}
            <strong className="font-bold text-slate-950 dark:text-white">
              30,000+ client enterprises
            </strong>
            .
          </p>

          {/* Executive TL;DR Summary Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/25 text-xs text-slate-300 mb-8 max-w-2xl mx-auto shadow-sm">
            <span className="font-bold text-orange-400 font-mono uppercase tracking-wider text-[11px]">
              TL;DR:
            </span>
            <span>
              7+ YOE Staff/Senior MLE (Airbnb GenAI Platform, Oracle Fusion Cloud HCM & Payroll, Eli Lilly 21 CFR Part 11, SWA). Driving Paylocity Ignite AI platform reliability, Delta Lake data contracts, and MCP agents.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <a
              href="#simulator"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Activity className="w-4 h-4" />
              <span>Launch Live Ignite Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#architecture"
              className="hero-btn-secondary inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 border border-slate-700 text-slate-200 hover:border-orange-500/50 hover:text-orange-400 transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>Explore 3-Tier System HLD</span>
            </a>

            <a
              href="#values"
              className="hero-btn-secondary inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 border border-slate-700 text-slate-200 hover:border-orange-500/50 hover:text-orange-400 transition-all"
            >
              <Compass className="w-4 h-4 text-orange-400" />
              <span>Paylocity Operating Principles</span>
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 sm:p-5 text-left hover:border-orange-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-orange-400 transition-colors">
                    {metric.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h2 className="text-xs font-bold text-slate-200 tracking-wide mb-1">
                  {metric.label}
                </h2>
                <p className="text-[11px] text-slate-400 leading-tight">{metric.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
