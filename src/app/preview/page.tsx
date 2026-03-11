"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Youtube, ArrowRight, Mail, Check, ChevronDown } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────────────────────── */

const RAINBOW = "linear-gradient(135deg, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899, #f97316)";
const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;
// Cubic bezier typed as tuple so Framer Motion Variants accept it
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HEADLINE = "Simple pricing. Serious results.";
const SUBTITLE = "Every plan includes AI-powered marketing that runs 24/7. Pick the scale that fits.";

/* ─────────────────────────────────────────────────────────────
   TYPES + DATA
   ───────────────────────────────────────────────────────────── */

type BillingPeriod = "monthly" | "yearly";

interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: { monthly: number | null; yearly: number | null };
  credits: string;
  cta: string;
  ctaHref: string;
  featured: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Launch your presence",
    price: { monthly: 29, yearly: 23 },
    credits: "1,350",
    cta: "Get started",
    ctaHref: "https://app.solaraai.com/auth/signup",
    featured: false,
    features: [
      "Content planner",
      "Social integrations",
      "4 SEO pages/mo",
      "40 posts/mo",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Run marketing end-to-end",
    price: { monthly: 69, yearly: 53 },
    credits: "3,450",
    cta: "Get started",
    ctaHref: "https://app.solaraai.com/auth/signup",
    featured: false,
    features: [
      "Everything in Starter +",
      "Paid ads management",
      "Website + hosting",
      "120 posts/mo",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Your autonomous marketing dept",
    price: { monthly: 119, yearly: 107 },
    credits: "8,500",
    cta: "Get started",
    ctaHref: "https://app.solaraai.com/auth/signup",
    featured: true,
    features: [
      "Everything in Pro +",
      "Unlimited posts & campaigns",
      "AI Voice Secretary 400min",
      "Priority support",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    tagline: "Built for scale",
    price: { monthly: null, yearly: null },
    credits: "Custom",
    cta: "Talk to us",
    ctaHref: "/contact",
    featured: false,
    features: [
      "Everything in Premium +",
      "Dedicated account manager",
      "Custom integrations",
      "White-label",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   KEYFRAMES (used by option E dot grid + glow)
   ───────────────────────────────────────────────────────────── */

const KEYFRAMES = `
  @keyframes pricing-dot-pulse {
    0%, 100% { opacity: 0.045; }
    50%       { opacity: 0.11; }
  }
  @keyframes pricing-glow-breathe {
    0%, 100% { opacity: 0.3; }
    50%       { opacity: 0.6; }
  }
  @keyframes pricing-gradient-shift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

/* ─────────────────────────────────────────────────────────────
   SHARED PRIMITIVES
   ───────────────────────────────────────────────────────────── */

function CheckIcon({ dim = false }: { dim?: boolean }) {
  return (
    <svg
      className="mt-0.5 h-3 w-3 shrink-0"
      viewBox="0 0 12 12"
      fill="none"
      style={{ color: dim ? "rgba(255,255,255,0.4)" : "rgba(17,17,17,0.35)" }}
    >
      <path
        d="M2 6l3 3 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BillingToggle({
  billing,
  setBilling,
  dark = false,
}: {
  billing: BillingPeriod;
  setBilling: (b: BillingPeriod) => void;
  dark?: boolean;
}) {
  return (
    <div
      className="inline-flex items-center rounded-full p-1 gap-1"
      style={{
        border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid #e3e3e3",
        background: dark ? "rgba(255,255,255,0.06)" : "#fafafa",
      }}
    >
      {(["monthly", "yearly"] as BillingPeriod[]).map((period) => (
        <button
          key={period}
          onClick={() => setBilling(period)}
          className="rounded-full px-5 py-1.5 text-[0.78rem] uppercase tracking-[0.16em] transition-all duration-200"
          style={{
            background:
              billing === period
                ? dark
                  ? "#ffffff"
                  : "#111111"
                : "transparent",
            color:
              billing === period
                ? dark
                  ? "#111111"
                  : "#ffffff"
                : dark
                ? "rgba(255,255,255,0.45)"
                : "#626262",
          }}
        >
          {period === "yearly" ? "Yearly · save 40%" : "Monthly"}
        </button>
      ))}
    </div>
  );
}

function SectionHeader({
  billing,
  setBilling,
  dark = false,
}: {
  billing: BillingPeriod;
  setBilling: (b: BillingPeriod) => void;
  dark?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: EASE }}
        className="tracking-[-0.028em] leading-tight"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
          color: dark ? "#ffffff" : "#111111",
        }}
      >
        {HEADLINE}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.14 }}
        className="mt-4 text-[1.02rem] leading-relaxed mx-auto max-w-[420px]"
        style={{ color: dark ? "rgba(255,255,255,0.45)" : "#6b6b6b" }}
      >
        {SUBTITLE}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-8"
      >
        <BillingToggle billing={billing} setBilling={setBilling} dark={dark} />
      </motion.div>
    </div>
  );
}

function CompareLink({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mt-10 text-center">
      <a
        href="/pricing"
        className="text-[0.84rem] transition-colors duration-200"
        style={{ color: dark ? "rgba(255,255,255,0.28)" : "#9a9a9a" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = dark
            ? "rgba(255,255,255,0.6)"
            : "#111111";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = dark
            ? "rgba(255,255,255,0.28)"
            : "#9a9a9a";
        }}
      >
        See full feature comparison &rarr;
      </a>
    </div>
  );
}

function OptionDivider({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center py-5"
      style={{ background: "#0e0e0e" }}
    >
      <div className="flex w-full max-w-6xl items-center gap-5 px-6">
        <div style={{ flex: 1, height: "1px", background: "#1e1e1e" }} />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: "#444", whiteSpace: "nowrap" }}
        >
          {label}
        </span>
        <div style={{ flex: 1, height: "1px", background: "#1e1e1e" }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PREMIUM CARD INNER — reused by A, B, E
   ───────────────────────────────────────────────────────────── */

function PremiumCardInner({
  plan,
  billing,
  radiusPx = 14,
}: {
  plan: Plan;
  billing: BillingPeriod;
  radiusPx?: number;
}) {
  const price = plan.price[billing];
  return (
    <div
      className="relative flex h-full flex-col p-7"
      style={{
        borderRadius: `${radiusPx}px`,
        background: "#040404",
        boxShadow: "0 28px 60px -20px rgba(0,0,0,0.5)",
      }}
    >
      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          borderRadius: `${radiusPx}px`,
          backgroundImage: NOISE_BG,
          backgroundRepeat: "repeat",
        }}
      />
      {/* Popular badge */}
      <span
        className="absolute top-5 right-5 rounded-full px-3 py-1 text-[0.63rem] font-semibold uppercase tracking-[0.18em]"
        style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
      >
        Popular
      </span>
      <span
        className="text-[0.78rem] uppercase tracking-[0.2em]"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {plan.name}
      </span>
      <p
        className="mt-1 text-[0.92rem] leading-snug"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {plan.tagline}
      </p>
      <span
        className="mt-2 text-[0.7rem] uppercase tracking-[0.14em]"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        {plan.credits} credits/mo
      </span>
      <div className="mt-6 flex items-end gap-1">
        {price !== null ? (
          <>
            <span
              className="leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                color: "#ffffff",
              }}
            >
              ${price}
            </span>
            <span
              className="mb-1.5 text-[0.82rem]"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              / mo
            </span>
          </>
        ) : (
          <span
            className="leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "#ffffff",
            }}
          >
            Custom
          </span>
        )}
      </div>
      <a
        href={plan.ctaHref}
        target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
        rel={
          plan.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined
        }
        className="mt-7 inline-flex w-full items-center justify-center rounded-xl py-3 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5"
        style={{ background: "#ffffff", color: "#111111" }}
      >
        {plan.cta}
      </a>
      <div
        className="mt-7 h-px w-full"
        style={{ background: "rgba(255,255,255,0.1)" }}
      />
      <ul className="mt-6 space-y-3">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 text-[0.88rem] leading-snug"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            <CheckIcon dim />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION A — Classic Grid
   White bg · 4-column grid · Standard cards + rainbow Premium
   ═══════════════════════════════════════════════════════════ */

function OptionA() {
  const [billing, setBilling] = useState<BillingPeriod>("yearly");

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.18 } },
  };
  const card = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.62, ease: EASE },
    },
  };

  return (
    <section className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader billing={billing} setBilling={setBilling} />

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {PLANS.map((plan) => {
            const price = plan.price[billing];

            if (plan.featured) {
              return (
                <motion.div
                  key={plan.id}
                  variants={card}
                  className="relative"
                  style={{
                    background: RAINBOW,
                    borderRadius: "16px",
                    padding: "2px",
                  }}
                >
                  <PremiumCardInner plan={plan} billing={billing} />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.id}
                variants={card}
                className="flex flex-col rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_12px_40px_-16px_rgba(17,17,17,0.1)]"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e3e3e3",
                }}
              >
                <span
                  className="text-[0.78rem] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(17,17,17,0.4)" }}
                >
                  {plan.name}
                </span>
                <p
                  className="mt-1 text-[0.92rem] leading-snug"
                  style={{ color: "#626262" }}
                >
                  {plan.tagline}
                </p>
                <span
                  className="mt-2 text-[0.7rem] uppercase tracking-[0.14em]"
                  style={{ color: "rgba(17,17,17,0.3)" }}
                >
                  {plan.credits} credits/mo
                </span>
                <div className="mt-6 flex items-end gap-1">
                  {price !== null ? (
                    <>
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.1rem, 4vw, 2.9rem)",
                          color: "#111111",
                        }}
                      >
                        ${price}
                      </span>
                      <span
                        className="mb-1.5 text-[0.82rem]"
                        style={{ color: "rgba(17,17,17,0.38)" }}
                      >
                        / mo
                      </span>
                    </>
                  ) : (
                    <span
                      className="leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        color: "#111111",
                      }}
                    >
                      Custom
                    </span>
                  )}
                </div>
                <a
                  href={plan.ctaHref}
                  target={
                    plan.ctaHref.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    plan.ctaHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl py-3 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-900 hover:text-white"
                  style={{
                    background: "transparent",
                    color: "#111111",
                    border: "1px solid #111111",
                  }}
                >
                  {plan.cta}
                </a>
                <div
                  className="mt-7 h-px w-full"
                  style={{ background: "#e3e3e3" }}
                />
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[0.88rem] leading-snug"
                      style={{ color: "#626262" }}
                    >
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <CompareLink />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION B — Highlighted Center
   White bg · Premium LARGER + elevated · Agency slim banner
   ═══════════════════════════════════════════════════════════ */

function OptionB() {
  const [billing, setBilling] = useState<BillingPeriod>("yearly");

  const mainPlans = PLANS.slice(0, 3);

  return (
    <section className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader billing={billing} setBilling={setBilling} />

        {/* 3 card flex — non-featured shrink with top/bottom margin */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-3">
          {mainPlans.map((plan, idx) => {
            const price = plan.price[billing];
            const isFeatured = plan.featured;

            if (isFeatured) {
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.72,
                    delay: 0.1,
                    ease: EASE,
                  }}
                  className="relative md:flex-[1.28]"
                  style={{
                    background: RAINBOW,
                    borderRadius: "20px",
                    padding: "2px",
                    boxShadow: "0 32px 80px -20px rgba(0,0,0,0.18)",
                    zIndex: 10,
                  }}
                >
                  <PremiumCardInner
                    plan={plan}
                    billing={billing}
                    radiusPx={18}
                  />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.08,
                  ease: EASE,
                }}
                className="relative flex flex-col rounded-2xl p-7 md:flex-1"
                style={{
                  background: "#fafafa",
                  border: "1px solid #e3e3e3",
                  marginTop: "24px",
                  marginBottom: "24px",
                }}
              >
                <span
                  className="text-[0.78rem] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(17,17,17,0.4)" }}
                >
                  {plan.name}
                </span>
                <p
                  className="mt-1 text-[0.92rem] leading-snug"
                  style={{ color: "#626262" }}
                >
                  {plan.tagline}
                </p>
                <span
                  className="mt-2 text-[0.7rem] uppercase tracking-[0.14em]"
                  style={{ color: "rgba(17,17,17,0.28)" }}
                >
                  {plan.credits} credits/mo
                </span>
                <div className="mt-6 flex items-end gap-1">
                  {price !== null ? (
                    <>
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                          color: "#111111",
                        }}
                      >
                        ${price}
                      </span>
                      <span
                        className="mb-1.5 text-[0.82rem]"
                        style={{ color: "rgba(17,17,17,0.38)" }}
                      >
                        / mo
                      </span>
                    </>
                  ) : (
                    <span
                      className="leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.9rem",
                        color: "#111111",
                      }}
                    >
                      Custom
                    </span>
                  )}
                </div>
                <a
                  href={plan.ctaHref}
                  target={
                    plan.ctaHref.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    plan.ctaHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl py-3 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "transparent",
                    color: "#111111",
                    border: "1px solid #c8c8c8",
                  }}
                >
                  {plan.cta}
                </a>
                <div
                  className="mt-7 h-px w-full"
                  style={{ background: "#e3e3e3" }}
                />
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[0.88rem] leading-snug"
                      style={{ color: "#626262" }}
                    >
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Agency banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 px-7 py-6"
          style={{ borderColor: "#e3e3e3", background: "#fafafa" }}
        >
          <div>
            <span
              className="text-[0.72rem] uppercase tracking-[0.2em]"
              style={{ color: "rgba(17,17,17,0.35)" }}
            >
              Agency
            </span>
            <p
              className="mt-0.5 text-[0.96rem] font-medium"
              style={{ color: "#111111" }}
            >
              Need enterprise scale? Custom credits, white-label, and a
              dedicated account manager.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-xl px-7 py-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#111111", color: "#ffffff" }}
          >
            Talk to us &rarr;
          </a>
        </motion.div>

        <CompareLink />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION C — Compact Comparison (Table-inspired)
   White bg · Single wide container · 4 plan columns
   Desktop: table · Mobile: stacked cards
   ═══════════════════════════════════════════════════════════ */

const TABLE_FEATURES: { label: string; values: string[] }[] = [
  { label: "Credits / mo", values: ["1,350", "3,450", "8,500", "Custom"] },
  { label: "Posts / mo", values: ["40", "120", "Unlimited", "Custom"] },
  { label: "SEO pages / mo", values: ["4", "8", "16", "Custom"] },
  { label: "Ads management", values: ["—", "Included", "Included", "Included"] },
  { label: "AI Voice Secretary", values: ["—", "120 min", "400 min", "Custom"] },
];

function OptionC() {
  const [billing, setBilling] = useState<BillingPeriod>("yearly");

  return (
    <section className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader billing={billing} setBilling={setBilling} />

        {/* ── Desktop Table ── */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, delay: 0.12 }}
        >
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "#e3e3e3" }}
          >
            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "190px repeat(4, 1fr)",
              }}
            >
              {/* Empty label cell */}
              <div
                className="px-6 py-6 border-r border-b"
                style={{ borderColor: "#e3e3e3", background: "#fafafa" }}
              />
              {PLANS.map((plan, pIdx) => {
                const price = plan.price[billing];
                const isFeatured = plan.featured;
                return (
                  <div
                    key={plan.id}
                    className="relative px-6 py-6 border-b"
                    style={{
                      borderColor: "#e3e3e3",
                      borderRight:
                        pIdx < PLANS.length - 1 ? "1px solid #e3e3e3" : "none",
                      background: isFeatured ? "#f9f7ff" : "#fafafa",
                    }}
                  >
                    {/* Rainbow top stripe on Premium */}
                    {isFeatured && (
                      <div
                        className="absolute top-0 left-0 right-0"
                        style={{ height: "3px", background: RAINBOW }}
                      />
                    )}
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[0.72rem] uppercase tracking-[0.2em]"
                        style={{ color: "rgba(17,17,17,0.4)" }}
                      >
                        {plan.name}
                      </span>
                      {isFeatured && (
                        <span
                          className="rounded-full px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em]"
                          style={{
                            background: "#111111",
                            color: "#ffffff",
                          }}
                        >
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="mt-2.5 flex items-end gap-0.5">
                      {price !== null ? (
                        <>
                          <span
                            className="leading-none"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "1.75rem",
                              color: "#111111",
                            }}
                          >
                            ${price}
                          </span>
                          <span
                            className="mb-0.5 text-[0.75rem]"
                            style={{ color: "rgba(17,17,17,0.38)" }}
                          >
                            /mo
                          </span>
                        </>
                      ) : (
                        <span
                          className="leading-none"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.45rem",
                            color: "#111111",
                          }}
                        >
                          Custom
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-1.5 text-[0.78rem] leading-snug"
                      style={{ color: "#8c8c8c" }}
                    >
                      {plan.tagline}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Feature rows */}
            {TABLE_FEATURES.map((row, rIdx) => (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "190px repeat(4, 1fr)",
                  background: rIdx % 2 === 0 ? "#ffffff" : "#fafafa",
                }}
              >
                <div
                  className="px-6 py-4 border-r text-[0.83rem] font-medium"
                  style={{
                    borderColor: "#e3e3e3",
                    color: "#111111",
                    borderRight: "1px solid #e3e3e3",
                  }}
                >
                  {row.label}
                </div>
                {row.values.map((val, vIdx) => (
                  <div
                    key={vIdx}
                    className="px-6 py-4 text-[0.83rem] text-center"
                    style={{
                      borderRight:
                        vIdx < row.values.length - 1
                          ? "1px solid #e3e3e3"
                          : "none",
                      borderColor: "#e3e3e3",
                      color:
                        val === "—" ? "rgba(17,17,17,0.2)" : "#333333",
                      background: vIdx === 2 ? "#f9f7ff" : "transparent",
                      fontWeight: val !== "—" && vIdx === 2 ? 500 : 400,
                    }}
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA row */}
            <div
              className="border-t"
              style={{
                display: "grid",
                gridTemplateColumns: "190px repeat(4, 1fr)",
                borderColor: "#e3e3e3",
              }}
            >
              <div
                className="border-r"
                style={{ borderColor: "#e3e3e3" }}
              />
              {PLANS.map((plan, pIdx) => (
                <div
                  key={plan.id}
                  className="p-5"
                  style={{
                    borderRight:
                      pIdx < PLANS.length - 1 ? "1px solid #e3e3e3" : "none",
                    borderColor: "#e3e3e3",
                    background: plan.featured ? "#f9f7ff" : "transparent",
                  }}
                >
                  <a
                    href={plan.ctaHref}
                    target={
                      plan.ctaHref.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      plan.ctaHref.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex w-full items-center justify-center rounded-xl py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: plan.featured ? "#111111" : "transparent",
                      color: plan.featured ? "#ffffff" : "#111111",
                      border: plan.featured ? "none" : "1px solid #c8c8c8",
                    }}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: stacked cards ── */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {PLANS.map((plan, idx) => {
            const price = plan.price[billing];
            if (plan.featured) {
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="relative"
                  style={{
                    background: RAINBOW,
                    borderRadius: "16px",
                    padding: "2px",
                  }}
                >
                  <PremiumCardInner plan={plan} billing={billing} />
                </motion.div>
              );
            }
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="rounded-2xl border p-6 flex flex-col"
                style={{ borderColor: "#e3e3e3", background: "#fafafa" }}
              >
                <span
                  className="text-[0.75rem] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(17,17,17,0.4)" }}
                >
                  {plan.name}
                </span>
                <div className="mt-3 flex items-end gap-1">
                  {price !== null ? (
                    <>
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "2rem",
                          color: "#111111",
                        }}
                      >
                        ${price}
                      </span>
                      <span
                        className="mb-1 text-[0.8rem]"
                        style={{ color: "rgba(17,17,17,0.38)" }}
                      >
                        /mo
                      </span>
                    </>
                  ) : (
                    <span
                      className="leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.8rem",
                        color: "#111111",
                      }}
                    >
                      Custom
                    </span>
                  )}
                </div>
                <a
                  href={plan.ctaHref}
                  target={
                    plan.ctaHref.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    plan.ctaHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-all"
                  style={{
                    background: "transparent",
                    color: "#111111",
                    border: "1px solid #c8c8c8",
                  }}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <CompareLink />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION D — Cards with Gradient Accent
   Subtle gradient bg · Colored top border per card
   Full-width rainbow separator line · Hover lift
   ═══════════════════════════════════════════════════════════ */

const TOP_BORDER_COLORS = [
  "#9ca3af",
  "#3b82f6",
  RAINBOW,
  "#f97316",
];

function OptionD() {
  const [billing, setBilling] = useState<BillingPeriod>("yearly");

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
  };
  const card = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.62, ease: EASE },
    },
  };

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, rgba(237,233,254,0.28) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="tracking-[-0.028em] leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
              color: "#111111",
            }}
          >
            {HEADLINE}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-4 text-[1.02rem] leading-relaxed mx-auto max-w-[420px]"
            style={{ color: "#6b6b6b" }}
          >
            {SUBTITLE}
          </motion.p>

          {/* Full-width rainbow separator */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mt-8 mb-8"
            style={{
              transformOrigin: "center",
              height: "1px",
              maxWidth: "480px",
              background: RAINBOW,
              opacity: 0.45,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BillingToggle billing={billing} setBilling={setBilling} />
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {PLANS.map((plan, idx) => {
            const price = plan.price[billing];
            const isFeatured = plan.featured;
            const topColor = TOP_BORDER_COLORS[idx];

            return (
              <motion.div
                key={plan.id}
                variants={card}
                className="group relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_56px_-14px_rgba(17,17,17,0.1)]"
                style={{
                  background: isFeatured
                    ? "rgba(139,92,246,0.04)"
                    : "#ffffff",
                  border: "1px solid",
                  borderColor: isFeatured
                    ? "rgba(139,92,246,0.18)"
                    : "#e3e3e3",
                  paddingTop: "calc(1.75rem + 3px)",
                  overflow: "hidden",
                }}
              >
                {/* Top border — colored */}
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: "3px",
                    background: topColor,
                  }}
                />

                {/* Popular badge */}
                {isFeatured && (
                  <span
                    className="absolute top-4 right-5 rounded-full px-3 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
                    style={{ background: "#111111", color: "#ffffff" }}
                  >
                    Popular
                  </span>
                )}

                <span
                  className="text-[0.78rem] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(17,17,17,0.4)" }}
                >
                  {plan.name}
                </span>
                <p
                  className="mt-1 text-[0.92rem] leading-snug"
                  style={{ color: "#626262" }}
                >
                  {plan.tagline}
                </p>
                <span
                  className="mt-2 text-[0.7rem] uppercase tracking-[0.14em]"
                  style={{ color: "rgba(17,17,17,0.28)" }}
                >
                  {plan.credits} credits/mo
                </span>
                <div className="mt-6 flex items-end gap-1">
                  {price !== null ? (
                    <>
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2rem, 4vw, 2.75rem)",
                          color: "#111111",
                        }}
                      >
                        ${price}
                      </span>
                      <span
                        className="mb-1.5 text-[0.82rem]"
                        style={{ color: "rgba(17,17,17,0.38)" }}
                      >
                        / mo
                      </span>
                    </>
                  ) : (
                    <span
                      className="leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        color: "#111111",
                      }}
                    >
                      Custom
                    </span>
                  )}
                </div>
                <a
                  href={plan.ctaHref}
                  target={
                    plan.ctaHref.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    plan.ctaHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl py-3 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: isFeatured ? "#111111" : "transparent",
                    color: isFeatured ? "#ffffff" : "#111111",
                    border: isFeatured ? "none" : "1px solid #c8c8c8",
                  }}
                >
                  {plan.cta}
                </a>
                <div
                  className="mt-7 h-px w-full"
                  style={{ background: "#e3e3e3" }}
                />
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[0.88rem] leading-snug"
                      style={{ color: "#626262" }}
                    >
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <CompareLink />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION E — Dark Pricing
   Dark bg (#0a0a0a) · Dark cards · Dot grid · Glow behind cards
   ═══════════════════════════════════════════════════════════ */

function OptionE() {
  const [billing, setBilling] = useState<BillingPeriod>("yearly");

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
  };
  const card = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.62, ease: EASE },
    },
  };

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          animation: "pricing-dot-pulse 7s ease-in-out infinite",
        }}
      />

      {/* Glow blob behind cards */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "860px",
          height: "420px",
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.09) 0%, rgba(236,72,153,0.05) 50%, transparent 72%)",
          filter: "blur(70px)",
          animation: "pricing-glow-breathe 8s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader billing={billing} setBilling={setBilling} dark />

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {PLANS.map((plan) => {
            const price = plan.price[billing];

            if (plan.featured) {
              return (
                <motion.div
                  key={plan.id}
                  variants={card}
                  className="relative"
                  style={{
                    background: RAINBOW,
                    borderRadius: "16px",
                    padding: "2px",
                  }}
                >
                  <PremiumCardInner plan={plan} billing={billing} />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.id}
                variants={card}
                className="flex flex-col rounded-2xl p-7 transition-all duration-300 hover:border-white/[0.14]"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="text-[0.78rem] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(255,255,255,0.32)" }}
                >
                  {plan.name}
                </span>
                <p
                  className="mt-1 text-[0.92rem] leading-snug"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {plan.tagline}
                </p>
                <span
                  className="mt-2 text-[0.7rem] uppercase tracking-[0.14em]"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  {plan.credits} credits/mo
                </span>
                <div className="mt-6 flex items-end gap-1">
                  {price !== null ? (
                    <>
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.1rem, 4vw, 2.9rem)",
                          color: "#ffffff",
                        }}
                      >
                        ${price}
                      </span>
                      <span
                        className="mb-1.5 text-[0.82rem]"
                        style={{ color: "rgba(255,255,255,0.32)" }}
                      >
                        / mo
                      </span>
                    </>
                  ) : (
                    <span
                      className="leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        color: "#ffffff",
                      }}
                    >
                      Custom
                    </span>
                  )}
                </div>
                <a
                  href={plan.ctaHref}
                  target={
                    plan.ctaHref.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    plan.ctaHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl py-3 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "transparent",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  {plan.cta}
                </a>
                <div
                  className="mt-7 h-px w-full"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[0.88rem] leading-snug"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      <CheckIcon dim />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <CompareLink dark />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER SHARED DATA
   ───────────────────────────────────────────────────────────── */

const FOOTER_BRAND = "SOLARA AI";
const FOOTER_TAGLINE = "AI-powered marketing that runs 24/7.";
const FOOTER_COPYRIGHT = "\u00a9 2024\u20132026 Solara AI, Inc.";

const F_PRODUCT: { label: string; href: string }[] = [
  { label: "Ads", href: "/ads" },
  { label: "SEO", href: "/seo" },
  { label: "Content", href: "/content" },
  { label: "Social Media", href: "/social" },
  { label: "Website", href: "/website" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
];
const F_RESOURCES: { label: string; href: string }[] = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Changelog", href: "/changelog" },
];
const F_COMPARE: { label: string; href: string }[] = [
  { label: "vs Jasper", href: "/vs/jasper-ai" },
  { label: "vs AdCreative", href: "/vs/adcreative-ai" },
  { label: "vs Ocoya", href: "/vs/ocoya" },
  { label: "vs HubSpot", href: "/vs/hubspot-marketing" },
];
const F_COMPANY: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
];
const F_SOCIALS = [
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com", label: "X" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];
const F_LEGAL = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
];

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION A — Clean Light
   White/very light bg · 5-column grid · thin border bottom
   Atomic-inspired precision layout
   ───────────────────────────────────────────────────────────── */

function FooterA() {
  return (
    <footer style={{ background: "#FAFAFA", borderTop: "1px solid #eaecf0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "210px 1fr 1fr 1fr 1fr",
            columnGap: 44,
            rowGap: 40,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.93rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#0f0f0f",
                marginBottom: 12,
              }}
            >
              {FOOTER_BRAND}
            </div>
            <p
              style={{
                fontSize: "0.84rem",
                lineHeight: 1.65,
                color: "#6b7280",
                marginBottom: 28,
                maxWidth: 170,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              {FOOTER_TAGLINE}
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "#c4c9d4", display: "flex", transition: "color 0.2s" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#374151")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#c4c9d4")
                  }
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {([
            { heading: "Product", links: F_PRODUCT },
            { heading: "Resources", links: F_RESOURCES },
            { heading: "Compare", links: F_COMPARE },
            { heading: "Company", links: F_COMPANY },
          ] as { heading: string; links: { label: string; href: string }[] }[]).map(
            ({ heading, links }) => (
              <div key={heading}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.67rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#111",
                    marginBottom: 16,
                  }}
                >
                  {heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: "0.855rem",
                          color: "#6b7280",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "#111")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #eaecf0",
            marginTop: 48,
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
            {FOOTER_COPYRIGHT}
          </span>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {F_LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: "0.78rem", color: "#9ca3af", textDecoration: "none" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#374151")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#9ca3af")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION B — Minimal Dark
   #0a0a0a bg · subtle gray circle social icons · Linear-inspired
   White/60% links · white/30% secondary text
   ───────────────────────────────────────────────────────────── */

function FooterB() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr 1fr 1fr",
            columnGap: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.93rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#ffffff",
                marginBottom: 10,
              }}
            >
              {FOOTER_BRAND}
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.32)",
                marginBottom: 32,
                maxWidth: 180,
              }}
            >
              {FOOTER_TAGLINE}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.35)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.28)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.35)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {([
            { heading: "Product", links: F_PRODUCT },
            {
              heading: "Resources & Compare",
              links: [...F_RESOURCES, ...F_COMPARE],
            },
            { heading: "Company", links: F_COMPANY },
          ] as { heading: string; links: { label: string; href: string }[] }[]).map(
            ({ heading, links }) => (
              <div key={heading}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: 18,
                  }}
                >
                  {heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 11,
                  }}
                >
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: "0.845rem",
                          color: "rgba(255,255,255,0.52)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.9)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.52)")
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #1a1a1a",
            marginTop: 48,
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.77rem", color: "rgba(255,255,255,0.22)" }}>
            {FOOTER_COPYRIGHT}
          </span>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {F_LEGAL.map((l, i) => (
              <span
                key={l.href}
                style={{ display: "flex", alignItems: "center", gap: 4 }}
              >
                {i > 0 && (
                  <span
                    style={{
                      color: "rgba(255,255,255,0.15)",
                      fontSize: "0.7rem",
                    }}
                  >
                    &middot;
                  </span>
                )}
                <Link
                  href={l.href}
                  style={{
                    fontSize: "0.77rem",
                    color: "rgba(255,255,255,0.22)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.55)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.22)")
                  }
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION C — Two-Row
   Light bg · Row 1: Brand + Product columns · Row 2: Resources + Compare + Social + Legal
   Subtle divider between rows
   ───────────────────────────────────────────────────────────── */

function FooterC() {
  return (
    <footer
      style={{
        background: "#F8F9FA",
        borderTop: "1px solid #e9ecef",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 0" }}>
        {/* Row 1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr 1fr 1fr",
            columnGap: 48,
            paddingBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.93rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#0f0f0f",
                marginBottom: 12,
              }}
            >
              {FOOTER_BRAND}
            </div>
            <p
              style={{
                fontSize: "0.84rem",
                lineHeight: 1.65,
                color: "#6b7280",
                maxWidth: 195,
              }}
            >
              {FOOTER_TAGLINE}
            </p>
          </div>
          {([
            { heading: "Product", links: F_PRODUCT.slice(0, 4) },
            { heading: "", links: F_PRODUCT.slice(4) },
            { heading: "Company", links: F_COMPANY },
          ] as { heading: string; links: { label: string; href: string }[] }[]).map(
            ({ heading, links }, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.67rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: heading ? "#111" : "transparent",
                    marginBottom: 16,
                    userSelect: "none",
                  }}
                >
                  {heading || "\u00a0"}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                  }}
                >
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: "0.855rem",
                          color: "#6b7280",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "#111")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* Row divider */}
        <div style={{ height: 1, background: "#e9ecef" }} />

        {/* Row 2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            columnGap: 48,
            paddingTop: 36,
            alignItems: "start",
          }}
        >
          {/* Resources */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.67rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#111",
                marginBottom: 16,
              }}
            >
              Resources
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 9,
              }}
            >
              {F_RESOURCES.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "0.855rem",
                      color: "#6b7280",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#111")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.67rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#111",
                marginBottom: 16,
              }}
            >
              Compare
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 9,
              }}
            >
              {F_COMPARE.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "0.855rem",
                      color: "#6b7280",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#111")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.67rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#111",
                marginBottom: 16,
              }}
            >
              Follow
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "#6b7280",
                    textDecoration: "none",
                    fontSize: "0.855rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#111")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                  }
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.67rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "transparent",
                marginBottom: 16,
                userSelect: "none",
              }}
            >
              &nbsp;
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, alignItems: "flex-end" }}>
              {F_LEGAL.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "0.855rem",
                    color: "#9ca3af",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#374151")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#9ca3af")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #e9ecef",
            marginTop: 36,
            padding: "16px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
            {FOOTER_COPYRIGHT}
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION D — Centered
   White bg · logo centered · 4-column grid centered · social centered
   Symmetrical and clean
   ───────────────────────────────────────────────────────────── */

function FooterD() {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #eaecf0",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 40px 0",
          textAlign: "center",
        }}
      >
        {/* Brand centered */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 800,
            letterSpacing: "0.14em",
            color: "#0f0f0f",
            marginBottom: 12,
          }}
        >
          {FOOTER_BRAND}
        </div>
        <p
          style={{
            fontSize: "0.88rem",
            color: "#9ca3af",
            maxWidth: 280,
            margin: "0 auto 48px",
          }}
        >
          {FOOTER_TAGLINE}
        </p>

        {/* 4 columns centered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 40,
            textAlign: "left",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {([
            { heading: "Product", links: F_PRODUCT },
            { heading: "Resources", links: F_RESOURCES },
            { heading: "Compare", links: F_COMPARE },
            { heading: "Company", links: F_COMPANY },
          ] as { heading: string; links: { label: string; href: string }[] }[]).map(
            ({ heading, links }) => (
              <div key={heading}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.67rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#111",
                    marginBottom: 16,
                    textAlign: "center",
                  }}
                >
                  {heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                    alignItems: "center",
                  }}
                >
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: "0.845rem",
                          color: "#6b7280",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "#111")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* Social icons centered */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 48,
          }}
        >
          {F_SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid #eaecf0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#d1d5db";
                (e.currentTarget as HTMLElement).style.color = "#374151";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#eaecf0";
                (e.currentTarget as HTMLElement).style.color = "#9ca3af";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #eaecf0",
            marginTop: 40,
            padding: "18px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
            {FOOTER_COPYRIGHT}
          </span>
          <div style={{ display: "flex", gap: 16 }}>
            {F_LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.78rem",
                  color: "#c4c9d4",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#c4c9d4")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION E — Dark with Gradient Accent
   #040406 bg · rainbow gradient line at top · animated gradient
   4 columns · hover effects on social icons
   ───────────────────────────────────────────────────────────── */

function FooterE() {
  return (
    <footer
      style={{
        background: "#040406",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Rainbow accent line */}
      <div
        style={{
          height: 2,
          background: RAINBOW,
          backgroundSize: "300% 300%",
          animation: "pricing-gradient-shift 8s linear infinite",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr 1fr 1fr 1fr",
            columnGap: 40,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.93rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#ffffff",
                marginBottom: 12,
              }}
            >
              {FOOTER_BRAND}
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.38)",
                marginBottom: 28,
                maxWidth: 175,
              }}
            >
              {FOOTER_TAGLINE}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.4)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(168,85,247,0.6)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(168,85,247,1)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 12px rgba(168,85,247,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.4)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {([
            { heading: "Product", links: F_PRODUCT },
            { heading: "Resources", links: F_RESOURCES },
            { heading: "Compare", links: F_COMPARE },
            { heading: "Company", links: F_COMPANY },
          ] as { heading: string; links: { label: string; href: string }[] }[]).map(
            ({ heading, links }) => (
              <div key={heading}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.28)",
                    marginBottom: 18,
                  }}
                >
                  {heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 11,
                  }}
                >
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: "0.845rem",
                          color: "rgba(255,255,255,0.5)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.9)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.5)")
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            marginTop: 48,
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>
            {FOOTER_COPYRIGHT}
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {F_LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.55)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.2)")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION F — Compact Single-Row
   #FAFAFA bg · one horizontal row · ultra-minimal
   Logo | links with dot separators | social + copyright
   ───────────────────────────────────────────────────────────── */

const F_QUICK_LINKS: { label: string; href: string }[] = [
  { label: "Product", href: "/ads" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function FooterF() {
  return (
    <footer
      style={{
        background: "#FAFAFA",
        borderTop: "1px solid #eaecf0",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "22px 40px" }}>
        {/* Single row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {/* Brand */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.88rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              color: "#0f0f0f",
            }}
          >
            {FOOTER_BRAND}
          </div>

          {/* Quick links with dot separators */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {F_QUICK_LINKS.map((l, i) => (
              <span
                key={l.href}
                style={{ display: "flex", alignItems: "center" }}
              >
                {i > 0 && (
                  <span
                    style={{
                      color: "#d1d5db",
                      margin: "0 12px",
                      fontSize: "0.75rem",
                      userSelect: "none",
                    }}
                  >
                    &middot;
                  </span>
                )}
                <Link
                  href={l.href}
                  style={{
                    fontSize: "0.845rem",
                    color: "#6b7280",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#111")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                  }
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </div>

          {/* Social + copyright */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", gap: 14 }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "#c4c9d4", display: "flex", transition: "color 0.2s" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#c4c9d4")
                  }
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                color: "#c4c9d4",
                borderLeft: "1px solid #e9ecef",
                paddingLeft: 16,
              }}
            >
              {FOOTER_COPYRIGHT}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION G — Newsletter CTA + Links
   White bg · email signup left · 4 link columns right
   Dark subscribe button · social icons below form
   ───────────────────────────────────────────────────────────── */

function FooterG() {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #eaecf0",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            columnGap: 80,
          }}
        >
          {/* Newsletter side */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.93rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#0f0f0f",
                marginBottom: 12,
              }}
            >
              {FOOTER_BRAND}
            </div>
            <p
              style={{
                fontSize: "0.84rem",
                color: "#6b7280",
                lineHeight: 1.65,
                marginBottom: 28,
              }}
            >
              {FOOTER_TAGLINE}
            </p>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#374151",
                marginBottom: 12,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-display)",
              }}
            >
              Stay in the loop
            </p>
            <div
              style={{
                display: "flex",
                border: "1px solid #eaecf0",
                borderRadius: 8,
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <input
                type="email"
                placeholder="Your work email"
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  fontSize: "0.84rem",
                  border: "none",
                  outline: "none",
                  color: "#374151",
                  background: "transparent",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              />
              <button
                type="button"
                style={{
                  padding: "10px 18px",
                  background: "#111111",
                  color: "#ffffff",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "background 0.2s",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#2d2d2d")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#111111")
                }
              >
                Subscribe
                <ArrowRight size={13} />
              </button>
            </div>
            <p
              style={{
                fontSize: "0.73rem",
                color: "#9ca3af",
                marginTop: 10,
              }}
            >
              No spam. Unsubscribe anytime.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "#c4c9d4", display: "flex", transition: "color 0.2s" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#374151")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#c4c9d4")
                  }
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Links side */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 40,
            }}
          >
            {([
              { heading: "Product", links: F_PRODUCT },
              { heading: "Resources", links: F_RESOURCES },
              { heading: "Compare", links: F_COMPARE },
              { heading: "Company", links: F_COMPANY },
            ] as { heading: string; links: { label: string; href: string }[] }[]).map(
              ({ heading, links }) => (
                <div key={heading}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.67rem",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#111",
                      marginBottom: 16,
                    }}
                  >
                    {heading}
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                    }}
                  >
                    {links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          style={{
                            fontSize: "0.845rem",
                            color: "#6b7280",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "#111")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                          }
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #eaecf0",
            marginTop: 48,
            padding: "18px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
            {FOOTER_COPYRIGHT}
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {F_LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.78rem",
                  color: "#9ca3af",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#374151")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#9ca3af")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION H — Striped Columns
   #FAFAFA bg · dotted left borders between columns · Stripe-inspired
   Brand in first column · structured delineation
   ───────────────────────────────────────────────────────────── */

function FooterH() {
  return (
    <footer
      style={{
        background: "#FAFAFA",
        borderTop: "1px solid #eaecf0",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr 1fr 1fr 1fr",
          }}
        >
          {/* Brand column — no left border */}
          <div style={{ paddingRight: 40 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.93rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#0f0f0f",
                marginBottom: 12,
              }}
            >
              {FOOTER_BRAND}
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.65,
                color: "#9ca3af",
                maxWidth: 155,
                marginBottom: 28,
              }}
            >
              {FOOTER_TAGLINE}
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "#c4c9d4", display: "flex", transition: "color 0.2s" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#374151")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#c4c9d4")
                  }
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — dotted left borders */}
          {([
            { heading: "Product", links: F_PRODUCT },
            { heading: "Resources", links: F_RESOURCES },
            { heading: "Compare", links: F_COMPARE },
            { heading: "Company", links: F_COMPANY },
          ] as { heading: string; links: { label: string; href: string }[] }[]).map(
            ({ heading, links }) => (
              <div
                key={heading}
                style={{
                  borderLeft: "1px dashed #e0e0e0",
                  paddingLeft: 32,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.67rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#111",
                    marginBottom: 16,
                  }}
                >
                  {heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                  }}
                >
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: "0.845rem",
                          color: "#6b7280",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "#111")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #eaecf0",
            marginTop: 48,
            padding: "18px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
            {FOOTER_COPYRIGHT}
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {F_LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.78rem",
                  color: "#9ca3af",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#374151")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#9ca3af")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION I — Big Brand Statement
   Dark bg #0D0D0D · large display headline · 4 columns · social bottom-left
   Dramatic, editorial, high-impact
   ───────────────────────────────────────────────────────────── */

function FooterI() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px 0" }}>
        {/* Large statement */}
        <div style={{ marginBottom: 60, maxWidth: 760 }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            Your marketing department,{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>reimagined.</span>
          </div>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.38)",
              maxWidth: 460,
              lineHeight: 1.65,
            }}
          >
            {FOOTER_TAGLINE}
          </p>
        </div>

        {/* 4 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 40,
          }}
        >
          {([
            { heading: "Product", links: F_PRODUCT },
            { heading: "Resources", links: F_RESOURCES },
            { heading: "Compare", links: F_COMPARE },
            { heading: "Company", links: F_COMPANY },
          ] as { heading: string; links: { label: string; href: string }[] }[]).map(
            ({ heading, links }) => (
              <div key={heading}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: 18,
                  }}
                >
                  {heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 11,
                  }}
                >
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        style={{
                          fontSize: "0.845rem",
                          color: "rgba(255,255,255,0.48)",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.88)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.48)")
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            marginTop: 56,
            padding: "20px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              {FOOTER_BRAND}
            </span>
            <div style={{ display: "flex", gap: 12 }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: "rgba(255,255,255,0.28)",
                    display: "flex",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.7)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.28)")
                  }
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span
              style={{
                fontSize: "0.77rem",
                color: "rgba(255,255,255,0.2)",
                marginRight: 16,
              }}
            >
              {FOOTER_COPYRIGHT}
            </span>
            {F_LEGAL.map((l, i) => (
              <span
                key={l.href}
                style={{ display: "flex", alignItems: "center", gap: 4 }}
              >
                {i > 0 && (
                  <span
                    style={{
                      color: "rgba(255,255,255,0.15)",
                      fontSize: "0.65rem",
                    }}
                  >
                    &middot;
                  </span>
                )}
                <Link
                  href={l.href}
                  style={{
                    fontSize: "0.77rem",
                    color: "rgba(255,255,255,0.2)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.55)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.2)")
                  }
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER OPTION J — Split Footer
   Top dark #111111: logo + tagline + CTA button
   Bottom light #FAFAFA: 4 columns + copyright
   Two distinct zones · strong visual contrast
   ───────────────────────────────────────────────────────────── */

function FooterJ() {
  return (
    <footer style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Top dark zone */}
      <div style={{ background: "#111111", padding: "52px 40px 48px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#ffffff",
                marginBottom: 10,
              }}
            >
              {FOOTER_BRAND}
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.42)",
                maxWidth: 320,
                lineHeight: 1.6,
              }}
            >
              {FOOTER_TAGLINE}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", gap: 14 }}>
              {F_SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    display: "flex",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.8)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.35)")
                  }
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <a
              href="https://app.solaraai.com/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 24px",
                background: "#ffffff",
                color: "#111111",
                fontSize: "0.84rem",
                fontWeight: 700,
                borderRadius: 8,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#f0f0f0";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#ffffff";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Start for free
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom light zone */}
      <div
        style={{
          background: "#FAFAFA",
          borderTop: "1px solid #eaecf0",
          padding: "48px 40px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 40,
            }}
          >
            {([
              { heading: "Product", links: F_PRODUCT },
              { heading: "Resources", links: F_RESOURCES },
              { heading: "Compare", links: F_COMPARE },
              { heading: "Company", links: F_COMPANY },
            ] as { heading: string; links: { label: string; href: string }[] }[]).map(
              ({ heading, links }) => (
                <div key={heading}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.67rem",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#111",
                      marginBottom: 16,
                    }}
                  >
                    {heading}
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                    }}
                  >
                    {links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          style={{
                            fontSize: "0.845rem",
                            color: "#6b7280",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "#111")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                          }
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid #eaecf0",
              marginTop: 40,
              padding: "18px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
              {FOOTER_COPYRIGHT}
            </span>
            <div style={{ display: "flex", gap: 20 }}>
              {F_LEGAL.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "0.78rem",
                    color: "#9ca3af",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#374151")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#9ca3af")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
            transition={{ duration: 0.35, ease: EASE }}
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
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREVIEW PAGE
   ═══════════════════════════════════════════════════════════ */

export default function PreviewPage() {
  return (
    <div style={{ background: "#0a0a0a" }}>
      <style>{KEYFRAMES}</style>

      {/* Page header */}
      <div className="pt-16 pb-4 text-center">
        <h1
          className="text-2xl font-semibold tracking-tight"
          style={{ color: "#e5e5e5" }}
        >
          Pricing Section — 5 Options
        </h1>
        <p className="mt-2 text-sm" style={{ color: "#555" }}>
          5 visual options — scroll to compare
        </p>
      </div>

      <OptionDivider label="Option A — Classic Grid (4-column · White bg · Rainbow Premium card)" />
      <OptionA />
      <OptionDivider label="Option B — Highlighted Center (Premium elevated · Smaller flanking cards · Agency banner)" />
      <OptionB />
      <OptionDivider label="Option C — Compact Comparison (Table layout on desktop · Stacked cards on mobile)" />
      <OptionC />
      <OptionDivider label="Option D — Gradient Accent (Colored top borders · Subtle purple gradient bg · Rainbow separator)" />
      <OptionD />
      <OptionDivider label="Option E — Dark Pricing (Dark bg · Dot grid · Glow blob · White text)" />
      <OptionE />

      {/* Footer Section */}
      <div className="mt-24 mb-8 text-center">
        <h2
          style={{
            fontSize: "2rem",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            color: "#e5e5e5",
          }}
        >
          Footer Options
        </h2>
      </div>

      <OptionDivider label="Footer A — Clean Light (White bg · 5-column grid · Atomic-inspired)" />
      <FooterA />
      <OptionDivider label="Footer B — Minimal Dark (#0a0a0a bg · Circle social icons · Linear-inspired)" />
      <FooterB />
      <OptionDivider label="Footer C — Two-Row (Light bg · Brand+Product top · Resources+Compare+Social bottom)" />
      <FooterC />
      <OptionDivider label="Footer D — Centered (White bg · Everything centered · Symmetrical grid)" />
      <FooterD />
      <OptionDivider label="Footer E — Dark Gradient Accent (#040406 bg · Rainbow top line · Glow hover on social)" />
      <FooterE />
      <OptionDivider label="Footer F — Compact Single-Row (Light bg · One horizontal row · Ultra-minimal)" />
      <FooterF />
      <OptionDivider label="Footer G — Newsletter CTA (White bg · Email input left · 4 link columns right)" />
      <FooterG />
      <OptionDivider label="Footer H — Striped Columns (Light bg · Dotted vertical borders · Stripe-inspired)" />
      <FooterH />
      <OptionDivider label="Footer I — Big Brand Statement (Dark bg · Large display headline · Dramatic)" />
      <FooterI />
      <OptionDivider label="Footer J — Split Footer (Dark top zone · Light bottom zone · Two-part layout)" />
      <FooterJ />

      {/* Agents Section */}
      <div className="mt-24 mb-8 text-center">
        <h2
          style={{
            fontSize: "2rem",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            color: "#e5e5e5",
          }}
        >
          Agents Section
        </h2>
      </div>

      <OptionDivider label="Agents C — Sticky Scroll Reveal (Left sticky panel · Right scroll triggers · Live content update)" />
      <AgentsC />
    </div>
  );
}
