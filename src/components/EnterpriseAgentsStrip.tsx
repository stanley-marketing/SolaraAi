"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Sparkles,
  Mail,
  Check,
} from "lucide-react";
import Link from "next/link";

const AGENTS = [
  {
    id: 0,
    name: "AI Search Agent",
    tagline: "Gets you cited in ChatGPT, Perplexity, and AI answers.",
    desc: "Positions your brand for the new era of search — where LLM citations drive discovery and entity authority determines whether AI recommends you or your competitor.",
    caps: [
      "Optimizes content for LLM-friendly structure",
      "Monitors your AI citation appearances daily",
      "Builds entity authority signals continuously",
    ],
    stat: "3.1\u00d7",
    statLabel: "AI citation rate",
    Icon: Sparkles,
    accent: "#7c3aed",
  },
  {
    id: 1,
    name: "SEO Agent",
    tagline: "Monitors and improves your rankings around the clock.",
    desc: "Tracks every keyword, identifies decay before it touches your traffic, and implements technical fixes directly \u2014 no tickets, no briefing cycles, no delays.",
    caps: [
      "Tracks keyword positions daily across all markets",
      "Generates optimized content briefs on demand",
      "Fixes technical SEO issues automatically",
    ],
    stat: "+47%",
    statLabel: "organic traffic",
    Icon: TrendingUp,
    accent: "#059669",
  },
  {
    id: 2,
    name: "Website Agent",
    tagline: "Rebuilds and optimizes your web presence continuously.",
    desc: "Audits, rewrites, and optimizes every page \u2014 copy, structure, and performance \u2014 so your site is always operating at its peak without any manual effort.",
    caps: [
      "Generates conversion-optimized landing pages",
      "A/B tests layouts and copy variants autonomously",
      "Monitors Core Web Vitals and resolves bottlenecks",
    ],
    stat: "2.3\u00d7",
    statLabel: "conversion lift",
    Icon: Globe,
    accent: "#2563eb",
  },
  {
    id: 3,
    name: "Email Agent",
    tagline: "Writes and sends campaigns on full autopilot.",
    desc: "Complete email execution \u2014 from writing personalized sequences to optimizing deliverability \u2014 without a brief, a review cycle, or a retained agency.",
    caps: [
      "Generates personalized email sequences per segment",
      "Optimizes send times based on recipient patterns",
      "A/B tests subject lines and body content at scale",
    ],
    stat: "38%",
    statLabel: "open rate avg.",
    Icon: Mail,
    accent: "#b45309",
  },
] as const;

function TabPanelVisual({ agentId, inView }: { agentId: number; inView: boolean }) {
  const agent = AGENTS[agentId];
  const IconComp = agent.Icon;
  const anim = (val: string) => inView ? val : "none";

  if (agentId === 0) {
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
            <radialGradient id="easCenterGlow">
              <stop offset="0%" stopColor={agent.accent} stopOpacity="0.35" />
              <stop offset="100%" stopColor={agent.accent} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={cx} cy={cy} r="52" fill="url(#easCenterGlow)" />
          {nodes.map((n) => (
            <line key={`line-${n.i}`} x1={cx} y1={cy} x2={n.x} y2={n.y}
              stroke={agent.accent} strokeWidth="1" strokeOpacity="0.25"
              strokeDasharray="4 3"
              style={{ animation: anim(`easConnDraw 1.2s ease ${0.3 + n.i * 0.2}s both`) }}
            />
          ))}
          <circle cx={cx} cy={cy} r="18" fill="none" stroke={agent.accent} strokeWidth="1" strokeOpacity="0.2"
            style={{ animation: anim("easRingPulse 3s ease-out 0.5s infinite") }} />
          <circle cx={cx} cy={cy} r="12" fill={agent.accent}
            style={{ filter: `drop-shadow(0 0 10px ${agent.accent}88)`, animation: anim("easGlowPop 0.6s ease 0.15s both"), opacity: 0 }} />
          <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="central"
            fill="#fff" fontSize="5.5" fontWeight="700" letterSpacing="0.06em">YOU</text>
          {nodes.map((n) => (
            <g key={`node-${n.i}`} style={{ animation: anim(`easNodePop 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.5 + n.i * 0.18}s both`), opacity: 0 }}>
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
          <polyline points={polyPts} fill="none" stroke={agent.accent} strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" strokeDasharray="380" strokeDashoffset="380"
            style={{ animation: anim("easLineDraw 1.6s cubic-bezier(0.25,1,0.5,1) 0.1s forwards") }} />
          <circle cx={LW} cy={5} r="5" fill={agent.accent}
            style={{ filter: `drop-shadow(0 0 7px ${agent.accent})`, animation: anim("easGlowPop 0.5s ease 1.6s both"), opacity: 0 }} />
        </svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.03em" }}>{agent.stat}</div>
          <div style={{ fontSize: "0.58rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 4 }}>{agent.statLabel}</div>
        </div>
      </div>
    );
  }
  if (agentId === 2) {
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
              animation: anim(`easBarGrow 0.75s cubic-bezier(0.34,1.56,0.64,1) ${b.delay} both`),
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
            animation: anim(`easSlideIn 0.55s cubic-bezier(0.25,1,0.5,1) ${i * 0.18}s both`),
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

export function EnterpriseAgentsStrip() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const agent = AGENTS[active];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      <style>{`
        .eas-tab {
          padding: 8px 18px; border-radius: 999px; font-size: 0.825rem;
          font-weight: 500; cursor: pointer; border: none;
          transition: background 0.18s ease, color 0.18s ease;
          background: transparent; color: #64748b; white-space: nowrap;
          letter-spacing: 0.01em; line-height: 1;
        }
        .eas-tab:hover:not(.eas-tab-active) { color: #0f172a; background: #e2e8f0; }
        .eas-tab:focus-visible { outline: 2px solid #7c3aed; outline-offset: 2px; }
        .eas-tab.eas-tab-active { background: #0f172a; color: #fff; }
        .eas-panel { animation: easFade 0.3s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes easFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .eas-cap {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 12px 0; border-bottom: 1px solid #eaecf0;
          font-size: 0.875rem; color: #334155; line-height: 1.55;
        }
        .eas-cap:first-child { border-top: 1px solid #eaecf0; }
        .eas-cta:hover { background: #1e293b; }
        @keyframes easBarGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes easLineDraw { from { stroke-dashoffset: 380; } to { stroke-dashoffset: 0; } }
        @keyframes easGlowPop { from { opacity: 0; transform: scale(0.4); } to { opacity: 1; transform: scale(1); } }
        @keyframes easRingPulse { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(3.5); opacity: 0; } }
        @keyframes easConnDraw { from { stroke-dashoffset: 80; opacity: 0; } to { stroke-dashoffset: 0; opacity: 1; } }
        @keyframes easNodePop { from { opacity: 0; transform: scale(0.3); } to { opacity: 1; transform: scale(1); } }
        @keyframes easSlideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) {
          .eas-panel, .eas-panel * { animation: none !important; }
        }
        @media (max-width: 640px) {
          .eas-panel-grid { grid-template-columns: 1fr !important; }
          .eas-visual { display: none !important; }
        }
      `}</style>

      <div className="mx-auto px-6 pt-10 pb-28 sm:px-10" style={{ maxWidth: 1200 }}>
        <div style={{ marginBottom: 36, textAlign: "center" }}>
          <div className="shimmer-pill" style={{
            position: "relative", overflow: "hidden",
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: "14px", fontWeight: 500, color: "#374151",
            borderRadius: 999, padding: "7px 16px",
            background: "rgba(255,255,255,0.65)", border: "1px solid #e5e7eb",
            marginBottom: 16,
          }}>
            Enterprise
          </div>
          <h2
            className="text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.03em] text-gray-950 sm:text-[2.125rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four more agents, one subscription.
          </h2>
          <p className="mx-auto mt-3 text-[0.94rem] leading-[1.7] text-neutral-500" style={{ maxWidth: 480 }}>
            Each runs autonomously and escalates only what demands a human decision.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 40, padding: "5px", background: "#eef1f6", borderRadius: 999, width: "fit-content", flexWrap: "wrap", border: "1px solid #e2e8f0", margin: "0 auto 40px" }}>
          {AGENTS.map((a) => (
            <button key={a.id} type="button"
              className={`eas-tab${active === a.id ? " eas-tab-active" : ""}`}
              onClick={() => setActive(a.id)}
            >
              {a.name}
            </button>
          ))}
        </div>

        <div key={active} className="eas-panel eas-panel-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: "0 56px", alignItems: "center" }}
        >
          <div>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
              fontWeight: 600, letterSpacing: "-0.03em",
              lineHeight: 1.25, color: "#0f172a", margin: "0 0 14px",
            }}>
              {agent.tagline}
            </p>
            <p className="text-[0.9rem] leading-[1.8] text-neutral-500" style={{ margin: "0 0 28px" }}>
              {agent.desc}
            </p>
            <div style={{ marginBottom: 36 }}>
              {agent.caps.map((cap) => (
                <div key={cap} className="eas-cap">
                  <Check size={14} color={agent.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
            <Link href="/contact"
              className="eas-cta inline-flex w-fit items-center gap-2 rounded-[999px] bg-gray-950 px-6 py-3 text-[14px] font-medium tracking-[1px] text-white transition-colors hover:bg-gray-800"
            >
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="eas-visual" style={{
            borderRadius: 14, background: "#f8fafc", border: "1px solid #e2e8f0",
            padding: "18px 24px 24px", display: "flex", flexDirection: "column",
            justifyContent: "center", minHeight: 280,
            backgroundImage: "radial-gradient(circle, #d6dce4 0.8px, transparent 0.8px)",
            backgroundSize: "16px 16px",
          }}>
            <TabPanelVisual agentId={active} inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}
