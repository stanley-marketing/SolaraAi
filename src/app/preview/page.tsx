"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Users, Megaphone, Search, Globe, Building2 } from "lucide-react";

const RAINBOW = "linear-gradient(135deg, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899, #f97316)";

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
    monthly: 49, yearly: 34,
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
    monthly: 99, yearly: 69,
    popular: false, cta: "Get started",
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
    monthly: 199, yearly: 139,
    popular: true, cta: "Get started",
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
    monthly: 319, yearly: 223,
    popular: false, cta: "Get started",
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
    monthly: 149, yearly: 104,
    popular: false, cta: "Talk to us",
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
    monthly: 449, yearly: 314,
    popular: false, cta: "Talk to us",
    features: [
      "Everything in Social, plus:",
      "Higher quality commercial production",
      "TV commercial-level grade",
    ],
  },
  // ── Ads Management ──
  {
    id: "expert-ads-3k",
    name: "Ads Manager",
    tagline: "Full ads management across Google, Meta & TikTok with up to $3K ad spend.",
    monthly: 249, yearly: 174,
    popular: true, cta: "Talk to us",
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
    monthly: 399, yearly: 279,
    popular: false, cta: "Talk to us",
    features: [
      "Everything in Ads Manager, plus:",
      "Ad spend management $3K\u2013$15K",
    ],
  },
  {
    id: "expert-ads-15k-plus",
    name: "Ads Manager Scale",
    tagline: "Enterprise ads management for budgets above $15K.",
    monthly: 599, yearly: 419,
    popular: false, cta: "Talk to us",
    features: [
      "Everything in Ads Manager, plus:",
      "Ad spend management above $15K",
    ],
  },
  // ── Add-ons ──
  {
    id: "expert-addon-website",
    name: "Website",
    tagline: "Custom website creation and ongoing management.",
    monthly: 49, yearly: 34,
    popular: false, cta: "Add on",
    features: [
      "Custom website design",
      "Website creation & management",
    ],
  },
  {
    id: "expert-addon-seo",
    name: "SEO & AI Search",
    tagline: "Search engine and AI search optimization.",
    monthly: 119, yearly: 83,
    popular: false, cta: "Add on",
    features: [
      "SEO optimization",
      "AI search optimization",
    ],
  },
  {
    id: "expert-addon-custom",
    name: "Custom Solutions",
    tagline: "Email, SMS marketing, loyalty programs, and more.",
    monthly: null, yearly: null,
    popular: false, cta: "Talk to us",
    features: [
      "Email marketing",
      "SMS marketing",
      "Loyalty program management",
    ],
  },
  // ── Full Custom Packages ──
  {
    id: "expert-full-custom",
    name: "Full Custom",
    tagline: "Complete managed marketing with regular commercials and up to $3K ad spend.",
    monthly: 599, yearly: 419,
    popular: false, cta: "Talk to us",
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
    monthly: 999, yearly: 699,
    popular: false, cta: "Talk to us",
    features: [
      "Full social media management",
      "Premium commercial production",
      "Ads management up to $15K",
      "All add-ons included",
    ],
  },
];

const TABLE_FEATURES = [
  { label: "Creative", values: ["Included", "Included", "Included", "Included"] },
  { label: "Models Quality", values: ["One V", "One V", "Higher / Multi V", "Enhanced"] },
  { label: "Platform Access", values: ["Full", "Full", "Full", "Full"] },
  { label: "Assistant", values: ["Setup + Guidance", "Setup + Guidance", "Setup + Guidance", "Setup + Guidance"] },
  { label: "Presenter / Min", values: ["\u2014", "\u2014", "Included", "Included"] },
  { label: "Strategy", values: ["\u2014", "Quarterly Call", "Monthly Call", "Quarterly Call"] },
  { label: "Analytics / Reporting", values: ["Included", "Included", "Included", "Included"] },
];

type SolutionTabKey = "social" | "ads" | "seo" | "website" | "full";

const SOLUTION_TABS: {
  key: SolutionTabKey;
  label: string;
  Icon: React.ElementType;
  planIds: string[];
}[] = [
  {
    key: "social",
    label: "Social Media",
    Icon: Users,
    planIds: ["expert-social", "expert-social-commercial"],
  },
  {
    key: "ads",
    label: "Ads",
    Icon: Megaphone,
    planIds: ["expert-ads-3k", "expert-ads-15k", "expert-ads-15k-plus"],
  },
  {
    key: "seo",
    label: "SEO + AI Visibility",
    Icon: Search,
    planIds: ["expert-addon-seo"],
  },
  {
    key: "website",
    label: "Website",
    Icon: Globe,
    planIds: ["expert-addon-website"],
  },
  {
    key: "full",
    label: "Full Marketing Dept",
    Icon: Building2,
    planIds: ["expert-full-custom", "expert-full-custom-premium", "expert-addon-custom"],
  },
];

export default function PreviewPage() {
  const [tab, setTab] = useState<"self" | "expert">("expert");
  const [yearly, setYearly] = useState(true);
  const [solutionTab, setSolutionTab] = useState<SolutionTabKey>("social");

  const activePlans =
    tab === "self"
      ? PLANS
      : EXPERT_PLANS.filter((p) =>
          SOLUTION_TABS.find((st) => st.key === solutionTab)?.planIds.includes(p.id)
        );

  return (
    <main
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        padding: "88px 24px 120px",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        <div className="pricing-header">
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                color: "#111111",
                letterSpacing: "-0.03em",
                margin: 0,
                lineHeight: 1.06,
                fontWeight: 800,
              }}
            >
              Simple pricing.<br />Serious results.
            </h2>
          </div>

          <div style={{ paddingTop: 6 }}>
            <p
              style={{
                fontSize: "1rem",
                color: "#6b6b6b",
                margin: "0 0 22px",
                lineHeight: 1.65,
                maxWidth: 340,
              }}
            >
              Every plan includes AI-powered marketing that runs 24/7. Pick the scale that fits your business.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: yearly ? "#aaaaaa" : "#111111",
                  transition: "color 0.2s",
                }}
                >
                  3 month
                </span>
                <button
                  type="button"
                  aria-label={yearly ? "Switch to 3 month billing" : "Switch to yearly billing"}
                  onClick={() => setYearly(!yearly)}
                  className="billing-toggle"
                style={{
                  position: "relative",
                  width: 44,
                  height: 24,
                  borderRadius: 999,
                  background: yearly ? "#111111" : "#d4d4d4",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                  padding: 0,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 3,
                    left: yearly ? 23 : 3,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#ffffff",
                    transition: "left 0.2s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
                  }}
                />
              </button>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: yearly ? "#111111" : "#aaaaaa",
                  transition: "color 0.2s",
                }}
              >
                Yearly
              </span>
              <span
                style={{
                  background: yearly ? "#111111" : "#ebebeb",
                  color: yearly ? "#ffffff" : "#aaaaaa",
                  borderRadius: 999,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  padding: "4px 11px",
                  letterSpacing: "0.09em",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                }}
              >
                Save 20%
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 52,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              position: "relative",
              background: "#f1f1f1",
              borderRadius: 999,
              padding: 4,
              gap: 4,
            }}
          >
            {(
              [
                { key: "self" as const, label: "Self-managed" },
                { key: "expert" as const, label: "Solara Grow" },
              ] as const
            ).map(({ key, label }) => {
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
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    lineHeight: 1,
                    background: "transparent",
                    color: active ? "#ffffff" : "#666666",
                    borderRadius: 999,
                    zIndex: 1,
                    transition: "color 0.25s ease",
                    fontFamily: "inherit",
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="preview-pricing-tab-pill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "#111111",
                        borderRadius: 999,
                      }}
                      transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 2 }}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {tab === "expert" && (
          <div style={{ marginBottom: 44 }}>
            <div className="solution-tabs-container">
              <div className="solution-tabs-label">
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#111111",
                    display: "block",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Explore by solution:
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#9a9a9a",
                    display: "block",
                    marginTop: 3,
                  }}
                >
                  Pick what you need
                </span>
              </div>

              <div className="solution-tabs-list">
                {SOLUTION_TABS.map(({ key, label, Icon }) => {
                  const active = solutionTab === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSolutionTab(key)}
                      className={`solution-tab-btn${active ? " solution-tab-active" : ""}`}
                    >
                      <Icon size={14} style={{ flexShrink: 0 }} />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className={tab === "self" ? "pricing-grid" : "pricing-grid-expert"}>
          {activePlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} yearly={yearly} isExpert={tab === "expert"} />
          ))}
        </div>

        {tab === "self" && (
          <>
            <p
              style={{
                textAlign: "center",
                margin: "18px auto 0",
                maxWidth: 440,
                fontSize: "0.82rem",
                color: "#8a8a8a",
                lineHeight: 1.6,
              }}
            >
              Self-managed is still in preview. Prices and plan details may change before launch.
            </p>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link
                href="/pricing"
                className="compare-link"
                style={{
                  fontSize: "0.84rem",
                  color: "#9a9a9a",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
              >
                See full feature comparison &rarr;
              </Link>
            </div>
            <div className="compare-table" style={{ marginTop: 72 }}>
              <CompareTable yearly={yearly} />
            </div>
          </>
        )}
      </div>

      <style>{`
        /* ── Split header ── */
        .pricing-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .pricing-header {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        /* ── Solution tabs ── */
        .solution-tabs-container {
          display: flex;
          align-items: stretch;
          border: 1px solid #e3e3e3;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
        }
        .solution-tabs-label {
          padding: 18px 22px;
          border-right: 1px solid #e3e3e3;
          min-width: 168px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fafafa;
          flex-shrink: 0;
        }
        .solution-tabs-list {
          display: flex;
          flex: 1;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .solution-tabs-list::-webkit-scrollbar { display: none; }
        .solution-tab-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          flex: 1;
          min-width: 148px;
          padding: 18px 20px;
          border: none;
          border-right: 1px solid #e3e3e3;
          background: #f5f5f5;
          color: #555555;
          font-size: 0.84rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
          font-family: inherit;
          justify-content: center;
        }
        .solution-tab-btn:last-child { border-right: none; }
        .solution-tab-btn:hover:not(.solution-tab-active) {
          background: #eeeeee;
          color: #111111;
        }
        .solution-tab-active {
          background: #111111 !important;
          color: #ffffff !important;
        }
        @media (max-width: 960px) {
          .solution-tabs-container { flex-direction: column; }
          .solution-tabs-label {
            border-right: none;
            border-bottom: 1px solid #e3e3e3;
            min-width: auto;
          }
          .solution-tab-btn { min-width: 120px; flex: 0 0 auto; }
        }

        /* ── Plan grids ── */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          align-items: stretch;
        }
        @media (max-width: 1200px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
        .pricing-grid-expert {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 320px));
          gap: 16px;
          align-items: stretch;
          max-width: 1320px;
          margin: 0 auto;
          justify-content: center;
        }
        @media (max-width: 560px) {
          .pricing-grid-expert { grid-template-columns: minmax(0, 1fr); }
        }

        /* ── Card & CTA interactions ── */
        .plan-card:hover { border-color: #c0c0c0 !important; box-shadow: 0 2px 16px rgba(0,0,0,0.06); }
        .plan-card-popular:hover { box-shadow: 0 4px 28px rgba(0,0,0,0.1) !important; }
        .cta-outlined:hover { border-color: #111111 !important; background: #f8f8f8 !important; }
        .cta-filled:hover { opacity: 0.87; }
        .cta-outlined:focus-visible,
        .cta-filled:focus-visible,
        .billing-toggle:focus-visible {
          outline: 2px solid #7c3aed;
          outline-offset: 2px;
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

function PlanCard({
  plan,
  yearly,
  isExpert,
}: {
  plan: Plan;
  yearly: boolean;
  isExpert: boolean;
}) {
  const price = yearly ? plan.yearly : plan.monthly;

  return (
    <div
      className={`plan-card${plan.popular ? " plan-card-popular" : ""}`}
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: plan.popular ? "32px 22px 28px" : "28px 22px",
        border: plan.popular ? "2px solid #111111" : "1px solid #e3e3e3",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "box-shadow 0.22s ease, border-color 0.22s ease",
      }}
    >
      {plan.popular && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#111111",
            color: "#ffffff",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            padding: "5px 14px",
            borderRadius: "0 0 9px 9px",
            whiteSpace: "nowrap",
          }}
        >
          Most Popular
        </div>
      )}

      <span
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#111111",
          letterSpacing: "-0.01em",
          marginTop: plan.popular ? 8 : 0,
        }}
      >
        {plan.name}
      </span>

      <p
        style={{
          fontSize: "0.82rem",
          color: "#666666",
          lineHeight: 1.55,
          margin: "8px 0 20px",
          minHeight: 50,
        }}
      >
        {plan.tagline}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 4,
          marginBottom: 4,
          minHeight: 44,
        }}
      >
        {price !== null ? (
          <>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.6rem",
                color: "#111111",
                lineHeight: 1,
                fontWeight: 800,
              }}
            >
              ${price}
            </span>
            <span style={{ fontSize: "0.78rem", color: "#888888", marginBottom: 4 }}>/mo</span>
          </>
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "#111111",
              lineHeight: 1,
              fontWeight: 800,
            }}
          >
            Custom
          </span>
        )}
      </div>

      <div style={{ fontSize: "0.7rem", color: "#999999", marginBottom: 22 }}>
        {price === null
          ? "custom pricing"
          : isExpert
          ? "flat monthly rate"
          : yearly
            ? "billed annually"
            : "billed every 3 months"}
      </div>

      <Link
        href="/contact"
        className={plan.popular ? "cta-filled" : "cta-outlined"}
        style={{
          display: "block",
          textAlign: "center",
          background: plan.popular ? "#111111" : "transparent",
          color: plan.popular ? "#ffffff" : "#111111",
          border: plan.popular ? "none" : "1.5px solid #d0d0d0",
          borderRadius: 999,
          padding: "12px 20px",
          fontSize: "0.84rem",
          fontWeight: 600,
          letterSpacing: "0.02em",
          textDecoration: "none",
          transition: "all 0.2s",
          marginBottom: 20,
        }}
      >
        {plan.cta}
      </Link>

      <div style={{ height: 1, background: "#ebebeb", marginBottom: 18 }} />
      <div style={{ flex: 1 }}>
        {plan.features.map((f) => {
          const isBridge = f.startsWith("Everything in");
          return (
            <div
              key={f}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                marginBottom: isBridge ? 10 : 8,
              }}
            >
              {isBridge ? (
                <span style={{ width: 13, flexShrink: 0 }} />
              ) : (
                <Check
                  size={13}
                  style={{ flexShrink: 0, marginTop: 2, color: "#22c55e" }}
                />
              )}
              <span
                style={{
                  fontSize: "0.8rem",
                  color: isBridge ? "#9a9a9a" : "#333333",
                  lineHeight: 1.5,
                  fontStyle: isBridge ? "italic" : "normal",
                }}
              >
                {f}
              </span>
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
  const cols = `${labelW} repeat(4, ${colW})`;

  return (
    <div style={{ borderRadius: 16, border: "1px solid #e3e3e3", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: cols }}>
        <div
          style={{
            padding: "20px 20px",
            background: "#fafafa",
            borderRight: "1px solid #e3e3e3",
            borderBottom: "1px solid #e3e3e3",
          }}
        />
        {PLANS.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <div
              key={plan.id}
              style={{
                padding: "20px 16px",
                borderBottom: "1px solid #e3e3e3",
                borderRight: i < PLANS.length - 1 ? "1px solid #e3e3e3" : "none",
                background: plan.popular ? "#f9f7ff" : "#fafafa",
                position: "relative",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: RAINBOW,
                  }}
                />
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(17,17,17,0.4)",
                  }}
                >
                  {plan.name}
                </span>
                {plan.popular && (
                  <span
                    style={{
                      background: "#111",
                      color: "#fff",
                      fontSize: "0.56rem",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      borderRadius: 999,
                      padding: "2px 8px",
                    }}
                  >
                    Popular
                  </span>
                )}
              </div>
              <div style={{ marginTop: 8, display: "flex", alignItems: "baseline", gap: 3 }}>
                {price !== null ? (
                  <>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.6rem",
                        color: "#111",
                      }}
                    >
                      ${price}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "rgba(17,17,17,0.38)" }}>/mo</span>
                  </>
                ) : (
                  <span
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "#111" }}
                  >
                    Custom
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {TABLE_FEATURES.map((row, rIdx) => (
        <div
          key={row.label}
          style={{
            display: "grid",
            gridTemplateColumns: cols,
            background: rIdx % 2 === 0 ? "#ffffff" : "#fafafa",
          }}
        >
          <div
            style={{
              padding: "14px 20px",
              fontSize: "0.82rem",
              fontWeight: 500,
              color: "#111",
              borderRight: "1px solid #e3e3e3",
            }}
          >
            {row.label}
          </div>
          {row.values.map((val, vIdx) => (
            <div
              key={`${row.label}-${vIdx}`}
              style={{
                padding: "14px 16px",
                fontSize: "0.82rem",
                textAlign: "center",
                borderRight: vIdx < row.values.length - 1 ? "1px solid #e3e3e3" : "none",
                color: val === "\u2014" ? "rgba(17,17,17,0.2)" : "#333",
                background: PLANS[vIdx].popular ? "#f9f7ff" : "transparent",
                fontWeight: val !== "\u2014" && PLANS[vIdx].popular ? 500 : 400,
              }}
            >
              {val}
            </div>
          ))}
        </div>
      ))}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: cols,
          borderTop: "1px solid #e3e3e3",
        }}
      >
        <div style={{ borderRight: "1px solid #e3e3e3" }} />
        {PLANS.map((plan, i) => (
          <div
            key={plan.id}
            style={{
              padding: "16px 12px",
              borderRight: i < PLANS.length - 1 ? "1px solid #e3e3e3" : "none",
              background: plan.popular ? "#f9f7ff" : "transparent",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "block",
                textAlign: "center",
                borderRadius: 999,
                padding: "10px 12px",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s",
                background: plan.popular ? "#111" : "transparent",
                color: plan.popular ? "#fff" : "#111",
                border: plan.popular ? "none" : "1px solid #c8c8c8",
              }}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
