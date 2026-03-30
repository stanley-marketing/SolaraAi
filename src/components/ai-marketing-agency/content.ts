/**
 * content.ts — Single source of truth for all AI Marketing Agency landing page copy.
 *
 * Rules:
 * - No invented metrics beyond the approved Maison case study facts.
 * - Maison stats are approved: 131 leads, 27 days, 5 signed contracts, $800K+ pipeline, $450K–$500K largest deal.
 * - Primary CTA is always { label: "Book a strategy call", href: "/contact" }.
 * - Pure data module — no React, no JSX, no component logic.
 */

export type Cta = { label: string; href: string };

export type ProofStat = {
  value: string;
  label: string;
};

export type ComparisonValue = string | "check" | "cross";

export type ComparisonRow = {
  feature: string;
  diy: ComparisonValue;
  tools: ComparisonValue;
  agency: ComparisonValue;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ScopeItem = {
  title: string;
  description: string;
};

export type CadencePhase = {
  label: string;
  title: string;
  description: string;
};

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const PRIMARY_CTA: Cta = { label: "Book a strategy call", href: "/contact" };

export const AGENCY_CONTENT = {
  // -------------------------------------------------------------------------
  // Hero
  // -------------------------------------------------------------------------
  hero: {
    eyebrow: "AI Marketing Agency",
    headline: "Managed Marketing That Delivers",
    accentWord: "Delivers",
    subheadline:
      "An AI marketing agency is a managed service that uses artificial intelligence to plan, produce, and optimize marketing campaigns on your behalf. Solara handles paid ads, content, and social so you focus on your business.",
    cta: PRIMARY_CTA,
    secondaryCta: { label: "Explore the platform", href: "/ai-marketing-platform" },
    proofStrip: [
      { value: "131", label: "qualified leads" },
      { value: "27 days", label: "to results" },
      { value: "$800K+", label: "pipeline generated" },
      { value: "$174/mo", label: "starting price" },
    ] as ProofStat[],
  },

  // -------------------------------------------------------------------------
  // Scope / What's included
  // -------------------------------------------------------------------------
  scope: {
    eyebrow: "What's included",
    headline: "Everything your marketing needs. One accountable system.",
    items: [
      {
        title: "Paid Ads",
        description:
          "Campaign strategy, creative production, and ongoing optimization for Meta, Google, and more.",
      },
      {
        title: "Content Creation",
        description:
          "AI-powered copy and creative variants across formats — social, email, blog, and landing pages.",
      },
      {
        title: "Social Publishing",
        description:
          "Consistent cross-channel presence with posts, captions, and scheduling managed for you.",
      },
      {
        title: "Continuous Optimization",
        description:
          "Weekly testing cycles, budget reallocation, and creative iteration tied to real outcomes.",
      },
      {
        title: "Performance Reporting",
        description:
          "Clear reporting on leads, pipeline, and cost-per-acquisition — so you always know what's working.",
      },
      {
        title: "Launch QA",
        description:
          "Pre-launch checklists, messaging consistency, and CTA alignment before every campaign goes live.",
      },
    ] as ScopeItem[],
  },

  // -------------------------------------------------------------------------
  // Proof — Maison Remodeling case study
  // Approved facts only. Do not invent or extrapolate.
  // -------------------------------------------------------------------------
  proof: {
    eyebrow: "Client results",
    headline: "131 leads. 27 days. $800K+ pipeline.",
    client: "Maison Remodeling",
    clientDescriptor: "Home remodeling contractor",
    narrative:
      "A home remodeling company needed qualified leads — fast. Through coordinated campaign planning, creative production, launch discipline, and rapid live-data iteration, here's what happened in the first month.",
    stats: [
      { value: "131", label: "Qualified leads", approved: true },
      { value: "27", unit: "days", label: "Time to results", approved: true },
      { value: "5", label: "Signed contracts", approved: true },
      { value: "$800K+", label: "Pipeline value", approved: true },
      { value: "$450K–500K", label: "Largest single deal", approved: true },
    ],
    pullQuote:
      "Coordinated planning + creative production + launch discipline + rapid iteration = results.",
    disclaimer:
      "Results reflect a specific client engagement. Outcomes vary based on market, offer quality, and sales follow-through.",
  },

  // -------------------------------------------------------------------------
  // Comparison — Agency vs Tools vs DIY
  // -------------------------------------------------------------------------
  comparison: {
    eyebrow: "How we compare",
    headline: "Agency vs Tools vs DIY",
    columns: { diy: "DIY Stack", tools: "Tool-only AI", agency: "Solara" },
    rows: [
      {
        feature: "Dedicated team manages execution",
        diy: "cross",
        tools: "cross",
        agency: "check",
      },
      {
        feature: "AI-powered creative production",
        diy: "cross",
        tools: "Partial",
        agency: "check",
      },
      {
        feature: "Cross-channel consistency",
        diy: "You manage",
        tools: "Fragmented",
        agency: "check",
      },
      {
        feature: "Launch timeline",
        diy: "You manage",
        tools: "You manage",
        agency: "Days",
      },
      {
        feature: "Optimization cadence",
        diy: "cross",
        tools: "Manual",
        agency: "Weekly sprints",
      },
      {
        feature: "Accountability to pipeline",
        diy: "cross",
        tools: "cross",
        agency: "check",
      },
      {
        feature: "Strategy included",
        diy: "cross",
        tools: "cross",
        agency: "check",
      },
    ] as ComparisonRow[],
  },

  // -------------------------------------------------------------------------
  // 30-60-90 day cadence
  // -------------------------------------------------------------------------
  cadence: {
    eyebrow: "Operating rhythm",
    headline: "30–60–90 day growth cadence",
    phases: [
      {
        label: "First 30 days",
        title: "Foundation & Launch",
        description:
          "Baseline messaging, campaign architecture, tracking hygiene, and initial creative sets. The focus is clean launch quality and rapid signal collection.",
      },
      {
        label: "Days 31–60",
        title: "Optimize & Expand",
        description:
          "Expand winning angles, tighten conversion paths, and improve budget allocation based on lead quality.",
      },
      {
        label: "Days 61–90",
        title: "Scale & Compound",
        description:
          "Scale validated campaigns, retire underperformers, and align reporting to pipeline impact. The system compounds.",
      },
    ] as CadencePhase[],
  },

  // -------------------------------------------------------------------------
  // Pricing
  // -------------------------------------------------------------------------
  pricing: {
    eyebrow: "Transparent pricing",
    headline: "Starts from $174/month",
    description:
      "Practical pricing depends on your execution scope: channel mix, campaign volume, and optimization cadence. During your strategy call, we map required outcomes to a clear operating plan so expectations are explicit before work begins.",
    note: "No hidden retainers. No strategy-only decks. Work that ships.",
    cta: PRIMARY_CTA,
  },

  // -------------------------------------------------------------------------
  // FAQ
  // -------------------------------------------------------------------------
  faq: [
    {
      question: "What does an AI marketing agency do?",
      answer:
        "An AI marketing agency combines AI systems with human strategic oversight to plan, launch, and optimize campaigns. It should manage execution across paid ads, content, social, and conversion paths instead of only providing recommendations.",
    },
    {
      question: "How is an AI marketing agency different from buying tools?",
      answer:
        "Tools can increase production speed, but teams still need operators to turn assets into outcomes. An agency model adds accountable execution, decision ownership, and ongoing optimization tied to business metrics.",
    },
    {
      question: "Is Solara a software tool or a managed service?",
      answer:
        "Solara combines platform capabilities with managed execution. You get AI-powered production and campaign operations support, so your team can move faster without adding full-time marketing headcount.",
    },
    {
      question: "What is included in managed AI marketing with Solara?",
      answer:
        "Scope can include campaign strategy, ad and content production, social publishing support, testing plans, and recurring optimization sprints with clear reporting on lead and pipeline outcomes.",
    },
    {
      question: "How transparent is pricing?",
      answer:
        "Solara pricing starts from $174/mo, with scope based on channels and execution needs. The engagement model is designed to stay clear on deliverables, timelines, and ownership from the beginning.",
    },
    {
      question: "How quickly can we expect traction?",
      answer:
        "Most teams see early directional data in the first few weeks, with stronger outcome trends after iterative optimization cycles. Results depend on market, offer quality, and sales follow-through.",
    },
  ] as FaqItem[],

  // -------------------------------------------------------------------------
  // Closing CTA
  // -------------------------------------------------------------------------
  cta: {
    headline: "Get a managed growth plan for your team",
    sub: "If you want agency-level execution without agency overhead, book a strategy call. We'll map your bottlenecks, define priorities, and build a clear launch plan.",
    cta: PRIMARY_CTA,
    secondary: { label: "See the platform", href: "/ai-marketing-platform" },
  },
} as const;
