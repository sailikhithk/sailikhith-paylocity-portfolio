"use client";

import React, { useState, useMemo } from "react";
import {
  Activity,
  ShieldCheck,
  Zap,
  AlertTriangle,
  UserCheck,
  CheckCircle2,
  FileText,
  Sliders,
  RotateCcw,
} from "lucide-react";

export default function PaylocityPlatformSimulator() {
  // State for Module 1: Payroll Anomaly Detection
  const [hours, setHours] = useState<number>(42);
  const [pay, setPay] = useState<number>(3200);
  const [variance, setVariance] = useState<number>(1.2);
  const [depositChanged, setDepositChanged] = useState<boolean>(false);

  // State for Module 2: Resume Extraction & Matcher (Muhtasim's Domain)
  const [selectedCandidate, setSelectedCandidate] = useState<number>(0);
  const [piiMasked, setPiiMasked] = useState<boolean>(true);

  // Multivariate Anomaly Calculation
  const anomalyResult = useMemo(() => {
    let score = 0.05;
    const reasons: string[] = [];

    if (hours > 60) {
      score += (hours - 60) * 0.015;
      reasons.push(`Overtime hours (${hours}h) exceed 95th percentile department threshold.`);
    }
    if (hours > 90) {
      score += 0.35;
      reasons.push(`Extreme hours (${hours}h) indicates probable clerical keystroke error.`);
    }

    if (pay > 8000) {
      score += (pay - 8000) / 30000;
      reasons.push(`Gross pay ($${pay.toLocaleString()}) deviates significantly from historical baseline.`);
    }

    score *= variance / 1.2;

    if (depositChanged) {
      score += 0.28;
      reasons.push(`High fraud risk: Direct deposit account updated within 48h of payroll cutoff.`);
    }

    const clamped = Math.min(Math.max(score, 0.02), 0.99);

    let status: "normal" | "warning" | "critical" = "normal";
    if (clamped >= 0.65) status = "critical";
    else if (clamped >= 0.4) status = "warning";

    return {
      score: clamped,
      status,
      reasons:
        reasons.length > 0
          ? reasons.join(" ")
          : "All parameters within normal statistical distribution. Rolling variance ±1.2x of department baseline.",
    };
  }, [hours, pay, variance, depositChanged]);

  const candidateData = [
    {
      name: "Sai Likhith Kanuparthi",
      email: "sailikhithcse@gmail.com",
      phone: "+1 (860) 620-4718",
      ssn: "987-65-4321",
      experience_years: 7.2,
      primary_skills: [
        "Python",
        "Databricks",
        "Delta Lake",
        "LangGraph",
        "Oracle Fusion HCM",
        "Global Payroll",
        "Spark",
        "AWS",
        "Kafka",
        "Pydantic",
      ],
      certifications: ["AWS SAP-C02", "GCP Data Engineer", "AWS MLS-C01"],
      semantic_score: 0.96,
      bm25_score: 0.94,
      rrf_score: "0.95 (Top Match)",
    },
    {
      name: "Alex Morgan",
      email: "alex.m.data@example.com",
      phone: "+1 (312) 555-0199",
      ssn: "123-45-6789",
      experience_years: 2.8,
      primary_skills: ["SQL", "Tableau", "Excel", "Basic Python", "PowerBI"],
      certifications: ["Tableau Desktop Specialist"],
      semantic_score: 0.61,
      bm25_score: 0.45,
      rrf_score: "0.52 (Low Match)",
    },
    {
      name: "Jordan Reed",
      email: "jordan.infra.cloud@example.com",
      phone: "+1 (512) 555-0144",
      ssn: "456-78-1234",
      experience_years: 9.1,
      primary_skills: ["Go", "Kubernetes", "Terraform", "Docker", "Prometheus", "Linux"],
      certifications: ["CKA", "AWS DevOps Professional"],
      semantic_score: 0.74,
      bm25_score: 0.68,
      rrf_score: "0.71 (Partial Match)",
    },
  ];

  const cand = candidateData[selectedCandidate];

  return (
    <section id="simulator" className="py-20 bg-[#070D18] border-b border-slate-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Paylocity Ignite AI Platform Live Simulator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Test real-time payroll anomaly inference (grounded in Oracle Fusion Time &amp; Labor to Payroll
            physics) and resume entity extraction with deterministic PII guardrails.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Module 1: Payroll Anomaly Engine */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                    Module 1
                  </span>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                    <Sliders className="w-4 h-4 text-orange-400" />
                    Real-Time Payroll Anomaly Detector
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setHours(42);
                    setPay(3200);
                    setVariance(1.2);
                    setDepositChanged(false);
                  }}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
                  title="Reset to Baseline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Sliders */}
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-300">Weekly Hours Worked</span>
                    <span className="font-mono text-orange-400 font-bold">{hours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>40h Standard</span>
                    <span>60h Overtime</span>
                    <span>100h+ Outlier</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-300">Gross Pay for Current Pay Period</span>
                    <span className="font-mono text-orange-400 font-bold">${pay.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="25000"
                    step="250"
                    value={pay}
                    onChange={(e) => setPay(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>$500</span>
                    <span>$3,500 Mean</span>
                    <span>$25,000 Spike</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-300">Historical Peer Group Variance</span>
                    <span className="font-mono text-orange-400 font-bold">{variance.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.1"
                    value={variance}
                    onChange={(e) => setVariance(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>0.5x Low</span>
                    <span>1.2x Normal</span>
                    <span>5.0x Extreme</span>
                  </div>
                </div>

                <label className="flex items-center space-x-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={depositChanged}
                    onChange={(e) => setDepositChanged(e.target.checked)}
                    className="w-4 h-4 rounded text-orange-500 bg-slate-800 border-slate-700 focus:ring-orange-500"
                  />
                  <span className="text-xs text-slate-300 font-medium">
                    Direct Deposit Account Changed within 48 Hours (Risk Multiplier)
                  </span>
                </label>
              </div>
            </div>

            {/* Inference Result Output Box */}
            <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                    Decision Status
                  </span>
                  <div
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold mt-1 ${
                      anomalyResult.status === "critical"
                        ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                        : anomalyResult.status === "warning"
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        anomalyResult.status === "critical"
                          ? "bg-rose-500 animate-ping"
                          : anomalyResult.status === "warning"
                            ? "bg-amber-400"
                            : "bg-emerald-400"
                      }`}
                    />
                    <span>
                      {anomalyResult.status === "critical"
                        ? "CRITICAL ANOMALY (BLOCKED)"
                        : anomalyResult.status === "warning"
                          ? "MODERATE VARIANCE (REVIEW)"
                          : "CLEAN AUDIT (APPROVED)"}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                    Anomaly Score (p)
                  </span>
                  <span
                    className={`text-2xl font-black font-mono ${
                      anomalyResult.status === "critical"
                        ? "text-rose-400"
                        : anomalyResult.status === "warning"
                          ? "text-amber-400"
                          : "text-emerald-400"
                    }`}
                  >
                    {anomalyResult.score.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* SHAP Explanation */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                <span className="text-[10px] font-mono uppercase text-orange-400 font-bold block mb-1">
                  Explainable AI (SHAP Drivers):
                </span>
                <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                  {anomalyResult.reasons}
                </p>
              </div>
            </div>
          </div>

          {/* Module 2: Resume Extraction & Hybrid Matcher */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold">
                    Module 2 (Muhtasim&apos;s Focus)
                  </span>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                    <FileText className="w-4 h-4 text-teal-400" />
                    Resume Entity Extraction & RRF Matcher
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400">EEOC & 21 CFR Compliant</span>
              </div>

              {/* Candidate Selector */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {candidateData.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCandidate(idx)}
                    className={`p-2.5 rounded-xl border text-left transition ${
                      selectedCandidate === idx
                        ? "bg-teal-500/15 border-teal-500 text-teal-300 shadow-sm"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold text-xs truncate text-white">{c.name.split(" ")[0]}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{c.experience_years} YOE</div>
                  </button>
                ))}
              </div>

              {/* PII Toggle */}
              <div className="mb-4">
                <label className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={piiMasked}
                    onChange={(e) => setPiiMasked(e.target.checked)}
                    className="w-4 h-4 rounded text-teal-500 bg-slate-800 border-slate-700 focus:ring-teal-500"
                  />
                  <span className="text-xs text-slate-300 font-medium">
                    Apply Presidio PII Masking (Mask SSN, Phone, Email before LLM)
                  </span>
                </label>
              </div>

              {/* Extracted JSON Card */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] leading-relaxed max-h-48 overflow-y-auto">
                <div className="flex justify-between items-center text-[10px] text-slate-500 border-b border-slate-800 pb-1 mb-2">
                  <span>PYDANTIC SCHEMA VALIDATION</span>
                  <span className={piiMasked ? "text-teal-400 font-bold" : "text-rose-400 font-bold"}>
                    {piiMasked ? "PII REDACTED" : "UNMASKED RAW"}
                  </span>
                </div>
                <pre className="text-slate-300 p-0 bg-transparent border-0">
{JSON.stringify(
  {
    name: cand.name,
    email: piiMasked ? "[REDACTED_EMAIL]" : cand.email,
    phone: piiMasked ? "[REDACTED_PHONE]" : cand.phone,
    ssn: piiMasked ? "[REDACTED_SSN]" : cand.ssn,
    experience_yoe: cand.experience_years,
    skills: cand.primary_skills,
    certifications: cand.certifications,
  },
  null,
  2
)}
                </pre>
              </div>
            </div>

            {/* Matcher Scores */}
            <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Semantic Cosine</span>
                <span className="text-lg font-black font-mono text-teal-400 mt-1 block">
                  {cand.semantic_score.toFixed(2)}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">BM25 Sparse</span>
                <span className="text-lg font-black font-mono text-orange-400 mt-1 block">
                  {cand.bm25_score.toFixed(2)}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">RRF Rank Fusion</span>
                <span className="text-xs font-black font-mono text-emerald-400 mt-1.5 block">
                  {cand.rrf_score}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
