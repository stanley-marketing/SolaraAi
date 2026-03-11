"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
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
}
`;

/* ─────────────────────────────────────────────────────────────
   AGENTS C — Sticky Scroll Reveal
   ───────────────────────────────────────────────────────────── */

function AgentsC() {
  const [activeC, setActiveC] = useState(0);
  const agent = AGENTS_LIST[activeC] ?? AGENTS_LIST[0];
  return (
    <section style={{ background: "#fafafa" }}>
      <style>{AGENTS_RESPONSIVE_CSS}</style>
      {/* Top heading */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px 56px" }}>
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
          }}
        >
          Scroll through the stack.
        </h2>
      </div>

      {/* Two-column sticky layout */}
      <div className="ag-2col"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "start",
          paddingBottom: 96,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* LEFT \u2014 sticky content */}
        <div className="ag-sticky" style={{ position: "sticky", top: 100 }}>
          <motion.div
            key={activeC}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: "#ffffff",
              border: "1px solid #eaecf0",
              borderRadius: 16,
              padding: "44px 48px",
            }}
          >
            {/* Progress dots */}
            <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
              {AGENTS_LIST.map((_, di) => (
                <div
                  key={di}
                  style={{
                    width: di === activeC ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: di === activeC ? "#0f0f0f" : "#e5e7eb",
                    transition: "width 0.3s, background 0.3s",
                  }}
                />
              ))}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "#0f0f0f",
                letterSpacing: "-0.02em",
                marginBottom: agent.sub ? 6 : 18,
              }}
            >
              {agent.headline}
            </h3>
            {agent.sub && (
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#9ca3af",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                {agent.sub}
              </p>
            )}
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.72,
                color: "#374151",
                marginBottom: 28,
              }}
            >
              {agent.intro}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 28px 0",
                display: "flex",
                flexDirection: "column",
                gap: 13,
              }}
            >
              {agent.bullets.map((b) => (
                <li key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Check size={13} style={{ color: "#0f0f0f", marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.65 }}>{b}</span>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "#6b7280",
                fontStyle: "italic",
                lineHeight: 1.6,
                borderTop: "1px solid #f3f4f6",
                paddingTop: 20,
              }}
            >
              {agent.closer}
            </p>
          </motion.div>
        </div>

        {/* RIGHT \u2014 scrollable trigger zones */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {AGENTS_LIST.map((a, ti) => (
            <motion.div className="ag-scroll-zone"
              key={a.id}
              onViewportEnter={() => setActiveC(ti)}
              viewport={{ amount: 0.5 }}
              onClick={() => setActiveC(ti)}
              style={{
                height: "60vh",
                minHeight: 360,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  opacity: activeC === ti ? 1 : 0.35,
                  transition: "opacity 0.3s",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: activeC === ti ? "#0f0f0f" : "#f3f4f6",
                    border: "1px solid",
                    borderColor: activeC === ti ? "#0f0f0f" : "#eaecf0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.3s, border-color 0.3s",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: activeC === ti ? "#fff" : "#6b7280",
                      transition: "color 0.3s",
                    }}
                  >
                    0{ti + 1}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#0f0f0f",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {a.headline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Proactive \u2014 full-width, below scroll */}
      <div style={{ background: "#ffffff", borderTop: "1px solid #eaecf0" }}>
        <div className="ag-2col"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "72px 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "#0f0f0f",
                letterSpacing: "-0.02em",
                marginBottom: 18,
              }}
            >
              {PROACTIVE_AGENT.headline}
            </h3>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.72, color: "#374151" }}>
              {PROACTIVE_AGENT.intro}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 28px 0",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {PROACTIVE_AGENT.bullets.map((b) => (
                <li key={b} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Check size={13} style={{ color: "#0f0f0f", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9375rem", color: "#374151" }}>{b}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "1.0625rem", color: "#6b7280", fontStyle: "italic", lineHeight: 1.6 }}>
              {PROACTIVE_AGENT.closer}
            </p>
          </div>
        </div>

        {/* Coming Next — Premium Bento */}
        <div style={{ background: "#0a0a0a", marginTop: 40 }}>
          <style>{`
            @keyframes cn-top-beam {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            @keyframes cn-shimmer {
              0% { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
            .cn-card {
              position: relative;
              overflow: hidden;
              border-radius: 16px;
              border: 1px solid rgba(255,255,255,0.07);
              background: rgba(255,255,255,0.025);
              transition: border-color 0.4s ease, box-shadow 0.4s ease;
            }
            .cn-card:hover {
              border-color: rgba(255,255,255,0.2);
              box-shadow: 0 0 40px rgba(255,255,255,0.04), 0 0 0 1px rgba(255,255,255,0.1);
            }
            .cn-beam {
              position: absolute;
              top: 0; left: 0; right: 0;
              height: 1px;
              background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%);
              background-size: 200% 100%;
              animation: cn-top-beam 2.5s ease-in-out infinite;
              opacity: 0;
              transition: opacity 0.4s;
              pointer-events: none;
              z-index: 10;
            }
            .cn-card:hover .cn-beam { opacity: 1; }
            .cn-spotlight {
              position: absolute;
              inset: 0;
              background: radial-gradient(400px circle at var(--mx, -100%) var(--my, -100%), rgba(255,255,255,0.04), transparent 60%);
              pointer-events: none;
              z-index: 1;
            }
            .cn-card-inner { position: relative; z-index: 2; }
            .cn-bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
            .cn-wide { grid-column: span 2; }
            @media (max-width: 720px) {
              .cn-bento { grid-template-columns: 1fr; }
              .cn-wide { grid-column: span 1; }
            }
            .cn-cta {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 13px 34px;
              border-radius: 999px;
              font-size: 0.9375rem;
              font-weight: 600;
              text-decoration: none;
              letter-spacing: 0.01em;
              color: #0a0a0a;
              background: linear-gradient(105deg, #fff 0%, #e0e0e0 25%, #fff 50%, #e8e8e8 75%, #fff 100%);
              background-size: 200% auto;
              animation: cn-shimmer 4s linear infinite;
              transition: transform 0.2s, box-shadow 0.2s;
            }
            .cn-cta:hover {
              transform: translateY(-1px);
              box-shadow: 0 8px 30px rgba(255,255,255,0.12);
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
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,255,255,0.28)",
                  marginBottom: 18,
                }}
              >
                Coming Soon
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.375rem)",
                  fontWeight: 600,
                  color: "#ffffff",
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
                    onMouseMove={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      const rect = el.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      const y = ((e.clientY - rect.top) / rect.height) * 100;
                      el.style.setProperty("--mx", `${x}%`);
                      el.style.setProperty("--my", `${y}%`);
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.setProperty("--mx", "-100%");
                      el.style.setProperty("--my", "-100%");
                    }}
                  >
                    <div className="cn-beam" />
                    <div className="cn-spotlight" />
                    <div className="cn-card-inner">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: isWide ? "16 / 7" : "4 / 3",
                          overflow: "hidden",
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
                            background: "linear-gradient(to bottom, rgba(10,10,10,0) 35%, rgba(10,10,10,0.8) 100%)",
                          }}
                        />
                      </div>
                      <div style={{ padding: isWide ? "20px 26px 26px" : "16px 20px 22px" }}>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                            color: "rgba(255,255,255,0.88)",
                            marginBottom: 7,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {agent.name}
                        </div>
                        <div
                          style={{
                            fontSize: "0.8125rem",
                            color: "rgba(255,255,255,0.42)",
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
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.28)",
                  fontStyle: "italic",
                  marginBottom: 28,
                  lineHeight: 1.6,
                }}
              >
                Same brain, same analytics, same approvals.
              </p>
              <a href="/contact" className="cn-cta">
                Get Early Access
              </a>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.18)", marginTop: 12 }}>
                Available now for select partners
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREVIEW PAGE
   ═══════════════════════════════════════════════════════════ */

export default function PreviewPage() {
  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>
      <div className="pt-16 pb-4 text-center">
        <h1
          className="text-2xl font-semibold tracking-tight"
          style={{ color: "#1a1a1a" }}
        >
          Section 3 — The Agents
        </h1>
        <p className="mt-2 text-sm" style={{ color: "#888" }}>
          Sticky Scroll Reveal
        </p>
      </div>
      <AgentsC />
    </div>
  );
}
