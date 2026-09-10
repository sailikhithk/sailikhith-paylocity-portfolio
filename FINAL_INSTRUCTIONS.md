# PAYLOCITY 60-MINUTE TECHNICAL SCREEN — TACTICAL EXECUTION COMMAND SHEET

**Role:** Senior Machine Learning Engineer (Ignite AI & ML Platform)  
**Company:** Paylocity (NASDAQ: PCTY)  
**Interview Date & Time:** Friday, September 11, 2026 · 9:00 AM – 10:00 AM CDT (America/Chicago)  
**Platform:** Microsoft Teams (Live Working Session · Camera On · Full Screen Share Mandatory)  
**Interviewers:**
- **Artem Žukov** (Staff AI/ML Platform Engineer — Prague)
- **Muhtasim Billah** (Senior Data Scientist — Austin)
**Strict Policy:** No AI assistants permitted during the interview (No Copilot, Cursor inline, etc.).

---

## 1. T-60 to T-0 Pre-Flight Checklist

```
[ ] T-60 Min: REBOOT LAPTOP & CLEAR MEMORY
    Close all IDE AI assistants (disable GitHub Copilot, quit Cursor/Windsurf agents).
    Close messaging apps (Slack, Discord, WhatsApp, Telegram, iMessage).
    Close unnecessary browser windows. Keep only Microsoft Teams, your clean Python IDE/terminal,
    and your offline prep notes.

[ ] T-45 Min: MICROSOFT TEAMS CHECK
    Open Teams Desktop App -> Settings -> Devices.
    Click "Make a test call" to verify microphone, speakers, and camera.
    Practice "Share Entire Screen" (Do NOT share a single window; full screen is explicitly required).

[ ] T-30 Min: CODING ENVIRONMENT CHECK
    Open a clean VS Code window or terminal with Python 3.10+ ready.
    Test standard library imports:
    python3 -c "import collections, heapq, typing; print('OK')"

[ ] T-15 Min: ENVIRONMENT & DESK READINESS
    Position camera at eye level with clean background and good lighting.
    Have a notepad and pen ready for scratch math / dry-running intervals.
    Large glass of water on your desk.

[ ] T-05 Min: JOIN THE TEAMS ROOM
    Join 3-5 minutes early. Mute mic initially until interviewers enter.
    Greet them with energy and warmth.
```

---

## 2. 60-Minute Master Clock Management

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PAYLOCITY 60-MINUTE MASTER TIMELINE                   │
├─────────────────┬─────────────────┬───────────────────┬─────────────────────┤
│ 00:00 - 05:00   │ 05:00 - 25:00   │ 25:00 - 55:00     │ 55:00 - 60:00       │
│ Warm-up & Intro │ PART 1: Coding  │ PART 2: System    │ PART 3: Reverse Q&A │
│ Elevator Pitch  │ & Code Review   │ Design & MLOps    │ Closing Statement   │
├─────────────────┼─────────────────┼───────────────────┼─────────────────────┤
│ • 30s Hook      │ • 15m Algo Code │ • Emy's 3 Pillars │ • Ask Artem Q1      │
│ • Oracle Fusion │ • 10m Snippet   │ • Delta Lake / Z  │ • Ask Muhtasim Q2   │
│   HCM + Airbnb  │   Review        │ • Presidio / HITL │ • Ask Team Q3       │
└─────────────────┴─────────────────┴───────────────────┴─────────────────────┘
```

---

## 3. The 30-Second Opening Hook (Word-for-Word Script)

When they ask: *"Sai Likhith, can you tell us a bit about yourself and your background?"*

> *"Hi Artem and Muhtasim, really excited to connect today.*
>
> *Earlier in my career at Oracle, I implemented **Oracle Fusion Cloud HCM**—specifically working across **Global Payroll, Time & Labor, HCM Data Loader (HDL), and Fast Formulas**. I learned how enterprise workforce systems operate from the inside out: deduction hierarchies, FLSA overtime rules, and the fact that payroll is a deterministic gross-to-net invariant that can never fail.*
>
> *Over the past few years at Airbnb and Eli Lilly, I built and scaled **GenAI platform infrastructure and high-throughput distributed systems**—scaling tabular batch ingestion 16x, engineering sub-10ms semantic caching, and authoring automated evaluation harnesses across foundation models.*
>
> *I see Paylocity's Ignite AI as the ultimate intersection of those two worlds: building high-agency AI capabilities that make HCM workflows intelligent, while having the architectural rigor to keep core financial ledgers completely safe and compliant.*
>
> *I know we have a collaborative working session planned today, so I’m really looking forward to diving in with you both."*

---

## 4. Quick-Reference Jargon & Keyword Card

Keep this mental model top-of-mind:

* **Security & Multi-Tenancy:**
  * **Principle of Least Privilege (PoLP):** Agent tools have read-only policy access; zero unapproved general ledger write access.
  * **Zero Data Retention (ZDR):** Foundation models invoked via AWS Bedrock/Azure OpenAI under signed BAAs with ZDR.
  * **Tenant Bleed Prevention:** Enforce composite partitioning `(tenant_id, document_id)` in vector stores and caches.
  * **WORM Storage:** Immutable S3 Object Lock for SOC 2 Type II cryptographic audit logs.
* **Lakehouse & Data Platform (Artem):**
  * **Delta Lake Partitioning:** Coarse monthly temporal partitions + **Z-Ordering** on `(tenant_id, employee_id)` to prevent small-file partition explosion across 38,000 tenants.
  * **LangGraph HITL:** `PostgresSaver` checkpointers ensure **worker ephemerality**; webhook resumes via `Command(resume=payload)`.
  * **Data Contracts:** Declarative schema validation on Delta Lake (`mergeSchema=false`) to eliminate silent contract drift.
* **AI & Data Science (Muhtasim):**
  * **Presidio PII Redaction:** 3-tier pipeline (<1ms regex + 6-8ms ONNX NER on Triton + Redis token cache) $\rightarrow$ empirical P99 < 12ms.
  * **Two-Stage Candidate Matching:** Dense embeddings + Sparse BM25 combined via **Reciprocal Rank Fusion (RRF)**, followed by cross-encoder reranking.
  * **Evaluation Metrics:** **PR-AUC** over ROC-AUC for imbalanced payroll anomalies; **NDCG@10** for resume ranking; **Cohen's Kappa ($\ge 0.85$)** for LLM-as-a-judge.
  * **Active Learning:** Uncertainty sampling on inferences ($0.45 < p < 0.55$) routed to Labelbox.
* **HCM Domain (Oracle Fusion):**
  * **Element Entries:** Earnings, Pre-Tax Deductions, Statutory Taxes, Garnishments.
  * **Time & Labor $\rightarrow$ Payroll:** Shift differentials, overtime rules, punch validations.
  * **Direct Deposit Fraud Trigger:** Banking routing changes within 72 hours of payroll cutoff trigger a mandatory LangGraph HITL interrupt.

---

## 5. Part 1 Live Coding Battle Rules (25 Min)

1. **Do NOT type immediately.** Take 60 seconds to clarify constraints:
   * *"Are inputs guaranteed non-empty?"*
   * *"Can shifts span midnight?"*
   * *"Can we have negative numbers or duplicates?"*
2. **State two approaches:**
   * *"The brute force approach is $O(N^2)$ by comparing every pair. We can optimize this to $O(N \log N)$ by sorting by start time, and then doing an $O(N)$ linear merge."*
3. **Write clean typed Python:**
   * Use type hints (`def merge_shifts(intervals: list[list[int]]) -> list[list[int]]:`).
   * Use clean names (`merged_shifts`, `current_start`, `current_end`).
4. **Dry-run line by line:**
   * Walk through a test case (`[[1, 3], [2, 6], [8, 10]]`) in comments before saying you are done.
5. **5-Pillar Code Review Callouts:**
   * Call out off-by-one errors, mutable default args (`def fn(x, data=[])`), quadratic scans in loops (`x in list` $\rightarrow$ use `set`), and missing error handling.

---

## 6. Emergency Fail-Safes & Traps

| Scenario | What to Do / What to Say |
| :--- | :--- |
| **You get stuck on an algorithmic edge case:** | Do NOT go silent. Think out loud: *"Let me trace this edge case where the interval ends at the exact same minute. If `current_start <= last_end`, we merge by taking `max(last_end, current_end)`. That cleanly covers identical endpoints."* |
| **They ask a technical question you don't know:** | Do NOT bluff or guess. Frame it via first principles: *"I haven't deployed that specific library in production, but from a first-principles distributed systems perspective, the fundamental constraint is X. Here is how I would design the boundary and validate it..."* |
| **They challenge your architectural choice:** | Agree with their trade-off perspective, then defend your decision: *"That’s a great point, Artem. If our workload were purely batch, that approach would be optimal. The reason I chose Z-ordering here is to bound interactive P99 query latency for our largest enterprise tenants without triggering S3 metadata throttling."* |
| **They ask: "Why Paylocity?":** | *"Paylocity combines two things I care about deeply: mission-critical enterprise systems where precision matters, and the **Ignite AI initiative** to transition HCM from passive software into proactive agentic intelligence. Having implemented Oracle Fusion HCM and built GenAI platforms at Airbnb, I know I can make an immediate, outsized impact here."* |

---

## 7. High-Agency Reverse Questions (Ask in Part 3)

1. **For Artem Žukov:**
   > *"Artem, as Paylocity scales agentic workflows on LangGraph, how do you handle state machine schema evolution when an in-flight workflow checkpointed in Postgres spans across a deployment that modifies the graph topology or node contracts?"*
2. **For Muhtasim Billah:**
   > *"Muhtasim, in your resume parsing and candidate matching models, what balance have you found between dense vector semantic retrieval versus sparse BM25 token matching for industry-specific certifications (like SHRM-CP or CPA) where semantic embeddings might blur precise keyword requirements?"*
3. **For Both:**
   > *"What does the collaboration cadence look like between the platform engineering team and the applied data science pods when bringing a new experimental agent capability into production?"*

---

## 8. Closing Statement (How to End Strong at 59:00)

When wrapping up:

> *"Artem, Muhtasim—thank you both for the working session today. I really enjoyed digging into Delta Lake layouts, LangGraph state machines, and resume matching with you. Everything we discussed reinforces how exciting the Ignite AI roadmap is, and how directly my background in Oracle Fusion HCM and Airbnb's AI platform maps to what you're building. Looking forward to the next steps with Emy and the team!"*
