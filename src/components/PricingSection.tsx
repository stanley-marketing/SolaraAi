"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────────────────────── */

const RAINBOW =
  "linear-gradient(135deg, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899, #f97316)";

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const HEADLINE = "Simple pricing. Serious results.";
const SUBTITLE =
  "Every plan includes AI-powered marketing that runs 24/7. Pick the scale that fits.";

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

const TABLE_FEATURES: { label: string; values: string[] }[] = [
  { label: "Credits / mo", values: ["1,350", "3,450", "8,500", "Custom"] },
  { label: "Posts / mo", values: ["40", "120", "Unlimited", "Custom"] },
  { label: "SEO pages / mo", values: ["4", "8", "16", "Custom"] },
  { label: "Ads management", values: ["—", "Included", "Included", "Included"] },
  { label: "AI Voice Secretary", values: ["—", "120 min", "400 min", "Custom"] },
];

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
}: {
  billing: BillingPeriod;
  setBilling: (b: BillingPeriod) => void;
}) {
  return (
    <div
      className="inline-flex items-center rounded-full p-1 gap-1"
      style={{ border: "1px solid #e3e3e3", background: "#fafafa" }}
    >
      {(["monthly", "yearly"] as BillingPeriod[]).map((period) => (
        <button
          key={period}
          onClick={() => setBilling(period)}
          className="rounded-full px-5 py-1.5 text-[0.78rem] uppercase tracking-[0.16em] transition-all duration-200"
          style={{
            background: billing === period ? "#111111" : "transparent",
            color: billing === period ? "#ffffff" : "#626262",
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
}: {
  billing: BillingPeriod;
  setBilling: (b: BillingPeriod) => void;
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
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-8"
      >
        <BillingToggle billing={billing} setBilling={setBilling} />
      </motion.div>
    </div>
  );
}

function CompareLink() {
  return (
    <div className="mt-10 text-center">
      <a
        href="/pricing"
        className="text-[0.84rem] transition-colors duration-200"
        style={{ color: "#9a9a9a" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "#111111";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "#9a9a9a";
        }}
      >
        See full feature comparison &rarr;
      </a>
    </div>
  );
}

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
        rel={plan.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
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
   PRICING SECTION — Compact Comparison (Table-inspired)
   White bg · Single wide container · 4 plan columns
   Desktop: table · Mobile: stacked cards
   ═══════════════════════════════════════════════════════════ */

export function PricingSection() {
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
                        pIdx < PLANS.length - 1
                          ? "1px solid #e3e3e3"
                          : "none",
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
                          style={{ background: "#111111", color: "#ffffff" }}
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
                      color: val === "—" ? "rgba(17,17,17,0.2)" : "#333333",
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
                      pIdx < PLANS.length - 1
                        ? "1px solid #e3e3e3"
                        : "none",
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
