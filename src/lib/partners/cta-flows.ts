import { buildFallbackContactUrl } from "./claims-policy";
import { partnerPages } from "./config";

export type PartnerCtaVariant = "primary" | "secondary";

export function getFallbackCtaHref(slug: string): string {
  return buildFallbackContactUrl(slug);
}

export function getCtaHref(slug: string, variant: PartnerCtaVariant): string {
  const page = partnerPages.find((entry) => entry.slug === slug);

  if (!page) {
    return getFallbackCtaHref(slug);
  }

  const destination =
    variant === "primary" ? page.primaryCta.destination : page.secondaryCta.destination;

  if (!destination) {
    return getFallbackCtaHref(slug);
  }

  return destination;
}
