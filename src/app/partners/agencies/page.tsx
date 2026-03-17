"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FileText,
  Layers,
  Zap,
  Megaphone,
  BadgePercent,
  Headphones,
  ClipboardList,
  Phone,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { PartnerHero } from "@/components/partners";

const STATS = [
  { value: "10×", label: "execution speed in 90 days" },
  { value: "50+", label: "agency partners" },
  { value: "5", label: "channels managed per client" },
  { value: "24/7", label: "autonomous optimization" },
];

const BENEFITS = [
  {
    icon: FileText,
    title: "White-label reports",
    body: "Branded performance reports generated automatically for every client.",
    comingSoon: false,
  },
  {
    icon: Layers,
    title: "White-label tech stack",
    body: "Present Solara under your agency's brand.",
    comingSoon: true,
  },
  {
    icon: Zap,
    title: "Early access",
    body: "First access to every new capability before the general market.",
    comingSoon: false,
  },
  {
    icon: Megaphone,
    title: "Co-branded publicity",
    body: "Case studies, press mentions, and partner spotlights.",
    comingSoon: false,
  },
  {
    icon: BadgePercent,
    title: "Partner discounts",
    body: "Better economics the more clients you bring.",
    comingSoon: false,
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    body: "Direct line to the Solara product team.",
    comingSoon: false,
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    color: "#7c3aed",
    bg: "#f5f3ff",
    number: "01",
    title: "Apply",
    body: "Tell us about your agency. Takes 2 minutes.",
  },
  {
    icon: Phone,
    color: "#2563eb",
    bg: "#eff6ff",
    number: "02",
    title: "We talk",
    body: "We set up co-branding, partner pricing, and access.",
  },
  {
    icon: Rocket,
    color: "#059669",
    bg: "#ecfdf5",
    number: "03",
    title: "You launch",
    body: "Connect clients to Solara. Results start immediately.",
  },
];

const FAQ_ITEMS = [
  {
    question: "How does Solara work for agencies?",
    answer:
      "Solara connects all of your clients' marketing channels — ads, email, landing pages, content — into one system that detects what's working, what isn't, and prepares fixes automatically. Your team reviews and approves. You stop being the manual bridge between disconnected tools and start delivering results that weren't possible before.",
  },
  {
    question: "What does white-label reporting include?",
    answer:
      "White-label reports include full campaign performance data across every connected channel, formatted under your agency's branding. No manual data pulling, no formatting work. Reports are generated automatically and ready to send to clients. White-label tech stack (presenting the full Solara platform under your brand) is coming soon.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "After your partner application is approved, we schedule a personal onboarding call to configure your co-branding, set up partner pricing, and connect your first client accounts. Most agencies are fully operational within one week of their onboarding call.",
  },
];

const CHROME_DOT_COLORS = ["#ff6057", "#ffbd2e", "#27c93f"];

const DASHBOARD_STATS = [
  { label: "Reach", value: "24.7K", change: "+18%" },
  { label: "Clicks", value: "3.2K", change: "+24%" },
  { label: "Conv.", value: "412", change: "+31%" },
];

const DASHBOARD_CHANNELS = [
  { name: "Facebook", pct: 84, color: "#818cf8" },
  { name: "Instagram", pct: 72, color: "#c084fc" },
  { name: "Email", pct: 91, color: "#34d399" },
];

const PERFORMANCE_METRICS = [
  { label: "CTR", value: "+89%" },
  { label: "ROAS", value: "4.2×" },
  { label: "Leads", value: "+163%" },
];

function SectionPill({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid #e3e3e3",
        borderRadius: 999,
        padding: "4px 14px",
        fontSize: 11,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: "#9ca3af",
        marginBottom: 20,
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        fontWeight: 500,
      }}
    >
      {label}
    </div>
  );
}

function DashboardMockup() {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #eaeaea",
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.05)",
        width: "100%",
        maxWidth: 360,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 14px",
          background: "#f7f8fa",
          borderBottom: "1px solid #ededed",
        }}
      >
        {CHROME_DOT_COLORS.map((color) => (
          <div
            key={color}
            style={{ width: 10, height: 10, borderRadius: "50%", background: color }}
          />
        ))}
        <div
          style={{
            flex: 1,
            marginLeft: 8,
            height: 14,
            background: "#e9eaec",
            borderRadius: 4,
            maxWidth: 160,
          }}
        />
      </div>

      <div style={{ padding: 16 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            marginBottom: 14,
          }}
        >
          {DASHBOARD_STATS.map((m) => (
            <div
              key={m.label}
              style={{
                background: "#fafafa",
                border: "1px solid #f0f0f0",
                borderRadius: 8,
                padding: "8px 10px",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color: "#b0b7c3",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 3,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#111",
                  fontFamily: "Inter, system-ui, sans-serif",
                  lineHeight: 1.2,
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#10b981",
                  fontWeight: 500,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {m.change}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            fontSize: 10,
            color: "#b0b7c3",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 8,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Channels
        </div>

        {DASHBOARD_CHANNELS.map((ch) => (
          <div
            key={ch.name}
            style={{ marginBottom: 7, display: "flex", alignItems: "center", gap: 8 }}
          >
            <div
              style={{
                fontSize: 10,
                color: "#9ca3af",
                width: 56,
                flexShrink: 0,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {ch.name}
            </div>
            <div
              style={{
                flex: 1,
                height: 5,
                background: "#f0f0f0",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${ch.pct}%`,
                  height: "100%",
                  background: ch.color,
                  borderRadius: 3,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#b0b7c3",
                width: 26,
                textAlign: "right",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {ch.pct}%
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#ecfdf5",
            border: "1px solid #d1fae5",
            borderRadius: 999,
            padding: "4px 10px",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#10b981",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 10,
              color: "#059669",
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            Client report ready to send
          </span>
        </div>
      </div>
    </div>
  );
}

function PerformanceMockup() {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #eaeaea",
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.05)",
        width: "100%",
        maxWidth: 360,
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          background: "#f7f8fa",
          borderBottom: "1px solid #ededed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#111",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Client Performance
        </span>
        <span
          style={{
            fontSize: 10,
            color: "#b0b7c3",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Q4 2024
        </span>
      </div>

      <div style={{ padding: 16 }}>
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              fontSize: 10,
              color: "#b0b7c3",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 4,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Return on Investment
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "#059669",
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              +247%
            </span>
            <span
              style={{
                fontSize: 11,
                color: "#b0b7c3",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              vs. last quarter
            </span>
          </div>
        </div>

        <div
          style={{
            marginBottom: 14,
            background: "#f0fdf4",
            borderRadius: 8,
            padding: "10px 12px",
            border: "1px solid #d1fae5",
          }}
        >
          <svg
            viewBox="0 0 300 72"
            style={{ width: "100%", height: 52 }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="perf-area-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,68 L40,58 L80,48 L130,36 L180,22 L230,12 L280,5 L300,3 L300,72 L0,72 Z"
              fill="url(#perf-area-grad)"
            />
            <path
              d="M0,68 L40,58 L80,48 L130,36 L180,22 L230,12 L280,5 L300,3"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="300" cy="3" r="3.5" fill="#10b981" />
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
          }}
        >
          {PERFORMANCE_METRICS.map((m) => (
            <div
              key={m.label}
              style={{
                textAlign: "center",
                padding: "8px 4px",
                background: "#fafafa",
                borderRadius: 8,
                border: "1px solid #f0f0f0",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#059669",
                  fontFamily: "Inter, system-ui, sans-serif",
                  lineHeight: 1.2,
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: "#b0b7c3",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "Inter, system-ui, sans-serif",
                  marginTop: 2,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid #e9e9e9",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#111827",
            lineHeight: 1.4,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          color="#9ca3af"
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </button>
      {isOpen && (
        <div
          style={{
            paddingBottom: 22,
            color: "#6b7280",
            fontSize: 15,
            lineHeight: 1.72,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function AgenciesV2Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <TopNav />
      <div style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>

      <PartnerHero
        eyebrow="SOLARA FOR AGENCIES"
        headline="Burnout is an old-fashioned word."
        subhead="Your team isn't burned out because they're bad at marketing. They're burned out because they're the only bridge between ten disconnected tools. Solara eliminates that entire layer."
        primaryCta={{ label: "Get the Free Agency Guide", href: "/contact" }}
        useGlobe={true}
      />

      <section
        style={{
          background: "#fafafa",
          borderTop: "1px solid #f0f0f0",
          borderBottom: "1px solid #f0f0f0",
          padding: "44px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "8px 40px",
                borderRight: i < STATS.length - 1 ? "1px solid #e3e3e3" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  color: "#111827",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#9ca3af",
                  lineHeight: 1.35,
                  maxWidth: "13ch",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionPill label="Value" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "#111827",
                lineHeight: 1.08,
                margin: "0 auto",
                maxWidth: "26ch",
              }}
            >
              Two transformations for the price of one.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              style={{
                border: "1px solid #e3e3e3",
                borderRadius: 16,
                padding: "40px 36px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 32,
              }}
            >
              <div>
                <SectionPill label="Your Team" />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    lineHeight: 1.18,
                    marginBottom: 14,
                  }}
                >
                  Your team gets superpowers
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6b7280",
                    lineHeight: 1.72,
                    margin: 0,
                    maxWidth: "44ch",
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  Same people. Ten times the output. Solara connects every
                  channel into one system that acts — so your team stops
                  stitching tools together and starts delivering results.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <DashboardMockup />
              </div>
            </div>

            <div
              style={{
                border: "1px solid #e3e3e3",
                borderRadius: 16,
                padding: "40px 36px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 32,
              }}
            >
              <div>
                <SectionPill label="Your Clients" />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    lineHeight: 1.18,
                    marginBottom: 14,
                  }}
                >
                  Your clients get results they&apos;ve never seen
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6b7280",
                    lineHeight: 1.72,
                    margin: 0,
                    maxWidth: "44ch",
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  When every channel is aware of every other channel,
                  performance compounds. Landing pages adapt. Ads optimize.
                  Content aligns. Your clients notice.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <PerformanceMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fafafa", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionPill label="Benefits" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "#111827",
                lineHeight: 1.08,
                margin: "0 auto",
                maxWidth: "28ch",
              }}
            >
              Everything you need, none of the overhead.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  style={{
                    border: "1px solid #e3e3e3",
                    borderRadius: 16,
                    padding: "28px",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    position: "relative",
                  }}
                >
                  {b.comingSoon && (
                    <div
                      style={{
                        position: "absolute",
                        top: 18,
                        right: 18,
                        fontSize: 10,
                        fontWeight: 500,
                        color: "#9ca3af",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        border: "1px solid #e9e9e9",
                        borderRadius: 999,
                        padding: "2px 9px",
                        fontFamily: "Inter, system-ui, sans-serif",
                      }}
                    >
                      Soon
                    </div>
                  )}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "#f5f3ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#7c3aed" strokeWidth={1.6} />
                  </div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#111827",
                      margin: 0,
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.62,
                      margin: 0,
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    {b.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <SectionPill label="Process" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "#111827",
                lineHeight: 1.08,
                margin: "0 auto",
                maxWidth: "22ch",
              }}
            >
              Up and running in three steps.
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Animated beam connector — desktop only */}
            <div className="hidden md:block" style={{
              position: "absolute", top: 27, left: "16.67%", right: "16.67%", height: 2, zIndex: 0,
              background: "#e3e3e3",
              borderRadius: 1,
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, transparent 0%, #7c3aed 40%, #7c3aed 60%, transparent 100%)",
                backgroundSize: "200% 100%",
                animation: "beamShimmer 2.5s ease-in-out infinite",
              }} />
            </div>
            <style>{`
              @keyframes beamShimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
              }
            `}</style>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ position: "relative", zIndex: 1 }}>
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: "50%",
                      background: step.bg, border: `2px solid ${step.color}22`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 20px",
                      boxShadow: `0 0 0 8px ${step.bg}`,
                    }}>
                      <Icon size={24} color={step.color} strokeWidth={1.6} />
                    </div>
                    <div style={{
                      fontSize: 11, fontWeight: 600, color: step.color,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      marginBottom: 8, fontFamily: "Inter, system-ui, sans-serif",
                    }}>
                      Step {step.number}
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 500,
                      letterSpacing: "-0.02em", color: "#111827", marginBottom: 8, lineHeight: 1.2,
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontSize: 14, color: "#6b7280", lineHeight: 1.65,
                      margin: "0 auto", maxWidth: 240, fontFamily: "Inter, system-ui, sans-serif",
                    }}>
                      {step.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fafafa", padding: "96px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionPill label="FAQ" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "#111827",
                lineHeight: 1.1,
              }}
            >
              Common questions.
            </h2>
          </div>

          <div
            style={{
              border: "1px solid #e3e3e3",
              borderRadius: 16,
              background: "#fff",
              padding: "0 32px",
            }}
          >
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 24px 120px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <SectionPill label="Get started" />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "#111827",
              lineHeight: 1.08,
              marginBottom: 16,
            }}
          >
            Ready to transform your agency?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6b7280",
              lineHeight: 1.65,
              marginBottom: 40,
              maxWidth: "38ch",
              marginLeft: "auto",
              marginRight: "auto",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Stop being the bridge between disconnected tools.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-ink-900 text-white transition-opacity hover:opacity-80"
            style={{
              borderRadius: "999px",
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Get the Free Agency Guide
          </Link>
        </div>
      </section>

      </div>
      <Footer />
    </>
  );
}
