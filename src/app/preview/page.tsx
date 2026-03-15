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

function TabPanelVisual({ agentId, approach }: { agentId: number; approach: string }) {
  const agent = AGENTS[agentId];
  const IconComp = agent.Icon;

  if (approach === "A") {
    return (
      <div style={{
        position: "relative", width: "100%", minHeight: 220,
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", borderRadius: 8,
      }}>
        <div style={{
          position: "absolute", width: 240, height: 240, borderRadius: "50%",
          background: `radial-gradient(circle, ${agent.accent}55 0%, transparent 70%)`,
          left: "-5%", top: "-15%", filter: "blur(38px)",
          animation: "o1visBlobA 11s ease-in-out infinite alternate",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: 190, height: 190, borderRadius: "50%",
          background: `radial-gradient(circle, ${agent.accent}40 0%, transparent 70%)`,
          right: "-5%", bottom: "-10%", filter: "blur(30px)",
          animation: "o1visBlobB 14s ease-in-out infinite alternate",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", width: 150, height: 150, borderRadius: "50%",
          background: `radial-gradient(circle, ${agent.accent}30 0%, transparent 70%)`,
          left: "38%", top: "45%", filter: "blur(24px)",
          animation: "o1visBlobC 9s ease-in-out infinite alternate",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", left: "8%", right: "8%", height: 1,
          background: `linear-gradient(90deg, transparent, ${agent.accent}55 30%, ${agent.accent}55 70%, transparent)`,
          top: "30%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", left: "18%", right: "18%", height: 1,
          background: `linear-gradient(90deg, transparent, ${agent.accent}28 40%, ${agent.accent}28 60%, transparent)`,
          top: "70%", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: 72, fontWeight: 700, letterSpacing: "-0.05em",
            color: "#0f172a", lineHeight: 1,
          }}>{agent.stat}</div>
          <div style={{
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#475569", marginTop: 12,
          }}>{agent.statLabel}</div>
        </div>
      </div>
    );
  }

  if (approach === "B") {
    const renderBContent = () => {
      if (agentId === 0) {
        const bars = [48, 66, 55, 79, 92];
        return (
          <div style={{ padding: "12px 14px" }}>
            <div style={{ fontSize: 7.5, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
              Conversion rate — 5 pages
            </div>
            <div style={{ display: "flex", gap: 5, alignItems: "flex-end", height: 54, marginBottom: 10 }}>
              {bars.map((h, i) => (
                <div key={i} style={{
                  flex: 1, borderRadius: "3px 3px 0 0", height: h * 0.55,
                  background: i === bars.length - 1 ? agent.accent : `${agent.accent}55`,
                }} />
              ))}
            </div>
            <div style={{ height: 1, background: "#f1f5f9", marginBottom: 9 }} />
            <div style={{ display: "flex", gap: 6 }}>
              {[
                { v: agent.stat, l: agent.statLabel, hi: true },
                { v: "96", l: "Perf score", hi: false },
                { v: "+112%", l: "Lift", hi: false },
              ].map((m, i) => (
                <div key={i} style={{
                  flex: 1, borderRadius: 5, padding: "5px 6px",
                  background: m.hi ? `${agent.accent}10` : "#f8fafc",
                  border: `1px solid ${m.hi ? agent.accent + "35" : "#e2e8f0"}`,
                }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: m.hi ? agent.accent : "#0f172a" }}>{m.v}</div>
                  <div style={{ fontSize: 6.5, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      if (agentId === 1) {
        const sparkPts = [30, 24, 27, 20, 15, 10, 7, 4].map((y, i) => `${i * 19 + 8},${y}`).join(" ");
        return (
          <div style={{ padding: "12px 14px" }}>
            <div style={{ fontSize: 7.5, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 7 }}>Keyword rankings</div>
            {[
              { kw: "ai marketing platform", pos: "#1", d: "+3" },
              { kw: "automated seo tool", pos: "#4", d: "+8" },
              { kw: "marketing automation ai", pos: "#7", d: "+12" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderBottom: i < 2 ? "1px solid #f1f5f9" : "none" }}>
                <span style={{
                  width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                  background: i === 0 ? agent.accent : "#f1f5f9",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 7, fontWeight: 800, color: i === 0 ? "#fff" : "#94a3b8",
                }}>{row.pos}</span>
                <span style={{ flex: 1, fontSize: 8.5, color: "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.kw}</span>
                <span style={{ fontSize: 8, fontWeight: 700, color: agent.accent }}>{row.d}</span>
              </div>
            ))}
            <div style={{ marginTop: 9, background: "#f8fafc", borderRadius: 5, padding: "6px 8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 7, color: "#94a3b8", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Organic traffic trend</div>
              <svg viewBox="0 0 152 30" style={{ width: "100%", height: 22, display: "block" }}>
                <polyline points={sparkPts} fill="none" stroke={agent.accent} strokeWidth="2" strokeLinecap="round" />
                <circle cx="150" cy="4" r="3" fill={agent.accent} />
              </svg>
            </div>
          </div>
        );
      }
      if (agentId === 2) {
        return (
          <div style={{ padding: "12px 14px" }}>
            <div style={{ fontSize: 7.5, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 7 }}>AI citation monitor</div>
            {[
              { platform: "ChatGPT", count: "847", pct: "38%" },
              { platform: "Perplexity", count: "612", pct: "27%" },
              { platform: "AI Overviews", count: "429", pct: "19%" },
              { platform: "Gemini", count: "312", pct: "14%" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "3.5px 0", borderBottom: i < 3 ? "1px solid #f5f3ff" : "none" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: agent.accent, opacity: 1 - i * 0.18, flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 8.5, color: "#334155", fontWeight: 500 }}>{item.platform}</span>
                <div style={{ width: 44, height: 4, background: "#f1f5f9", borderRadius: 999, overflow: "hidden", flexShrink: 0 }}>
                  <div style={{ width: item.pct, height: "100%", background: agent.accent, borderRadius: 999 }} />
                </div>
                <span style={{ fontSize: 8, fontWeight: 700, color: agent.accent, width: 26, textAlign: "right", flexShrink: 0 }}>{item.count}</span>
              </div>
            ))}
            <div style={{ marginTop: 9, background: `${agent.accent}10`, border: `1px solid ${agent.accent}30`, borderRadius: 6, padding: "5px 8px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: agent.accent }}>{agent.stat}</div>
              <div style={{ fontSize: 7.5, color: "#64748b" }}>{agent.statLabel}</div>
            </div>
          </div>
        );
      }
      return (
        <div>
          <div style={{ background: "#fffbeb", borderBottom: "1px solid #fde68a", padding: "8px 14px", display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: agent.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#fff", fontSize: 6.5, fontWeight: 800 }}>AI</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#92400e", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Q2 Campaign — Limited offer 🔥</div>
              <div style={{ fontSize: 7.5, color: "#b45309" }}>noreply@yourco.com</div>
            </div>
            <div style={{ background: agent.accent, color: "#fff", fontSize: 7.5, fontWeight: 700, padding: "2px 8px", borderRadius: 999, flexShrink: 0 }}>38% open</div>
          </div>
          <div style={{ padding: "10px 14px" }}>
            {[90, 76, 60].map((w, i) => (
              <div key={i} style={{ height: 5, background: "#f1f5f9", borderRadius: 3, width: `${w}%`, marginBottom: 5 }} />
            ))}
            <div style={{ height: 18, width: 68, background: agent.accent, borderRadius: 999, marginTop: 6, opacity: 0.9 }} />
          </div>
          <div style={{ padding: "8px 14px", borderTop: "1px solid #f1f5f9", display: "flex", gap: 8 }}>
            {[{ l: "Open rate", v: "38%" }, { l: "Sent", v: "12.4k" }, { l: "Revenue", v: "+$8.2k" }].map((m, i) => (
              <div key={i} style={{ flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: i === 2 ? agent.accent : "#0f172a" }}>{m.v}</div>
                <div style={{ fontSize: 7, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 1 }}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    return (
      <div style={{ width: "100%" }}>
        <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 8px 36px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
          <div style={{ background: "#f1f1f1", borderBottom: "1px solid #e0e0e0", padding: "7px 12px", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
              {(["#ff5f57", "#ffbd2e", "#28c840"] as const).map(c => (
                <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #d0d5dd", borderRadius: 5, padding: "3px 10px", fontSize: "0.6rem", color: "#667085", display: "flex", alignItems: "center", gap: 5, maxWidth: 210, margin: "0 auto" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#12b76a", flexShrink: 0 }} />
              solaraai.com/dashboard
            </div>
          </div>
          <div style={{ background: "#fff" }}>{renderBContent()}</div>
        </div>
      </div>
    );
  }

  if (approach === "C") {
    const sparkData = [28, 34, 30, 43, 37, 51, 46, 61, 56, 73, 68, 88];
    const SW = 124, SH = 32;
    const sparkPts = sparkData.map((v, i) => `${(i / (sparkData.length - 1)) * SW},${SH - (v / 100) * SH}`).join(" ");
    return (
      <div style={{ width: "100%", height: "100%", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 88, fontWeight: 300, letterSpacing: "-0.06em", color: agent.accent, lineHeight: 1 }}>{agent.stat}</div>
        <div style={{ fontSize: "0.58rem", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 14, marginBottom: 30 }}>{agent.statLabel}</div>
        <svg width={SW} height={SH + 6} viewBox={`0 0 ${SW} ${SH + 6}`} style={{ overflow: "visible" }}>
          <polyline points={sparkPts} fill="none" stroke={agent.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
          <circle cx={SW} cy={SH - (88 / 100) * SH} r="3" fill={agent.accent} />
        </svg>
      </div>
    );
  }

  if (approach === "D") {
    if (agentId === 0) {
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
      const nodePosns = [{ a: -50, d: 52 }, { a: 40, d: 50 }, { a: 140, d: 52 }, { a: 220, d: 50 }];
      return (
        <div style={{ width: "100%", height: "100%", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18 }}>
          <div style={{ position: "relative", width: 130, height: 130, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: "absolute",
                width: 40 + i * 28, height: 40 + i * 28,
                borderRadius: "50%",
                border: `1.5px solid ${agent.accent}`,
                animation: `o1visRingPulse 2.2s ease-out ${i * 0.73}s infinite`,
                opacity: 0,
              }} />
            ))}
            {nodePosns.map(({ a, d }, i) => {
              const rad = (a * Math.PI) / 180;
              const x = Math.cos(rad) * d;
              const y = Math.sin(rad) * d;
              return (
                <div key={i} style={{
                  position: "absolute", width: 9, height: 9, borderRadius: "50%",
                  background: agent.accent, opacity: 0.75,
                  left: "50%", top: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }} />
              );
            })}
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: agent.accent, boxShadow: `0 0 24px ${agent.accent}70`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.88)" }} />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.03em" }}>{agent.stat}</div>
            <div style={{ fontSize: "0.58rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 4 }}>{agent.statLabel}</div>
          </div>
        </div>
      );
    }
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

  const darkMetrics: Array<{ label: string; val: string }> = (() => {
    if (agentId === 0) return [
      { label: "Sessions", val: "+12%" },
      { label: "Bounce rate", val: "−8%" },
      { label: "Time on page", val: "+24%" },
    ];
    if (agentId === 1) return [
      { label: "Impressions", val: "+31%" },
      { label: "Avg. position", val: "3.2 → 1.8" },
      { label: "Click-through", val: "+18%" },
    ];
    if (agentId === 2) return [
      { label: "ChatGPT mentions", val: "+847" },
      { label: "Perplexity cites", val: "+612" },
      { label: "AI share of voice", val: "+3.1×" },
    ];
    return [
      { label: "Deliverability", val: "99.2%" },
      { label: "Unsubscribes", val: "−0.4%" },
      { label: "Revenue / send", val: "+$0.66" },
    ];
  })();
  return (
    <div style={{ width: "100%", height: "100%", minHeight: 220, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 240, height: 240, borderRadius: "50%", background: `radial-gradient(circle, ${agent.accent}32 0%, transparent 65%)`, filter: "blur(22px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, right: 0, opacity: 0.15, pointerEvents: "none" }}>
        <IconComp size={56} color={agent.accent} />
      </div>
      <div style={{ position: "relative", paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 600, letterSpacing: "-0.05em", color: "#fff", lineHeight: 1 }}>{agent.stat}</div>
        <div style={{ fontSize: "0.58rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 8 }}>{agent.statLabel}</div>
      </div>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 7, paddingTop: 14 }}>
        {darkMetrics.map((m, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>{m.label}</span>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: agent.accent }}>{m.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Option1TabSwitcher() {
  const [active, setActive] = useState(0);
  const [visualApproach, setVisualApproach] = useState<"A" | "B" | "C" | "D" | "E">("A");
  const agent = AGENTS[active];
  const isE = visualApproach === "E";

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
        .o1-vbtn {
          width: 26px; height: 26px; border-radius: 999px; border: none;
          cursor: pointer; font-size: 0.62rem; font-weight: 700;
          transition: background 0.15s, color 0.15s;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        @keyframes o1visBlobA {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(32px, 22px) scale(1.1); }
        }
        @keyframes o1visBlobB {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-24px, -18px) scale(0.92); }
        }
        @keyframes o1visBlobC {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(14px, -20px) scale(1.08); }
        }
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
          0%   { transform: scale(1); opacity: 0.75; }
          100% { transform: scale(2.6); opacity: 0; }
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
              background: isE
                ? "linear-gradient(135deg, #0f172a, #1e293b)"
                : "#f8fafc",
              border: isE
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid #e2e8f0",
              padding: "18px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              minHeight: 280,
              backgroundImage: isE
                ? "none"
                : "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
              backgroundSize: isE ? "auto" : "18px 18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7, flexShrink: 0 }}>
              <span style={{ fontSize: "0.57rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: isE ? "rgba(255,255,255,0.38)" : "#94a3b8", whiteSpace: "nowrap" }}>
                Visual style:
              </span>
              {(["A", "B", "C", "D", "E"] as const).map((letter) => (
                <button
                  key={letter}
                  type="button"
                  className="o1-vbtn"
                  style={{
                    background: visualApproach === letter
                      ? agent.accent
                      : isE ? "rgba(255,255,255,0.1)" : "#e2e8f0",
                    color: visualApproach === letter
                      ? "#fff"
                      : isE ? "rgba(255,255,255,0.5)" : "#64748b",
                  }}
                  onClick={() => setVisualApproach(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <TabPanelVisual agentId={active} approach={visualApproach} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   OPTION 2 — STICKY LEFT NAVIGATOR
   Inspired by Apple product pages: fixed sidebar TOC + scrollable content
══════════════════════════════════════════════════════════════════════════════ */

function Option2StickyNav() {
  const [active, setActive] = useState(0);
  const rightRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    setActive(index);
    const rightEl = rightRef.current;
    const sectionEl = sectionRefs.current[index];
    if (rightEl && sectionEl) {
      rightEl.scrollTop = sectionEl.offsetTop - 52;
    }
  };

  return (
    <>
      <style>{`
        .o2-nav-item {
          display: block;
          padding: 10px 0 10px 14px;
          border-left: 2px solid transparent;
          cursor: pointer;
          transition: border-color 0.18s, opacity 0.18s;
          text-decoration: none;
        }
        .o2-nav-item:hover .o2-nav-name { color: #1c1917; }
        .o2-nav-item.o2-active { border-left-color: #c2410c; }
        .o2-nav-item.o2-active .o2-nav-name { color: #1c1917; font-weight: 700; }
        .o2-nav-num { font-size: 0.58rem; color: #d6d3d1; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 2px; }
        .o2-nav-name { font-size: 0.8rem; color: #a8a29e; font-weight: 500; transition: color 0.18s; line-height: 1.25; }
        .o2-cap {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 10px 0;
          border-bottom: 1px solid #f5f5f4;
          font-size: 0.875rem;
          color: #44403c;
          line-height: 1.6;
        }
        .o2-cap:first-child { border-top: 1px solid #f5f5f4; }
        .o2-check {
          width: 20px; height: 20px; border-radius: 50%;
          background: #fff7ed;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .o2-right::-webkit-scrollbar { width: 4px; }
        .o2-right::-webkit-scrollbar-track { background: transparent; }
        .o2-right::-webkit-scrollbar-thumb { background: #e7e5e4; border-radius: 999px; }
        @media (max-width: 580px) {
          .o2-layout { grid-template-columns: 1fr !important; }
          .o2-left { display: none !important; }
        }
      `}</style>

      <div
        className="o2-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "196px 1fr",
          background: "#fafaf9",
        }}
      >
        {/* Left Nav */}
        <div
          className="o2-left"
          style={{
            borderRight: "1px solid #e8e5e0",
            padding: "52px 0 52px 32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#a8a29e",
              margin: "0 0 32px",
            }}
          >
            Enterprise
          </p>
          {AGENTS.map((a, i) => (
            <div
              key={a.id}
              className={`o2-nav-item${active === i ? " o2-active" : ""}`}
              onClick={() => scrollToSection(i)}
              style={{ marginLeft: -2 }}
            >
              <div className="o2-nav-num">0{i + 1}</div>
              <div className="o2-nav-name">{a.name}</div>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div
          ref={rightRef}
          className="o2-right"
          style={{
            overflowY: "auto",
            maxHeight: 560,
            padding: "52px 48px 0 56px",
          }}
        >
          {AGENTS.map((a, i) => (
            <div
              key={a.id}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              style={{
                paddingBottom: 72,
                borderBottom:
                  i < AGENTS.length - 1 ? "1px solid #e8e5e0" : "none",
                marginBottom: i < AGENTS.length - 1 ? 72 : 52,
              }}
            >
              {/* Row label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 22,
                }}
              >
                <span
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#a8a29e",
                  }}
                >
                  0{i + 1}
                </span>
                <div
                  style={{ height: 1, background: "#e8e5e0", flex: 1 }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.0,
                  color: "#1c1917",
                  margin: "0 0 10px",
                }}
              >
                {a.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "#c2410c",
                  margin: "0 0 18px",
                  lineHeight: 1.35,
                }}
              >
                {a.tagline}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  color: "#78716c",
                  margin: "0 0 28px",
                  maxWidth: 520,
                }}
              >
                {a.desc}
              </p>
              <div>
                {a.caps.map((cap, j) => (
                  <div key={j} className="o2-cap">
                    <div className="o2-check">
                      <Check size={11} color="#c2410c" />
                    </div>
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
              {i === AGENTS.length - 1 && (
                <div style={{ marginTop: 36 }}>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      background: "#1c1917",
                      color: "#fff",
                      borderRadius: 999,
                      padding: "12px 24px",
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      textDecoration: "none",
                    }}
                  >
                    Contact Sales <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   OPTION 3 — ASYMMETRIC BENTO GRID
   Inspired by Stripe & Notion: intentionally unequal cells, varied treatments
══════════════════════════════════════════════════════════════════════════════ */

function Option3AsymmetricBento() {
  return (
    <>
      <style>{`
        .o3-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          grid-template-rows: repeat(3, minmax(148px, 1fr));
          gap: 2px;
          background: #dde3ea;
        }
        .o3-hero { grid-row: 1 / 4; }
        .o3-tag {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .o3-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .o3-hero { grid-row: auto; }
        }
      `}</style>

      {/* Outer wrapper with gap-color as bg */}
      <div style={{ background: "#dde3ea", padding: 2 }}>
        {/* Header row */}
        <div
          style={{
            background: "#fff",
            padding: "36px clamp(24px, 4vw, 52px) 32px",
            marginBottom: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#94a3b8",
                margin: "0 0 10px",
              }}
            >
              Enterprise Agents
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "#0f172a",
                margin: 0,
              }}
            >
              Four agents, always on.
            </h2>
          </div>
          <Link
            href="/contact"
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
            }}
          >
            Contact Sales <ArrowRight size={13} />
          </Link>
        </div>

        {/* Bento grid */}
        <div className="o3-grid">
          {/* Hero: Website Agent */}
          <div
            className="o3-hero"
            style={{
              background: "#fff",
              padding: "clamp(28px, 4vw, 52px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundImage:
                "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          >
            <div>
              <p
                className="o3-tag"
                style={{ color: "#94a3b8", margin: "0 0 18px" }}
              >
                01 — Website Agent
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3vw, 2.6rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "#0f172a",
                  margin: "0 0 18px",
                }}
              >
                Rebuilds your web
                <br />
                presence, continuously.
              </h3>
              <p
                style={{
                  fontSize: "0.925rem",
                  lineHeight: 1.75,
                  color: "#64748b",
                  margin: "0 0 28px",
                  maxWidth: 360,
                }}
              >
                Audits, rewrites, and optimizes every page — copy, structure,
                and performance — so your site always operates at peak without
                manual effort.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {AGENTS[0].caps.map((cap, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      fontSize: "0.85rem",
                      color: "#334155",
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#2563eb",
                        flexShrink: 0,
                      }}
                    />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
            {/* Stat callout */}
            <div
              style={{
                marginTop: 40,
                padding: "18px 22px",
                background: "#eff6ff",
                borderRadius: 12,
                border: "1px solid #dbeafe",
                display: "inline-flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: "2.75rem",
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  color: "#2563eb",
                  lineHeight: 1,
                }}
              >
                2.3×
              </div>
              <div
                style={{
                  fontSize: "0.775rem",
                  color: "#3b82f6",
                  fontWeight: 600,
                  marginTop: 6,
                }}
              >
                avg. conversion lift
              </div>
            </div>
          </div>

          {/* SEO Agent */}
          <div
            style={{
              background: "#f0fdf4",
              padding: "clamp(22px, 3vw, 36px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                className="o3-tag"
                style={{ color: "#86efac", margin: "0 0 12px" }}
              >
                02
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#064e3b",
                  margin: "0 0 8px",
                  lineHeight: 1.15,
                }}
              >
                SEO Agent
              </h3>
              <p
                style={{
                  fontSize: "0.825rem",
                  color: "#065f46",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Monitors and improves your rankings around the clock.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 7,
                marginTop: 20,
              }}
            >
              <span
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#059669",
                }}
              >
                +47%
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#34d399",
                  fontWeight: 700,
                }}
              >
                organic traffic
              </span>
            </div>
          </div>

          {/* AI Search Agent */}
          <div
            style={{
              background: "#faf5ff",
              padding: "clamp(22px, 3vw, 36px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                className="o3-tag"
                style={{ color: "#d8b4fe", margin: "0 0 12px" }}
              >
                03
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#3b0764",
                  margin: "0 0 8px",
                  lineHeight: 1.15,
                }}
              >
                AI Search Agent
              </h3>
              <p
                style={{
                  fontSize: "0.825rem",
                  color: "#581c87",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Gets you cited in ChatGPT, Perplexity, and AI Overviews.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 5,
                marginTop: 20,
              }}
            >
              {["ChatGPT", "Perplexity", "Gemini"].map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#7c3aed",
                    background: "#ede9fe",
                    padding: "4px 10px",
                    borderRadius: 999,
                    letterSpacing: "0.02em",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Email Agent */}
          <div
            style={{
              background: "#fffbeb",
              padding: "clamp(22px, 3vw, 36px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                className="o3-tag"
                style={{ color: "#fcd34d", margin: "0 0 12px" }}
              >
                04
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#451a03",
                  margin: "0 0 8px",
                  lineHeight: 1.15,
                }}
              >
                Email Agent
              </h3>
              <p
                style={{
                  fontSize: "0.825rem",
                  color: "#78350f",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Writes and sends campaigns on full autopilot.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 7,
                marginTop: 20,
              }}
            >
              <span
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#b45309",
                }}
              >
                38%
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#fbbf24",
                  fontWeight: 700,
                }}
              >
                open rate avg.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   OPTION 4 — ALTERNATING PROOF ROWS
   Inspired by Loom & Linear: text ↔ visual zigzag rhythm down the page
══════════════════════════════════════════════════════════════════════════════ */

function RowVisual({ agentId }: { agentId: number }) {
  const accent = AGENTS[agentId].accent;

  if (agentId === 0) {
    /* Website Agent: abstract page-layout grid */
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "8px 0",
          width: "100%",
          maxWidth: 320,
        }}
      >
        {/* Nav bar */}
        <div
          style={{
            height: 10,
            background: "#e2e8f0",
            borderRadius: 6,
            width: "100%",
          }}
        />
        {/* Hero area */}
        <div
          style={{
            height: 52,
            background: "#eff6ff",
            borderRadius: 8,
            border: "1px solid #dbeafe",
          }}
        />
        {/* Two-col content */}
        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[100, 80, 90, 60].map((w, i) => (
              <div
                key={i}
                style={{
                  height: 7,
                  background: "#e2e8f0",
                  borderRadius: 4,
                  width: `${w}%`,
                }}
              />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              height: 72,
              background: "#f1f5f9",
              borderRadius: 8,
            }}
          />
        </div>
        {/* CTA row */}
        <div
          style={{
            height: 24,
            width: "40%",
            background: accent,
            borderRadius: 999,
            opacity: 0.7,
          }}
        />
      </div>
    );
  }

  if (agentId === 1) {
    /* SEO Agent: ascending bar chart */
    return (
      <div style={{ width: "100%", maxWidth: 320 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 6,
            height: 110,
            borderBottom: "1.5px solid #e2e8f0",
            paddingBottom: 0,
            marginBottom: 8,
          }}
        >
          {[18, 25, 22, 32, 38, 45, 52, 60, 55, 72, 68, 88].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background:
                  i >= 8
                    ? accent
                    : i >= 5
                    ? `${accent}55`
                    : "#e2e8f0",
                borderRadius: "3px 3px 0 0",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.62rem", color: "#94a3b8" }}>
            6 months ago
          </span>
          <span style={{ fontSize: "0.62rem", color: "#94a3b8" }}>Today</span>
        </div>
        <div style={{ marginTop: 20 }}>
          <span
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              color: "#0f172a",
            }}
          >
            +47%
          </span>
          <span
            style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              fontWeight: 500,
              marginLeft: 8,
            }}
          >
            organic
          </span>
        </div>
      </div>
    );
  }

  if (agentId === 2) {
    /* AI Search Agent: node graph */
    return (
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", maxWidth: 320 }}
      >
        {/* Connecting lines */}
        <line x1="140" y1="100" x2="50" y2="40" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="140" y1="100" x2="230" y2="40" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="140" y1="100" x2="40" y2="155" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="140" y1="100" x2="240" y2="155" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="140" y1="100" x2="140" y2="188" stroke="#e2e8f0" strokeWidth="1.5" />
        {/* Outer nodes */}
        <circle cx="50" cy="40" r="14" fill={`${accent}18`} stroke={accent} strokeWidth="1.5" />
        <circle cx="230" cy="40" r="14" fill={`${accent}18`} stroke={accent} strokeWidth="1.5" />
        <circle cx="40" cy="155" r="14" fill={`${accent}18`} stroke={accent} strokeWidth="1.5" />
        <circle cx="240" cy="155" r="14" fill={`${accent}18`} stroke={accent} strokeWidth="1.5" />
        <circle cx="140" cy="188" r="14" fill={`${accent}18`} stroke={accent} strokeWidth="1.5" />
        {/* Node labels */}
        <text x="50" y="44" textAnchor="middle" fill={accent} fontSize="7" fontWeight="700">AI</text>
        <text x="230" y="44" textAnchor="middle" fill={accent} fontSize="7" fontWeight="700">AI</text>
        <text x="40" y="159" textAnchor="middle" fill={accent} fontSize="7" fontWeight="700">AI</text>
        <text x="240" y="159" textAnchor="middle" fill={accent} fontSize="7" fontWeight="700">AI</text>
        <text x="140" y="192" textAnchor="middle" fill={accent} fontSize="7" fontWeight="700">AI</text>
        {/* Center node — brand */}
        <circle cx="140" cy="100" r="22" fill={`${accent}20`} />
        <circle cx="140" cy="100" r="13" fill={accent} />
        <text x="140" y="104" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">YOU</text>
      </svg>
    );
  }

  /* Email Agent: stacked email cards */
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 320,
        height: 160,
      }}
    >
      {[
        { rotate: "-4deg", top: 20, left: 12, opacity: 0.4 },
        { rotate: "-1.5deg", top: 10, left: 6, opacity: 0.65 },
        { rotate: "0deg", top: 0, left: 0, opacity: 1 },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: card.top,
            left: card.left,
            right: 12 - i * 6,
            bottom: 0,
            background: "#fff",
            border: "1.5px solid #e2e8f0",
            borderRadius: 12,
            opacity: card.opacity,
            transform: `rotate(${card.rotate})`,
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {i === 2 && (
            <>
              <div
                style={{
                  height: 8,
                  background: `${accent}22`,
                  borderRadius: 4,
                  width: "60%",
                }}
              />
              <div
                style={{
                  height: 6,
                  background: "#e2e8f0",
                  borderRadius: 4,
                  width: "90%",
                }}
              />
              <div
                style={{
                  height: 6,
                  background: "#e2e8f0",
                  borderRadius: 4,
                  width: "75%",
                }}
              />
              <div
                style={{
                  height: 6,
                  background: "#e2e8f0",
                  borderRadius: 4,
                  width: "80%",
                }}
              />
              <div
                style={{
                  marginTop: 4,
                  height: 20,
                  width: 80,
                  background: accent,
                  borderRadius: 999,
                  opacity: 0.85,
                }}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function Option4AlternatingRows() {
  return (
    <>
      <style>{`
        .o4-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 340px;
        }
        .o4-text {
          padding: clamp(48px, 6vw, 80px) clamp(28px, 5vw, 64px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid #f1f5f9;
        }
        .o4-visual {
          padding: clamp(32px, 5vw, 56px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fafbfc;
        }
        .o4-row-flip .o4-text { order: 2; border-right: none; border-left: 1px solid #f1f5f9; }
        .o4-row-flip .o4-visual { order: 1; }
        .o4-cap-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 0;
          font-size: 0.875rem;
          color: #475569;
          border-bottom: 1px solid #f8fafc;
          line-height: 1.55;
        }
        .o4-cap-item:first-child { border-top: 1px solid #f8fafc; }
        .o4-dot {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0; margin-top: 6px;
        }
        @media (max-width: 580px) {
          .o4-row, .o4-row-flip { grid-template-columns: 1fr; }
          .o4-visual { display: none; }
          .o4-text { border-right: none !important; border-left: none !important; }
        }
      `}</style>

      <div>
        {/* Header */}
        <div
          style={{
            padding: "48px clamp(28px, 5vw, 64px) 40px",
            borderBottom: "1px solid #f1f5f9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#94a3b8",
                margin: "0 0 12px",
              }}
            >
              Enterprise Agents
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#0f172a",
                margin: 0,
              }}
            >
              One platform.
              <br />
              Four always-on agents.
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: 300,
              margin: 0,
            }}
          >
            Replace your entire digital operations layer with autonomous agents
            that never clock out.
          </p>
        </div>

        {/* Alternating rows */}
        {AGENTS.map((agent, i) => {
          const isFlipped = i % 2 !== 0;
          const AgentIcon = agent.Icon;
          return (
            <div
              key={agent.id}
              className={`o4-row${isFlipped ? " o4-row-flip" : ""}`}
              style={{
                borderBottom:
                  i < AGENTS.length - 1 ? "1px solid #f1f5f9" : "none",
              }}
            >
              {/* Text col */}
              <div className="o4-text">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: agent.accent,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <AgentIcon
                    size={14}
                    color={agent.accent}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    lineHeight: 1.05,
                    color: "#0f172a",
                    margin: "0 0 12px",
                  }}
                >
                  {agent.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "#64748b",
                    margin: "0 0 24px",
                  }}
                >
                  {agent.desc}
                </p>
                <div style={{ marginBottom: i === 3 ? 32 : 0 }}>
                  {agent.caps.map((cap, j) => (
                    <div key={j} className="o4-cap-item">
                      <div
                        className="o4-dot"
                        style={{ background: agent.accent }}
                      />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
                {i === AGENTS.length - 1 && (
                  <Link
                    href="/contact"
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
                    }}
                  >
                    Contact Sales <ArrowRight size={13} />
                  </Link>
                )}
              </div>

              {/* Visual col */}
              <div className="o4-visual">
                <RowVisual agentId={i} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   OPTION 5 — INTERACTIVE SENTENCE SELECTOR
   Inspired by Webflow: one large statement, an inline clickable agent selector,
   and an expanding detail panel that updates as you pick each agent.
══════════════════════════════════════════════════════════════════════════════ */

function Option5SentenceSelector() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const agent = AGENTS[selected];
  const AgentIcon = agent.Icon;

  const handleSelect = (id: number) => {
    setSelected(id);
    setOpen(false);
  };

  return (
    <>
      <style>{`
        .o5-trigger {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0 2px;
          color: #b45309;
          font-family: var(--font-display);
          font-size: inherit;
          font-weight: 700;
          letter-spacing: inherit;
          line-height: inherit;
          border-bottom: 2px dashed #b45309;
          transition: color 0.18s, border-color 0.18s;
          position: relative;
        }
        .o5-trigger:hover {
          color: #92400e;
          border-color: #92400e;
        }
        .o5-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          background: #fff;
          border: 1.5px solid #e2e8f0;
          borderRadius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
          min-width: 220px;
          z-index: 50;
          overflow: hidden;
          animation: o5Drop 0.2s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes o5Drop {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .o5-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 11px 16px;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          color: #334155;
          border-bottom: 1px solid #f8fafc;
          background: #fff;
          border-top: none;
          border-left: none;
          border-right: none;
          width: 100%;
          text-align: left;
          transition: background 0.14s;
        }
        .o5-option:last-child { border-bottom: none; }
        .o5-option:hover { background: #f8fafc; }
        .o5-option.o5-selected { color: #0f172a; font-weight: 600; }
        .o5-panel {
          animation: o5Panel 0.32s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes o5Panel {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .o5-cap {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          font-size: 0.875rem;
          color: #475569;
          border-bottom: 1px solid #f1f5f9;
          line-height: 1.55;
        }
        .o5-cap:first-child { border-top: 1px solid #f1f5f9; }
      `}</style>

      <div style={{ padding: "56px clamp(28px, 6vw, 80px) 64px" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#94a3b8",
            margin: "0 0 36px",
          }}
        >
          Enterprise Agents
        </p>

        {/* Interactive sentence */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "#0f172a",
            marginBottom: 52,
          }}
        >
          <span>Deploy {agent.article} </span>

          {/* Clickable selector word */}
          <span style={{ position: "relative", display: "inline" }}>
            <button
              className="o5-trigger"
              onClick={() => setOpen(!open)}
              style={{
                fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.04em",
              }}
            >
              {agent.name}
              <ChevronDown
                size={24}
                style={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  flexShrink: 0,
                }}
              />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="o5-dropdown">
                {AGENTS.map((a) => (
                  <button
                    key={a.id}
                    className={`o5-option${a.id === selected ? " o5-selected" : ""}`}
                    onClick={() => handleSelect(a.id)}
                  >
                    <span>{a.name}</span>
                    {a.id === selected && (
                      <Check size={14} color="#059669" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </span>

          {/* Dynamic suffix */}
          <span
            key={selected}
            style={{
              animation: "o5Panel 0.3s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {" "}
            {agent.suffix}
          </span>
        </div>

        {/* Detail panel */}
        <div
          key={selected}
          className="o5-panel"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 64px",
            paddingTop: 40,
            borderTop: `2px solid ${agent.accent}`,
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: agent.bgTint,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <AgentIcon size={18} color={agent.accent} strokeWidth={1.75} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "#0f172a",
                    margin: 0,
                  }}
                >
                  {agent.name}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: agent.accent,
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {agent.stat} {agent.statLabel}
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#64748b",
                margin: "0 0 24px",
              }}
            >
              {agent.desc}
            </p>
            <Link
              href="/contact"
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
              }}
            >
              Contact Sales <ArrowRight size={13} />
            </Link>
          </div>

          {/* Right */}
          <div>
            <p
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#94a3b8",
                margin: "0 0 16px",
              }}
            >
              Capabilities
            </p>
            <div>
              {agent.caps.map((cap, i) => (
                <div key={i} className="o5-cap">
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: agent.bgTint,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        color: agent.accent,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {/* Agent picker pills */}
            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
              }}
            >
              {AGENTS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setSelected(a.id)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: `1.5px solid ${a.id === selected ? a.accent : "#e2e8f0"}`,
                    background:
                      a.id === selected ? a.bgTint : "transparent",
                    color: a.id === selected ? a.accent : "#94a3b8",
                    transition: "all 0.18s ease",
                  }}
                >
                  {a.name}
                </button>
              ))}
            </div>
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

      <OptionShell label="Option 2 — Sticky Left Navigator (Apple-inspired)">
        <Option2StickyNav />
      </OptionShell>

      <OptionShell label="Option 3 — Asymmetric Bento (Stripe / Notion-inspired)">
        <Option3AsymmetricBento />
      </OptionShell>

      <OptionShell label="Option 4 — Alternating Proof Rows (Loom / Linear-inspired)">
        <Option4AlternatingRows />
      </OptionShell>

      <OptionShell label="Option 5 — Interactive Sentence Selector (Webflow-inspired)">
        <Option5SentenceSelector />
      </OptionShell>
    </div>
  );
}
