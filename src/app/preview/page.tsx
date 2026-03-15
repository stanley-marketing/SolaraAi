"use client";

import { useState, useRef } from "react";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Sparkles,
  Mail,
  ChevronDown,
  Check,
} from "lucide-react";
import Link from "next/link";

/* ── Shell ─────────────────────────────────────────────────────────────────── */

function OptionShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 72 }}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#9ca3af",
          marginBottom: 10,
        }}
      >
        {label}
      </p>
      <div
        style={{
          border: "1px solid #eaecf0",
          borderRadius: 16,
          overflow: "hidden",
          background: "#fff",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Shared Data ────────────────────────────────────────────────────────────── */

const AGENTS = [
  {
    id: 0,
    name: "AI Search Agent",
    article: "an",
    tagline: "Gets you cited in ChatGPT, Perplexity, and AI answers.",
    suffix: "that gets you cited in ChatGPT, Perplexity, and AI Overviews.",
    desc: "Positions your brand for the new era of search — where LLM citations drive discovery and entity authority determines whether AI recommends you or your competitor.",
    caps: [
      "Optimizes content for LLM-friendly structure",
      "Monitors your AI citation appearances daily",
      "Builds entity authority signals continuously",
    ],
    stat: "3.1×",
    statLabel: "AI citation rate",
    Icon: Sparkles,
    accent: "#7c3aed",
    bgTint: "#faf5ff",
    textOnTint: "#5b21b6",
  },
  {
    id: 1,
    name: "SEO Agent",
    article: "an",
    tagline: "Monitors and improves your rankings around the clock.",
    suffix: "that monitors and improves your search rankings 24/7.",
    desc: "Tracks every keyword, identifies decay before it touches your traffic, and implements technical fixes directly — no tickets, no briefing cycles, no delays.",
    caps: [
      "Tracks keyword positions daily across all markets",
      "Generates optimized content briefs on demand",
      "Fixes technical SEO issues automatically",
    ],
    stat: "+47%",
    statLabel: "organic traffic",
    Icon: TrendingUp,
    accent: "#059669",
    bgTint: "#f0fdf4",
    textOnTint: "#065f46",
  },
  {
    id: 2,
    name: "Website Agent",
    article: "a",
    tagline: "Rebuilds and optimizes your web presence continuously.",
    suffix: "that rebuilds your web presence on autopilot.",
    desc: "Audits, rewrites, and optimizes every page — copy, structure, and performance — so your site is always operating at its peak without any manual effort.",
    caps: [
      "Generates conversion-optimized landing pages",
      "A/B tests layouts and copy variants autonomously",
      "Monitors Core Web Vitals and resolves bottlenecks",
    ],
    stat: "2.3×",
    statLabel: "conversion lift",
    Icon: Globe,
    accent: "#2563eb",
    bgTint: "#eff6ff",
    textOnTint: "#1e40af",
  },
  {
    id: 3,
    name: "Email Agent",
    article: "an",
    tagline: "Writes and sends campaigns on full autopilot.",
    suffix: "that writes and sends your email campaigns on autopilot.",
    desc: "Complete email execution — from writing personalized sequences to optimizing deliverability — without a brief, a review cycle, or a retained agency.",
    caps: [
      "Generates personalized email sequences per segment",
      "Optimizes send times based on recipient patterns",
      "A/B tests subject lines and body content at scale",
    ],
    stat: "38%",
    statLabel: "open rate avg.",
    Icon: Mail,
    accent: "#b45309",
    bgTint: "#fffbeb",
    textOnTint: "#92400e",
  },
] as const;

/* ══════════════════════════════════════════════════════════════════════════════
   OPTION 1 — TAB / PILL SWITCHER
   Inspired by Vercel's capabilities section: pill row + large panel per agent
══════════════════════════════════════════════════════════════════════════════ */

function TabPanelVisual({ agentId }: { agentId: number }) {
  const agent = AGENTS[agentId];
  const IconComp = agent.Icon;

  if (agentId === 0) {
    /* AI Search Agent — network diagram */
    const cx = 120, cy = 90;
    const platforms = [
      { label: "ChatGPT", angle: -70, dist: 68 },
      { label: "Perplexity", angle: -10, dist: 72 },
      { label: "Claude", angle: 55, dist: 70 },
      { label: "Gemini", angle: 170, dist: 70 },
      { label: "AI Overviews", angle: 235, dist: 66 },
    ];
    const nodes = platforms.map((p, i) => {
      const rad = (p.angle * Math.PI) / 180;
      return { ...p, x: cx + Math.cos(rad) * p.dist, y: cy + Math.sin(rad) * p.dist, i };
    });
    return (
      <div style={{ width: "100%", height: "100%", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <svg viewBox="0 0 240 180" style={{ width: "100%", maxWidth: 280, overflow: "visible" }}>
          <defs>
            <radialGradient id="aiCenterGlow">
              <stop offset="0%" stopColor={agent.accent} stopOpacity="0.35" />
              <stop offset="100%" stopColor={agent.accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={cx} cy={cy} r="52" fill="url(#aiCenterGlow)" />
          {nodes.map((n) => (
            <line key={`line-${n.i}`} x1={cx} y1={cy} x2={n.x} y2={n.y}
              stroke={agent.accent} strokeWidth="1" strokeOpacity="0.25"
              strokeDasharray="4 3"
              style={{ animation: `o1visConnDraw 1.2s ease ${0.3 + n.i * 0.2}s both` }}
            />
          ))}
          <circle cx={cx} cy={cy} r="18" fill="none" stroke={agent.accent} strokeWidth="1" strokeOpacity="0.2"
            style={{ animation: "o1visRingPulse 3s ease-out 0.5s infinite" }} />
          <circle cx={cx} cy={cy} r="12" fill={agent.accent}
            style={{ filter: `drop-shadow(0 0 10px ${agent.accent}88)`, animation: "o1visGlowPop 0.6s ease 0.15s both", opacity: 0 }} />
          <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="central"
            fill="#fff" fontSize="5.5" fontWeight="700" letterSpacing="0.06em">YOU</text>
          {nodes.map((n) => (
            <g key={`node-${n.i}`} style={{ animation: `o1visNodePop 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.5 + n.i * 0.18}s both`, opacity: 0 }}>
              <circle cx={n.x} cy={n.y} r="10" fill={`${agent.accent}20`} stroke={agent.accent} strokeWidth="1.5" />
              <circle cx={n.x} cy={n.y} r="4.5" fill={agent.accent} />
              <text x={n.x} y={n.y + 18} textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="600">{n.label}</text>
            </g>
          ))}
        </svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.03em" }}>{agent.stat}</div>
          <div style={{ fontSize: "0.58rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 4 }}>{agent.statLabel}</div>
        </div>
      </div>
    );
  }
  if (agentId === 1) {
    const linePts = [62, 52, 57, 44, 38, 30, 24, 18, 12, 5];
    const LW = 200, LH = 66;
    const polyPts = linePts.map((y, i) => `${(i / (linePts.length - 1)) * LW},${y}`).join(" ");
    return (
      <div style={{ width: "100%", height: "100%", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18 }}>
        <svg viewBox={`-8 -8 ${LW + 16} ${LH + 16}`} style={{ width: "80%", maxWidth: 220, overflow: "visible" }}>
          <polyline
            points={polyPts}
            fill="none"
            stroke={agent.accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="380"
            strokeDashoffset="380"
            style={{ animation: "o1visLineDraw 1.6s cubic-bezier(0.25,1,0.5,1) 0.1s forwards" }}
          />
          <circle
            cx={LW} cy={5} r="5"
            fill={agent.accent}
            style={{ filter: `drop-shadow(0 0 7px ${agent.accent})`, animation: "o1visGlowPop 0.5s ease 1.6s both", opacity: 0 }}
          />
        </svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.03em" }}>{agent.stat}</div>
          <div style={{ fontSize: "0.58rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 4 }}>{agent.statLabel}</div>
        </div>
      </div>
    );
  }
  if (agentId === 2) {
    /* Website Agent — bar chart */
    const bars = [
      { h: 56, delay: "0s" },
      { h: 74, delay: "0.12s" },
      { h: 62, delay: "0.24s" },
      { h: 86, delay: "0.36s" },
      { h: 98, delay: "0.5s" },
    ];
    return (
      <div style={{ width: "100%", height: "100%", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 100 }}>
          {bars.map((b, i) => (
            <div key={i} style={{
              width: 24, height: b.h,
              background: `linear-gradient(180deg, ${agent.accent}bb 0%, ${agent.accent} 100%)`,
              borderRadius: "5px 5px 0 0",
              transformOrigin: "center bottom",
              animation: `o1visBarGrow 0.75s cubic-bezier(0.34,1.56,0.64,1) ${b.delay} both`,
            }} />
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.03em" }}>{agent.stat}</div>
          <div style={{ fontSize: "0.58rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 4 }}>{agent.statLabel}</div>
        </div>
      </div>
    );
  }
  /* Email agent (agentId === 3) */
  const emailSeqs = [
    { label: "Welcome sequence", rate: "62%" },
    { label: "Value delivery", rate: "48%" },
    { label: "Offer campaign", rate: "38%" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "0 8px" }}>
      {emailSeqs.map((seq, i) => (
        <div key={i} style={{
          width: "100%", display: "flex", alignItems: "center", gap: 10,
          padding: "10px 14px", background: "#fff",
          border: `1px solid ${i === 0 ? agent.accent + "55" : "#e2e8f0"}`,
          borderRadius: 10,
          boxShadow: i === 0 ? `0 3px 14px ${agent.accent}20` : "0 1px 4px rgba(0,0,0,0.04)",
          animation: `o1visSlideIn 0.55s cubic-bezier(0.25,1,0.5,1) ${i * 0.18}s both`,
          opacity: 0,
        }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, background: i === 0 ? agent.accent : `${agent.accent}14`, border: `1px solid ${i === 0 ? "transparent" : agent.accent + "30"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconComp size={13} color={i === 0 ? "#fff" : agent.accent} />
          </div>
          <span style={{ flex: 1, fontSize: "0.75rem", fontWeight: 600, color: "#334155" }}>{seq.label}</span>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: agent.accent, background: `${agent.accent}12`, padding: "2px 8px", borderRadius: 999 }}>{seq.rate}</span>
        </div>
      ))}
      <div style={{ marginTop: 6, textAlign: "center" }}>
        <span style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a" }}>{agent.stat}</span>
        <span style={{ fontSize: "0.58rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginLeft: 9 }}>{agent.statLabel}</span>
      </div>
    </div>
  );
}

function Option1TabSwitcher() {
  const [active, setActive] = useState(0);
  const agent = AGENTS[active];

  return (
    <>
      <style>{`
        .o1-tab {
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.825rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: background 0.18s ease, color 0.18s ease;
          background: transparent;
          color: #64748b;
          white-space: nowrap;
          letter-spacing: 0.01em;
          line-height: 1;
        }
        .o1-tab:hover:not(.o1-tab-active) {
          color: #0f172a;
          background: #f1f5f9;
        }
        .o1-tab.o1-tab-active {
          background: #0f172a;
          color: #fff;
        }
        .o1-panel {
          animation: o1Fade 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes o1Fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .o1-cap {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.875rem;
          color: #334155;
          line-height: 1.55;
        }
        .o1-cap:first-child { border-top: 1px solid #f1f5f9; }
        .o1-cta:hover { opacity: 0.88; }
        @keyframes o1visBarGrow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes o1visLineDraw {
          from { stroke-dashoffset: 380; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes o1visGlowPop {
          from { opacity: 0; transform: scale(0.4); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes o1visRingPulse {
          0%   { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        @keyframes o1visConnDraw {
          from { stroke-dashoffset: 80; opacity: 0; }
          to   { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes o1visNodePop {
          from { opacity: 0; transform: scale(0.3); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes o1visSlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 640px) {
          .o1-panel-grid { grid-template-columns: 1fr !important; }
          .o1-visual { display: none !important; }
        }
      `}</style>

      <div style={{ padding: "56px clamp(24px, 6vw, 72px) 64px" }}>
        <div style={{ marginBottom: 44 }}>
          <p
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#94a3b8",
              margin: "0 0 14px",
            }}
          >
            Enterprise Agents
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#0f172a",
              margin: "0 0 16px",
            }}
          >
            Four agents.
            <br />
            One subscription.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: 460,
              margin: 0,
            }}
          >
            Each agent runs autonomously, handles its own execution, and
            escalates only what demands a human decision.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 40,
            padding: "5px",
            background: "#f1f5f9",
            borderRadius: 999,
            width: "fit-content",
            flexWrap: "wrap",
          }}
        >
          {AGENTS.map((a) => (
            <button
              key={a.id}
              type="button"
              className={`o1-tab${active === a.id ? " o1-tab-active" : ""}`}
              onClick={() => setActive(a.id)}
            >
              {a.name}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="o1-panel o1-panel-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 48px",
            alignItems: "stretch",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.35rem, 2.6vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                color: "#0f172a",
                margin: "0 0 14px",
              }}
            >
              {agent.tagline}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#64748b",
                margin: "0 0 28px",
              }}
            >
              {agent.desc}
            </p>
            <div style={{ marginBottom: 36 }}>
              {agent.caps.map((cap) => (
                <div key={cap} className="o1-cap">
                  <Check
                    size={14}
                    color={agent.accent}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="o1-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "#0f172a",
                color: "#fff",
                borderRadius: 999,
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "opacity 0.18s",
              }}
            >
              Contact Sales <ArrowRight size={13} />
            </Link>
          </div>

          <div
            className="o1-visual"
            style={{
              borderRadius: 14,
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              padding: "18px 24px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: 280,
              backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          >
            <TabPanelVisual agentId={active} />
          </div>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════════════════ */

export default function PreviewPage() {
  return (
    <div
      style={{
        maxWidth: 1040,
        margin: "0 auto",
        padding: "60px 24px 100px",
        fontFamily: "var(--font-body)",
        background: "#fff",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#0f0f0f",
          marginBottom: 6,
          letterSpacing: "-0.03em",
        }}
      >
        Enterprise Agents — 5 New Options
      </h1>
      <p
        style={{
          color: "#9ca3af",
          fontSize: "0.875rem",
          marginBottom: 56,
          lineHeight: 1.6,
        }}
      >
        Five distinct design directions. Options 1 and 5 are interactive.
      </p>

      <OptionShell label="Option 1 — Tab Switcher (Vercel-inspired)">
        <Option1TabSwitcher />
      </OptionShell>

    </div>
  );
}
