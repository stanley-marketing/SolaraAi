"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import {
  MapPin,
  BadgeCheck,
  Inbox,
  Banknote,
  Zap,
  Megaphone,
  ClipboardList,
  Award,
  TrendingUp,
  ChevronDown,
  Star,
  Crown,
} from "lucide-react";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";
import { PartnerHero } from "@/components/partners";

const STATS = [
  { value: "$5K", label: "max cash bonus per tier" },
  { value: "4", label: "certification tiers" },
  { value: "15", label: "clients to unlock inbound leads" },
  { value: "30%", label: "permanent referral commission" },
];

const BENEFITS = [
  {
    icon: MapPin,
    title: "Directory listing",
    body: "The first place businesses look for setup operators.",
  },
  {
    icon: BadgeCheck,
    title: "Certification badges",
    body: "Certified, Pro, Expert, or Elite - signal your expertise.",
  },
  {
    icon: Inbox,
    title: "Inbound leads",
    body: "Expert tier+ gets setup requests routed directly to you.",
  },
  {
    icon: Banknote,
    title: "Cash bonuses",
    body: "$1K at Pro, $2.5K at Expert, $5K at Elite.",
  },
  {
    icon: Zap,
    title: "Early feature access",
    body: "Pro+ gets new features before public release.",
  },
  {
    icon: Megaphone,
    title: "Solara promotes you",
    body: "Elite operators are actively promoted in our content and outreach.",
  },
];

const TIERS = [
  {
    name: "Certified",
    threshold: "3 clients connected",
    icon: BadgeCheck,
    perks: ["Directory listing", "Solara Certified badge"],
  },
  {
    name: "Pro",
    threshold: "7 clients connected",
    icon: Star,
    perks: ["Priority placement", "$1,000 cash bonus", "Early feature access"],
  },
  {
    name: "Expert",
    threshold: "15 clients connected",
    icon: Zap,
    perks: ["$2,500 cash bonus", "Inbound setup leads"],
    highlight: true,
  },
  {
    name: "Elite",
    threshold: "25+ clients connected",
    icon: Crown,
    perks: ["$5,000 cash bonus", "Permanent referral commission", "Active promotion"],
  },
];

const PROCESS_STEPS = [
  {
    icon: ClipboardList,
    color: "#7c3aed",
    bg: "#f5f3ff",
    number: "01",
    title: "Apply",
    body: "Tell us about your background. 2 minutes.",
  },
  {
    icon: Award,
    color: "#2563eb",
    bg: "#eff6ff",
    number: "02",
    title: "Get certified",
    body: "Connect 3 clients into Solara. Earn your badge and listing.",
  },
  {
    icon: TrendingUp,
    color: "#059669",
    bg: "#ecfdf5",
    number: "03",
    title: "Grow",
    body: "More clients = more visibility, more leads, more money.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What does a Setup Operator do?",
    answer:
      "A Solara Setup Operator connects a client's entire marketing stack - landing pages, email, ads, and content - into one unified system inside Solara. You're not configuring a CRM or managing tags. You're wiring a marketing nervous system that detects, adapts, and acts on its own.",
  },
  {
    question: "How do I get certified?",
    answer:
      "Certification is application-based. You apply, tell us about your background, and once accepted you connect your first 3 clients' marketing into Solara. Submit proof of the completed setups and you earn your Certified badge and directory listing. Each tier above Certified requires additional connected clients.",
  },
  {
    question: "When does Solara start sending me leads?",
    answer:
      "Inbound lead routing begins at the Expert tier (15 clients connected). At that point, Solara actively routes setup requests from businesses looking for operators directly to you. Elite operators receive the highest volume of routed leads plus active promotion from Solara.",
  },
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

function FlowDiagramMockup() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 370,
        borderRadius: 12,
        border: "1px solid #eaeaea",
        background: "#fff",
        padding: 18,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 210,
          borderRadius: 10,
          border: "1px solid #f0f0f0",
          background:
            "linear-gradient(145deg, rgba(245,243,255,0.8) 0%, rgba(239,246,255,0.75) 52%, rgba(236,253,245,0.7) 100%)",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 320 210"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          aria-hidden="true"
        >
          <line x1="160" y1="105" x2="70" y2="54" stroke="#d4d4d8" strokeWidth="1.6" />
          <line x1="160" y1="105" x2="252" y2="54" stroke="#d4d4d8" strokeWidth="1.6" />
          <line x1="160" y1="105" x2="70" y2="160" stroke="#d4d4d8" strokeWidth="1.6" />
          <line x1="160" y1="105" x2="252" y2="160" stroke="#d4d4d8" strokeWidth="1.6" />
        </svg>

        {[
          { label: "Ads", left: "14%", top: "12%" },
          { label: "Email", right: "14%", top: "12%" },
          { label: "Pages", left: "12%", bottom: "12%" },
          { label: "Content", right: "8%", bottom: "12%" },
        ].map((node) => {
          const { label, ...position } = node;

          return (
            <div
              key={label}
            style={{
              position: "absolute",
              ...position,
              fontSize: 12,
              color: "#6b7280",
              fontWeight: 500,
              fontFamily: "Inter, system-ui, sans-serif",
              background: "#fff",
              border: "1px solid #e6e6e6",
              borderRadius: 999,
              padding: "6px 12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
              {label}
            </div>
          );
        })}

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 88,
            height: 88,
            borderRadius: "50%",
            border: "1px solid #ddd6fe",
            background: "radial-gradient(circle at 25% 20%, #ede9fe 0%, #e0e7ff 48%, #dcfce7 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#111827",
            fontFamily: "var(--font-display)",
            fontSize: 23,
            letterSpacing: "-0.02em",
          }}
        >
          Solara
        </div>
      </div>
    </div>
  );
}

function InboundRequestsMockup() {
  const items = [
    "New setup request - ecommerce brand",
    "New setup request - SaaS startup",
    "New setup request - local service business",
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 370,
        borderRadius: 12,
        border: "1px solid #eaeaea",
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          padding: "12px 15px",
          borderBottom: "1px solid #f0f0f0",
          background: "#fafafa",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 12, color: "#6b7280", fontFamily: "Inter, system-ui, sans-serif" }}>
          Inbound Requests
        </span>
        <span
          style={{
            border: "1px solid #e3e3e3",
            borderRadius: 999,
            padding: "2px 8px",
            fontSize: 10,
            color: "#9ca3af",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          Live
        </span>
      </div>

      <div style={{ padding: 14, display: "grid", gap: 10 }}>
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 * index }}
            style={{
              border: "1px solid #ececec",
              borderRadius: 10,
              padding: "10px 12px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: "#4b5563",
                lineHeight: 1.45,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {item}
            </span>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#10b981",
                flexShrink: 0,
              }}
            />
          </motion.div>
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
    <div style={{ borderBottom: "1px solid #e9e9e9" }}>
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

export default function SetupOperatorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 34%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <TopNav />
      <div style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>

      <PartnerHero
        eyebrow="SOLARA SETUP OPERATORS"
        headline="CRMs are old news. The new operators master what actually grows a business."
        subhead="The next generation of operators won't organize data. They'll connect the one system that actually drives revenue: marketing."
        primaryCta={{ label: "Become a Setup Operator", href: "/contact" }}
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
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "8px 38px",
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
              <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.35, maxWidth: "16ch" }}>
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
                maxWidth: "28ch",
              }}
            >
              The operator edge is connection, not configuration.
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
                <SectionPill label="System Design" />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.45rem, 2.4vw, 1.95rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    lineHeight: 1.18,
                    marginBottom: 14,
                  }}
                >
                  Connect, don&apos;t configure
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6b7280",
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: "43ch",
                  }}
                >
                  You don&apos;t set up another CRM. You wire a marketing nervous system - landing pages,
                  emails, ads, content - into one system that self-corrects.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FlowDiagramMockup />
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
                <SectionPill label="Demand" />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.45rem, 2.4vw, 1.95rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    lineHeight: 1.18,
                    marginBottom: 14,
                  }}
                >
                  Clients come to you
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6b7280",
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: "43ch",
                  }}
                >
                  At Expert tier, Solara routes inbound setup requests directly to you. Build your
                  pipeline by building your portfolio.
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <InboundRequestsMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fafafa", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionPill label="Tier ladder" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                color: "#111827",
                lineHeight: 1.08,
                margin: "0 auto",
                maxWidth: "25ch",
              }}
            >
              Four tiers. Every client moves your career forward.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
            {TIERS.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <Fragment key={tier.name}>
                  <div
                    style={{
                      border: tier.highlight ? "1px solid #ddd6fe" : "1px solid #e3e3e3",
                      borderRadius: 16,
                      padding: "24px 22px",
                      background: "#fff",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {tier.highlight && (
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(167,139,250,0.11) 0%, transparent 70%)",
                        }}
                      />
                    )}
                    <div style={{ position: "relative" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 9,
                            background: "#f5f3ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon size={17} color="#7c3aed" strokeWidth={1.6} />
                        </div>
                        <h3
                          style={{
                            margin: 0,
                            fontFamily: "var(--font-display)",
                            fontSize: 22,
                            fontWeight: 400,
                            letterSpacing: "-0.02em",
                            color: "#111827",
                          }}
                        >
                          {tier.name}
                        </h3>
                      </div>

                      <p
                        style={{
                          margin: "0 0 14px",
                          fontSize: 11,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#9ca3af",
                          fontWeight: 600,
                        }}
                      >
                        {tier.threshold}
                      </p>

                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 7 }}>
                        {tier.perks.map((perk) => (
                          <li
                            key={perk}
                            style={{
                              fontSize: 14,
                              color: "#4b5563",
                              lineHeight: 1.5,
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 7,
                            }}
                          >
                            <TrendingUp
                              size={13}
                              color="#7c3aed"
                              strokeWidth={2}
                              style={{ marginTop: 4, flexShrink: 0 }}
                            />
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {index < TIERS.length - 1 && (
                    <div
                      key={`${tier.name}-arrow`}
                      className="hidden lg:flex"
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#c4b5fd",
                        fontSize: 28,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                      }}
                      aria-hidden="true"
                    >
                      &gt;
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 24px" }}>
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
                maxWidth: "27ch",
              }}
            >
              Built for operators who want leverage, not busywork.
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
                    }}
                  >
                    <Icon size={18} color="#7c3aed" strokeWidth={1.6} />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "#111827", margin: 0 }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.62, margin: 0 }}>{b.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "#fafafa", padding: "96px 24px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 68 }}>
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
              Three steps. Vertical momentum.
            </h2>
          </div>

          <div ref={timelineRef} style={{ position: "relative", paddingLeft: 10 }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 27,
                top: 18,
                bottom: 16,
                width: 2,
                background: "#e3e3e3",
              }}
            />
            <motion.div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 27,
                top: 18,
                width: 2,
                height: fillHeight,
                background: "linear-gradient(180deg, #7c3aed 0%, #2563eb 45%, #059669 100%)",
              }}
            />

            <div className="grid gap-8">
              {PROCESS_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "54px 1fr",
                      gap: 16,
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: step.bg,
                        border: `2px solid ${step.color}3b`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <Icon size={16} color={step.color} strokeWidth={1.8} />
                    </div>

                    <div
                      style={{
                        border: "1px solid #e3e3e3",
                        borderRadius: 14,
                        padding: "18px 18px 16px",
                        background: "#fff",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          color: step.color,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          marginBottom: 7,
                        }}
                      >
                        Step {step.number}
                      </div>
                      <h3
                        style={{
                          margin: "0 0 8px",
                          fontFamily: "var(--font-display)",
                          fontSize: 28,
                          fontWeight: 400,
                          color: "#111827",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.1,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ margin: 0, color: "#6b7280", fontSize: 14, lineHeight: 1.62 }}>{step.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 24px" }}>
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

      <section style={{ background: "#fafafa", padding: "96px 24px 120px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <SectionPill label="Get started" />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.1rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "#111827",
              lineHeight: 1.08,
              marginBottom: 14,
            }}
          >
            The new high-value skill.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6b7280",
              lineHeight: 1.65,
              marginBottom: 40,
              maxWidth: "44ch",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Operators who get certified now will have full pipelines while everyone else is still
            figuring it out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-ink-900 text-white transition-opacity hover:opacity-80"
            style={{
              borderRadius: "999px",
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Become a Setup Operator
          </Link>
        </div>
      </section>

      </div>
      <Footer />
    </>
  );
}
