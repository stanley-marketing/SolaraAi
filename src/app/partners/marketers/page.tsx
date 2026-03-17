"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Pencil,
  TrendingUp,
  LayoutDashboard,
  BarChart3,
  CalendarDays,
  Users,
  BookOpen,
  Plug,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { PartnerHero } from "@/components/partners";

const STATS = [
  { value: "4×", label: "output per marketer" },
  { value: "80%", label: "less time on execution" },
  { value: "5", label: "channels in one dashboard" },
  { value: "1 week", label: "to first results" },
];

const BENEFITS = [
  {
    icon: Pencil,
    title: "AI content across every channel",
    body: "Blog posts, social, email, and ad copy - produced in minutes.",
  },
  {
    icon: TrendingUp,
    title: "Performance that compounds",
    body: "Solara learns your voice and audience, improving with every campaign.",
  },
  {
    icon: LayoutDashboard,
    title: "One platform, every channel",
    body: "SEO, social, email, and paid ads from a single dashboard.",
  },
  {
    icon: BarChart3,
    title: "Reports your CMO will read",
    body: "Auto-generated insights in plain English, shareable in one click.",
  },
  {
    icon: CalendarDays,
    title: "Always-on content calendar",
    body: "On-brand ideas tailored to your goals, filling your calendar automatically.",
  },
  {
    icon: Users,
    title: "Built for lean teams",
    body: "Whether you're one or ten, Solara scales - no agency retainer required.",
  },
];

const STEPS = [
  {
    icon: BookOpen,
    color: "#7c3aed",
    bg: "#f5f3ff",
    number: "01",
    title: "Get the guide",
    body: "See how solo marketers use Solara to outperform departments.",
  },
  {
    icon: Plug,
    color: "#2563eb",
    bg: "#eff6ff",
    number: "02",
    title: "Connect your channels",
    body: "Plug in your ads, emails, pages, and content. Solara maps the connections.",
  },
  {
    icon: CheckCircle,
    color: "#059669",
    bg: "#ecfdf5",
    number: "03",
    title: "Approve and ship",
    body: "Review what Solara prepared. Approve, edit, or reject. That's your job now.",
  },
];

const FAQ_ITEMS = [
  {
    question: "How does Solara help solo marketers?",
    answer:
      "Solara connects every channel you run - ads, email, content, landing pages - into a single system that monitors, cross-references, and prepares fixes automatically. Instead of spending your day diagnosing what's wrong and coordinating changes, you spend it reviewing what Solara has already prepared. One marketer with Solara can operate at the output level of a full team.",
  },
  {
    question: "What channels does Solara connect?",
    answer:
      "Solara integrates with your paid ads, email platform, landing pages, content, and analytics. The system maps how each channel affects the others - so when your ad CTR drops, Solara already knows whether it's a creative issue, a landing page mismatch, or a shift in search intent. You get the full picture, not just a single metric.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most marketers see their first Solara-prepared recommendations within the first week of connecting their channels. The system learns your setup quickly. By week two, you'll have a queue of approved changes live in market. The compounding effect - where every channel learns from every other - typically becomes visible within the first 30 days.",
  },
];

const APPROVAL_ITEMS = [
  { title: "Landing page fix", tag: "High impact" },
  { title: "Email update", tag: "Audience match" },
  { title: "Ad reallocation", tag: "Budget shift" },
];

const LIVE_CAMPAIGNS = [
  { name: "Spring Demand Gen", value: "+22%" },
  { name: "Newsletter Funnel", value: "+17%" },
  { name: "Retargeting Push", value: "+29%" },
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

function ApprovalQueueMockup() {
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#111827",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Approval Queue
        </span>
        <span
          style={{
            fontSize: 10,
            color: "#9ca3af",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          3 ready now
        </span>
      </div>

      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        {APPROVAL_ITEMS.map((item) => (
          <div
            key={item.title}
            style={{
              border: "1px solid #ececec",
              borderRadius: 10,
              padding: "10px 12px",
              background: "#fff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#111827",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#7c3aed",
                  border: "1px solid #ddd6fe",
                  background: "#f5f3ff",
                  borderRadius: 999,
                  padding: "2px 8px",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {item.tag}
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <button
                type="button"
                style={{
                  flex: 1,
                  borderRadius: 999,
                  border: "1px solid #d1d5db",
                  background: "#fff",
                  fontSize: 11,
                  color: "#6b7280",
                  padding: "6px 10px",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Reject
              </button>
              <button
                type="button"
                style={{
                  flex: 1,
                  borderRadius: 999,
                  border: "1px solid #bbf7d0",
                  background: "#f0fdf4",
                  fontSize: 11,
                  color: "#059669",
                  padding: "6px 10px",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LiveCampaignMockup() {
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#111827",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Live Campaigns
        </span>
        <span
          style={{
            fontSize: 10,
            color: "#16a34a",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          All active
        </span>
      </div>

      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        {LIVE_CAMPAIGNS.map((campaign) => (
          <div
            key={campaign.name}
            style={{
              border: "1px solid #ececec",
              borderRadius: 10,
              padding: "10px 12px",
              background: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  color: "#111827",
                  fontWeight: 500,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {campaign.name}
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                color: "#16a34a",
                fontWeight: 600,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {campaign.value}
            </span>
          </div>
        ))}
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

export default function PartnersMarketersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
      <TopNav />

      <PartnerHero
        eyebrow="SOLARA FOR MARKETERS"
        headline="Be the one employee who delivers what a full team couldn't."
        subhead="Not by working harder. By being the person whose marketing is connected - where every channel sees every other channel and the whole system self-corrects."
        primaryCta={{ label: "Get the Free Marketer Guide", href: "/contact" }}
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
              transition={{ duration: 0.5, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
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
                maxWidth: "30ch",
              }}
            >
              Work like the highest leverage marketer in the room.
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
                <SectionPill label="Leverage" />
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
                  Your 1 hour does the work of 100
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
                  One marketer on Solara delivers what used to take a team of four. You stop stitching tools together and start approving solutions.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ApprovalQueueMockup />
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
                <SectionPill label="Execution" />
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
                  Be the person who just ships
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
                  While everyone else is in a meeting about the brief, you've already approved three campaign updates that Solara prepared overnight.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <LiveCampaignMockup />
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
                maxWidth: "29ch",
              }}
            >
              Everything you need to operate like a full marketing department.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  style={{
                    border: "1px solid #e3e3e3",
                    borderRadius: 16,
                    padding: 28,
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
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
                    {benefit.title}
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
                    {benefit.body}
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
              Go live in three simple steps.
            </h2>
          </div>

          <style>{`
            @keyframes sequentialPulse {
              0%, 66%, 100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0); }
              15%, 33% { box-shadow: 0 0 0 9px rgba(124, 58, 237, 0.18); }
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ position: "relative" }}>
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: step.bg,
                      border: `2px solid ${step.color}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      boxShadow: `0 0 0 8px ${step.bg}`,
                      animationName: "sequentialPulse",
                      animationDuration: "2.7s",
                      animationIterationCount: "infinite",
                      animationTimingFunction: "ease-in-out",
                      animationDelay: `${i * 0.9}s`,
                    }}
                  >
                    <Icon size={24} color={step.color} strokeWidth={1.6} />
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: step.color,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    Step {step.number}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: "#111827",
                      marginBottom: 8,
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.65,
                      margin: "0 auto",
                      maxWidth: 240,
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              );
            })}
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
            Stop stitching. Start shipping.
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
            Solara connects your entire marketing. You just say yes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-ink-900 text-white transition-opacity hover:opacity-80 rounded-[999px] px-6 py-3 text-[14px] font-medium tracking-[1px]"
            style={{ textTransform: "uppercase" }}
          >
            Get the Free Marketer Guide
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
