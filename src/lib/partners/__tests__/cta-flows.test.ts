import { describe, expect, it } from "vitest";

import { getCtaHref, getFallbackCtaHref } from "@/lib/partners/cta-flows";
import { partnerPages } from "@/lib/partners/config";

const SITE_URL = "https://solaraai.com";

describe("partner pages CTA flows", () => {
  describe("getCtaHref", () => {
    it("returns primary CTA URL from config for each slug", () => {
      partnerPages.forEach((page) => {
        const primaryCtaHref = getCtaHref(page.slug, "primary");
        expect(primaryCtaHref).toBe(page.primaryCta.destination);
      });
    });

    it("returns secondary CTA URL from config for each slug", () => {
      partnerPages.forEach((page) => {
        const secondaryCtaHref = getCtaHref(page.slug, "secondary");
        expect(secondaryCtaHref).toBe(page.secondaryCta.destination);
      });
    });

    it("returns distinct primary CTA URLs for all slugs", () => {
      const primaryUrls = partnerPages.map((page) => getCtaHref(page.slug, "primary"));
      const uniqueUrls = new Set(primaryUrls);
      expect(uniqueUrls.size).toBe(primaryUrls.length);
    });

    it("returns fallback URL for unknown slug", () => {
      const fallbackUrl = getCtaHref("unknown-slug", "primary");
      expect(fallbackUrl).toBe(`${SITE_URL}/contact?ref=unknown-slug`);
    });
  });

  describe("getFallbackCtaHref", () => {
    it("returns contact URL with slug as ref parameter", () => {
      partnerPages.forEach((page) => {
        const fallbackUrl = getFallbackCtaHref(page.slug);
        expect(fallbackUrl).toBe(`${SITE_URL}/contact?ref=${page.slug}`);
      });
    });

    it("URL-encodes the slug in the ref parameter", () => {
      const slugWithSpecialChars = "test-slug-with-dash";
      const fallbackUrl = getFallbackCtaHref(slugWithSpecialChars);
      expect(fallbackUrl).toBe(`${SITE_URL}/contact?ref=${slugWithSpecialChars}`);
    });

    it("returns distinct fallback URLs for all slugs", () => {
      const fallbackUrls = partnerPages.map((page) => getFallbackCtaHref(page.slug));
      const uniqueUrls = new Set(fallbackUrls);
      expect(uniqueUrls.size).toBe(fallbackUrls.length);
    });
  });
});
