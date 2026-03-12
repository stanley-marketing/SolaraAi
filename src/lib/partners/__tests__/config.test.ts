import { describe, expect, it } from "vitest";

import { partnerPages } from "@/lib/partners/config";

describe("partner pages config", () => {
  it("has exactly 4 partner pages", () => {
    expect(partnerPages).toHaveLength(4);
  });

  it("all pages have unique slugs", () => {
    const slugs = partnerPages.map((page) => page.slug);
    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("all pages have unique routes", () => {
    const routes = partnerPages.map((page) => page.route);
    const uniqueRoutes = new Set(routes);

    expect(uniqueRoutes.size).toBe(routes.length);
  });

  it("all pages have unique primaryKeywords", () => {
    const keywords = partnerPages.map((page) => page.primaryKeyword);
    const uniqueKeywords = new Set(keywords);

    expect(uniqueKeywords.size).toBe(keywords.length);
  });

  it("all pages have unique searchIntents", () => {
    const intents = partnerPages.map((page) => page.searchIntent);
    const uniqueIntents = new Set(intents);

    expect(uniqueIntents.size).toBe(intents.length);
  });

  it("all pages have non-empty primaryCta.type", () => {
    partnerPages.forEach((page) => {
      expect(page.primaryCta.type).toBeTruthy();
      expect(page.primaryCta.type.length).toBeGreaterThan(0);
    });
  });

  it("all pages have non-empty primaryCta.destination", () => {
    partnerPages.forEach((page) => {
      expect(page.primaryCta.destination).toBeTruthy();
      expect(page.primaryCta.destination.length).toBeGreaterThan(0);
    });
  });

  it("all pages have non-empty primaryCta.fallback", () => {
    partnerPages.forEach((page) => {
      expect(page.primaryCta.fallback).toBeTruthy();
      expect(page.primaryCta.fallback.length).toBeGreaterThan(0);
    });
  });

  it("exactly two pages have useGlobeHero: true", () => {
    const globeHeroPages = partnerPages.filter((page) => page.useGlobeHero);

    expect(globeHeroPages).toHaveLength(2);
    expect(globeHeroPages.map((p) => p.slug).sort()).toEqual(["agencies", "marketers"]);
  });

  it("all pages have hasFaq defined as boolean", () => {
    partnerPages.forEach((page) => {
      expect(typeof page.hasFaq).toBe("boolean");
    });
  });

  it("all pages have defined hasFaq values", () => {
    partnerPages.forEach((page) => {
      expect(page.hasFaq).toBeDefined();
    });
  });
});
