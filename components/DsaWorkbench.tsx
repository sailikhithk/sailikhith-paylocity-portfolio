"use client";

import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  Zap,
  Layers,
  Database,
  Search,
} from "lucide-react";

export default function DsaWorkbench() {
  const [activeTab, setActiveTab] = useState<"sliding" | "intervals" | "sql" | "lru">("sliding");

  // State for Sliding Window interactive test
  const [windowK, setWindowK] = useState<number>(3);
  const samplePayrollHourly = [40, 42, 55, 38, 85, 45, 95, 40, 50];

  // Monotonic Deque implementation
  const slidingWindowResult = React.useMemo(() => {
    const nums = samplePayrollHourly;
    const k = windowK;
    const deque: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      while (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift();
      }
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
      deque.push(i);
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
    return result;
  }, [windowK]);

  return (
    <section id="dsa" className="py-20 bg-[#0A1128]/40 border-b border-slate-800 scroll-mt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Coding & Algorithm Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Paylocity High-Scale Coding & SQL Workbench
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Tested O(N) time complexities and SQL analytical window queries tailored for live coding
            interviews.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center p-1 rounded-xl bg-slate-900 border border-slate-800 gap-1">
            <button
              onClick={() => setActiveTab("sliding")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === "sliding"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>1. Sliding Window Max (Monotonic Deque)</span>
            </button>
            <button
              onClick={() => setActiveTab("intervals")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === "intervals"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>2. Shift Interval Consolidation</span>
            </button>
            <button
              onClick={() => setActiveTab("sql")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === "sql"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Database className="w-4 h-4" />
              <span>3. 7-Day Rolling Window SQL</span>
            </button>
          </div>
        </div>

        {/* Problem 1: Sliding Window Maximum */}
        {activeTab === "sliding" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Sliding Window Spike Detection using Monotonic Deque</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    O(N) Time · O(K) Space
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Finds maximum rolling hourly anomalies across consecutive pay cycles without O(N*K) brute force.
                </p>
              </div>
            </div>

            {/* Interactive Runner */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-slate-300 font-medium">Window Size (k):</span>
                  <input
                    type="range"
                    min="2"
                    max="5"
                    value={windowK}
                    onChange={(e) => setWindowK(Number(e.target.value))}
                    className="w-32 accent-orange-500"
                  />
                  <span className="font-mono text-orange-400 text-xs font-bold">{windowK}</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Input: [{samplePayrollHourly.join(", ")}]
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Rolling Maximums:</span>
                <span className="text-sm font-mono text-emerald-400 font-bold">
                  [{slidingWindowResult.join(", ")}]
                </span>
              </div>
            </div>

            {/* Python Code Block */}
            <pre className="bg-[#030712] border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-200 overflow-x-auto">
{`from collections import deque

def max_rolling_payroll_spikes(hours: list[int], k: int) -> list[int]:
    """
    O(N) time complexity using a monotonic decreasing deque.
    Each element index is pushed and popped at most once.
    """
    q = deque()
    result = []
    
    for i, val in enumerate(hours):
        # 1. Evict elements outside current window [i - k + 1, i]
        while q and q[0] < i - k + 1:
            q.popleft()
            
        # 2. Maintain monotonic decreasing order: smaller elements can never be the max
        while q and hours[q[-1]] < val:
            q.pop()
            
        q.append(i)
        
        # 3. Record window maximum once first window is saturated
        if i >= k - 1:
            result.append(hours[q[0]])
            
    return result`}
            </pre>
          </div>
        )}

        {/* Problem 2: Shift Interval Merging */}
        {activeTab === "intervals" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Employee Shift Interval Consolidation</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    O(N log N) Time · O(N) Space
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Merges split shifts and overlapping punch clock intervals to prevent double-billing.
                </p>
              </div>
            </div>

            <pre className="bg-[#030712] border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-200 overflow-x-auto">
{`def merge_shift_intervals(shifts: list[list[int]]) -> list[list[int]]:
    if not shifts:
        return []
        
    # Sort primarily by shift start timestamp
    shifts.sort(key=lambda x: x[0])
    merged = [shifts[0]]
    
    for current in shifts[1:]:
        last = merged[-1]
        if current[0] <= last[1]: # Overlap detected
            last[1] = max(last[1], current[1])
        else:
            merged.append(current)
            
    return merged`}
            </pre>
          </div>
        )}

        {/* Problem 3: 7-Day Rolling Window SQL */}
        {activeTab === "sql" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Production SQL: 7-Day Rolling Moving Average & Z-Score</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    Delta Lake SQL / Trino
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Partitioned by `tenant_id` and `department_id` to flag statistical compensation anomalies.
                </p>
              </div>
            </div>

            <pre className="bg-[#030712] border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-200 overflow-x-auto">
{`WITH daily_department_metrics AS (
    SELECT
        tenant_id,
        department_id,
        payroll_date,
        total_gross_pay,
        AVG(total_gross_pay) OVER (
            PARTITION BY tenant_id, department_id
            ORDER BY payroll_date
            ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
        ) AS rolling_7d_avg,
        STDDEV(total_gross_pay) OVER (
            PARTITION BY tenant_id, department_id
            ORDER BY payroll_date
            ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
        ) AS rolling_7d_stddev
    FROM delta.paylocity_gold.daily_payroll_summary
)
SELECT
    tenant_id,
    department_id,
    payroll_date,
    total_gross_pay,
    rolling_7d_avg,
    CASE 
        WHEN rolling_7d_stddev = 0 THEN 0.0
        ELSE (total_gross_pay - rolling_7d_avg) / rolling_7d_stddev
    END AS z_score_anomaly
FROM daily_department_metrics
WHERE ABS(
    CASE 
        WHEN rolling_7d_stddev = 0 THEN 0.0
        ELSE (total_gross_pay - rolling_7d_avg) / rolling_7d_stddev
    END
) >= 3.0; -- Flags 3-sigma outliers`}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
