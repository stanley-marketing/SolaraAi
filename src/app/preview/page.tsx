"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";


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

        {/* Coming Next */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 0" }}>
          <div style={{ height: 1, background: "#e5e7eb", marginBottom: 56 }} />
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#0f0f0f",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.35,
            }}
          >
            Good marketing is everything connected.
            <span style={{ display: "block", color: "#9ca3af", fontWeight: 400, fontSize: "1.0625rem", marginTop: 6, letterSpacing: 0 }}>
              We&apos;re not stopping here.
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 16, marginTop: 40 }}>
            {COMING_NEXT.map((a) => (
              <div
                key={a.name}
                style={{
                  border: "1px solid #eaecf0",
                  borderRadius: 12,
                  padding: "20px 24px",
                  background: "#ffffff",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    color: "#0f0f0f",
                    marginBottom: 6,
                  }}
                >
                  {a.name}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.55 }}>
                  {a.desc}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#9ca3af",
              fontStyle: "italic",
              lineHeight: 1.6,
              textAlign: "center",
              marginTop: 32,
            }}
          >
            All of it plugs into the same system: same brain, same analytics, same approvals
          </p>
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
