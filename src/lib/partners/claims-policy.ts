import type { ClaimPolicy } from "./types";

export const SITE_URL = "https://solaraai.com";

export function buildFallbackContactUrl(slug: string): string {
  const safeSlug = encodeURIComponent(slug);
  return `${SITE_URL}/contact?ref=${safeSlug}`;
}

export const claimsPolicy: ClaimPolicy = {
  referralProgram: {
    approvedPayoutTiers: [
      { minimumPayingUsers: 10, revenueSharePercent: 20, durationMonths: 12 },
      { minimumPayingUsers: 25, revenueSharePercent: 25, durationMonths: 12, cashBonusUsd: 1000 },
      { minimumPayingUsers: 50, revenueSharePercent: 30, durationMonths: 12, cashBonusUsd: 2500 },
      { minimumPayingUsers: 100, revenueSharePercent: 30, durationMonths: 12, cashBonusUsd: 5000 },
    ],
    approvedFinePrint:
      "Only paying users count. Revenue share is calculated on each referred user's subscription for the first 12 months.",
  },
  operatorCertification: {
    approvedFraming:
      "Use application-based certification wording. Emphasize review, proof submission, directory listing eligibility, and inbound leads routing by tier.",
    prohibitedFraming:
      "Do not claim instant certification or automatic qualification without review.",
    directoryListingAllowed: true,
    inboundLeadsRoutingAllowed: true,
  },
  performanceClaims: {
    requiredQualifiers: ["up to", "reported by", "with Solara"],
    prohibitedClaims: [
      "guaranteed ROI",
      "guaranteed revenue increase",
      "always increases conversion",
      "always outperforms competitors",
    ],
  },
  whiteLabelClaims: {
    approvedFraming: "White-label tech stack (coming soon)",
    requiredQualifier: "coming soon",
  },
  fallbackCta: {
    description:
      "If a custom CTA flow is unavailable, route users to contact with the page slug as ref for attribution.",
    fallbackRoute: "/contact",
    queryParamKey: "ref",
  },
};
