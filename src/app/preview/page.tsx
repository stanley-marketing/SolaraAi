"use client";

import { useState } from "react";
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
    monthly: 49, yearly: 29,
    popular: false, cta: "Get started",
    features: [
      "Up to 3 social media channels",
      "1 ad campaign managed by Solara",
      "All content types included",
      "Models level \u2014 One V",
      "Setup assistant",
      "Analytics dashboard",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Scale your reach across channels with expert strategy support.",
    monthly: 99, yearly: 59,
    popular: true, cta: "Get started",
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
    monthly: 199, yearly: 119,
    popular: false, cta: "Get started",
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
    monthly: 319, yearly: 191,
    popular: false, cta: "Get started",
    features: [
      "Everything in Pro, plus:",
      "Full SEO + GEO recommendations",
      "Enhanced AI models",
      "All content types",
      "Quarterly strategy call",
    ],
  },
  {
    id: "expert",
    name: "Solara Expert",
    tagline: "We run your entire marketing engine \u2014 strategy, execution, and optimization.",
    monthly: null, yearly: null,
    popular: false, cta: "Talk to us",
    features: [
      "Everything in Advanced, plus:",
      "Dedicated marketing expert",
      "Full strategy + execution",
      "SEO, AI Search, Ads \u2014 all managed",
      "Commercial-grade AI models",
      "Custom website design included",
    ],
  },
];

const TABLE_FEATURES = [
  { label: "Creative", values: ["Included", "Included", "Included", "Included", "Included"] },
  { label: "Models Quality", values: ["One V", "One V", "Higher / Multi V", "Enhanced", "Enterprise-grade"] },
  { label: "Platform Access", values: ["Full", "Full", "Full", "Full", "Full"] },
  { label: "Assistant", values: ["Setup + Guidance", "Setup + Guidance", "Setup + Guidance", "Setup + Guidance", "Full Expert Support"] },
  { label: "Presenter / Min", values: ["\u2014", "\u2014", "Included", "Included", "Included"] },
  { label: "Custom Design Website", values: ["\u2014", "\u2014", "\u2014", "\u2014", "Included"] },
  { label: "Strategy", values: ["\u2014", "Quarterly Call", "Monthly Call", "Quarterly Call", "Full Managed"] },
  { label: "Analytics / Reporting", values: ["Included", "Included", "Included", "Included", "Included"] },
];

export default function PreviewPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <main style={{ background: "#ffffff", minHeight: "100vh", padding: "88px 24px 120px", fontFamily: "var(--font-body, system-ui, -apple-system, sans-serif)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 5vw, 3.6rem)", color: "#111111", textAlign: "center", letterSpacing: "-0.028em", margin: "0 0 12px", lineHeight: 1.08 }}>
          Simple pricing. Serious results.
        </h2>
        <p style={{ textAlign: "center", fontSize: "1rem", color: "#6b6b6b", maxWidth: 420, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Every plan includes AI-powered marketing that runs 24/7. Pick the scale that fits.
        </p>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: yearly ? "#9a9a9a" : "#111111", transition: "color 0.2s" }}>Monthly</span>
            <button type="button" aria-label={yearly ? "Switch to monthly billing" : "Switch to yearly billing"} onClick={() => setYearly(!yearly)} className="billing-toggle" style={{ position: "relative", width: 44, height: 24, borderRadius: 999, background: yearly ? "#111111" : "#d4d4d4", border: "none", cursor: "pointer", transition: "background 0.2s ease", padding: 0 }}>
              <div style={{ position: "absolute", top: 3, left: yearly ? 23 : 3, width: 18, height: 18, borderRadius: "50%", background: "#ffffff", transition: "left 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
            </button>
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: yearly ? "#111111" : "#9a9a9a", transition: "color 0.2s" }}>Yearly</span>
            <span style={{ background: yearly ? "#111111" : "#e3e3e3", color: yearly ? "#ffffff" : "#9a9a9a", borderRadius: 999, fontSize: "0.68rem", fontWeight: 700, padding: "4px 10px", letterSpacing: "0.04em", transition: "all 0.2s" }}>Save 40%</span>
          </div>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} yearly={yearly} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/pricing" className="compare-link" style={{ fontSize: "0.84rem", color: "#9a9a9a", textDecoration: "none", transition: "color 0.15s" }}>
            See full feature comparison &rarr;
          </Link>
        </div>

        <div className="compare-table" style={{ marginTop: 72 }}>
          <CompareTable yearly={yearly} />
        </div>
      </div>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          align-items: stretch;
        }
        @media (max-width: 1200px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
        .plan-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.09) !important; }
        .plan-card-popular:hover { box-shadow: 0 12px 36px rgba(124,58,237,0.18) !important; }
        .cta-outlined:hover { border-color: #111 !important; background: #f8fafc !important; }
        .cta-filled:hover { opacity: 0.88; }
        .cta-outlined:focus-visible, .cta-filled:focus-visible, .billing-toggle:focus-visible {
          outline: 2px solid #7c3aed; outline-offset: 2px;
        }
        .compare-link:hover { color: #111111 !important; }
        .compare-table { display: block; }
        @media (max-width: 900px) { .compare-table { display: none; } }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { transition: none !important; }
        }
      `}</style>
    </main>
  );
}

function PlanCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const isExpert = plan.id === "expert";
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
    <div className="plan-card" style={{ background: "#fafafa", borderRadius: 16, padding: "28px 22px", border: "1px solid #e3e3e3", display: "flex", flexDirection: "column", transition: "box-shadow 0.22s ease, border-color 0.22s ease" }}>
      <span style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(17,17,17,0.4)", marginBottom: 4 }}>{plan.name}</span>
      <p style={{ fontSize: "0.85rem", color: "#8c8c8c", lineHeight: 1.5, margin: "0 0 24px", minHeight: 60 }}>{plan.tagline}</p>
      <div style={{ display: "flex", alignItems: "end", gap: 4, marginBottom: 4, minHeight: 38 }}>
        {price !== null ? (
          <>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#111111", lineHeight: 1 }}>${price}</span>
            <span style={{ fontSize: "0.78rem", color: "rgba(17,17,17,0.38)", marginBottom: 3 }}>/mo</span>
          </>
        ) : (
          <span style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#111111", lineHeight: 1 }}>$499<span style={{ fontSize: "0.78rem", color: "rgba(17,17,17,0.38)", fontFamily: "var(--font-body, system-ui, sans-serif)", marginLeft: 2 }}>/mo</span></span>
        )}
      </div>
      <div style={{ fontSize: "0.7rem", color: "rgba(17,17,17,0.25)", marginBottom: 24 }}>
        {isExpert ? "starting from \u00b7 custom pricing" : yearly ? "billed annually" : "billed monthly"}
      </div>
      <Link href="/contact" className="cta-outlined" style={{ display: "block", textAlign: "center", background: "transparent", color: "#111111", border: "1px solid #c8c8c8", borderRadius: 999, padding: "12px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "1px", textDecoration: "none", transition: "all 0.2s", marginBottom: 24 }}>{plan.cta}</Link>
      <div style={{ height: 1, background: "#e3e3e3", marginBottom: 20 }} />
      <div style={{ flex: 1 }}>
        {plan.features.map((f) => {
          const isBridge = f.startsWith("Everything in");
          return (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: isBridge ? 12 : 8 }}>
            {isBridge ? <span style={{ width: 13, flexShrink: 0 }} /> : <Check size={13} style={{ flexShrink: 0, marginTop: 2, color: "rgba(17,17,17,0.35)" }} />}
            <span style={{ fontSize: "0.8rem", color: isBridge ? "#9a9a9a" : "#333333", lineHeight: 1.5, fontStyle: isBridge ? "italic" : "normal" }}>{f}</span>
          </div>
          );
        })}
      </div>
    </div>
  );
}

function CompareTable({ yearly }: { yearly: boolean }) {
  const colW = "1fr";
  const labelW = "180px";
  const cols = `${labelW} repeat(5, ${colW})`;

  return (
    <div style={{ borderRadius: 16, border: "1px solid #e3e3e3", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: cols }}>
        <div style={{ padding: "20px 20px", background: "#fafafa", borderRight: "1px solid #e3e3e3", borderBottom: "1px solid #e3e3e3" }} />
        {PLANS.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <div key={plan.id} style={{
              padding: "20px 16px", borderBottom: "1px solid #e3e3e3",
              borderRight: i < PLANS.length - 1 ? "1px solid #e3e3e3" : "none",
              background: plan.popular ? "#f9f7ff" : "#fafafa",
              position: "relative",
            }}>
              {plan.popular && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: RAINBOW }} />}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(17,17,17,0.4)" }}>{plan.name}</span>
                {plan.popular && <span style={{ background: "#111", color: "#fff", fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", borderRadius: 999, padding: "2px 8px" }}>Popular</span>}
              </div>
              <div style={{ marginTop: 8, display: "flex", alignItems: "baseline", gap: 3 }}>
                {price !== null ? (
                  <>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#111" }}>${price}</span>
                    <span style={{ fontSize: "0.72rem", color: "rgba(17,17,17,0.38)" }}>/mo</span>
                  </>
                ) : (
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "#111" }}>Custom</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {TABLE_FEATURES.map((row, rIdx) => (
        <div key={row.label} style={{ display: "grid", gridTemplateColumns: cols, background: rIdx % 2 === 0 ? "#ffffff" : "#fafafa" }}>
          <div style={{ padding: "14px 20px", fontSize: "0.82rem", fontWeight: 500, color: "#111", borderRight: "1px solid #e3e3e3" }}>{row.label}</div>
          {row.values.map((val, vIdx) => (
            <div key={vIdx} style={{
              padding: "14px 16px", fontSize: "0.82rem", textAlign: "center",
              borderRight: vIdx < row.values.length - 1 ? "1px solid #e3e3e3" : "none",
              color: val === "\u2014" ? "rgba(17,17,17,0.2)" : "#333",
              background: PLANS[vIdx].popular ? "#f9f7ff" : "transparent",
              fontWeight: val !== "\u2014" && PLANS[vIdx].popular ? 500 : 400,
            }}>{val}</div>
          ))}
        </div>
      ))}

      <div style={{ display: "grid", gridTemplateColumns: cols, borderTop: "1px solid #e3e3e3" }}>
        <div style={{ borderRight: "1px solid #e3e3e3" }} />
        {PLANS.map((plan, i) => (
          <div key={plan.id} style={{ padding: "16px 12px", borderRight: i < PLANS.length - 1 ? "1px solid #e3e3e3" : "none", background: plan.popular ? "#f9f7ff" : "transparent" }}>
            <Link href="/contact" style={{
              display: "block", textAlign: "center", borderRadius: 999, padding: "10px 12px", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s",
              background: plan.popular ? "#111" : "transparent",
              color: plan.popular ? "#fff" : "#111",
              border: plan.popular ? "none" : "1px solid #c8c8c8",
            }}>{plan.cta}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
