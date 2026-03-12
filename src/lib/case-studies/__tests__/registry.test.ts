import { describe, expect, it } from "vitest";

import { getAllCaseSlugs, getCaseStudy } from "@/lib/case-studies";

describe("case study registry", () => {
  it("returns case study data for known slug", () => {
    const caseStudy = getCaseStudy("maison-remodeling-group");

    expect(caseStudy).toBeDefined();
    expect(caseStudy?.slug).toBe("maison-remodeling-group");
  });

  it("returns undefined for unknown slug", () => {
    const caseStudy = getCaseStudy("unknown");

    expect(caseStudy).toBeUndefined();
  });

  it("includes maison slug in all case study slugs", () => {
    const slugs = getAllCaseSlugs();

    expect(slugs).toContain("maison-remodeling-group");
  });
});
