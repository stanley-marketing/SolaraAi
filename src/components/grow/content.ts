/**
 * content.ts — Single source of truth for all Grow managed-service landing page copy.
 *
 * Rules:
 * - No invented metrics, client names, testimonial quotes, or percentage improvements.
 * - All proof items are explicitly marked `approved: true`.
 * - Primary CTA is always { label: "Book a call", href: "/contact" }.
 * - This is a pure data module — no React, no JSX, no component logic.
 */

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export type Cta = {
  label: string;
  href: string;
};

export type HeroContent = {
  headline: string;
  subheadline: string;
  cta: Cta;
  proofTags: readonly string[];
};

export type PainPoint = {
  text: string;
};

export type InsightContent = {
  headline: string;
  painPoints: PainPoint[];
};

export type PositioningColumn = {
  label: string;
  highlighted: boolean;
  description: string;
};

export type PositioningContent = {
  headline: string;
  columns: PositioningColumn[];
};

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export type ProcessContent = {
  headline: string;
  steps: ProcessStep[];
};

export type ProofCard = {
  title: string;
  description: string;
  approved: true;
};

export type ProofContent = {
  headline: string;
  sub: string;
  cards: ProofCard[];
};

export type ComparisonValue = string | "check" | "cross";

export type ComparisonRow = {
  feature: string;
  diy: ComparisonValue;
  agency: ComparisonValue;
  solara: ComparisonValue;
};

export type ComparisonContent = {
  headline: string;
  columns: { diy: string; agency: string; solara: string };
  rows: ComparisonRow[];
};

export type TrustLogo = {
  name: string;
  src: string;
  alt: string;
};

export type TrustContent = {
  /**
   * trustLogos is intentionally empty.
   * The /home/yuval/Downloads/Solara Resources/logos/website directory only contains
   * generic Solara brand frames (Frame (1) (Copy).png, Group 3133 (Copy).svg, etc.)
   * — no verified platform or partner logos (Facebook Ads, Google Ads, Instagram, etc.).
   * Add entries here once verified platform logo assets are available.
   */
  trustLogos: TrustLogo[];
  statements: string[];
};

export type ClosingCtaContent = {
  headline: string;
  sub: string;
  cta: Cta;
};

export type GrowContent = {
  hero: HeroContent;
  insight: InsightContent;
  positioning: PositioningContent;
  process: ProcessContent;
  proof: ProofContent;
  comparison: ComparisonContent;
  trust: TrustContent;
  closingCta: ClosingCtaContent;
};

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const CTA: Cta = {
  label: "Book a call",
  href: "/contact",
};

export const GROW_CONTENT: GrowContent = {
  // -------------------------------------------------------------------------
  // Hero
  // -------------------------------------------------------------------------
  hero: {
    headline: "Your Entire Marketing, Managed by AI + Our Experts",
    subheadline:
      "Grow is the done-for-you service where our team handles your paid ads, content strategy, and campaigns — powered by AI, delivered by experts.",
    cta: CTA,
    proofTags: ["Expert-managed", "AI-powered", "Always-on"],
  },

  // -------------------------------------------------------------------------
  // Insight / Problem framing
  // -------------------------------------------------------------------------
  insight: {
    headline: "Marketing is a full-time job. You shouldn't have to do it alone.",
    painPoints: [
      { text: "Managing multiple channels is a full-time job" },
      { text: "Agencies are expensive and slow to iterate" },
      { text: "DIY tools require expertise you may not have" },
    ],
  },

  // -------------------------------------------------------------------------
  // 3-Way Positioning
  // -------------------------------------------------------------------------
  positioning: {
    headline: "Why Grow is different",
    columns: [
      {
        label: "DIY Tools",
        highlighted: false,
        description:
          "Fast to start, but you're doing everything yourself. Requires expertise, time, and constant optimization.",
      },
      {
        label: "Traditional Agency",
        highlighted: false,
        description:
          "High retainers, slow turnarounds, and limited AI leverage. Results take months to materialize.",
      },
      {
        label: "Grow",
        highlighted: true,
        description:
          "Expert team + AI systems handling everything. Fast launches, continuous optimization, measurable results.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 4-Step Process
  // -------------------------------------------------------------------------
  process: {
    headline: "How it works",
    steps: [
      {
        number: 1,
        title: "Foundation Inspection & Analysis",
        description:
          "Full inspection and analysis of your current marketing state \u2014 what\u2019s working, what\u2019s not, and where the gaps are.",
      },
      {
        number: 2,
        title: "Custom Strategy & Execution Plan",
        description:
          "A made-to-measure strategy with custom channel selection \u2014 SMS/email marketing, loyalty programs, plus Solara core (social, SEO, ads, AI search).",
      },
      {
        number: 3,
        title: "Strategy Review & Approval",
        description:
          "Up to 7 days for you to review, refine, and approve the strategy before we launch.",
      },
      {
        number: 4,
        title: "Weekly Content Approvals",
        description:
          "Ongoing weekly approvals for all content \u2014 you stay in control while we handle execution.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Proof / Results
  // No specific metrics, client names, or invented numbers.
  // -------------------------------------------------------------------------
  proof: {
    headline: "Clients See Results Fast",
    sub: "From first campaign to measurable growth — our managed team moves at speed.",
    cards: [
      {
        title: "Reduced cost per lead",
        description:
          "Smarter targeting and continuous AI optimization bring down acquisition costs over time.",
        approved: true,
      },
      {
        title: "Increased ad ROAS",
        description:
          "Expert campaign structure combined with AI bidding drives stronger return on ad spend.",
        approved: true,
      },
      {
        title: "Scaled content output",
        description:
          "AI-assisted production means more content, more channels, and more touchpoints — without more headcount.",
        approved: true,
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Comparison table
  // Columns: DIY Tools | Traditional Agency | Grow
  // Values: "check" | "cross" | descriptive string
  // -------------------------------------------------------------------------
  comparison: {
    headline: "See how Grow stacks up",
    columns: {
      diy: "DIY Tools",
      agency: "Traditional Agency",
      solara: "Grow",
    },
    rows: [
      {
        feature: "Solara AI team manages campaigns",
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
        feature: "Monthly reporting",
        diy: "cross",
        agency: "check",
        solara: "check",
      },
      {
        feature: "Strategy included",
        diy: "cross",
        agency: "Partial",
        solara: "check",
      },
      {
        feature: "Creative production",
        diy: "You manage",
        agency: "Slow",
        solara: "check",
      },
      {
        feature: "Channel coverage (Paid + Social + Content)",
        diy: "You manage",
        agency: "Partial",
        solara: "check",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Trust section
  // trustLogos is empty — see type comment above for explanation.
  // -------------------------------------------------------------------------
  trust: {
    trustLogos: [],
    statements: [
      "Real team, real results",
      "AI-augmented, human-verified",
      "Your marketing, always on",
    ],
  },

  // -------------------------------------------------------------------------
  // Closing CTA
  // -------------------------------------------------------------------------
  closingCta: {
    headline: "Ready to Hand Off Your Marketing?",
    sub: "Book a call with our team. We'll walk you through exactly how Grow works for your business.",
    cta: CTA,
  },
};
