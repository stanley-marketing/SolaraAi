"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { TopNav } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://solaraai.com";
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

type TabKey = "social" | "ads" | "seo" | "full";

type ComparisonConfig = {
  columns: string[];
  rows: Array<{ label: string; values: string[] }>;
};

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

const EXPERT_PLANS: Plan[] = [
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
    popular: true,
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
      "Ad spend management $3K–$15K",
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
  {
    id: "expert-addon-website",
    name: "SEO & AI Search & Website",
    tagline: "Full SEO, AI search visibility, and custom website — all in one.",
    monthly: 168,
    yearly: 118,
    popular: true,
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

const TABS: { key: TabKey; label: string }[] = [
  { key: "social", label: "Social Media" },
  { key: "ads", label: "Ads" },
  { key: "seo", label: "SEO + AI Visibility" },
  { key: "full", label: "Full Marketing Dept" },
];

const PLANS_BY_TAB: Record<TabKey, Plan[]> = {
  social: EXPERT_PLANS.filter((p) => ["expert-social", "expert-social-commercial"].includes(p.id)),
  ads: EXPERT_PLANS.filter((p) => ["expert-ads-3k", "expert-ads-15k", "expert-ads-15k-plus"].includes(p.id)),
  seo: [
    EXPERT_PLANS.find((p) => p.id === "expert-addon-seo"),
    EXPERT_PLANS.find((p) => p.id === "expert-addon-website"),
  ].filter(Boolean) as Plan[],
  full: EXPERT_PLANS.filter((p) => ["expert-full-custom", "expert-full-custom-premium", "expert-addon-custom"].includes(p.id)),
};

const COMPARISON_BY_TAB: Record<TabKey, ComparisonConfig> = {
  social: {
    columns: ["Social", "Social + Commercial"],
    rows: [
      { label: "Content creation", values: ["✓", "✓"] },
      { label: "Story carousels", values: ["✓", "✓"] },
      { label: "Engaging videos", values: ["✓", "✓"] },
      { label: "Presentation videos", values: ["✓", "✓"] },
      { label: "All platforms", values: ["✓", "✓"] },
      { label: "TV-grade commercials", values: ["✗", "✓"] },
    ],
  },
  ads: {
    columns: ["Ads Manager", "Ads Pro", "Ads Scale"],
    rows: [
      { label: "Google/Meta/TikTok ads", values: ["✓", "✓", "✓"] },
      { label: "Landing page creation", values: ["✓", "✓", "✓"] },
      { label: "A/B testing", values: ["✓", "✓", "✓"] },
      { label: "Creative visuals", values: ["✓", "✓", "✓"] },
      { label: "Tracking setup", values: ["✓", "✓", "✓"] },
      { label: "Ad spend up to $3K", values: ["✓", "-", "-"] },
      { label: "Ad spend $3K-$15K", values: ["-", "✓", "-"] },
      { label: "Ad spend $15K+", values: ["-", "-", "✓"] },
    ],
  },
  seo: {
    columns: ["SEO & AI Search", "SEO + Website"],
    rows: [
      { label: "SEO strategy", values: ["✓", "✓"] },
      { label: "AI search optimization", values: ["✓", "✓"] },
      { label: "Keyword research", values: ["✓", "✓"] },
      { label: "On-page SEO", values: ["✓", "✓"] },
      { label: "Blog generation", values: ["✓", "✓"] },
      { label: "Ranking monitoring", values: ["✓", "✓"] },
      { label: "Custom website design", values: ["✗", "✓"] },
      { label: "Website management", values: ["✗", "✓"] },
    ],
  },
  full: {
    columns: ["Full Custom", "Full Custom Premium", "Custom Solutions"],
    rows: [
      { label: "Social media management", values: ["✓", "✓", "-"] },
      { label: "Regular commercials", values: ["✓", "-", "-"] },
      { label: "Premium commercials", values: ["-", "✓", "-"] },
      { label: "Ads up to $3K", values: ["✓", "-", "-"] },
      { label: "Ads up to $15K", values: ["-", "✓", "-"] },
      { label: "Email marketing", values: ["-", "-", "✓"] },
      { label: "SMS marketing", values: ["-", "-", "✓"] },
      { label: "Loyalty programs", values: ["-", "-", "✓"] },
    ],
  },
};

type LogoItem = { name: string; icon: React.ReactNode };

const SOCIAL_LOGOS: LogoItem[] = [
  { name: "Facebook", icon: <img src="/icons/facebook-svgrepo-com.svg" alt="Facebook" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "Instagram", icon: <img src="/icons/ig-instagram-icon.svg" alt="Instagram" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "LinkedIn", icon: <img src="/icons/linkedin-svgrepo-com.svg" alt="LinkedIn" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "TikTok", icon: <img src="/icons/tiktok-svgrepo-com.svg" alt="TikTok" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "YouTube", icon: <img src="/icons/youtube.svg" alt="YouTube" style={{ height: 26, width: "auto", objectFit: "contain" }} /> },
  { name: "X", icon: <img src="/icons/x-2.svg" alt="X" style={{ height: 28, width: "auto", objectFit: "contain" }} /> },
];

const ADS_LOGOS: LogoItem[] = [
  { name: "Meta", icon: <img src="/icons/meta-3.svg" alt="Meta" style={{ height: 28, width: "auto", objectFit: "contain" }} /> },
  { name: "Google Ads", icon: <img src="/icons/google-ads-svgrepo-com.svg" alt="Google Ads" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "TikTok Ads", icon: <img src="/icons/tiktok-svgrepo-com.svg" alt="TikTok Ads" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
];

const SEO_LOGOS: LogoItem[] = [
  { name: "OpenAI", icon: <img src="/icons/OpenAI-black-monoblossom.svg" alt="OpenAI" style={{ height: 44, width: "auto", objectFit: "contain" }} /> },
  { name: "Perplexity", icon: <img src="/icons/perplexity-color.svg" alt="Perplexity" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "Claude", icon: <img src="/icons/claude-color.svg" alt="Claude" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "Gemini", icon: <img src="/icons/gemini-color.svg" alt="Gemini" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "Grok", icon: <img src="/icons/grok.svg" alt="Grok" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  { name: "Google AI", icon: <img src="/icons/google-ai-overview.svg" alt="Google AI" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
];

const FULL_LOGOS: LogoItem[] = [
  ...SOCIAL_LOGOS,
  { name: "Meta", icon: <img src="/icons/meta-3.svg" alt="Meta" style={{ height: 28, width: "auto", objectFit: "contain" }} /> },
  { name: "Google Ads", icon: <img src="/icons/google-ads-svgrepo-com.svg" alt="Google Ads" style={{ height: 34, width: "auto", objectFit: "contain" }} /> },
  ...SEO_LOGOS,
];

const TAB_LOGOS: Record<TabKey, LogoItem[]> = {
  social: SOCIAL_LOGOS,
  ads: ADS_LOGOS,
  seo: SEO_LOGOS,
  full: FULL_LOGOS,
};

const faqs = [
  {
    q: "What pricing solutions do you offer?",
    a: "We offer four solution tracks: Social Media, Ads, SEO + AI Visibility, and Full Marketing Dept. Each track has plans for different budget and service depth needs.",
  },
  {
    q: "What's included in every plan?",
    a: "Every plan includes expert execution, platform-specific optimization, and clear monthly deliverables. Scope differs by track (social, ads, SEO, or full-service operations).",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes. Upgrade or downgrade anytime from Settings -> Billing. Changes are prorated.",
  },
  {
    q: "How do strategy calls work?",
    a: "Complete+ includes priority support with a dedicated account manager. Custom plans include white-glove onboarding. All managed plans include monthly performance reports.",
  },
  {
    q: "How do I cancel?",
    a: "Go to Settings -> Billing -> Cancel Subscription. Your account remains active until the end of your current billing period.",
  },
  {
    q: "What does custom pricing include?",
    a: "The Custom plan is tailored to your organization's needs — email marketing, loyalty programs, custom ad spend limits, and bespoke solutions. Contact us to discuss.",
  },
];

export default function PricingPage() {
  const [tab, setTab] = useState<TabKey>("social");
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activePlans = PLANS_BY_TAB[tab];
  const activeComparison = COMPARISON_BY_TAB[tab];

  return (
    <>
      <main className="min-h-screen bg-white text-ink-900">
        <TopNav />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pricing - Solara AI",
            url: `${SITE_URL}/pricing`,
            description:
              "Choose the right solution track for your business: Social Media, Ads, SEO + AI Visibility, or Full Marketing Dept.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Pricing",
                  item: `${SITE_URL}/pricing`,
                },
              ],
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          })}
        </script>

        <div style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
          <section style={{ padding: "160px 24px 0" }}>
            <div style={{ maxWidth: 1320, margin: "0 auto" }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.26em",
                  color: "rgba(17,17,17,0.6)",
                  margin: "0 0 20px",
                }}
              >
                Pricing
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.8rem, 6vw, 5.4rem)",
                  color: "#111111",
                  textAlign: "center",
                  letterSpacing: "-0.02em",
                  margin: 0,
                  lineHeight: 0.92,
                }}
              >
                One system.
                <br />
                Every lever.
              </h1>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.07rem",
                  color: "rgba(17,17,17,0.7)",
                  maxWidth: 460,
                  margin: "24px auto 0",
                  lineHeight: 1.6,
                }}
              >
                Pick the solution that matches your goals and scale with expert execution.
              </p>

              <div style={{ display: "flex", justifyContent: "center", marginTop: 40, marginBottom: 32 }}>
                <div className="pricing-tabs-container" style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", position: "relative", background: "#f1f1f1", borderRadius: 16, padding: 4, gap: 4 }}>
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
                            layoutId="pricing-page-tab-pill"
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
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: yearly ? "#9a9a9a" : "#111111",
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
                        boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                      }}
                    />
                  </button>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: yearly ? "#111111" : "#9a9a9a",
                      transition: "color 0.2s",
                    }}
                  >
                    Yearly
                  </span>
                  <span
                    style={{
                      background: yearly ? "#111111" : "#e8e8e8",
                      color: yearly ? "#ffffff" : "#9a9a9a",
                      borderRadius: 999,
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      letterSpacing: "0.04em",
                      transition: "all 0.2s",
                    }}
                  >
                    Save 30%
                  </span>
                </div>
              </div>

              <LogoStrip tab={tab} />

              <div className="pricing-grid-expert">
                {activePlans.map((plan) => (
                  <PlanCard key={plan.id} plan={plan} yearly={yearly} />
                ))}
              </div>

              <div className="compare-table" style={{ marginTop: 72 }}>
                <CompareTable yearly={yearly} plans={activePlans} comparison={activeComparison} />
              </div>
            </div>
          </section>

          <style>{`
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
            .pricing-tabs-container { border-radius: 999px !important; }
            @media (max-width: 600px) {
              .pricing-tabs-container { border-radius: 16px !important; max-width: 320px; }
              .pricing-tabs-container button { flex: 1 1 45%; min-width: 0; }
            }
            .logo-strip-icon { display: inline-flex; cursor: default; }
            .plan-card:hover { border-color: #c8c8c8 !important; }
            .plan-card-popular:hover { }
            .cta-outlined:hover { border-color: #111 !important; background: #f8fafc !important; }
            .cta-filled:hover { opacity: 0.88; }
            .cta-outlined:focus-visible, .cta-filled:focus-visible, .billing-toggle:focus-visible {
              outline: 2px solid #7c3aed; outline-offset: 2px;
            }
            .compare-link:hover { color: #111111 !important; }
            .compare-table { display: block; overflow-x: auto; }
            @media (prefers-reduced-motion: reduce) {
              *, *::before, *::after { transition: none !important; }
            }
          `}</style>

          <section className="mx-auto mt-20 max-w-7xl px-6 sm:px-10">
            <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {[
                { stat: "50 hrs", label: "saved per week, avg across clients" },
                { stat: "67.3%", label: "avg CTR increase across campaigns" },
                { stat: "3×", label: "avg ROI on same ad budget" },
                { stat: "80%", label: "avg increase in conversions" },
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

          <section className="mx-auto mt-24 max-w-2xl px-6 pb-32 sm:px-10">
            <p className="mb-3 text-[0.77rem] uppercase tracking-[0.26em] text-ink-700/50">FAQ</p>
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
                <div key={faq.q} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <span className="text-[1rem] font-medium leading-snug text-ink-900">{faq.q}</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className={`mt-0.5 h-4 w-4 shrink-0 text-ink-700/40 transition-transform duration-200 ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                  {openFaq === i && <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-700/65">{faq.a}</p>}
                </div>
              ))}
            </div>
          </section>

          <section
            className="border-t border-line px-6 py-20 text-center sm:px-10"
            style={{
              position: "relative",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(180deg, rgba(4,4,4,0.35) 0%, rgba(4,4,4,0.72) 100%), url('/blog-cta-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top, rgba(255,255,255,0.10), transparent 38%), linear-gradient(90deg, rgba(0,0,0,0.14), rgba(0,0,0,0.06), rgba(0,0,0,0.14))",
              }}
            />
            <div className="relative z-10">
            <h2
              className="mx-auto max-w-xl leading-tight tracking-[-0.015em] text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.925rem, 3.5vw, 3.125rem)",
              }}
            >
              Turn your marketing engine on.
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[1rem] text-white/78">Start free. No credit card required.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center rounded-[999px] bg-white px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-black transition-colors duration-200 hover:bg-gray-100"
              >
                Start free trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-[999px] border border-white/20 bg-white/10 px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/16"
              >
                Book a call
              </a>
            </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function LogoStrip({ tab }: { tab: TabKey }) {
  const logos = TAB_LOGOS[tab];
  if (!logos.length) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
          flexWrap: "wrap",
          padding: "8px 0 28px",
        }}
      >
        {logos.map((logo) => (
          <span key={logo.name} title={logo.name} className="logo-strip-icon">
            {logo.icon}
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
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
          <div
            className="plan-card-popular"
            style={{
              background: "#040404",
              borderRadius: 14,
              padding: "28px 22px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              transition: "box-shadow 0.22s ease",
              height: "100%",
            }}
          >
            <div
              className="pointer-events-none"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 14,
                opacity: 0.045,
                backgroundImage: NOISE_BG,
                backgroundRepeat: "repeat",
              }}
            />
            <span
              style={{
                alignSelf: "flex-end",
                background: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.63rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                borderRadius: 999,
                padding: "4px 12px",
                marginBottom: 2,
                position: "relative",
                zIndex: 1,
              }}
            >
              Popular
            </span>
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
            <Link
              href="/contact"
              className="cta-filled"
              style={{
                display: "block",
                textAlign: "center",
                background: "#ffffff",
                color: "#111111",
                borderRadius: 999,
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "all 0.2s",
                marginBottom: 24,
              }}
            >
              {plan.cta}
            </Link>
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 20 }} />
            <div style={{ flex: 1 }}>
              {plan.features.map((feature) => (
                <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                  <Check size={16} style={{ flexShrink: 0, marginTop: 2, color: "#34d399" }} />
                  <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
                    {feature.startsWith("Platforms:") ? (
                      <>
                        {feature.replace(/Platforms:\s*/, "").split(", ").map((p) => (
                          <span key={p} style={{ display: "inline-flex", alignItems: "center", gap: 3, color: "rgba(255,255,255,0.5)" }}>
                            <span style={{ color: PLATFORM_ICON_COLORS[p.trim()] ?? "currentColor", display: "inline-flex" }}>
                              {PLATFORM_ICONS[p.trim()] ?? null}
                            </span>
                            {p.trim()}
                          </span>
                        ))}
                      </>
                    ) : feature}
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
    <div
      className="plan-card"
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: "28px 22px",
        border: "1px solid #e3e3e3",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.22s ease, border-color 0.22s ease",
        height: "100%",
      }}
    >
      <div style={{ height: 34, flexShrink: 0 }} />
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
      <Link
        href="/contact"
        className="cta-filled"
        style={{
          display: "block",
          textAlign: "center",
          background: "#111111",
          color: "#ffffff",
          border: "1px solid #111111",
          borderRadius: 999,
          padding: "12px 20px",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "1px",
          textDecoration: "none",
          transition: "all 0.2s",
          marginBottom: 24,
        }}
      >
        {plan.cta}
      </Link>
      <div style={{ height: 1, background: "#e3e3e3", marginBottom: 20 }} />
      <div style={{ flex: 1 }}>
        {plan.features.map((feature) => (
          <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
            <Check size={16} style={{ flexShrink: 0, marginTop: 2, color: "#16c253" }} />
            <span style={{ fontSize: "16px", color: "#333333", lineHeight: 1.5, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4 }}>
              {feature.startsWith("Platforms:") ? (
                <>
                  {feature.replace(/Platforms:\s*/, "").split(", ").map((p) => (
                    <span key={p} style={{ display: "inline-flex", alignItems: "center", gap: 3, color: "#555555" }}>
                      <span style={{ color: PLATFORM_ICON_COLORS[p.trim()] ?? "currentColor", display: "inline-flex" }}>
                        {PLATFORM_ICONS[p.trim()] ?? null}
                      </span>
                      {p.trim()}
                    </span>
                  ))}
                </>
              ) : feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareTable({
  yearly,
  plans,
  comparison,
}: {
  yearly: boolean;
  plans: Plan[];
  comparison: ComparisonConfig;
}) {
  const colW = "1fr";
  const labelW = "180px";
  const cols = `${labelW} repeat(${plans.length}, ${colW})`;

  return (
    <div style={{ borderRadius: 16, border: "1px solid #e3e3e3", overflow: "hidden", minWidth: 680 }}>
      <div style={{ display: "grid", gridTemplateColumns: cols }}>
        <div style={{ padding: "20px 20px", background: "#fafafa", borderRight: "1px solid #e3e3e3", borderBottom: "1px solid #e3e3e3" }} />
        {plans.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          const title = comparison.columns[i] ?? plan.name;
          return (
            <div
              key={plan.id}
              style={{
                padding: "20px 16px",
                borderBottom: "1px solid #e3e3e3",
                borderRight: i < plans.length - 1 ? "1px solid #e3e3e3" : "none",
                background: plan.popular ? "#f9f7ff" : "#fafafa",
                position: "relative",
              }}
            >
              {plan.popular && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: RAINBOW }} />}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(17,17,17,0.4)" }}>{title}</span>
                {plan.popular && <span style={{ background: "#111", color: "#fff", fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", borderRadius: 999, padding: "2px 8px" }}>Popular</span>}
              </div>
              <div style={{ marginTop: 8, display: "flex", alignItems: "baseline", gap: 3, flexWrap: "wrap" }}>
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

      {comparison.rows.map((row, rIdx) => (
        <div key={row.label} style={{ display: "grid", gridTemplateColumns: cols, background: rIdx % 2 === 0 ? "#ffffff" : "#fafafa" }}>
          <div style={{ padding: "14px 20px", fontSize: "0.82rem", fontWeight: 500, color: "#111", borderRight: "1px solid #e3e3e3" }}>{row.label}</div>
          {row.values.map((value, vIdx) => {
            const isPositive = value === "✓";
            const isNegative = value === "✗" || value === "-";
            return (
              <div
                key={`${row.label}-${vIdx}`}
                style={{
                  padding: "14px 16px",
                  fontSize: "0.82rem",
                  textAlign: "center",
                  borderRight: vIdx < row.values.length - 1 ? "1px solid #e3e3e3" : "none",
                  color: isPositive ? "#16c253" : isNegative ? "rgba(17,17,17,0.3)" : "#333",
                  background: plans[vIdx]?.popular ? "#f9f7ff" : "transparent",
                  fontWeight: isPositive ? 600 : 500,
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      ))}

      <div style={{ display: "grid", gridTemplateColumns: cols, borderTop: "1px solid #e3e3e3" }}>
        <div style={{ borderRight: "1px solid #e3e3e3" }} />
        {plans.map((plan, i) => (
          <div key={plan.id} style={{ padding: "16px 12px", borderRight: i < plans.length - 1 ? "1px solid #e3e3e3" : "none", background: plan.popular ? "#f9f7ff" : "transparent" }}>
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
