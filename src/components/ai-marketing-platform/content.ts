/**
 * content.ts — Single source of truth for the AI Marketing Platform pillar page.
 *
 * Rules:
 * - No invented metrics beyond documented case study (Maison: 131 leads, 27 days, $800K+, 5 contracts).
 * - Primary CTA is always { label: "Book a strategy call", href: "/contact" }.
 * - Pure data module — no React, no JSX, no component logic.
 */

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export type ComparisonValue = string | "check" | "cross";

export type ComparisonRow = {
  feature: string;
  diy: ComparisonValue;
  agency: ComparisonValue;
  solara: ComparisonValue;
};

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const PLATFORM_CONTENT = {
  // -------------------------------------------------------------------------
  // Hero
  // -------------------------------------------------------------------------
  hero: {
    badge: "AI Marketing Platform",
    headline: "The Execution-First AI Marketing Platform",
    headlineEmphasis: "AI Marketing Platform",
    subheadline:
      "An AI marketing platform is a system that plans, creates, launches, and optimizes marketing campaigns using artificial intelligence. Solara is built for SMB teams that need pipeline, not just output.",
    stats: [
      { value: "131 Leads", label: "In 27 days" },
      { value: "$800K+", label: "Pipeline generated" },
      { value: "5 Contracts", label: "Signed from one cycle" },
      { value: "From $174/mo", label: "Starting price" },
    ] as const,
    cta: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "Compare alternatives", href: "/alternatives" },
  },

  // -------------------------------------------------------------------------
  // Platform layers (4-step architecture)
  // -------------------------------------------------------------------------
  layers: {
    badge: "Platform architecture",
    headline: "Four layers that turn strategy into pipeline",
    sub: "A high-performing AI marketing platform needs four connected layers. If one layer is missing, teams rebuild the gap manually — with spreadsheets and extra meetings.",
    items: [
      {
        number: 1,
        title: "Strategy & planning layer",
        description:
          "Campaign goals, offer positioning, audience segments, and channel priorities — defined. The platform helps teams answer: What are we trying to achieve? Which campaigns are top priority? Without this layer, AI produces random activity instead of coherent growth work.",
      },
      {
        number: 2,
        title: "Creative production layer",
        description:
          "Copy, visuals, ad variants, social posts, and landing page messaging — generated and iterated with brand tone constraints, approval checkpoints, and channel formatting rules. Content is usable immediately, not after heavy rewrites.",
      },
      {
        number: 3,
        title: "Publishing & campaign ops layer",
        description:
          "Content should not stop in drafts. Teams need direct support for launch workflows: campaign setup, budget structure, schedule management, posting cadence, and QA. This is where most SMB teams lose momentum in tool-only stacks.",
      },
      {
        number: 4,
        title: "Optimization & learning layer",
        description:
          "Performance signals feed the next sprint. Winning hooks, conversion paths, underperforming creatives, and audience-level insights become concrete iteration actions — not optional analysis that happens when someone has time.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Why SMBs need execution-first (feature cards)
  // -------------------------------------------------------------------------
  why: {
    badge: "Why it matters",
    headline: "Why SMB teams need execution-first systems",
    cards: [
      {
        title: "Limited team bandwidth",
        body: "Most SMB teams run lean. Marketing is often handled by one founder or a generalist with a full calendar. Execution-first platforms reduce operational drag by combining planning and production in one place.",
      },
      {
        title: "Cross-channel pressure",
        body: "Buyers move between search, social, paid ads, and direct visits. If channels run independently, messaging drifts and attribution gets noisy. A platform should enforce channel alignment so creative and offers stay consistent.",
      },
      {
        title: "Speed without quality loss",
        body: "AI gives speed, but raw speed damages performance when quality controls are weak. SMB teams need guardrails for tone, claims, CTA alignment, audience fit, and platform compliance — fast output is only useful when launch-ready.",
      },
      {
        title: "Accountability to pipeline",
        body: "Revenue teams report on leads, conversion rates, sales-qualified opportunities, and closed revenue — not prompt quality. Execution-first platforms prioritize these outcomes and make optimization loops explicit.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Comparison table
  // Columns: DIY Tools | Traditional Agency | Solara AI
  // -------------------------------------------------------------------------
  comparison: {
    headline: "Solara vs tool-only stacks",
    columns: {
      diy: "DIY Tools",
      agency: "Traditional Agency",
      solara: "Solara AI",
    },
    rows: [
      {
        feature: "Core output",
        diy: "Assets & drafts",
        agency: "Reports & strategy docs",
        solara: "Live campaigns + optimization cycles",
      },
      {
        feature: "Operations burden",
        diy: "High — you coordinate everything",
        agency: "High retainer, slow execution",
        solara: "check",
      },
      {
        feature: "Channel consistency",
        diy: "cross",
        agency: "Partial",
        solara: "check",
      },
      {
        feature: "AI-powered optimization",
        diy: "cross",
        agency: "cross",
        solara: "check",
      },
      {
        feature: "Launch timeline",
        diy: "You manage",
        agency: "4–8 weeks",
        solara: "Days",
      },
      {
        feature: "Structured feedback loop",
        diy: "Manual, ad-hoc",
        agency: "Monthly reports",
        solara: "check",
      },
      {
        feature: "SMB ready out of the box",
        diy: "Needs in-house expertise",
        agency: "High minimum commitment",
        solara: "check",
      },
      {
        feature: "Starting price",
        diy: "Varies by tool",
        agency: "$3K–$10K/mo",
        solara: "From $174/mo",
      },
    ] satisfies ComparisonRow[],
  },

  // -------------------------------------------------------------------------
  // Proof section — Maison case study (documented, approved)
  // -------------------------------------------------------------------------
  proof: {
    badge: "Proven results",
    client: "Maison Remodeling",
    headline: "131 leads. 27 days. $800K+ pipeline.",
    body1:
      "In one documented campaign cycle, Solara helped Maison generate 131 leads in 27 days. The same cycle produced $800K+ in attributed pipeline and 5 signed contracts.",
    body2:
      "The point is not a single vanity spike — it is that clear positioning, coordinated creative, launch discipline, and weekly optimization convert AI speed into real business outcomes.",
    stats: [
      { value: "131", label: "Leads generated" },
      { value: "27", label: "Days to results" },
      { value: "$800K+", label: "Pipeline attributed" },
      { value: "5", label: "Contracts signed" },
    ] as const,
  },

  // -------------------------------------------------------------------------
  // FAQ — identical to existing page.tsx faqItems (preserved for JSON-LD)
  // -------------------------------------------------------------------------
  faq: [
    {
      question: "What is an AI marketing platform?",
      answer:
        "An AI marketing platform is a system that combines strategy, creative production, campaign publishing, and optimization in one workflow. The best platforms do not stop at content generation — they help teams launch and improve live campaigns based on performance data.",
    },
    {
      question: "How is Solara different from using separate AI tools?",
      answer:
        "Most tool stacks require a team to connect planning, copy, design, channel setup, analytics, and iteration manually. Solara is execution-first: campaigns get built, launched, and optimized with managed support, so work moves from idea to results faster.",
    },
    {
      question: "How quickly can an SMB team get started?",
      answer:
        "Most teams can launch their first structured campaigns in days, not months. Setup includes goals, channel priorities, baseline messaging, and a practical reporting rhythm so optimization starts immediately.",
    },
    {
      question: "What channels can an AI marketing platform support?",
      answer:
        "A complete platform should support paid ads, organic content, landing pages, and conversion-focused follow-up. Solara supports cross-channel execution so performance can be measured as a system instead of isolated tactics.",
    },
    {
      question: "What does pricing look like for Solara?",
      answer:
        "Solara plans start from $174/mo. Final scope depends on your channel mix, execution volume, and whether you need managed support for paid campaigns, social content, and ongoing optimization.",
    },
    {
      question: "Do we keep ownership of our assets and data?",
      answer:
        "Yes. Your creative assets, ad copy, audience learnings, and campaign data remain yours. A strong platform should improve execution speed without locking your business into hidden dependencies.",
    },
  ],

  // -------------------------------------------------------------------------
  // Closing CTA
  // -------------------------------------------------------------------------
  cta: {
    headline: "Build your execution-first marketing system",
    sub: "Start with a practical strategy call. We'll map your current bottlenecks, channel priorities, and the fastest path to measurable growth.",
    primary: { label: "Book your strategy call", href: "/contact" },
    secondary: { label: "See how it works", href: "/grow" },
  },
} as const;
