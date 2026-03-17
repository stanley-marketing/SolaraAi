"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, DollarSign, LinkIcon, Share2 } from "lucide-react";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { PartnerHero } from "@/components/partners";

const STATS = [
  { value: "30%", label: "max revenue share" },
  { value: "12 mo", label: "recurring commission" },
  { value: "$5K", label: "top tier cash bonus" },
  { value: "100+", label: "referral partners" },
];

const VALUE_CARDS = [
  {
    pill: "They save",
    title: "They save",
    body: "Anyone who signs up through your link gets an exclusive discount. The more you share, the more they save.",
  },
  {
    pill: "You earn",
    title: "You earn",
    body: "Recurring revenue share on every paying user. Month after month. The more you refer, the higher your percentage.",
  },
];

const TIERS = [
  {
    tier: "Tier 1",
    threshold: "10 users",
    share: "20%",
    bonus: "Partner badge",
  },
  {
    tier: "Tier 2",
    threshold: "25 users",
    share: "25%",
    bonus: "+ $1K cash bonus",
  },
  {
    tier: "Tier 3",
    threshold: "50 users",
    share: "30%",
    bonus: "+ $2.5K cash bonus",
  },
  {
    tier: "Tier 4",
    threshold: "100+ users",
    share: "30%",
    bonus: "+ $5K + Ambassador",
  },
];

const STEPS = [
  {
    number: 1,
    icon: LinkIcon,
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Sign up",
    body: "Get your unique referral link in 30 seconds.",
  },
  {
    number: 2,
    icon: Share2,
    color: "#2563eb",
    bg: "#eff6ff",
    title: "Share",
    body: "Post it, tweet it, DM it. However you reach people.",
  },
  {
    number: 3,
    icon: DollarSign,
    color: "#059669",
    bg: "#ecfdf5",
    title: "Earn",
    body: "Every paying signup through your link earns you revenue. Track it in real time.",
  },
];

const FAQ_ITEMS = [
  {
    question: "How do I get my referral link?",
    answer:
      "Sign up for the referral program using the button above. Once your account is created, your unique referral link is available immediately in your partner dashboard — no approval process, no waiting.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Revenue share is paid out monthly, 30 days after the referred user's payment clears. Cash bonuses are paid within 14 business days of hitting the qualifying tier threshold. You can track all pending and completed payouts in your dashboard.",
  },
  {
    question: "What counts as a paying user?",
    answer:
      "A paying user is someone who signs up through your referral link and completes a paid subscription — free trials and cancelled accounts do not count. Revenue share is calculated on their subscription payments for the first 12 months from their sign-up date.",
  },
];

const CHROME_DOT_COLORS = ["#ff6057", "#ffbd2e", "#27c93f"];
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function SectionPill({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid #e3e3e3",
        borderRadius: 999,
        padding: "4px 14px",
        fontSize: 11,
        letterSpacing: "0.1em",
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

function SignupDiscountMockup() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 350,
        borderRadius: 12,
        border: "1px solid #e6e6e6",
        background: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 10px 30px rgba(0,0,0,0.05)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 14px",
          background: "#f8f8f8",
          borderBottom: "1px solid #ededed",
        }}
      >
        {CHROME_DOT_COLORS.map((color) => (
          <div key={color} style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
        ))}
      </div>
      <div style={{ padding: 16 }}>
        <div
          style={{
            display: "inline-flex",
            borderRadius: 999,
            border: "1px solid #fde68a",
            background: "#fffbeb",
            color: "#a16207",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            padding: "4px 10px",
            textTransform: "uppercase",
            marginBottom: 14,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          20% OFF
        </div>
        <div
          style={{
            border: "1px solid #ececec",
            borderRadius: 10,
            padding: 12,
            marginBottom: 10,
            background: "#fafafa",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#9ca3af",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 6,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Referral Link
          </div>
          <div
            style={{
              border: "1px solid #dfdfdf",
              borderRadius: 8,
              padding: "9px 10px",
              background: "#fff",
              color: "#374151",
              fontSize: 12,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            solaraai.com/r/sam-growth
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          <div style={{ height: 34, background: "#f4f4f5", borderRadius: 8, border: "1px solid #e8e8e8" }} />
          <div style={{ height: 34, background: "#111827", borderRadius: 8 }} />
        </div>
      </div>
    </div>
  );
}

function EarningsMockup() {
  const rows = [
    { date: "Today", user: "Starter Plan", amount: "$11.70" },
    { date: "Yesterday", user: "Growth Plan", amount: "$23.70" },
    { date: "2 days ago", user: "Scale Plan", amount: "$47.70" },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 350,
        borderRadius: 12,
        border: "1px solid #e6e6e6",
        background: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 10px 30px rgba(0,0,0,0.05)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #ededed",
          background: "#f8f8f8",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Earnings
        </span>
        <span
          style={{
            fontSize: 18,
            color: "#059669",
            fontWeight: 700,
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          $83.10
        </span>
      </div>

      <div style={{ padding: "8px 12px 12px" }}>
        {rows.map((row) => (
          <div
            key={`${row.date}-${row.amount}`}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "center",
              gap: 10,
              padding: "10px 8px",
              borderBottom: "1px solid #f1f1f1",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10b981",
                opacity: 0.9,
              }}
            />
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: "#111827",
                  fontWeight: 500,
                  fontFamily: "Inter, system-ui, sans-serif",
                  lineHeight: 1.2,
                }}
              >
                {row.user}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#9ca3af",
                  fontFamily: "Inter, system-ui, sans-serif",
                  marginTop: 2,
                }}
              >
                {row.date}
              </div>
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#059669",
                letterSpacing: "-0.01em",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {row.amount}
            </div>
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

function AnimatedStepNumber({ value, color }: { value: number; color: string }) {
  const padded = String(value).padStart(2, "0");

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: "0.08em",
        color,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <span>{padded[0]}</span>
      <span style={{ display: "inline-flex", height: "1em", overflow: "hidden", lineHeight: 1 }}>
        <span
          className="step-digit-track"
          style={{
            ["--digit-final" as string]: String(Number(padded[1])),
          }}
        >
          {DIGITS.map((digit) => (
            <span key={digit} className="step-digit-cell">
              {digit}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}

export default function ReferralProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .step-digit-track {
          display: flex;
          flex-direction: column;
          animation: stepDigitTick 1200ms steps(10, end) forwards;
          transform: translateY(0);
        }

        .step-digit-cell {
          height: 1em;
          line-height: 1em;
          display: block;
        }

        @keyframes stepDigitTick {
          to {
            transform: translateY(calc(var(--digit-final) * -1em));
          }
        }
      `}</style>

      <TopNav />
      <div style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>

      <PartnerHero
        eyebrow="SOLARA REFERRAL PROGRAM"
        headline="Make money giving businesses what they&apos;ve been wishing for."
        subhead="Every business you know is running marketing with disconnected tools. Hand them something that fixes that — and get paid every time you do."
        primaryCta={{ label: "Get Your Referral Link", href: "/contact" }}
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
            maxWidth: 980,
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
                  fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)",
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
              Two wins from every referral.
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
                gap: 30,
              }}
            >
              <div>
                <SectionPill label={VALUE_CARDS[0].pill} />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    lineHeight: 1.16,
                    marginBottom: 14,
                  }}
                >
                  {VALUE_CARDS[0].title}
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
                  {VALUE_CARDS[0].body}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <SignupDiscountMockup />
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
                gap: 30,
              }}
            >
              <div>
                <SectionPill label={VALUE_CARDS[1].pill} />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    lineHeight: 1.16,
                    marginBottom: 14,
                  }}
                >
                  {VALUE_CARDS[1].title}
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
                  {VALUE_CARDS[1].body}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <EarningsMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fafafa", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionPill label="Referral tiers" />
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
              Climb the ladder. Keep your recurring upside.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  border: "1px solid #e3e3e3",
                  borderRadius: 16,
                  background: "#fff",
                  padding: "24px 22px",
                  transform: `translateY(-${Math.max(0, i - 1) * 6}px)`,
                  boxShadow: i > 1 ? "0 12px 22px rgba(0,0,0,0.04)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    marginBottom: 8,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  {tier.tier}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    letterSpacing: "-0.03em",
                    color: "#111827",
                    lineHeight: 1,
                    marginBottom: 10,
                  }}
                >
                  {tier.share}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#4b5563",
                    marginBottom: 10,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  Revenue share
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    borderRadius: 999,
                    border: "1px solid #e5e7eb",
                    background: "#f9fafb",
                    padding: "4px 10px",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6b7280",
                    marginBottom: 12,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  {tier.threshold}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#111827",
                    lineHeight: 1.5,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  {tier.bonus}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionPill label="How it works" />
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
              Three steps. One recurring income stream.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    border: "1px solid #e3e3e3",
                    borderRadius: 16,
                    padding: "28px 24px",
                    background: "#fff",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: step.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={20} color={step.color} strokeWidth={1.7} />
                    </div>
                    <AnimatedStepNumber value={step.number} color={step.color} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.45rem",
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      color: "#111827",
                      marginBottom: 10,
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
                      margin: 0,
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    {step.body}
                  </p>
                </motion.div>
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
                margin: 0,
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
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
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
            They need connected marketing. You have the answer.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6b7280",
              lineHeight: 1.65,
              marginBottom: 40,
              maxWidth: "40ch",
              marginLeft: "auto",
              marginRight: "auto",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Join the referral program and start earning recurring revenue today.
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
            Get Your Referral Link
          </Link>
        </div>
      </section>

      </div>
      <Footer />
    </>
  );
}
