import { readFileSync } from "node:fs";
import { join } from "node:path";
import { isValidElement, type ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => {
  const fontFactory = () => ({ className: "mock-font", style: { fontFamily: "mock-font" } });
  return new Proxy(
    {},
    {
      get: () => fontFactory,
    }
  );
});

vi.mock("lucide-react", () => ({ ArrowRight: () => null }));
vi.mock("@/components/ui/aurora-background", () => ({
  AuroraBackground: ({ children }: { children?: ReactNode }) => children ?? null,
}));

vi.mock("@/components/LandingSections", () => ({ TopNav: () => null }));
vi.mock("@/components/MobileCtaBar", () => ({ MobileCtaBar: () => null }));
vi.mock("@/components/BeamHubSection", () => ({ BeamHubSection: () => null }));
vi.mock("@/components/ServicesSection", () => ({ ServicesSection: () => null }));
vi.mock("@/components/AgentsSection", () => ({ AgentsSection: () => null }));
vi.mock("@/components/AdvantageSection", () => ({ AdvantageSection: () => null }));
vi.mock("@/components/CaseStudySection", () => ({ CaseStudySection: () => null }));
vi.mock("@/components/PricingSection", () => ({ PricingSection: () => null }));
vi.mock("@/components/CtaSection", () => ({ CtaSection: () => null }));
vi.mock("@/components/Footer", () => ({ Footer: () => null }));

vi.mock("@/components/AboutHero", () => ({ AboutHero: () => null }));
vi.mock("@/components/AboutFunding", () => ({ AboutFunding: () => null }));
vi.mock("@/components/AboutMethodology", () => ({ AboutMethodology: () => null }));
vi.mock("@/components/AboutValues", () => ({ AboutValues: () => null }));
vi.mock("@/components/AboutCta", () => ({ AboutCta: () => null }));

vi.mock("@/components/ContactHero", () => ({ ContactHero: () => null }));
vi.mock("@/components/ContactProcess", () => ({ ContactProcess: () => null }));
vi.mock("@/components/ContactFaq", () => ({ ContactFaq: () => null }));

import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import Home from "@/app/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { getAllSlugs } from "@/lib/articles";
import { getAllCaseSlugs } from "@/lib/case-studies";

const SITE_URL = "https://solaraai.com";
const FORBIDDEN_SCHEMA_TYPES = ["LocalBusiness", "GeneralContractor", "AggregateRating"];

const STATIC_ROUTES = ["/", "/about", "/blog", "/contact", "/pricing"];
const PARTNER_ROUTES = [
  "/partners/agencies",
  "/partners/marketers",
  "/partners/referral-program",
  "/partners/setup-operators",
];

type JsonLdObject = Record<string, unknown>;

function isJsonLdObject(value: unknown): value is JsonLdObject {
  return typeof value === "object" && value !== null;
}

function collectJsonLdScriptContents(node: ReactNode): string[] {
  if (node === null || node === undefined || typeof node === "boolean") {
    return [];
  }

  if (typeof node === "string" || typeof node === "number") {
    return [];
  }

  if (Array.isArray(node)) {
    return node.flatMap((child) => collectJsonLdScriptContents(child));
  }

  if (
    isValidElement<{
      children?: ReactNode;
      type?: string;
      dangerouslySetInnerHTML?: { __html?: string };
    }>(node)
  ) {
    const scripts: string[] = [];

    if (node.type === "script" && node.props.type === "application/ld+json") {
      const html = node.props.dangerouslySetInnerHTML?.__html;
      if (typeof html === "string") {
        scripts.push(html);
      }
    }

    if (node.props.children !== undefined) {
      scripts.push(...collectJsonLdScriptContents(node.props.children));
    }

    return scripts;
  }

  return [];
}

function parseJsonLdFromPage(pageNode: ReactNode): JsonLdObject[] {
  const scripts = collectJsonLdScriptContents(pageNode);

  return scripts.map((script) => {
    const parsed: unknown = JSON.parse(script);
    if (!isJsonLdObject(parsed)) {
      throw new Error("Expected JSON-LD script content to parse into an object");
    }

    return parsed;
  });
}

function findSchemaByType(schemas: JsonLdObject[], schemaType: string): JsonLdObject | undefined {
  return schemas.find((schema) => schema["@type"] === schemaType);
}

function collectSchemaTypes(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item) => collectSchemaTypes(item));
  }

  if (!isJsonLdObject(value)) {
    return [];
  }

  const currentType = value["@type"];
  const currentTypes = typeof currentType === "string" ? [currentType] : [];

  const nestedTypes = Object.values(value).flatMap((nestedValue) => collectSchemaTypes(nestedValue));
  return [...currentTypes, ...nestedTypes];
}

function collectUrlLikeStrings(value: unknown): string[] {
  if (typeof value === "string") {
    return value.startsWith("http://") || value.startsWith("https://") ? [value] : [];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectUrlLikeStrings(item));
  }

  if (!isJsonLdObject(value)) {
    return [];
  }

  return Object.values(value).flatMap((nestedValue) => collectUrlLikeStrings(nestedValue));
}

describe("SEO infrastructure and schema contracts", () => {
  describe("sitemap", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    const blogSlugs = getAllSlugs();
    const caseStudySlugs = getAllCaseSlugs();

    it("returns an array of entries", () => {
      expect(Array.isArray(entries)).toBe(true);
    });

    it("contains homepage route", () => {
      expect(urls).toContain(SITE_URL);
    });

    it("contains /about route", () => {
      expect(urls).toContain(`${SITE_URL}/about`);
    });

    it("contains /blog route", () => {
      expect(urls).toContain(`${SITE_URL}/blog`);
    });

    it("contains /contact route", () => {
      expect(urls).toContain(`${SITE_URL}/contact`);
    });

    it("contains /pricing route", () => {
      expect(urls).toContain(`${SITE_URL}/pricing`);
    });

    it("contains all 5 static routes", () => {
      expect(STATIC_ROUTES).toHaveLength(5);
      STATIC_ROUTES.forEach((route) => {
        const expectedUrl = route === "/" ? SITE_URL : `${SITE_URL}${route}`;
        expect(urls).toContain(expectedUrl);
      });
    });

    it("contains all 4 partner routes", () => {
      expect(PARTNER_ROUTES).toHaveLength(4);
      PARTNER_ROUTES.forEach((route) => {
        expect(urls).toContain(`${SITE_URL}${route}`);
      });
    });

    it("exposes exactly 12 article slugs", () => {
      expect(blogSlugs).toHaveLength(12);
    });

    it("contains a sitemap URL for every article slug", () => {
      blogSlugs.forEach((slug) => {
        expect(urls).toContain(`${SITE_URL}/blog/${slug}`);
      });
    });

    it("contains a sitemap URL for every case study slug", () => {
      caseStudySlugs.forEach((slug) => {
        expect(urls).toContain(`${SITE_URL}/case-study/${slug}`);
      });
    });

    it("contains every URL under solaraai.com", () => {
      entries.forEach((entry) => {
        expect(entry.url.startsWith(SITE_URL)).toBe(true);
      });
    });

    it("has no duplicate URLs", () => {
      expect(new Set(urls).size).toBe(urls.length);
    });

    it("includes lastModified on every entry", () => {
      entries.forEach((entry) => {
        expect(entry.lastModified).toBeDefined();
      });
    });

    it("includes changeFrequency on every entry", () => {
      entries.forEach((entry) => {
        expect(entry.changeFrequency).toBeDefined();
      });
    });

    it("includes priority on every entry", () => {
      entries.forEach((entry) => {
        expect(entry.priority).toBeDefined();
      });
    });

    it("sets homepage priority to 1.0", () => {
      const homepageEntry = entries.find((entry) => entry.url === SITE_URL);
      expect(homepageEntry).toBeDefined();
      expect(homepageEntry?.priority).toBe(1.0);
    });

    it("does not include /preview in sitemap", () => {
      expect(urls.some((url) => url.includes("/preview"))).toBe(false);
    });
  });

  describe("robots", () => {
    const robotsConfig = robots();

    it("returns at least one crawler rule", () => {
      expect(Array.isArray(robotsConfig.rules)).toBe(true);
      expect(robotsConfig.rules.length).toBeGreaterThan(0);
    });

    it("contains a rule that allows root", () => {
      const hasAllowRoot = robotsConfig.rules.some((rule) => {
        if (Array.isArray(rule.allow)) {
          return rule.allow.includes("/");
        }

        return rule.allow === "/";
      });

      expect(hasAllowRoot).toBe(true);
    });

    it("contains a rule that disallows /preview", () => {
      const hasDisallowPreview = robotsConfig.rules.some((rule) => {
        if (Array.isArray(rule.disallow)) {
          return rule.disallow.includes("/preview");
        }

        return rule.disallow === "/preview";
      });

      expect(hasDisallowPreview).toBe(true);
    });

    it("declares sitemap URL", () => {
      expect(robotsConfig.sitemap).toBe("https://solaraai.com/sitemap.xml");
    });
  });

  describe("schema contracts", () => {
    const homeSchemas = parseJsonLdFromPage(Home());
    const aboutSchemas = parseJsonLdFromPage(AboutPage());
    const contactSchemas = parseJsonLdFromPage(ContactPage());

    const homeOrganization = findSchemaByType(homeSchemas, "Organization");
    const homeWebPage = findSchemaByType(homeSchemas, "WebPage");
    const aboutOrganization = findSchemaByType(aboutSchemas, "Organization");
    const aboutWebPage = findSchemaByType(aboutSchemas, "WebPage");
    const contactPageSchema = findSchemaByType(contactSchemas, "ContactPage");
    const contactFaqSchema = findSchemaByType(contactSchemas, "FAQPage");

    it("homepage includes Organization schema", () => {
      expect(homeOrganization).toBeDefined();
    });

    it("homepage Organization includes name", () => {
      expect(homeOrganization?.name).toBeTruthy();
    });

    it("homepage Organization includes url", () => {
      expect(homeOrganization?.url).toBe(SITE_URL);
    });

    it("homepage Organization includes logo", () => {
      expect(homeOrganization?.logo).toBeDefined();
    });

    it("homepage Organization includes foundingDate", () => {
      expect(homeOrganization?.foundingDate).toBeTruthy();
    });

    it("homepage Organization includes description", () => {
      expect(homeOrganization?.description).toBeTruthy();
    });

    it("homepage Organization includes sameAs array", () => {
      const sameAs = homeOrganization?.sameAs;
      expect(Array.isArray(sameAs)).toBe(true);
      if (Array.isArray(sameAs)) {
        expect(sameAs.length).toBeGreaterThan(0);
      }
    });

    it("homepage includes WebPage schema", () => {
      expect(homeWebPage).toBeDefined();
    });

    it("homepage WebPage includes name", () => {
      expect(homeWebPage?.name).toBeTruthy();
    });

    it("homepage WebPage includes url", () => {
      expect(homeWebPage?.url).toBe(SITE_URL);
    });

    it("homepage WebPage includes description", () => {
      expect(homeWebPage?.description).toBeTruthy();
    });

    it("homepage WebPage includes isPartOf", () => {
      expect(homeWebPage?.isPartOf).toBeDefined();
    });

    it("about page includes Organization schema", () => {
      expect(aboutOrganization).toBeDefined();
    });

    it("about page includes WebPage schema", () => {
      expect(aboutWebPage).toBeDefined();
    });

    it("contact page includes ContactPage schema", () => {
      expect(contactPageSchema).toBeDefined();
    });

    it("contact page includes FAQPage schema", () => {
      expect(contactFaqSchema).toBeDefined();
    });

    it("contact FAQPage contains exactly 5 questions", () => {
      const mainEntity = contactFaqSchema?.mainEntity;
      expect(Array.isArray(mainEntity)).toBe(true);
      if (Array.isArray(mainEntity)) {
        expect(mainEntity).toHaveLength(5);
      }
    });

    it("does not include forbidden schema types on homepage", () => {
      const schemaTypes = collectSchemaTypes(homeSchemas);
      FORBIDDEN_SCHEMA_TYPES.forEach((forbiddenType) => {
        expect(schemaTypes).not.toContain(forbiddenType);
      });
    });

    it("does not include forbidden schema types on about page", () => {
      const schemaTypes = collectSchemaTypes(aboutSchemas);
      FORBIDDEN_SCHEMA_TYPES.forEach((forbiddenType) => {
        expect(schemaTypes).not.toContain(forbiddenType);
      });
    });

    it("does not include forbidden schema types on contact page", () => {
      const schemaTypes = collectSchemaTypes(contactSchemas);
      FORBIDDEN_SCHEMA_TYPES.forEach((forbiddenType) => {
        expect(schemaTypes).not.toContain(forbiddenType);
      });
    });

    it("keeps all homepage schema URLs on solaraai.com", () => {
      const urls = collectUrlLikeStrings(homeSchemas);
      urls.forEach((url) => {
        if (url.includes("solaraai.")) {
          expect(url).toContain("solaraai.com");
          expect(url).not.toContain("solaraai.io");
        }
      });
    });

    it("keeps all about schema URLs on solaraai.com", () => {
      const urls = collectUrlLikeStrings(aboutSchemas);
      urls.forEach((url) => {
        if (url.includes("solaraai.")) {
          expect(url).toContain("solaraai.com");
          expect(url).not.toContain("solaraai.io");
        }
      });
    });

    it("keeps all contact schema URLs on solaraai.com", () => {
      const urls = collectUrlLikeStrings(contactSchemas);
      urls.forEach((url) => {
        if (url.includes("solaraai.")) {
          expect(url).toContain("solaraai.com");
          expect(url).not.toContain("solaraai.io");
        }
      });
    });
  });

  describe("URL consistency", () => {
    const schemaSourceFiles = [
      "src/app/page.tsx",
      "src/app/about/page.tsx",
      "src/app/contact/page.tsx",
      "src/app/blog/page.tsx",
      "src/app/blog/[slug]/page.tsx",
      "src/app/pricing/page.tsx",
    ];

    it("finds zero solaraai.io occurrences in schema source files", () => {
      const occurrences = schemaSourceFiles.flatMap((file) => {
        const absolutePath = join(process.cwd(), file);
        const content = readFileSync(absolutePath, "utf8");
        const matches = content.match(/solaraai\.io/g);
        return matches ?? [];
      });

      expect(occurrences).toHaveLength(0);
    });

    it("has zero solaraai.io occurrences in homepage/about/contact JSON-LD", () => {
      const pageSchemas = [
        ...parseJsonLdFromPage(Home()),
        ...parseJsonLdFromPage(AboutPage()),
        ...parseJsonLdFromPage(ContactPage()),
      ];

      const schemaBlob = JSON.stringify(pageSchemas);
      expect(schemaBlob.includes("solaraai.io")).toBe(false);
    });

    it("keeps sitemap and robots canonical URLs aligned on solaraai.com", () => {
      const sitemapEntries = sitemap();
      const robotsConfig = robots();

      sitemapEntries.forEach((entry) => {
        expect(entry.url.startsWith(SITE_URL)).toBe(true);
      });

      expect(robotsConfig.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
    });
  });
});
