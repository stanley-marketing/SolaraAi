"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" role="img" aria-label="LinkedIn"><title>LinkedIn</title><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>,
  Instagram: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" role="img" aria-label="Instagram"><title>Instagram</title><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.1 1.3C1.3 2.6.9 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.2.5 2.9.3.8.7 1.5 1.3 2.1.7.7 1.3 1.1 2.1 1.3.8.3 1.6.5 2.9.5C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.2-.2 2.9-.5.8-.3 1.5-.7 2.1-1.3.7-.7 1.1-1.3 1.3-2.1.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.5-1.3-2.1-.7-.7-1.3-1.1-2.1-1.3C19.1.3 18.2.1 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"/></svg>,
  TikTok: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" role="img" aria-label="TikTok"><title>TikTok</title><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.4a8.16 8.16 0 004.77 1.53V7.56a4.83 4.83 0 01-1.01-.87z"/></svg>,
  Facebook: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" role="img" aria-label="Facebook"><title>Facebook</title><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07z"/></svg>,
  Twitter: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" role="img" aria-label="X"><title>X</title><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
};

const PLATFORM_ICON_COLORS: Record<string, string> = {
  LinkedIn: "#0A66C2",
  Instagram: "#E4405F",
  TikTok: "#111111",
  Facebook: "#1877F2",
  Twitter: "#111111",
};

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
    yearly: 34,
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
    yearly: 69,
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
    yearly: 139,
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
    yearly: 223,
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
  // ── Social Media Management ──
  {
    id: "expert-social",
    name: "Social",
    tagline: "Full social media management across all major platforms.",
    monthly: 149,
    yearly: 104,
    popular: false,
    cta: "Talk to us",
    features: [
      "Full social media management",
      "Content creation",
      "Real story carousels",
      "Engaging videos",
      "Presentation videos",
      "Platforms: LinkedIn, Instagram, TikTok, Facebook, Twitter",
    ],
  },
  {
    id: "expert-social-commercial",
    name: "Social + Commercial",
    tagline: "Everything in Social with higher quality TV-grade commercials.",
    monthly: 449,
    yearly: 314,
    popular: false,
    cta: "Talk to us",
    features: [
      "Full social media management",
      "Content creation",
      "Real story carousels",
      "Engaging videos",
      "Presentation videos",
      "Platforms: LinkedIn, Instagram, TikTok, Facebook, Twitter",
      "Higher quality commercial production",
      "TV commercial-level grade",
    ],
  },
  // ── Ads Management ──
  {
    id: "expert-ads-3k",
    name: "Ads Manager",
    tagline: "Full ads management across Google, Meta & TikTok with up to $3K ad spend.",
    monthly: 249,
    yearly: 174,
    popular: false,
    cta: "Talk to us",
    features: [
      "Google Search, Meta & TikTok ads management",
      "Landing page creation",
      "Continuous optimization",
      "A/B testing",
      "Creative visual creations",
      "Tracking setup",
      "Ad spend management up to $3K",
    ],
  },
  {
    id: "expert-ads-15k",
    name: "Ads Manager Pro",
    tagline: "Same ads management for larger budgets up to $15K ad spend.",
    monthly: 399,
    yearly: 279,
    popular: false,
    cta: "Talk to us",
    features: [
      "Google Search, Meta & TikTok ads management",
      "Landing page creation",
      "Continuous optimization",
      "A/B testing",
      "Creative visual creations",
      "Tracking setup",
      "Ad spend management $3K\u2013$15K",
    ],
  },
  {
    id: "expert-ads-15k-plus",
    name: "Ads Manager Scale",
    tagline: "Enterprise ads management for budgets above $15K.",
    monthly: 599,
    yearly: 419,
    popular: true,
    cta: "Talk to us",
    features: [
      "Google Search, Meta & TikTok ads management",
      "Landing page creation",
      "Continuous optimization",
      "A/B testing",
      "Creative visual creations",
      "Tracking setup",
      "Ad spend management above $15K",
    ],
  },
  // ── Add-ons ──
  {
    id: "expert-addon-website",
    name: "SEO & AI Search & Website",
    tagline: "Full SEO, AI search visibility, and custom website — all in one.",
    monthly: 168,
    yearly: 118,
    popular: false,
    cta: "Talk to us",
    features: [
      "SEO strategy and execution",
      "AI search optimization",
      "GEO / local search optimization",
      "Keyword research",
      "Topic clustering",
      "On-page SEO",
      "Meta titles and descriptions",
      "Internal linking suggestions",
      "Technical SEO checks",
      "Blog/article generation",
      "Landing page SEO optimization",
      "Local business profile optimization",
      "Competitor search analysis",
      "Search intent analysis",
      "Content gap analysis",
      "SEO performance tracking",
      "Search ranking monitoring",
      "AI-answer visibility optimization",
      "Custom website design",
      "Website creation & management",
    ],
  },
  {
    id: "expert-addon-seo",
    name: "SEO & AI Search",
    tagline: "Full SEO strategy, AI search visibility, and content optimization.",
    monthly: 119,
    yearly: 83,
    popular: false,
    cta: "Talk to us",
    features: [
      "SEO strategy and execution",
      "AI search optimization",
      "GEO / local search optimization",
      "Keyword research",
      "Topic clustering",
      "On-page SEO",
      "Meta titles and descriptions",
      "Internal linking suggestions",
      "Technical SEO checks",
      "Blog/article generation",
      "Landing page SEO optimization",
      "Local business profile optimization",
      "Competitor search analysis",
      "Search intent analysis",
      "Content gap analysis",
      "SEO performance tracking",
      "Search ranking monitoring",
      "AI-answer visibility optimization",
    ],
  },
  {
    id: "expert-full-custom",
    name: "Full Custom",
    tagline: "Complete managed marketing with regular commercials and up to $3K ad spend.",
    monthly: 599,
    yearly: 419,
    popular: false,
    cta: "Talk to us",
    features: [
      "Full social media management",
      "Regular commercial production",
      "Ads management up to $3K",
      "All add-ons included",
    ],
  },
  {
    id: "expert-full-custom-premium",
    name: "Full Custom Premium",
    tagline: "Premium commercials, larger budgets, and full marketing operations.",
    monthly: 999,
    yearly: 699,
    popular: true,
    cta: "Talk to us",
    features: [
      "Full social media management",
      "Premium commercial production",
      "Ads management up to $15K",
      "All add-ons included",
    ],
  },
  {
    id: "expert-addon-custom",
    name: "Custom Solutions",
    tagline: "Email, SMS marketing, loyalty programs, and more.",
    monthly: null,
    yearly: null,
    popular: false,
    cta: "Talk to us",
    features: [
      "Email marketing",
      "SMS marketing",
      "Loyalty program management",
    ],
  },
];

type TabKey = "social" | "ads" | "seo" | "full";

const TABS: { key: TabKey; label: string }[] = [
  { key: "social", label: "Social Media" },
  { key: "ads", label: "Ads" },
  { key: "seo", label: "SEO + AI Visibility" },
  { key: "full", label: "Full Marketing Dept" },
];

const PLANS_BY_TAB: Record<TabKey, Plan[]> = {
  social: EXPERT_PLANS.filter((p) =>
    ["expert-social", "expert-social-commercial"].includes(p.id)
  ),
  ads: EXPERT_PLANS.filter((p) =>
    ["expert-ads-3k", "expert-ads-15k", "expert-ads-15k-plus"].includes(p.id)
  ),
  seo: [
    EXPERT_PLANS.find((p) => p.id === "expert-addon-seo"),
    EXPERT_PLANS.find((p) => p.id === "expert-addon-website"),
  ].filter(Boolean) as Plan[],
  full: EXPERT_PLANS.filter((p) =>
    ["expert-full-custom", "expert-full-custom-premium", "expert-addon-custom"].includes(p.id)
  ),
};

export function PricingSection() {
  const [tab, setTab] = useState<TabKey>("social");
  const [yearly, setYearly] = useState(true);
  const activePlans = PLANS_BY_TAB[tab];

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
          <div style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", position: "relative", background: "#f1f1f1", borderRadius: 999, padding: 4, gap: 4 }}>
            {TABS.map(({ key, label }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  style={{
                    position: "relative",
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    lineHeight: 1,
                    background: "transparent",
                    color: active ? "#ffffff" : "#666666",
                    borderRadius: 999,
                    zIndex: 1,
                    transition: "color 0.25s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="homepage-pricing-tab-pill"
                      style={{ position: "absolute", inset: 0, background: "#111111", borderRadius: 999 }}
                      transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 2 }}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: yearly ? "#9a9a9a" : "#111111", transition: "color 0.2s" }}>3 month</span>
            <button
              type="button"
              aria-label={yearly ? "Switch to 3 month billing" : "Switch to yearly billing"}
              onClick={() => setYearly(!yearly)}
              className="billing-toggle"
              style={{ position: "relative", width: 44, height: 24, borderRadius: 999, background: yearly ? "#111111" : "#d4d4d4", border: "none", cursor: "pointer", transition: "background 0.2s ease", padding: 0 }}
            >
              <div style={{ position: "absolute", top: 3, left: yearly ? 23 : 3, width: 18, height: 18, borderRadius: "50%", background: "#ffffff", transition: "left 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
            </button>
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: yearly ? "#111111" : "#9a9a9a", transition: "color 0.2s" }}>Yearly</span>
            <span style={{ background: yearly ? "#111111" : "#e8e8e8", color: yearly ? "#ffffff" : "#9a9a9a", borderRadius: 999, fontSize: "0.68rem", fontWeight: 700, padding: "4px 10px", letterSpacing: "0.04em", transition: "all 0.2s" }}>Save 30%</span>
          </div>
        </div>

        <div className="pricing-grid-expert">
          {activePlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} yearly={yearly} />
          ))}
        </div>

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
            grid-template-columns: repeat(auto-fit, minmax(290px, 320px));
            gap: 14px;
            align-items: stretch;
            max-width: 1320px;
            margin: 0 auto;
            justify-content: center;
          }
          @media (max-width: 600px) {
            .pricing-grid-expert { grid-template-columns: minmax(0, 1fr); }
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
  const showDiscount = yearly && plan.monthly !== null && price !== null && plan.monthly !== price;

  if (plan.popular) {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <div style={{ background: RAINBOW, borderRadius: 16, padding: "2px", height: "100%" }}>
          <div className="plan-card-popular" style={{ background: "#040404", borderRadius: 14, padding: "28px 22px", display: "flex", flexDirection: "column", position: "relative", transition: "box-shadow 0.22s ease", height: "100%" }}>
            <div className="pointer-events-none" style={{ position: "absolute", inset: 0, borderRadius: 14, opacity: 0.045, backgroundImage: NOISE_BG, backgroundRepeat: "repeat" }} />
            <span style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: "0.63rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", borderRadius: 999, padding: "4px 12px" }}>Popular</span>
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em", marginBottom: 4 }}>{plan.name}</span>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, margin: "0 0 24px", minHeight: 60 }}>{plan.tagline}</p>
            <div style={{ display: "flex", alignItems: "end", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
              {showDiscount && (
                <span
                  style={{
                    fontSize: "1.4rem",
                    color: "rgba(255,255,255,0.38)",
                    textDecoration: "line-through",
                    textDecorationThickness: "2px",
                    textDecorationColor: "rgba(255,255,255,0.38)",
                    lineHeight: 1,
                    marginBottom: 3,
                  }}
                >
                  ${plan.monthly}
                </span>
              )}
              <span style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#ffffff", lineHeight: 1 }}>${price}</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", marginBottom: 3 }}>/mo</span>
            </div>
            <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>{yearly ? "billed annually" : "billed every 3 months"}</div>
            <Link href="/contact" className="cta-filled" style={{ display: "block", textAlign: "center", background: "#ffffff", color: "#111111", borderRadius: 999, padding: "12px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "1px", textDecoration: "none", transition: "all 0.2s", marginBottom: 24 }}>{plan.cta}</Link>
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 20 }} />
            <div style={{ flex: 1 }}>
              {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                    <Check size={16} style={{ flexShrink: 0, marginTop: 2, color: "#34d399" }} />
                    <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
                      {f.startsWith("Platforms:") ? (
                        <>
                          {f.replace(/Platforms:\s*/, "").split(", ").map((p) => (
                            <span key={p} style={{ display: "inline-flex", alignItems: "center", gap: 3, color: "rgba(255,255,255,0.5)" }}>
                              <span style={{ color: PLATFORM_ICON_COLORS[p.trim()] ?? "currentColor", display: "inline-flex" }}>
                                {PLATFORM_ICONS[p.trim()] ?? null}
                              </span>
                              {p.trim()}
                            </span>
                          ))}
                        </>
                      ) : f}
                    </span>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="plan-card" style={{ background: "#ffffff", borderRadius: 16, padding: "28px 22px", border: "1px solid #e3e3e3", display: "flex", flexDirection: "column", transition: "box-shadow 0.22s ease, border-color 0.22s ease" }}>
      <span style={{ fontSize: "20px", fontWeight: 700, color: "#111111", letterSpacing: "-0.01em", marginBottom: 4 }}>{plan.name}</span>
      <p style={{ fontSize: "16px", color: "#555555", lineHeight: 1.5, margin: "0 0 24px", minHeight: 60 }}>{plan.tagline}</p>
      <div style={{ display: "flex", alignItems: "end", gap: 6, marginBottom: 4, minHeight: 38, flexWrap: "wrap" }}>
        {price !== null ? (
          <>
            {showDiscount && (
              <span
                style={{
                  fontSize: "1.4rem",
                  color: "#a3a3a3",
                  textDecoration: "line-through",
                  textDecorationThickness: "2px",
                  textDecorationColor: "#a3a3a3",
                  lineHeight: 1,
                  marginBottom: 3,
                }}
              >
                ${plan.monthly}
              </span>
            )}
            <span style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "#111111", lineHeight: 1 }}>${price}</span>
            <span style={{ fontSize: "0.78rem", color: "#888888", marginBottom: 3 }}>/mo</span>
          </>
        ) : (
          <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#111111", lineHeight: 1 }}>Custom</span>
        )}
      </div>
      <div style={{ fontSize: "0.7rem", color: "#999999", marginBottom: 24 }}>{isExpert ? "custom pricing" : yearly ? "billed annually" : "billed every 3 months"}</div>
      <Link href="/contact" className="cta-filled" style={{ display: "block", textAlign: "center", background: "#111111", color: "#ffffff", border: "1px solid #111111", borderRadius: 999, padding: "12px 20px", fontSize: "14px", fontWeight: 500, letterSpacing: "1px", textDecoration: "none", transition: "all 0.2s", marginBottom: 24 }}>{plan.cta}</Link>
      <div style={{ height: 1, background: "#e3e3e3", marginBottom: 20 }} />
      <div style={{ flex: 1 }}>
          {plan.features.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                <Check size={16} style={{ flexShrink: 0, marginTop: 2, color: "#16c253" }} />
                <span style={{ fontSize: "16px", color: "#333333", lineHeight: 1.5, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
                  {f.startsWith("Platforms:") ? (
                    <>
                      {f.replace(/Platforms:\s*/, "").split(", ").map((p) => (
                        <span key={p} style={{ display: "inline-flex", alignItems: "center", gap: 3, color: "#555555" }}>
                          <span style={{ color: PLATFORM_ICON_COLORS[p.trim()] ?? "currentColor", display: "inline-flex" }}>
                            {PLATFORM_ICONS[p.trim()] ?? null}
                          </span>
                          {p.trim()}
                        </span>
                      ))}
                    </>
                  ) : f}
                </span>
              </div>
          ))}
      </div>
    </div>
  );
}
