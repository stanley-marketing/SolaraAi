"use client";

import { useState } from "react";
import { Check, Target, Share2, Palette, BarChart3, Zap, Video, FileText, Layers } from "lucide-react";
import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { NumberTicker } from "@/components/ui/number-ticker";


/* ═══════════════════════════════════════════════════════════
   AGENTS SECTION — SHARED DATA + CONSTANTS
   ═══════════════════════════════════════════════════════════ */

interface AgentItem {
  id: string;
  headline: string;
  sub: string | null;
  intro: string;
  bullets: string[];
  closer: string;
}

const AGENTS_LIST: AgentItem[] = [
  {
    id: "ads",
    headline: "Ads Agent",
    sub: "Google. Meta. TikTok.",
    intro:
      "You don't need to guess where budget should go \u2014 or lose sleep wondering if the platform is eating your money.",
    bullets: [
      "Allocates budget where performance proves it belongs",
      "Tests and iterates creatives without chaos",
      "Kills underperformers and scales winners",
      "Runs QA checks so campaigns don't drift silently",
    ],
    closer: "You approve the direction and guardrails. It executes the loop.",
  },
  {
    id: "social",
    headline: "Social Agent",
    sub: null,
    intro: "Not another prompt box that spits out off-brand captions.",
    bullets: [
      "Researches what your audience is actually talking about (real trends, real conversations)",
      "Builds briefs and posts in the exact format each platform rewards",
      "Keeps your brand voice consistent everywhere",
      "Publishes on schedule, every time",
    ],
    closer: 'You don\u2019t \u201ctry to be active.\u201d You just are.',
  },
  {
    id: "creative",
    headline: "Creative Agent",
    sub: null,
    intro: "Every brand needs output \u2014 but output without quality is just noise.",
    bullets: [
      "Creates ads, posts, carousels, reels, and landing assets",
      "Enforces your visual identity and tone",
      "Checks quality before anything goes live",
      "Keeps the brand looking sharp across every surface",
    ],
    closer: "Everything ships like your best day \u2014 consistently.",
  },
  {
    id: "analytics",
    headline: "Analytics Agent",
    sub: null,
    intro: "No more dashboards you stare at and don't trust.",
    bullets: [
      "Tells you what's working and why (plain language)",
      "Flags what's quietly bleeding",
      "Explains which channel is actually driving growth",
      "Recommends the next moves with clear reasoning",
    ],
    closer: "One brain, one story, one direction \u2014 across all channels.",
  },
];

const AGENT_ICONS: Record<string, typeof Target> = {
  ads: Target,
  social: Share2,
  creative: Palette,
  analytics: BarChart3,
};

function AgentIcon({ id, ...props }: { id: string; size?: number; strokeWidth?: number; style?: React.CSSProperties; className?: string }) {
  const Icon = AGENT_ICONS[id];
  return Icon ? <Icon {...props} /> : null;
}

const PROACTIVE_AGENT: AgentItem = {
  id: "proactive",
  headline: "Proactive by design",
  sub: null,
  intro:
    "Solara doesn\u2019t wait for instructions. It monitors performance signals, catches problems early, and recommends actions \u2014 with guardrails like:",
  bullets: [
    "Budget caps",
    "Approval thresholds",
    "Brand rules",
    '\u201cDo not touch\u201d zones',
  ],
  closer: "So it feels powerful \u2014 not risky.",
};

const COMING_NEXT = [
  { name: "CMS Agent", desc: "Your website managed, updated, and optimized without touching code." },
  { name: "SEO Agent", desc: "Organic visibility that compounds. Content that ranks. The long game, handled." },
  { name: "AI Search Agent (GEO/AEO)", desc: "Show up in the new era of AI search, not just traditional search." },
  { name: "Email Agent", desc: "Sequences, segmentation, timing, personalization \u2014 automated and learning." },
];

/* \u2500\u2500 Proactive card particles \u2014 golden-ratio spread (brand colors for white bg) \u2500\u2500 */
const AG_PARTICLES = Array.from({ length: 50 }, (_, i) => {
  const duration = 14 + ((i * 7 + i % 4) % 12);
  const colors = [
    "rgba(168,85,247,0.15)",
    "rgba(236,72,153,0.12)",
    "rgba(251,146,60,0.12)",
    "rgba(168,85,247,0.10)",
    "rgba(236,72,153,0.08)",
  ];
  return {
    id: i,
    left: Math.round((i * 61.8) % 100 * 100) / 100,
    size: 2 + (i % 3) * 1.2,
    opacity: 0.18 + (i % 5) * 0.06,
    duration,
    delay: -Math.round((i / 50) * duration * 100) / 100,
    color: colors[i % colors.length],
  };
});

/* ── Platform icons for agent card illustrations ── */

function PlatformIcon({ platform, size = 16 }: { platform: string; size?: number }) {
  switch (platform) {
    case "google":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      );
    case "meta":
      return (
        <svg width={size} height={size} viewBox="0 0 24 12" fill="none" stroke="#0081FB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6C10.5 3 8.5 1 6.5 1 4 1 2 3.5 2 6 2 8.5 4 11 6.5 11 8.5 11 10.5 9 12 6 13.5 3 15.5 1 17.5 1 20 1 22 3.5 22 6 22 8.5 20 11 17.5 11 15.5 11 13.5 9 12 6"/>
        </svg>
      );
    case "tiktok":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#000">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      );
    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <defs><linearGradient id="ig-g" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#FCAF45"/><stop offset="50%" stopColor="#E1306C"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs>
          <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="url(#ig-g)" strokeWidth="2"/>
          <circle cx="12" cy="12" r="5" fill="none" stroke="url(#ig-g)" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-g)"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046a3.745 3.745 0 013.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case "x":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#000">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    default:
      return null;
  }
}

function PlatformBubble({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#fff", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      {children}
    </div>
  );
}

const CREATIVE_FORMATS = [
  { icon: Palette, label: "Ads" },
  { icon: Video, label: "Reels" },
  { icon: FileText, label: "Posts" },
  { icon: Layers, label: "Carousels" },
];

const ANALYTICS_METRICS = [
  { label: "ROAS", value: 4.2, decimals: 1, prefix: "", suffix: "x" },
  { label: "CTR", value: 3.8, decimals: 1, prefix: "", suffix: "%" },
  { label: "Conversions", value: 127, decimals: 0, prefix: "+", suffix: "" },
];

function AgentViz({ id }: { id: string }) {
  switch (id) {
    case "ads":
      return (
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f9fafb", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
            <Target size={18} style={{ color: "#6b7280" }} />
          </div>
          <OrbitingCircles radius={55} iconSize={36} speed={0.8}>
            <PlatformBubble><PlatformIcon platform="google" size={18} /></PlatformBubble>
            <PlatformBubble><PlatformIcon platform="meta" size={18} /></PlatformBubble>
            <PlatformBubble><PlatformIcon platform="tiktok" size={18} /></PlatformBubble>
          </OrbitingCircles>
        </div>
      );
    case "social":
      return (
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#f9fafb", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
            <Share2 size={18} style={{ color: "#6b7280" }} />
          </div>
          <OrbitingCircles radius={55} iconSize={36} speed={0.7} reverse>
            <PlatformBubble><PlatformIcon platform="instagram" size={18} /></PlatformBubble>
            <PlatformBubble><PlatformIcon platform="linkedin" size={18} /></PlatformBubble>
            <PlatformBubble><PlatformIcon platform="facebook" size={18} /></PlatformBubble>
            <PlatformBubble><PlatformIcon platform="x" size={18} /></PlatformBubble>
          </OrbitingCircles>
        </div>
      );
    case "creative":
      return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, padding: "24px 48px", width: "100%" }}>
          {CREATIVE_FORMATS.map(({ icon: FmtIcon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, background: "#f9fafb", border: "1px solid #f0f0f0" }}>
              <FmtIcon size={15} style={{ color: "#9ca3af", flexShrink: 0 }} />
              <span style={{ fontSize: "0.75rem", color: "#6b7280", fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      );
    case "analytics":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "20px 48px", width: "100%" }}>
          {ANALYTICS_METRICS.map((m) => (
            <div key={m.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: "0.7rem", color: "#9ca3af", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{m.label}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 600, color: "#0f0f0f", fontVariantNumeric: "tabular-nums" }}>
                {m.prefix && <span>{m.prefix}</span>}
                <NumberTicker value={m.value} decimalPlaces={m.decimals} />
                {m.suffix && <span style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500, marginLeft: 2 }}>{m.suffix}</span>}
              </span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

const AGENTS_RESPONSIVE_CSS = `
@media (max-width: 768px) {
  .ag-2col { grid-template-columns: 1fr !important; }
  .ag-3col { grid-template-columns: 1fr !important; }
  .ag-12col { grid-template-columns: 1fr !important; }
  .ag-bento-card { grid-column: span 1 !important; }
  .ag-pad-lg { padding: 28px 20px !important; }
  .ag-sticky { position: relative !important; top: auto !important; }
  .ag-hide-sm { display: none !important; }
  .ag-scroll-zone { height: auto !important; min-height: 100px !important; }
  .ag-acc-body { padding: 8px 20px 28px 20px !important; grid-template-columns: 1fr !important; }
  .ag-proactive-pad { padding: 32px 24px !important; }
}
`;

const AGENTS_EXTRA_CSS = `
@keyframes ag-pulse {
  0%   { transform: scale(1);    opacity: 0.5; }
  70%  { transform: scale(1.75); opacity: 0;   }
  100% { transform: scale(1.75); opacity: 0;   }
}
.ag-pulse-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 1.5px solid rgba(15, 15, 15, 0.2);
  animation: ag-pulse 2s ease-out infinite;
  pointer-events: none;
}
.ag-light-spotlight {
  position: absolute;
  inset: 0;
  background: radial-gradient(320px circle at var(--mx, -200%) var(--my, -200%), rgba(0, 0, 0, 0.04), transparent 65%);
  pointer-events: none;
  z-index: 1;
}
.ag-hover-card {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.ag-hover-card:hover {
  border-color: #d1d5db !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}
.ag-dark-spotlight {
  position: absolute;
  inset: 0;
  background: radial-gradient(400px circle at var(--mx, -200%) var(--my, -200%), rgba(255,255,255,0.06), transparent 60%);
  pointer-events: none;
  z-index: 1;
}
@keyframes ag-particle-rise {
  from { transform: translateY(0); opacity: 1; }
  50%  { opacity: 0.6; }
  to   { transform: translateY(-600px); opacity: 0; }
}
.ag-hover-card-dark {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.ag-hover-card-dark:hover {
  border-color: rgba(255,255,255,0.15) !important;
  box-shadow: 0 8px 40px rgba(0,0,0,0.4);
}
`;

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   AGENTS SECTION \u2014 Sticky Scroll Reveal + Proactive + Coming Next
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export function AgentsSection() {
  const [activeC, setActiveC] = useState(0);
  const agent = AGENTS_LIST[activeC] ?? AGENTS_LIST[0];

  const handleSpotlightMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  const handleSpotlightLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    el.style.setProperty("--mx", "-200%");
    el.style.setProperty("--my", "-200%");
  };

  return (
    <section style={{ background: "#fafafa", paddingTop: 96 }}>
      <style>{AGENTS_RESPONSIVE_CSS}</style>
      <style>{AGENTS_EXTRA_CSS}</style>

      {/* ── Part 1: Mixpanel-style sticky intro + scrolling agents ── */}
      <div
        className="ag-2col"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 80,
          alignItems: "start",
          paddingBottom: 96,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* LEFT — sticky intro */}
        <div className="ag-sticky" style={{ position: "sticky", top: 140 }}>
          <div
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: 18,
              }}
            >
              The Agents
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 600,
                color: "#0f0f0f",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Your AI marketing department &mdash; at every stage
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.72,
                color: "#6b7280",
                marginBottom: 36,
                maxWidth: 380,
              }}
            >
              Four specialized agents that run your ads, content, creative, and analytics &mdash; so you can focus on growing.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
              style={{ textDecoration: "none" }}
            >
              Get started
            </a>
          </div>
        </div>

        {/* RIGHT — scrolling agent panels */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {AGENTS_LIST.map((a, ti) => (
            <div
              key={a.id}
              className="ag-hover-card"
              onMouseMove={handleSpotlightMove}
              onMouseLeave={handleSpotlightLeave}
              style={{
                background: "#ffffff",
                border: "1px solid #eaecf0",
                borderRadius: 20,
                padding: 0,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="ag-light-spotlight" />
              <div style={{ position: "relative", zIndex: 2 }}>
                {/* Illustration */}
                <div style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid #f0f0f0" }}>
                  <AgentViz id={a.id} />
                </div>
                {/* Content */}
                <div style={{ padding: "32px 48px 40px" }}>
                {/* Number badge */}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#6b7280",
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    padding: "4px 12px",
                    marginBottom: 24,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(ti + 1).padStart(2, "0")}
                </span>

                {/* Headline */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                    fontWeight: 600,
                    color: "#0f0f0f",
                    letterSpacing: "-0.02em",
                    marginBottom: a.sub ? 6 : 14,
                    lineHeight: 1.25,
                  }}
                >
                  {a.headline}
                </h3>

                {/* Sub */}
                {a.sub && (
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#9ca3af",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    {a.sub}
                  </p>
                )}

                {/* Intro */}
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "#6b7280",
                    marginBottom: 24,
                    maxWidth: 480,
                  }}
                >
                  {a.intro}
                </p>

                {/* Bullets */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 24px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {a.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <Check size={14} strokeWidth={2.5} style={{ color: "#374151", marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Closer */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    color: "#9ca3af",
                    margin: 0,
                  }}
                >
                  {a.closer}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Proactive card — hidden */}


      {/* Coming Next \u2014 Premium Bento */}
      <div style={{ background: "#fafafa", marginTop: 0 }}>
        <style>{`
            .cn-card {
              position: relative;
              overflow: hidden;
              border-radius: 16px;
              border: 1px solid #eaecf0;
              background: #ffffff;
              transition: border-color 0.35s ease, box-shadow 0.35s ease;
            }
            .cn-card:hover {
              border-color: #d1d5db;
              box-shadow: 0 8px 30px rgba(0,0,0,0.06);
            }
            .cn-card-inner { position: relative; z-index: 2; }
            .cn-bento { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
            @media (max-width: 720px) {
              .cn-bento { grid-template-columns: 1fr; }
            }
          `}</style>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 80px" }}>
          <div
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            {/* Prominent Coming Soon badge */}
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: "#a855f7",
                border: "1.5px solid #a855f7",
                borderRadius: 999,
                padding: "6px 20px",
                marginBottom: 20,
              }}
            >
              Coming Soon
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.375rem)",
                fontWeight: 600,
                color: "#0f0f0f",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
              }}
            >
              Good marketing is everything connected.
            </h3>
          </div>
          <div className="cn-bento">
            {COMING_NEXT.map((agent, i) => {
              const imgs = [
                "/images/agents/cms-agent.png",
                "/images/agents/seo-agent.png",
                "/images/agents/ai-search-agent.png",
                "/images/agents/email-agent.png",
              ];
              return (
                <div
                  key={agent.name}
                  className="cn-card"
                >
                  <div className="cn-card-inner">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "4 / 3",
                        overflow: "hidden",
                        borderRadius: "16px 16px 0 0",
                      }}
                    >
                      <Image
                        src={imgs[i]}
                        alt={agent.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 720px) 100vw, 25vw"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)",
                        }}
                      />
                    </div>
                    <div style={{ padding: "20px 24px 24px" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          color: "#0f0f0f",
                          marginBottom: 6,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {agent.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8125rem",
                          color: "#6b7280",
                          lineHeight: 1.6,
                        }}
                      >
                        {agent.desc}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{ textAlign: "center", marginTop: 52 }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#6b7280",
                fontStyle: "italic",
                marginBottom: 28,
                lineHeight: 1.6,
              }}
            >
              Same brain, same analytics, same approvals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
              style={{ textDecoration: "none" }}
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
