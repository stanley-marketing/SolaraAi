"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

/* ═══════════════════════════════════════════════════════════
   PREVIEW PAGE
   ═══════════════════════════════════════════════════════════ */

export default function PreviewPage() {
  return (
    <div style={{ background: "#0a0a0a" }}>
      <style>{KEYFRAMES}</style>

      {/* Page header */}
      <div
        className="px-6 py-14 text-center"
        style={{ background: "#111111", borderBottom: "1px solid #1e1e1e" }}
      >
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
    </div>
  );
}
