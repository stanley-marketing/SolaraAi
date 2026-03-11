"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Target, Share2, Palette, BarChart3, Zap } from "lucide-react";
import Image from "next/image";


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
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          </motion.div>
        </div>

        {/* RIGHT — scrolling agent panels */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {AGENTS_LIST.map((a, ti) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="ag-hover-card"
              onMouseMove={handleSpotlightMove}
              onMouseLeave={handleSpotlightLeave}
              style={{
                background: "#ffffff",
                border: "1px solid #eaecf0",
                borderRadius: 20,
                padding: "48px 48px 44px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="ag-light-spotlight" />
              <div style={{ position: "relative", zIndex: 2 }}>
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
            </motion.div>
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
            .cn-bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
            .cn-wide { grid-column: span 2; }
            @media (max-width: 720px) {
              .cn-bento { grid-template-columns: 1fr; }
              .cn-wide { grid-column: span 1; }
            }
          `}</style>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          </motion.div>
          <div className="cn-bento">
            {COMING_NEXT.map((agent, i) => {
              const imgs = [
                "/images/agents/cms-agent.png",
                "/images/agents/seo-agent.png",
                "/images/agents/ai-search-agent.png",
                "/images/agents/email-agent.png",
              ];
              const isWide = i === 0 || i === 3;
              return (
                <motion.div
                  key={agent.name}
                  className={`cn-card${isWide ? " cn-wide" : ""}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="cn-card-inner">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: isWide ? "16 / 7" : "4 / 3",
                        overflow: "hidden",
                        borderRadius: "16px 16px 0 0",
                      }}
                    >
                      <Image
                        src={imgs[i]}
                        alt={agent.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes={isWide ? "(max-width: 720px) 100vw, 66vw" : "(max-width: 720px) 100vw, 33vw"}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)",
                        }}
                      />
                    </div>
                    <div style={{ padding: isWide ? "20px 26px 26px" : "16px 20px 22px" }}>
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
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
