import { describe, expect, it } from "vitest";

import {
  BANNED_PHRASES,
  CTA_MAP,
  ITALIC_NAVY_ACCENTS,
  LOCKED_COPY,
  ROUTE_POLICY,
  SECTIONS,
  TESTIDS,
} from "./content";

describe("home-v2 content contract", () => {
  it("keeps the 9 canonical sections in order", () => {
    expect(SECTIONS).toEqual([
      "Hero",
      "Teardown",
      "Showcase",
      "Walkthrough/Bridge",
      "Craft/Before-After",
      "Comparison",
      "Pricing",
      "FAQ",
      "Close",
    ]);
    expect(SECTIONS).toHaveLength(9);
  });

  it("locks the route policy for /home-v2", () => {
    expect(ROUTE_POLICY.robots).toBe("noindex,nofollow");
    expect(ROUTE_POLICY.canonical).toContain("/home-v2");
  });

  it("includes all 8 CTA slots", () => {
    expect(CTA_MAP).toEqual({
      heroPrimary: "/contact",
      heroSecondary: "#home-v2-hero-proof",
      showcase: "#home-v2-showcase",
      beforeAfter: "#home-v2-showcase",
      comparison: "/contact",
      pricing: "/contact",
      faqHuman: "/contact",
      close: "/contact",
    });
    expect(Object.keys(CTA_MAP)).toHaveLength(8);
  });

  it("allows exactly two italic navy accents", () => {
    expect(ITALIC_NAVY_ACCENTS).toEqual([
      { section: "hero", text: "director now" },
      { section: "close", text: "Solara replaces" },
    ]);
    expect(ITALIC_NAVY_ACCENTS).toHaveLength(2);
  });

  it("includes every required data-testid value", () => {
    expect(Object.values(TESTIDS).sort()).toEqual(
      [
        "home-v2-hero",
        "home-v2-teardown",
        "home-v2-showcase",
        "home-v2-bridge",
        "home-v2-craft",
        "home-v2-comparison",
        "home-v2-pricing",
        "home-v2-faq",
        "home-v2-close",
        "home-v2-hero-proof",
        "home-v2-showcase-tabs",
        "home-v2-before-after-slider",
      ].sort(),
    );
    expect(Object.values(TESTIDS)).toHaveLength(12);
  });

  it("locks the hero headline and pricing strings", () => {
    expect(LOCKED_COPY.heroHeadline).toBe("Your business has a director now.");
    expect(Object.values(LOCKED_COPY)).toEqual(
      expect.arrayContaining(["$99", "$69", "$828/yr", "30%"]),
    );
  });

  it("keeps a non-empty list of banned phrases", () => {
    expect(Array.isArray(BANNED_PHRASES)).toBe(true);
    expect(BANNED_PHRASES.length).toBeGreaterThan(0);
  });
});
