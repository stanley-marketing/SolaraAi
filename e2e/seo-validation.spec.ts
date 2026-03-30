import { expect, type Page, test } from "@playwright/test";

const SITE_URL = "https://solaraai.com";

type PageSeoConfig = {
  route: string;
  requiredSchemaTypes: string[];
  faqQuestionCount?: number;
};

const PAGE_CONFIGS: PageSeoConfig[] = [
  { route: "/", requiredSchemaTypes: ["Organization", "WebPage"] },
  { route: "/about", requiredSchemaTypes: ["Organization", "WebPage"] },
  { route: "/blog", requiredSchemaTypes: ["CollectionPage"] },
  {
    route: "/contact",
    requiredSchemaTypes: ["ContactPage", "FAQPage"],
    faqQuestionCount: 5,
  },
  {
    route: "/pricing",
    requiredSchemaTypes: ["WebPage", "FAQPage"],
    faqQuestionCount: 4,
  },
  { route: "/grow", requiredSchemaTypes: ["WebPage"] },
  { route: "/partners/agencies", requiredSchemaTypes: ["WebPage"] },
  { route: "/partners/marketers", requiredSchemaTypes: ["WebPage"] },
  {
    route: "/partners/referral-program",
    requiredSchemaTypes: ["WebPage"],
  },
  { route: "/partners/setup-operators", requiredSchemaTypes: ["WebPage"] },
  {
    route: "/blog/best-ai-marketing-tools",
    requiredSchemaTypes: ["BlogPosting"],
  },
  {
    route: "/case-study",
    requiredSchemaTypes: [],
  },
  {
    route: "/case-study/maison-remodeling-group",
    requiredSchemaTypes: [],
  },
];

const FORBIDDEN_SCHEMA_TYPES = new Set([
  "LocalBusiness",
  "GeneralContractor",
  "AggregateRating",
]);

function collectSchemaTypes(node: unknown, sink: Set<string>) {
  if (Array.isArray(node)) {
    for (const item of node) {
      collectSchemaTypes(item, sink);
    }
    return;
  }

  if (!node || typeof node !== "object") {
    return;
  }

  const maybeType = (node as { "@type"?: unknown })["@type"];
  if (typeof maybeType === "string") {
    sink.add(maybeType);
  }

  if (Array.isArray(maybeType)) {
    for (const typeItem of maybeType) {
      if (typeof typeItem === "string") {
        sink.add(typeItem);
      }
    }
  }

  for (const value of Object.values(node)) {
    collectSchemaTypes(value, sink);
  }
}

async function visitAndAssertOk(page: Page, route: string) {
  const response = await page.goto(route, { waitUntil: "domcontentloaded" });

  expect(response, `No response for ${route}`).not.toBeNull();
  expect(response?.status(), `Unexpected status for ${route}`).toBe(200);
}

async function getJsonLdScriptContents(page: Page): Promise<string[]> {
  return page.$$eval('script[type="application/ld+json"]', (nodes) =>
    nodes
      .map((node) => node.textContent ?? "")
      .map((value) => value.trim())
      .filter((value) => value.length > 0),
  );
}

async function parseJsonLd(page: Page, route: string): Promise<unknown[]> {
  const scriptContents = await getJsonLdScriptContents(page);
  expect(scriptContents.length, `Expected JSON-LD scripts on ${route}`).toBeGreaterThan(0);

  return scriptContents.map((content, index) => {
    try {
      return JSON.parse(content);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Invalid JSON-LD on ${route} at script index ${index}: ${message}`);
    }
  });
}

function normalizeCanonicalHref(href: string): string {
  return href.endsWith("/") && href !== `${SITE_URL}/`
    ? href.slice(0, -1)
    : href;
}

test.describe("SEO validation", () => {
  for (const config of PAGE_CONFIGS) {
    test(`${config.route} has required meta tags`, async ({ page }) => {
      await visitAndAssertOk(page, config.route);

      const title = (await page.title()).trim();
      expect(title.length, `Missing <title> content on ${config.route}`).toBeGreaterThan(0);

      const metaDescription = page.locator('meta[name="description"]').first();
      await expect(metaDescription, `Missing meta description on ${config.route}`).toHaveCount(1);
      const metaDescriptionContent = (await metaDescription.getAttribute("content"))?.trim() ?? "";
      expect(metaDescriptionContent.length, `Empty meta description on ${config.route}`).toBeGreaterThan(0);

      const canonical = page.locator('link[rel="canonical"]').first();
      await expect(canonical, `Missing canonical tag on ${config.route}`).toHaveCount(1);

      const canonicalHref = (await canonical.getAttribute("href"))?.trim() ?? "";
      expect(canonicalHref.length, `Empty canonical href on ${config.route}`).toBeGreaterThan(0);
      expect(canonicalHref, `Canonical must not use solaraai.io on ${config.route}`).not.toContain("solaraai.io");

      const normalizedCanonical = normalizeCanonicalHref(canonicalHref);
      expect(
        normalizedCanonical === SITE_URL || normalizedCanonical.startsWith(`${SITE_URL}/`),
        `Canonical must point to ${SITE_URL} on ${config.route}, got: ${canonicalHref}`,
      ).toBeTruthy();

      const ogTitle = page.locator('meta[property="og:title"]').first();
      await expect(ogTitle, `Missing og:title on ${config.route}`).toHaveCount(1);
      const ogTitleContent = (await ogTitle.getAttribute("content"))?.trim() ?? "";
      expect(ogTitleContent.length, `Empty og:title on ${config.route}`).toBeGreaterThan(0);

      const ogDescription = page.locator('meta[property="og:description"]').first();
      await expect(ogDescription, `Missing og:description on ${config.route}`).toHaveCount(1);
      const ogDescriptionContent = (await ogDescription.getAttribute("content"))?.trim() ?? "";
      expect(ogDescriptionContent.length, `Empty og:description on ${config.route}`).toBeGreaterThan(0);
    });
  }

  for (const config of PAGE_CONFIGS) {
    test(`${config.route} has valid JSON-LD with expected schema types`, async ({ page }) => {
      await visitAndAssertOk(page, config.route);

      const jsonLdDocuments = await parseJsonLd(page, config.route);
      const types = new Set<string>();

      for (const doc of jsonLdDocuments) {
        collectSchemaTypes(doc, types);
      }

      expect(types.size, `Expected at least one schema type on ${config.route}`).toBeGreaterThan(0);

      for (const requiredType of config.requiredSchemaTypes) {
        expect(
          types.has(requiredType),
          `Expected schema type ${requiredType} on ${config.route}; found ${Array.from(types).join(", ")}`,
        ).toBeTruthy();
      }
    });
  }

  test("No page emits forbidden schema types", async ({ page }) => {
    for (const config of PAGE_CONFIGS) {
      await visitAndAssertOk(page, config.route);

      const jsonLdDocuments = await parseJsonLd(page, config.route);
      const schemaTypes = new Set<string>();

      for (const doc of jsonLdDocuments) {
        collectSchemaTypes(doc, schemaTypes);
      }

      for (const type of schemaTypes) {
        expect(
          FORBIDDEN_SCHEMA_TYPES.has(type),
          `Forbidden schema type ${type} was found on ${config.route}`,
        ).toBeFalsy();
      }
    }
  });

  test("No JSON-LD contains solaraai.io", async ({ page }) => {
    for (const config of PAGE_CONFIGS) {
      await visitAndAssertOk(page, config.route);

      const scriptContents = await getJsonLdScriptContents(page);
      expect(scriptContents.length, `Expected JSON-LD scripts on ${config.route}`).toBeGreaterThan(0);

      for (const content of scriptContents) {
        expect(content, `solaraai.io found in JSON-LD on ${config.route}`).not.toContain("solaraai.io");
      }
    }
  });

  test("/pricing FAQPage has 4 valid questions", async ({ page }) => {
    const route = "/pricing";
    await visitAndAssertOk(page, route);

    const jsonLdDocuments = await parseJsonLd(page, route);
    const faqDoc = jsonLdDocuments.find(
      (doc) =>
        doc &&
        typeof doc === "object" &&
        (doc as { "@type"?: unknown })["@type"] === "FAQPage",
    ) as { mainEntity?: unknown[] } | undefined;

    expect(faqDoc, "Missing FAQPage on /pricing").toBeDefined();
    expect(Array.isArray(faqDoc?.mainEntity), "FAQPage mainEntity must be an array on /pricing").toBeTruthy();

    const questions = faqDoc?.mainEntity ?? [];
    expect(questions).toHaveLength(4);

    for (const question of questions) {
      expect(question && typeof question === "object").toBeTruthy();

      const questionNode = question as {
        "@type"?: unknown;
        name?: unknown;
        acceptedAnswer?: { text?: unknown };
      };

      expect(questionNode["@type"]).toBe("Question");
      expect(typeof questionNode.name).toBe("string");
      expect((questionNode.name as string).trim().length).toBeGreaterThan(0);
      expect(typeof questionNode.acceptedAnswer?.text).toBe("string");
      expect((questionNode.acceptedAnswer?.text as string).trim().length).toBeGreaterThan(0);
    }
  });

  test("/contact FAQPage has 5 valid questions", async ({ page }) => {
    const route = "/contact";
    await visitAndAssertOk(page, route);

    const jsonLdDocuments = await parseJsonLd(page, route);
    const faqDoc = jsonLdDocuments.find(
      (doc) =>
        doc &&
        typeof doc === "object" &&
        (doc as { "@type"?: unknown })["@type"] === "FAQPage",
    ) as { mainEntity?: unknown[] } | undefined;

    expect(faqDoc, "Missing FAQPage on /contact").toBeDefined();
    expect(Array.isArray(faqDoc?.mainEntity), "FAQPage mainEntity must be an array on /contact").toBeTruthy();

    const questions = faqDoc?.mainEntity ?? [];
    expect(questions).toHaveLength(5);

    for (const question of questions) {
      expect(question && typeof question === "object").toBeTruthy();

      const questionNode = question as {
        "@type"?: unknown;
        name?: unknown;
        acceptedAnswer?: { text?: unknown };
      };

      expect(questionNode["@type"]).toBe("Question");
      expect(typeof questionNode.name).toBe("string");
      expect((questionNode.name as string).trim().length).toBeGreaterThan(0);
      expect(typeof questionNode.acceptedAnswer?.text).toBe("string");
      expect((questionNode.acceptedAnswer?.text as string).trim().length).toBeGreaterThan(0);
    }
  });
});
