"use client";

import React from "react";
import {
  Award,
  BookOpen,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Airbnb",
      role: "Senior Software Engineer, ML Infrastructure & AI Engineering (GenAI Platform)",
      period: "Sep 2024 – Present",
      location: "San Francisco, CA (Remote)",
      badge: "Current Role",
      highlights: [
        "Architected **BPI Virtual Analyst** (greenfield-to-production) for **128+ daily active enterprise analysts**, scaling tabular batch ingestion **16x (600 to 10,000 rows/run)** with bounded memory streaming.",
        "Built **FacadeDriver** multi-model Python runtime standardizing 30+ foundation models (Bedrock Claude, Azure OpenAI, Vertex AI) with OpenTelemetry cost attribution and Redis semantic caching, saving **$180,000/year**.",
        "Engineered automated **23-version evaluation harness** (1,690 ground-truth test cases) ensuring deterministic regression testing across all model upgrades.",
        "Operate on-call rotations for foundational **Redpen Airflow & BigAir data pipelines** handling high-throughput batch uploads across 19 production configs in 11+ languages.",
      ],
    },
    {
      company: "Eli Lilly and Company",
      role: "Senior Software Engineer — Dose Management Platform (FDA 21 CFR Part 11)",
      period: "Feb 2024 – Aug 2024",
      location: "Philadelphia, PA / Indianapolis, IN (Remote)",
      badge: "FDA Regulated",
      highlights: [
        "Engineered mission-critical radiopharmaceutical distribution backend maintaining **99.9% uptime across 6 months** under strict federal compliance.",
        "Built dynamic gRPC `GrpcMetadataProvider` for Kubernetes ServiceAccount token rotation on disk, eliminating worker starvation and manual pod restarts.",
        "Created self-healing `/fix-temporal` state re-arming engine to resync Temporal workflow histories with PostgreSQL after disaster recovery restores.",
        "Engineered atomic gap-free ID generation (`CMCDOS-2031`) preventing PostgreSQL sequence skips and FDA compliance deletion flags.",
      ],
    },
    {
      company: "Southwest Airlines",
      role: "Senior Software Engineer — Backend & Data Platform",
      period: "Jan 2023 – Jan 2024",
      location: "Dallas, TX",
      badge: "Distributed Systems",
      highlights: [
        "Scaled distributed Kafka event streaming pipelines processing **4,000,000 requests/minute peak** with zero message drop across high-volume flight operations.",
        "Built resilient consumer group partition rebalancing logic and dead-letter queue (DLQ) retry topologies.",
      ],
    },
    {
      company: "Shell PLC",
      role: "Senior Software Engineer — Backend & Data Science",
      period: "Jun 2021 – Dec 2022",
      location: "Houston, TX",
      badge: "ML Systems",
      highlights: [
        "Architected deep learning autoencoder anomaly detection pipelines for real-time sensor telemetry across global asset networks.",
        "Trained multivariate time-series forecasting models using PyTorch, bounding P99 inference latency under 45ms.",
      ],
    },
    {
      company: "Oracle",
      role: "Software Engineer — ERP Analytics & Data Engineering (Fusion HCM)",
      period: "Aug 2017 – Jul 2019",
      location: "Bengaluru, India",
      badge: "Fusion HCM & Payroll",
      highlights: [
        "Implemented **Oracle Fusion Cloud HCM** modules (Global Payroll, Time & Labor, HCM Data Loader) across 200+ enterprise tenants.",
        "Built automated ETL pipelines in Java and PL/SQL for high-volume **Worker, Assignment, and Element Entry** business objects.",
        "Authored **Fast Formulas** for FLSA overtime thresholds and gross-to-net payroll reconciliations, reducing month-end closing latency by **35%**.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#070D18] border-b border-slate-800 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Production Arsenal & Career Provenance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            7+ years of battle-tested experience building high-throughput distributed backends, AI
            platforms, and compliance-grade architectures.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 w-full mb-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-orange-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      {exp.badge}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300 mt-0.5">{exp.role}</p>
                </div>
                <div className="text-left sm:text-right text-xs text-slate-400 font-mono">
                  <div>{exp.period}</div>
                  <div className="text-slate-500 text-[11px]">{exp.location}</div>
                </div>
              </div>

              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2.5 text-xs text-slate-300">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start space-x-2.5">
                    <span className="text-orange-400 font-bold mt-0.5">✓</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: h.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-slate-900 dark:text-white font-semibold">$1</strong>'
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Intellectual Property Card */}
        <div className="w-full bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border border-orange-500/30 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider font-mono">
                Intellectual Property & Patents
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                Modular Deep Learning Architecture for Cross-Domain Transfer and Incremental
                Learning
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                App. No.:{" "}
                <span className="font-mono text-slate-200">
                  202541026299 (Indian Patent Office)
                </span>{" "}
                · Continuous parameter isolation & zero catastrophic forgetting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
