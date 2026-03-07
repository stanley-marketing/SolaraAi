"use client";

import { useState } from "react";
import Link from "next/link";
import { TopNav } from "@/components/LandingSections";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

const plans = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Launch your presence",
    price: { monthly: 29, quarterly: 31, yearly: 23 },
    credits: "1,350",
    cta: "Get started",
    ctaHref: "https://app.solaraai.com/auth/signup",
    featured: false,
    features: [
      "Content planner",
      "Social integrations",
      "Website generator",
      "Brand theme",
      "Unlimited members",
      "Unlimited content publishing",
      "Video content",
      "Infographic videos",
      "4 SEO pages / mo",
      "40 posts / mo",
      "4 videos / mo",
      "100 generated images / mo",
      "Basic analytics",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Run marketing end-to-end",
    price: { monthly: 69, quarterly: 71, yearly: 53 },
    credits: "3,450",
    cta: "Get started",
    ctaHref: "https://app.solaraai.com/auth/signup",
    featured: false,
    features: [
      "Everything in Starter",
      "Website + hosting + security",
      "8 SEO pages / mo",
      "Social content strategy",
      "Digital presenter video",
      "Performance optimization",
      "AI Voice Secretary — 120 min",
      "Paid ads management",
      "Advanced analytics",
      "Continuous site improvements",
      "120 posts / mo",
      "12 videos / mo",
      "300 generated images / mo",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Your autonomous marketing dept",
    price: { monthly: 119, quarterly: 143, yearly: 107 },
    credits: "8,500",
    cta: "Get started",
    ctaHref: "https://app.solaraai.com/auth/signup",
    featured: true,
    features: [
      "Everything in Pro",
      "Enterprise hosting",
      "16 SEO pages / mo",
      "AI Voice Secretary — 400 min",
      "Growth intelligence",
      "Priority support",
      "Unlimited posts / mo",
      "Unlimited videos / mo",
      "Unlimited campaigns / mo",
      "700 generated images / mo",
      "4 site scans / mo",
      "6 presenter video mins",
      "Advanced analytics",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    tagline: "Built for scale",
    price: { monthly: null, quarterly: null, yearly: null },
    credits: "Custom",
    cta: "Talk to us",
    ctaHref: "/contact",
    featured: false,
    features: [
      "Everything in Premium",
      "Custom credit volume",
      "Enterprise hosting",
      "Custom SEO pages / mo",
      "Custom Voice Secretary",
      "Custom presenter video",
      "Custom site scans",
      "Custom campaigns",
      "Custom generated images",
      "Enterprise analytics",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
    ],
  },
];

const billingLabels: Record<BillingPeriod, string> = {
  monthly: "Monthly",
  quarterly: "Quarterly · 20% off",
  yearly: "Yearly · 40% off",
};

const faqs = [
  {
    q: "What are credits and how do they work?",
    a: "Credits power every AI action on the platform — generating content, running SEO scans, creating videos, and more. Each plan comes with a monthly credit allowance: Starter 1,350 / Pro 3,450 / Premium 8,500. Unused credits roll over for 30 days.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes, upgrade or downgrade any time from Settings → Billing. Changes take effect immediately; you'll be charged or credited the prorated difference.",
  },
  {
    q: "How does the referral program work?",
    a: "Invite a friend with your unique link. When they subscribe, you both receive a bonus credit package added to your next billing cycle.",
  },
  {
    q: "How do I cancel?",
    a: "Go to Settings → Billing → Manage Plan → Cancel Subscription. Your plan stays active until the end of the billing period — no hidden fees.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-ink-900">
      <TopNav />

      {/* Hero */}
      <section className="px-6 pb-0 pt-40 text-center sm:px-10">
        <p
          className="mx-auto mb-5 text-[0.8rem] uppercase tracking-[0.26em] text-ink-700/60"
        >
          Pricing
        </p>
        <h1
          className="mx-auto max-w-3xl leading-[0.92] tracking-[-0.02em]"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.4rem)",
            fontFamily: "var(--font-display)",
          }}
        >
          One system.<br />
          Every lever.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[1.07rem] leading-relaxed text-ink-700/70">
          Pick the plan that matches your velocity. Upgrade or cancel anytime.
        </p>

        {/* Billing toggle */}
        <div className="mt-10 inline-flex items-center rounded-full border border-line bg-shell p-1 gap-1">
          {(["monthly", "quarterly", "yearly"] as BillingPeriod[]).map((period) => (
            <button
              key={period}
              onClick={() => setBilling(period)}
              className={`rounded-full px-4 py-1.5 text-[0.8rem] uppercase tracking-[0.16em] transition-all duration-200 ${
                billing === period
                  ? "bg-ink-900 text-white shadow-sm"
                  : "text-ink-700/60 hover:text-ink-900"
              }`}
            >
              {billingLabels[period]}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto mt-14 max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const price = plan.price[billing];
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                  isFeatured
                    ? "border-ink-900 bg-ink-900 text-white shadow-[0_28px_60px_-20px_rgba(17,17,17,0.45)]"
                    : "border-line bg-white hover:border-ink-900/30 hover:shadow-[0_12px_40px_-16px_rgba(17,17,17,0.1)]"
                }`}
              >
                {/* Grain overlay for featured */}
                {isFeatured && (
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.045]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "repeat",
                    }}
                  />
                )}

                {isFeatured && (
                  <div className="mb-4 inline-flex w-fit rounded-full border border-white/20 px-2.5 py-0.5 text-[0.72rem] uppercase tracking-[0.2em] text-white/70">
                    Most popular
                  </div>
                )}

                <div className="mb-1 flex items-center justify-between">
                  <span
                    className={`text-[0.82rem] uppercase tracking-[0.2em] ${
                      isFeatured ? "text-white/50" : "text-ink-700/50"
                    }`}
                  >
                    {plan.name}
                  </span>
                  <span
                    className={`text-[0.72rem] uppercase tracking-[0.16em] ${
                      isFeatured ? "text-white/40" : "text-ink-700/40"
                    }`}
                  >
                    {plan.credits} credits
                  </span>
                </div>

                <p
                  className={`mt-1 text-[0.94rem] leading-snug ${
                    isFeatured ? "text-white/60" : "text-ink-700/60"
                  }`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  {price !== null ? (
                    <>
                      <span
                        className="leading-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.525rem, 4vw, 3.325rem)",
                        }}
                      >
                        ${price}
                      </span>
                      <span
                        className={`mb-1.5 text-[0.84rem] ${
                          isFeatured ? "text-white/40" : "text-ink-700/40"
                        }`}
                      >
                        / mo
                      </span>
                    </>
                  ) : (
                    <span
                      className="leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.925rem, 3vw, 2.525rem)",
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
                  className={`mt-7 inline-flex w-full items-center justify-center rounded-xl py-3 text-[0.84rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5 ${
                    isFeatured
                      ? "bg-white text-ink-900 hover:bg-fog"
                      : "border border-ink-900 bg-transparent text-ink-900 hover:bg-ink-900 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>

                <div
                  className={`mt-7 h-px w-full ${
                    isFeatured ? "bg-white/12" : "bg-line"
                  }`}
                />

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-[0.9rem] leading-snug ${
                        isFeatured ? "text-white/70" : "text-ink-700/80"
                      }`}
                    >
                      <svg
                        className={`mt-0.5 h-3 w-3 shrink-0 ${
                          isFeatured ? "text-white/50" : "text-ink-900/40"
                        }`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metrics strip */}
      <section className="mx-auto mt-20 max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
          {[
            { stat: "50 hrs", label: "saved per week, avg client" },
            { stat: "67.3%", label: "CTR increase across campaigns" },
            { stat: "3×", label: "ROI on same ad budget" },
            { stat: "80%", label: "increase in conversions" },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-white px-8 py-8">
              <div
                className="leading-none text-ink-900"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.925rem, 3vw, 2.725rem)",
                }}
              >
                {stat}
              </div>
              <p className="mt-2 text-[0.84rem] leading-snug text-ink-700/55">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-24 max-w-2xl px-6 pb-32 sm:px-10">
        <p className="mb-3 text-[0.77rem] uppercase tracking-[0.26em] text-ink-700/50">
          FAQ
        </p>
        <h2
          className="mb-10 leading-tight tracking-[-0.015em]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.925rem, 3vw, 2.525rem)",
          }}
        >
          Common questions
        </h2>

        <div className="divide-y divide-line">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <span className="text-[1rem] font-medium leading-snug text-ink-900">
                  {faq.q}
                </span>
                <svg
                  className={`mt-0.5 h-4 w-4 shrink-0 text-ink-700/40 transition-transform duration-200 ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 2v12M2 8h12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {openFaq === i && (
                <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-700/65">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-line bg-shell px-6 py-20 text-center sm:px-10">
        <h2
          className="mx-auto max-w-xl leading-tight tracking-[-0.015em]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.925rem, 3.5vw, 3.125rem)",
          }}
        >
          Turn your marketing engine on.
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-[1rem] text-ink-700/60">
          Start free. No credit card required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://app.solaraai.com/auth/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-ink-900 px-7 py-3.5 text-[0.94rem] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Start free trial
          </a>
          <a
            href="https://calendly.com/ilay-mor-solaraai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-line bg-white px-7 py-3.5 text-[0.94rem] font-medium tracking-[0.08em] text-ink-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-900/30"
          >
            Book a call
          </a>
        </div>
      </section>
    </main>
  );
}
