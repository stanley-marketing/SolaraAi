export type PartnerAudience =
  | "agencies"
  | "referrers-affiliates"
  | "freelance-operators-consultants"
  | "solo-marketers-teams";

export type SearchIntent =
  | "partner-program"
  | "referral-earnings"
  | "operator-certification"
  | "product-adoption";

export type CtaType = "guide" | "referral-signup" | "operator-application" | "product-trial";

export interface CtaConfig {
  label: string;
  type: CtaType;
  destination: string;
  fallback: string;
}

export interface SecondaryCtaConfig {
  label: string;
  destination: string;
}

export interface PartnerPage {
  slug: string;
  route: string;
  audience: PartnerAudience;
  primaryKeyword: string;
  searchIntent: SearchIntent;
  proofType: string;
  primaryCta: CtaConfig;
  secondaryCta: SecondaryCtaConfig;
  faqAngle: string;
  internalLinkAnchorText: string;
  hasFaq: boolean;
  useGlobeHero: boolean;
}

export interface ReferralTierPolicy {
  minimumPayingUsers: number;
  revenueSharePercent: number;
  durationMonths: number;
  cashBonusUsd?: number;
}

export interface ClaimPolicy {
  referralProgram: {
    approvedPayoutTiers: ReferralTierPolicy[];
    approvedFinePrint: string;
  };
  operatorCertification: {
    approvedFraming: string;
    prohibitedFraming: string;
    directoryListingAllowed: boolean;
    inboundLeadsRoutingAllowed: boolean;
  };
  performanceClaims: {
    requiredQualifiers: string[];
    prohibitedClaims: string[];
  };
  whiteLabelClaims: {
    approvedFraming: string;
    requiredQualifier: string;
  };
  fallbackCta: {
    description: string;
    fallbackRoute: string;
    queryParamKey: string;
  };
}
