export type AlternativeCard = {
  href: string;
  label: string;
  description: string;
  image: string;
};

export type AlternativeCategory = {
  id: string;
  title: string;
  subtitle: string;
  accentColor: string;
  accentBg: string;
  iconPath: string;
  cards: AlternativeCard[];
};

export const contentToolAlternatives: AlternativeCard[] = [
  {
    href: "/blog/jasper-ai-alternative",
    label: "Jasper AI Alternative",
    description: "Writing assistant for marketers — compare workflow depth & execution support",
    image: "/blog/images/jasper-ai-alternative-thumb.webp",
  },
  {
    href: "/blog/copy-ai-alternative",
    label: "Copy.ai Alternative",
    description: "AI copywriting platform — see how managed execution stacks up at scale",
    image: "/blog/images/68f8e13db6a91b31f636b6d7_iiRS0UGhxIS4FHorTRyeHskuVM.webp",
  },
  {
    href: "/blog/blaze-ai-alternative",
    label: "Blaze AI Alternative",
    description: "All-in-one AI content suite — evaluate depth vs. execution-first approach",
    image: "/blog/images/68ff54b37e98595191251e1f_Frame-2131330137.webp",
  },
];

export const socialManagementAlternatives: AlternativeCard[] = [
  {
    href: "/blog/hootsuite-alternatives",
    label: "Hootsuite Alternatives",
    description: "Scheduling & analytics platform — compare with coordinated social execution",
    image: "/blog/images/68f8e1419ab42f11def9a5d0_q3STaYfDJ3WeGsYOWP1bzWb4PAU.webp",
  },
  {
    href: "/blog/sprout-social-alternatives",
    label: "Sprout Social Alternatives",
    description: "Enterprise social management — evaluate cost, depth, and pipeline tie-in",
    image: "/blog/images/68f8e13db6a91b31f636b6d7_iiRS0UGhxIS4FHorTRyeHskuVM.webp",
  },
  {
    href: "/blog/ocoya-alternatives",
    label: "Ocoya Alternatives",
    description: "AI-powered social creation — compare creative + distribution workflows",
    image: "/blog/images/68ff54b37e98595191251e1f_Frame-2131330137.webp",
  },
];

export const adCreativeAlternatives: AlternativeCard[] = [
  {
    href: "/blog/madgicx-alternatives",
    label: "Madgicx Alternatives",
    description: "Meta ads intelligence platform — compare with managed campaign operations",
    image: "/blog/images/68f8e139c06afdd0f78da7b6_NF6Jo8nWak0W4BvUx7zHWUTLQmk.webp",
  },
  {
    href: "/blog/heygen-alternatives",
    label: "HeyGen Alternatives",
    description: "AI video generation — evaluate creative production vs. end-to-end execution",
    image: "/blog/images/68f8e12f3507d22c1e5ae478_xQVA6ZGvupwgd1HGmKEoxjOQz64.webp",
  },
  {
    href: "/blog/creatify-alternatives",
    label: "Creatify Alternatives",
    description: "AI ad video creator — compare with full-funnel ad management at launch speed",
    image: "/blog/images/68f8e137d00d2c94ba6ee5e7_04rRSlQd5ZRNckevuwxotDPa7Y.webp",
  },
  {
    href: "/blog/synthesia-io-alternatives",
    label: "Synthesia Alternatives",
    description: "AI video production at scale — evaluate fit vs. Solara's video strategy",
    image: "/blog/images/691e1634576c6ab2ae11e221_Frame-2131330148.webp",
  },
];

export const ALTERNATIVES_CATEGORIES: AlternativeCategory[] = [
  {
    id: "content-tools",
    title: "Content Tools",
    subtitle:
      "Evaluate AI writing and content production platforms for marketing operations.",
    accentColor: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    iconPath:
      "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    cards: contentToolAlternatives,
  },
  {
    id: "social-management",
    title: "Social Management",
    subtitle:
      "Scheduling and social workflow alternatives for teams that need stronger execution.",
    accentColor: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    iconPath:
      "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    cards: socialManagementAlternatives,
  },
  {
    id: "ad-creative",
    title: "Ad Creative",
    subtitle:
      "Ad creative and video production alternatives — where specialist tools fit and where gaps remain.",
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    iconPath:
      "M15 10l4.553-2.069A1 1 0 0 1 21 8.855v6.29a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",
    cards: adCreativeAlternatives,
  },
];

export const FRAMEWORK_CRITERIA = [
  {
    dimension: "Cost transparency",
    question: "Are usage limits and overages clear?",
    why: "Prevents surprise budget inflation mid-campaign",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    dimension: "Workflow depth",
    question: "Does it cover plan → produce → launch → optimize?",
    why: "Avoids fragmented process and handoff loss",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    dimension: "Execution support",
    question: "Who owns campaign operations day-to-day?",
    why: "Reduces internal coordination burden and launch delays",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    dimension: "Data portability",
    question: "Can you export assets and performance history?",
    why: "Lowers lock-in risk and protects migration path",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
  {
    dimension: "Optimization model",
    question: "How are learnings turned into next actions?",
    why: "Drives sustained performance improvement over time",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How should I evaluate AI marketing tool alternatives?",
    answer:
      "Start with execution outcomes, not feature checklists. Compare tools by workflow depth, speed to launch, optimization support, total cost, and whether your team can operate the system consistently each week.",
  },
  {
    question: "What is the biggest migration mistake teams make?",
    answer:
      "Most teams migrate tools without redesigning process. They switch software but keep the same bottlenecks: unclear briefs, weak QA, and no optimization cadence. Migration should include workflow redesign, not just account setup.",
  },
  {
    question: "Should we replace every tool at once?",
    answer:
      "Usually no. A staged migration works better: identify your highest-friction workflow first, replace that layer, and measure impact before expanding. This minimizes disruption while preserving campaign continuity.",
  },
  {
    question: "What matters more: lower monthly cost or execution support?",
    answer:
      "For SMB teams, execution support usually creates more value than a lower sticker price. A cheap tool can become expensive if it adds manual operations work, delays launches, or slows optimization decisions.",
  },
  {
    question: "Can Solara help with migration planning?",
    answer:
      "Yes. Solara can map your current stack, identify tool overlap, and build a practical migration sequence focused on business continuity and performance improvement.",
  },
  {
    question: "What does Solara pricing start at?",
    answer:
      "Solara pricing starts from $174/mo. Scope depends on channels, campaign volume, and how much managed execution support your team needs.",
  },
];
