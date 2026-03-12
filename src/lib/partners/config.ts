import { SITE_URL, buildFallbackContactUrl } from "./claims-policy";
import type { PartnerPage } from "./types";

export const partnerPages: PartnerPage[] = [
  {
    slug: "agencies",
    route: "/partners/agencies",
    audience: "agencies",
    primaryKeyword: "agency marketing automation partner program",
    searchIntent: "partner-program",
    proofType: "co-branded agency case studies",
    primaryCta: {
      label: "Get the Free Agency Guide",
      type: "guide",
      destination: `${SITE_URL}/partners/agencies/guide`,
      fallback: buildFallbackContactUrl("agencies"),
    },
    secondaryCta: {
      label: "Book a Partner Call",
      destination: `${SITE_URL}/contact?topic=agency-partner`,
    },
    faqAngle: "White-label readiness, co-marketing support, and partner discount eligibility",
    internalLinkAnchorText: "Explore the Solara agency partner playbook",
    hasFaq: true,
    useGlobeHero: true,
  },
  {
    slug: "referral-program",
    route: "/partners/referral-program",
    audience: "referrers-affiliates",
    primaryKeyword: "recurring SaaS referral program payouts",
    searchIntent: "referral-earnings",
    proofType: "tiered payout table with fine print",
    primaryCta: {
      label: "Get Your Referral Link",
      type: "referral-signup",
      destination: `${SITE_URL}/partners/referral-program/signup`,
      fallback: buildFallbackContactUrl("referral-program"),
    },
    secondaryCta: {
      label: "See the Full Reward Breakdown",
      destination: `${SITE_URL}/partners/referral-program#rewards`,
    },
    faqAngle: "Payout timing, qualifying users, and revenue-share duration",
    internalLinkAnchorText: "Review Solara referral reward tiers",
    hasFaq: true,
    useGlobeHero: false,
  },
  {
    slug: "setup-operators",
    route: "/partners/setup-operators",
    audience: "freelance-operators-consultants",
    primaryKeyword: "marketing systems operator certification",
    searchIntent: "operator-certification",
    proofType: "certification ladder and directory visibility milestones",
    primaryCta: {
      label: "Become a Setup Operator",
      type: "operator-application",
      destination: `${SITE_URL}/partners/setup-operators/apply`,
      fallback: buildFallbackContactUrl("setup-operators"),
    },
    secondaryCta: {
      label: "See the Operator Directory",
      destination: `${SITE_URL}/partners/setup-operators/directory`,
    },
    faqAngle: "Application review, certification proof requirements, and lead routing tiers",
    internalLinkAnchorText: "See how operator certification and lead routing works",
    hasFaq: true,
    useGlobeHero: false,
  },
  {
    slug: "marketers",
    route: "/partners/marketers",
    audience: "solo-marketers-teams",
    primaryKeyword: "AI marketing platform for solo marketers",
    searchIntent: "product-adoption",
    proofType: "before-and-after execution velocity proof",
    primaryCta: {
      label: "Get the Free Marketer Guide",
      type: "guide",
      destination: `${SITE_URL}/partners/marketers/guide`,
      fallback: buildFallbackContactUrl("marketers"),
    },
    secondaryCta: {
      label: "See What Marketers Are Doing With Solara",
      destination: `${SITE_URL}/partners/marketers#results`,
    },
    faqAngle: "Time-to-value, team handoff, and workflow automation depth",
    internalLinkAnchorText: "See how marketers adopt Solara in week one",
    hasFaq: true,
    useGlobeHero: true,
  },
];

export function getPartnerPage(slug: string): PartnerPage | undefined {
  return partnerPages.find((page) => page.slug === slug);
}

export function getAllPartnerRoutes(): string[] {
  return partnerPages.map((page) => page.route);
}
