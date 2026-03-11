"use client";

import { useState } from "react";
import { Check, Target, Share2, BarChart3, Palette } from "lucide-react";
import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";
import { CardStack, CardItem } from "@/components/ui/card-stack";


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
  { name: "Website Agent", desc: "Your website managed, updated, and optimized without touching code." },
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

const PLATFORM_ICONS: Record<string, string> = {
  google: "/images/icons/google.svg",
  "google-ads": "/images/icons/google-ads.svg",
  "google-analytics": "/images/icons/google-analytics.svg",
  meta: "/images/icons/meta.svg",
  tiktok: "/images/icons/tiktok.svg",
  instagram: "/images/icons/instagram.svg",
  linkedin: "/images/icons/linkedin.svg",
  facebook: "/images/icons/facebook.svg",
  x: "/images/icons/x.svg",
};

function PlatformIcon({ platform, size = 18 }: { platform: string; size?: number }) {
  const src = PLATFORM_ICONS[platform];
  if (!src) return null;
  return <img src={src} alt={platform} width={size} height={size} style={{ display: "block" }} />;
}

function PlatformBubble({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#fff", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      {children}
    </div>
  );
}

const CREATIVE_CARDS: CardItem[] = [
  { id: 0, name: <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", fontWeight: 600, color: "#0f0f0f" }}><img src="/images/icons/facebook.svg" alt="" width={16} height={16} />Facebook Ad</span>,    designation: "1200 \u00d7 628 \u00b7 Static",     content: <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>High-converting copy, strong hook, single CTA. Brand colors enforced.</span> },
  { id: 1, name: <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", fontWeight: 600, color: "#0f0f0f" }}><img src="/images/icons/instagram.svg" alt="" width={16} height={16} />Instagram Reel</span>, designation: "1080 \u00d7 1920 \u00b7 Video",    content: <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>Hook in first 3 seconds. Visual story arc. Subtitles added automatically.</span> },
  { id: 2, name: <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", fontWeight: 600, color: "#0f0f0f" }}><img src="/images/icons/linkedin.svg" alt="" width={16} height={16} />LinkedIn Post</span>,  designation: "1200 \u00d7 627 \u00b7 Carousel",  content: <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>Authority-building format. Data-backed insights. Professional tone matched.</span> },
  { id: 3, name: <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", fontWeight: 600, color: "#0f0f0f" }}><img src="/images/icons/tiktok.svg" alt="" width={16} height={16} />TikTok Video</span>,   designation: "1080 \u00d7 1920 \u00b7 UGC-style", content: <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>Native-feel content. Pattern-interrupt opener tested across 3 variants.</span> },
];

const ANALYTICS_FEED = [
  { key: "1", platform: "google-ads",       text: "ROAS increased to 4.2x this week",          sub: "Up from 3.1x \u00b7 Google Search leading" },
  { key: "2", platform: "meta",             text: "Meta CTR dropped below threshold",          sub: "Flagged for review \u00b7 0.6% vs 1.2% benchmark" },
  { key: "3", platform: "google",           text: "Google Search driving 62% of conversions",  sub: "Budget reallocation recommended" },
  { key: "4", platform: "instagram",        text: "Instagram retargeting underperforming",     sub: "Budget shifted to top-performing audience" },
  { key: "5", platform: "google-analytics", text: "Weekly report ready",                       sub: "Spend: $1,240 \u00b7 127 conversions \u00b7 ROAS 4.2x" },
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
            <PlatformBubble><PlatformIcon platform="google-ads" size={18} /></PlatformBubble>
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
            <PlatformBubble><PlatformIcon platform="tiktok" size={18} /></PlatformBubble>
          </OrbitingCircles>
        </div>
      );
    case "creative":
      return (
        <div style={{ width: "100%", alignSelf: "stretch", padding: "16px 24px 36px" }}>
          <CardStack items={CREATIVE_CARDS} />
        </div>
      );
    case "analytics":
      return (
        <div style={{ width: "100%", alignSelf: "stretch", overflow: "hidden", padding: "10px 16px" }}>
          <AnimatedList delay={1400} loop>
            {ANALYTICS_FEED.map((item) => (
              <AnimatedListItem key={item.key}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#f9fafb", border: "1px solid #f0f0f0", borderRadius: 8, padding: "8px 12px", width: "100%" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#f9fafb", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <PlatformIcon platform={item.platform} size={12} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: "0.75rem", fontWeight: 600, color: "#0f0f0f", lineHeight: 1.4 }}>{item.text}</p>
                    <p style={{ margin: 0, fontSize: "0.67rem", color: "#9ca3af", lineHeight: 1.4 }}>{item.sub}</p>
                  </div>
                </div>
              </AnimatedListItem>
            ))}
          </AnimatedList>
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
                <div style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid #f0f0f0", overflow: "hidden" }}>
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
