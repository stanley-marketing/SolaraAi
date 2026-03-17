"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const RAINBOW = "linear-gradient(135deg, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899, #f97316)";
const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthly: number | null;
  yearly: number | null;
  popular: boolean;
  cta: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Launch your marketing with AI-powered tools and guidance.",
    monthly: 49,
    yearly: 29,
    popular: false,
    cta: "Get started",
    features: [
      "Up to 3 social media channels",
      "1 ad campaign managed by Solara",
      "All content types included",
      "Models level — One V",
      "Setup assistant",
      "Analytics dashboard",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Scale your reach across channels with expert strategy support.",
    monthly: 99,
    yearly: 59,
    popular: false,
    cta: "Get started",
    features: [
      "Everything in Starter, plus:",
      "Up to 5 social media channels",
      "Up to 3 ad campaigns",
      "Quarterly strategy call with a Solara expert",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Full-stack marketing with SEO, content strategy, and unlimited ads.",
    monthly: 199,
    yearly: 119,
    popular: true,
    cta: "Get started",
    features: [
      "Everything in Growth, plus:",
      "Full SEO + GEO strategy",
      "Content strategy across 5 channels",
      "Unlimited ad campaigns",
      "Monthly consulting call",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    tagline: "Enhanced AI models, full recommendations, and expert rhythm.",
    monthly: 319,
    yearly: 191,
    popular: false,
    cta: "Get started",
    features: [
      "Everything in Pro, plus:",
      "Full SEO + GEO recommendations",
      "Enhanced AI models",
      "All content types",
      "Quarterly strategy call",
    ],
  },
];

const EXPERT_PLANS: Plan[] = [
  {
    id: "expert-essential",
    name: "Essential",
    tagline: "Expert-led strategy with AI-powered execution across core channels.",
    monthly: 499,
    yearly: 399,
    popular: false,
    cta: "Talk to us",
    features: [
      "Dedicated marketing expert",
      "Up to 3 managed channels",
      "SEO strategy + execution",
      "Monthly performance review",
      "AI-powered content creation",
    ],
  },
  {
    id: "expert-growth",
    name: "Growth",
    tagline: "Full-stack managed marketing across all channels with hands-on optimization.",
    monthly: 999,
    yearly: 799,
    popular: true,
    cta: "Talk to us",
    features: [
      "Everything in Essential, plus:",
      "Unlimited managed channels",
      "Ads management — Meta, Google, TikTok",
      "AI Search & visibility optimization",
      "Weekly strategy calls",
      "Custom website design",
    ],
  },
  {
    id: "expert-scale",
    name: "Scale",
    tagline: "Enterprise-grade marketing operations with dedicated team and custom integrations.",
    monthly: null,
    yearly: null,
    popular: false,
    cta: "Talk to us",
    features: [
      "Everything in Growth, plus:",
      "Dedicated marketing team",
      "Custom integrations & reporting",
      "Multi-brand management",
      "Commercial-grade AI models",
      "Priority support & SLA",
    ],
  },
];

export function PricingSection() {
  const [tab, setTab] = useState<"self" | "expert">("self");
  const [yearly, setYearly] = useState(true);
  const activePlans = tab === "self" ? PLANS : EXPERT_PLANS;

  return (
    <section className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="mx-auto" style={{ maxWidth: 1320, fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 5vw, 3.6rem)", color: "#111111", textAlign: "center", letterSpacing: "-0.028em", margin: "0 0 12px", lineHeight: 1.08 }}>
          Simple pricing. Serious results.
        </h2>
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#6b6b6b", maxWidth: 420, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Every plan includes AI-powered marketing that runs 24/7. Pick the scale that fits.
        </p>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-flex", position: "relative", background: "#f1f1f1", borderRadius: 999, padding: 4, gap: 4 }}>
            {[
              { key: "self" as const, label: "Self-managed" },
              { key: "expert" as const, label: "Solara Expert" },
            ].map(({ key, label }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  style={{
                    position: "relative",
                    border: "none",
                    padding: "10px 28px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    lineHeight: 1,
                    background: "transparent",
                    color: active ? "#ffffff" : "#666666",
                    borderRadius: 999,
                    zIndex: 1,
                    transition: "color 0.25s ease",
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="pricing-tab-pill"
                      style={{ position: "absolute", inset: 0, background: "#111111", borderRadius: 999 }}
                      transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 2 }}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: yearly ? "#9a9a9a" : "#111111", transition: "color 0.2s" }}>Monthly</span>
            <button
              type="button"
              aria-label={yearly ? "Switch to monthly billing" : "Switch to yearly billing"}
              onClick={() => setYearly(!yearly)}
              className="billing-toggle"
              style={{ position: "relative", width: 44, height: 24, borderRadius: 999, background: yearly ? "#111111" : "#d4d4d4", border: "none", cursor: "pointer", transition: "background 0.2s ease", padding: 0 }}
            >
              <div style={{ position: "absolute", top: 3, left: yearly ? 23 : 3, width: 18, height: 18, borderRadius: "50%", background: "#ffffff", transition: "left 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
            </button>
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: yearly ? "#111111" : "#9a9a9a", transition: "color 0.2s" }}>Yearly</span>
            <span style={{ background: yearly ? "#111111" : "#e8e8e8", color: yearly ? "#ffffff" : "#9a9a9a", borderRadius: 999, fontSize: "0.68rem", fontWeight: 700, padding: "4px 10px", letterSpacing: "0.04em", transition: "all 0.2s" }}>Save 40%</span>
          </div>
        </div>

        <div className={tab === "self" ? "pricing-grid" : "pricing-grid-expert"}>
          {activePlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} yearly={yearly} />
          ))}
        </div>

        {tab === "self" && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/pricing" className="compare-link" style={{ fontSize: "0.84rem", color: "#9a9a9a", textDecoration: "none", transition: "color 0.15s" }}>
              See full feature comparison &rarr;
            </Link>
          </div>
        )}

        <style>{`
          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
            align-items: stretch;
          }
          @media (max-width: 1200px) {
            .pricing-grid { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 768px) {
            .pricing-grid { grid-template-columns: 1fr; }
          }
          .pricing-grid-expert {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            align-items: stretch;
            max-width: 1000px;
            margin: 0 auto;
          }
          @media (max-width: 768px) {
            .pricing-grid-expert { grid-template-columns: 1fr; }
          }
          .plan-card:hover { border-color: #c8c8c8 !important; }
          .plan-card-popular:hover { }
          .cta-outlined:hover { border-color: #111 !important; background: #f8fafc !important; }
          .cta-filled:hover { opacity: 0.88; }
          .cta-outlined:focus-visible, .cta-filled:focus-visible, .billing-toggle:focus-visible {
            outline: 2px solid #7c3aed; outline-offset: 2px;
          }
          .compare-link:hover { color: #111111 !important; }
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { transition: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function PlanCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const isExpert = plan.monthly === null;
  const price = yearly ? plan.yearly : plan.monthly;

  if (plan.popular) {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <div style={{ background: RAINBOW, borderRadius: 16, padding: "2px", height: "100%" }}>
          <div className="plan-card-popular" style={{ background: "#040404", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column", position: "relative", transition: "box-shadow 0.22s ease", height: "100%" }}>
            <div className="pointer-events-none" style={{ position: "absolute", inset: 0, borderRadius: 14, opacity: 0.045, backgroundImage: NOISE_BG, backgroundRepeat: "repeat" }} />
            <span style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: "0.63rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", borderRadius: 999, padding: "4px 12px" }}>Popular</span>
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>{plan.name}</span>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, margin: "0 0 24px", minHeight: 60 }}>{plan.tagline}</p>
            <div style={{ display: "flex", alignItems: "end", gap: 4, marginBottom: 4 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#ffffff", lineHeight: 1 }}>${price}</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", marginBottom: 3 }}>/mo</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>{yearly ? "billed annually" : "billed monthly"}</div>
            <Link href="/contact" className="cta-filled" style={{ display: "block", textAlign: "center", background: "#ffffff", color: "#111111", borderRadius: 999, padding: "12px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "1px", textDecoration: "none", transition: "all 0.2s", marginBottom: 24 }}>{plan.cta}</Link>
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 20 }} />
            <div style={{ flex: 1 }}>
              {plan.features.map((f) => {
                const isBridge = f.startsWith("Everything in");
                return (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: isBridge ? 12 : 8 }}>
                    {isBridge ? <span style={{ width: 13, flexShrink: 0 }} /> : <Check size={13} style={{ flexShrink: 0, marginTop: 2, color: "rgba(255,255,255,0.4)" }} />}
                    <span style={{ fontSize: "0.8rem", color: isBridge ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.65)", lineHeight: 1.5, fontStyle: isBridge ? "italic" : "normal" }}>{f}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="plan-card" style={{ background: "#ffffff", borderRadius: 16, padding: "28px 22px", border: "1px solid #e3e3e3", display: "flex", flexDirection: "column", transition: "box-shadow 0.22s ease, border-color 0.22s ease" }}>
      <span style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#666666", marginBottom: 4 }}>{plan.name}</span>
      <p style={{ fontSize: "0.85rem", color: "#555555", lineHeight: 1.5, margin: "0 0 24px", minHeight: 60 }}>{plan.tagline}</p>
      <div style={{ display: "flex", alignItems: "end", gap: 4, marginBottom: 4, minHeight: 38 }}>
        {price !== null ? (
          <>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#111111", lineHeight: 1 }}>${price}</span>
            <span style={{ fontSize: "0.78rem", color: "#888888", marginBottom: 3 }}>/mo</span>
          </>
        ) : (
          <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#111111", lineHeight: 1 }}>Custom</span>
        )}
      </div>
      <div style={{ fontSize: "0.7rem", color: "#999999", marginBottom: 24 }}>{isExpert ? "custom pricing" : yearly ? "billed annually" : "billed monthly"}</div>
      <Link href="/contact" className="cta-outlined" style={{ display: "block", textAlign: "center", background: "transparent", color: "#111111", border: "1px solid #c8c8c8", borderRadius: 999, padding: "12px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "1px", textDecoration: "none", transition: "all 0.2s", marginBottom: 24 }}>{plan.cta}</Link>
      <div style={{ height: 1, background: "#e3e3e3", marginBottom: 20 }} />
      <div style={{ flex: 1 }}>
        {plan.features.map((f) => {
          const isBridge = f.startsWith("Everything in");
          return (
            <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: isBridge ? 12 : 8 }}>
              {isBridge ? <span style={{ width: 13, flexShrink: 0 }} /> : <Check size={13} style={{ flexShrink: 0, marginTop: 2, color: "#22c55e" }} />}
              <span style={{ fontSize: "0.8rem", color: isBridge ? "#9a9a9a" : "#333333", lineHeight: 1.5, fontStyle: isBridge ? "italic" : "normal" }}>{f}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
