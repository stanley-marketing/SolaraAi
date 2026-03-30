/**
 * content.ts — Single source of truth for the AI Ad Generator landing page.
 *
 * Rules:
 * - No invented metrics, client names, testimonial quotes, or percentage improvements.
 * - Primary CTA is always { label: "Generate your first campaign", href: "/contact" }.
 * - This is a pure data module — no React, no JSX, no component logic.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type Cta = { label: string; href: string };

export type WorkflowStep = {
  number: number;
  label: string;
  title: string;
  description: string;
  accentColor: string;
};

export type QualityFeature = {
  icon: string;
  title: string;
  description: string;
};

export type ComparisonRow = {
  capability: string;
  others: string;
  solara: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ChecklistItem = { text: string };

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const CTA: Cta = { label: "Generate your first campaign", href: "/contact" };

export const AD_GEN_CONTENT = {
  hero: {
    eyebrow: "AI Ad Generator",
    headline: "Brief to Launch.",
    headlineAccent: "Systemized.",
    subheadline:
      "An AI ad generator is a tool that creates ad copy, images, and video variations using artificial intelligence. Solara goes further — handling the full cycle from brief to launch to optimization.",
    cta: CTA,
    secondaryCta: { label: "View full platform", href: "/ai-marketing-platform" },
    pillLabel: "Creative Studio",
    statsBar: [
      { value: "Brief → Launch", label: "Full workflow" },
      { value: "3–5 variants", label: "Per test set" },
      { value: "Quality-checked", label: "Before every launch" },
      { value: "From $174/mo", label: "Starting price" },
    ] as const,
  },

  workflow: {
    eyebrow: "The workflow",
    headline: "How great ads actually get made",
    subheadline:
      "Ad performance is cumulative. Teams that launch with clear variant logic learn faster, spend better, and scale winners earlier.",
    steps: [
      {
        number: 1,
        label: "Brief",
        title: "Structured campaign brief",
        description:
          "Define objective, audience, offer, value proposition, and CTA. Input quality controls everything downstream — better briefs produce better creative.",
        accentColor: "#f472b6",
      },
      {
        number: 2,
        label: "Variants",
        title: "Creative variants generated",
        description:
          "Multiple hooks, visual angles, and CTA framings mapped to the same offer. Enables deliberate testing without message drift.",
        accentColor: "#a78bfa",
      },
      {
        number: 3,
        label: "Launch",
        title: "QA and launch support",
        description:
          "Platform formatting, policy compliance, landing-page message match, and tracking validation before going live. Clean naming for test integrity.",
        accentColor: "#fb923c",
      },
      {
        number: 4,
        label: "Optimize",
        title: "Optimization loop",
        description:
          "Launch small, collect clean signals, identify winning elements, iterate fast. Winning hooks roll into the next creative sprint.",
        accentColor: "#34d399",
      },
    ] as WorkflowStep[],
  },

  quality: {
    eyebrow: "Quality controls",
    headline: "Fast generation. No guardrail gaps.",
    subheadline:
      "Fast generation is useless without guardrails. Solara applies controls at three points: before generation, after generation, and before launch.",
    features: [
      {
        icon: "Target",
        title: "Offer-to-audience fit",
        description:
          "Every ad variant is checked against the intended audience segment and offer before it's approved for launch.",
      },
      {
        icon: "Ruler",
        title: "Channel format validation",
        description:
          "Character limits, aspect ratios, and platform policies checked automatically across Meta, Google, and short-form.",
      },
      {
        icon: "Shield",
        title: "Brand tone & claim safety",
        description:
          "Prohibited claims and off-brand tone are flagged before a single dollar of spend goes out the door.",
      },
      {
        icon: "Link",
        title: "CTA consistency",
        description:
          "The ad CTA matches the landing page offer exactly. Mismatches increase CPC and tank conversion rates.",
      },
      {
        icon: "BarChart3",
        title: "Tracking integrity",
        description:
          "Naming conventions and UTM structure preserved across every variant so reporting stays clean and comparable.",
      },
      {
        icon: "Zap",
        title: "Approval checkpoints",
        description:
          "Your team reviews before launch. Speed stays high; risk stays controlled. No surprises at campaign level.",
      },
    ] as QualityFeature[],
  },

  comparison: {
    eyebrow: "Solara vs others",
    headline: "Most tools stop at the draft",
    rows: [
      {
        capability: "Creative output",
        others: "Yes",
        solara: "Yes, with structured variant systems",
      },
      {
        capability: "Launch support",
        others: "Often manual",
        solara: "Execution support included",
      },
      {
        capability: "Optimization workflow",
        others: "Limited or external",
        solara: "Built-in iteration loop",
      },
      {
        capability: "Managed accountability",
        others: "No",
        solara: "Yes",
      },
      {
        capability: "Starting price",
        others: "Varies",
        solara: "From $174/mo",
      },
    ] as ComparisonRow[],
  },

  checklist: {
    eyebrow: "Implementation guide",
    headline: "The SMB team checklist",
    subheadline:
      "Teams that follow this structure make better budget decisions faster and rediscover fewer patterns from scratch.",
    items: [
      { text: "Define one primary conversion goal per campaign to avoid mixed signals" },
      { text: "Build a concise campaign brief with audience pain points and offer proof" },
      { text: "Generate 3–5 controlled creative variants per test set" },
      { text: "Keep landing-page message match tight to improve conversion quality" },
      { text: "Use naming conventions that preserve test history and decision logic" },
      { text: "Review performance weekly and roll winning hooks into the next sprint" },
      { text: "Tie reporting to lead quality and pipeline value, not clicks alone" },
    ] as ChecklistItem[],
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Frequently asked questions",
    items: [
      {
        question: "What is an AI ad generator?",
        answer:
          "An AI ad generator is a system that creates ad copy, visuals, hooks, CTAs, and campaign variants from a structured brief. The best systems also include launch support and optimization guidance instead of stopping at creative drafts.",
      },
      {
        question: "Which channels can Solara support for ad generation?",
        answer:
          "Solara supports ad creation and management across Google Ads (Search, Display, YouTube), Meta (Facebook and Instagram), TikTok, and LinkedIn. Creative production, launch, and optimization are handled end-to-end for each channel.",
      },
      {
        question: "How do you control ad quality and brand safety?",
        answer:
          "Quality controls include offer and CTA alignment, claim checks, audience fit, channel-specific formatting, and approval checkpoints before launch. This protects brand consistency while preserving production speed.",
      },
      {
        question: "Can Solara generate UGC-style ad creative?",
        answer:
          "Yes. Solara produces UGC-style video ads using AI avatars with voice cloning and lipsync, short-form hooks for Reels and TikTok, and multi-variant scripts. Each variant is tested and optimized based on real performance data.",
      },
      {
        question: "Who owns the ads and assets created?",
        answer:
          "You do. Your business retains ownership of campaign assets, ad copy, and performance learnings. That includes what is produced, launched, and iterated in the account.",
      },
      {
        question: "What does pricing start at?",
        answer:
          "Ads Manager plans start from $174/mo (billed annually) or $249/mo (billed quarterly). Full-stack plans that include ads, content, social, and SEO start from $419/mo. See the pricing page for the full breakdown.",
      },
    ] as FaqItem[],
  },

  cta: {
    headline: "Launch higher-performing ads, faster",
    subheadline:
      "Book a strategy call and we'll map your current ad production process, identify the bottlenecks, and design an execution plan that moves from brief to measurable outcomes.",
    cta: { label: "Book a strategy call", href: "/contact" },
    secondaryCta: { label: "See the platform", href: "/ai-marketing-platform" },
  },
} as const;
