export const SECTIONS = [
  "Hero",
  "Teardown",
  "Showcase",
  "Walkthrough/Bridge",
  "Craft/Before-After",
  "Comparison",
  "Pricing",
  "FAQ",
  "Close",
] as const;

export const ROUTE_POLICY = {
  robots: "noindex,nofollow",
  canonical: "https://solaraai.com/home-v2",
} as const;

export const CTA_MAP = {
  heroPrimary: "/contact",
  heroSecondary: "#home-v2-hero-proof",
  showcase: "#home-v2-showcase",
  beforeAfter: "#home-v2-showcase",
  comparison: "/contact",
  pricing: "/contact",
  faqHuman: "/contact",
  close: "/contact",
} as const;

export const ITALIC_NAVY_ACCENTS = [
  { section: "hero", text: "director now" },
  { section: "close", text: "Solara replaces" },
] as const;

export const TESTIDS = {
  hero: "home-v2-hero",
  teardown: "home-v2-teardown",
  showcase: "home-v2-showcase",
  bridge: "home-v2-bridge",
  craft: "home-v2-craft",
  comparison: "home-v2-comparison",
  pricing: "home-v2-pricing",
  faq: "home-v2-faq",
  close: "home-v2-close",
  heroProof: "home-v2-hero-proof",
  showcaseTabs: "home-v2-showcase-tabs",
  beforeAfterSlider: "home-v2-before-after-slider",
} as const;

export const LOCKED_COPY = {
  heroHeadline: "Your business has a director now.",
  monthlyPrice: "$99",
  annualMonthlyPrice: "$69",
  annualPrice: "$828/yr",
  annualDiscount: "30%",
  annualSavings: "2.5 months free",
  freeTrial: "14-day free trial",
  cancelAnytime: "Cancel anytime",
  noCreditCard: "No credit card",
  setupTime: "Setup in 10 minutes",
} as const;

export const BANNED_PHRASES = [
  "AI slop",
  "spatial onboarding",
  "foot traffic",
  "people walking in",
  "press record once",
  "restaurant-only",
  "leverage",
  "utilize",
  "synergy",
  "omnichannel",
  "seamless",
  "robust",
  "scalable",
  "cutting-edge",
  "revolutionary",
  "disruptive",
  "powered by GPT",
  "neural network",
  "machine learning",
] as const;

export const SAMPLE_DISCLAIMER =
  "Every brief, every scene, every post — generated and published by Solara. Sample shown for illustration. Replaceable with your real campaign in week one.";
