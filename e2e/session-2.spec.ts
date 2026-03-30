import { expect, type Page, test } from "@playwright/test";

test.use({ baseURL: process.env.TEST_BASE_URL || "http://localhost:3334" });

test.describe.configure({ timeout: 30000 });

const LANDING_PAGES = [
  {
    route: "/ai-marketing-platform",
    keyword: "AI Marketing Platform",
    statsChecks: ["131", "$800K"],
  },
  {
    route: "/ai-ad-generator",
    keyword: "AI Ad Generator",
    statsChecks: ["Brief to Launch"],
  },
  {
    route: "/ai-marketing-agency",
    keyword: "AI Marketing Agency",
    statsChecks: ["Managed Marketing", "131", "27 days"],
  },
  {
    route: "/alternatives",
    keyword: "Alternatives",
    statsChecks: [],
  },
] as const;

const LANDING_ROUTES = LANDING_PAGES.map((page) => page.route);

function collectRuntimeErrors(page: Page) {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  return { consoleErrors, pageErrors };
}

async function gotoAndAssertOk(page: Page, route: string) {
  const response = await page.goto(route, { waitUntil: "domcontentloaded" });
  expect(response, `No response for ${route}`).not.toBeNull();
  expect(response?.status(), `Unexpected status for ${route}`).toBe(200);
}

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

async function parseJsonLd(page: Page, route: string): Promise<unknown[]> {
  const scriptContents = await page.$$eval('script[type="application/ld+json"]', (nodes) =>
    nodes
      .map((node) => node.textContent ?? "")
      .map((value) => value.trim())
      .filter((value) => value.length > 0),
  );

  expect(scriptContents.length, `Expected JSON-LD scripts on ${route}`).toBeGreaterThanOrEqual(3);

  return scriptContents.map((content, index) => {
    try {
      return JSON.parse(content);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Invalid JSON-LD on ${route} at script index ${index}: ${message}`);
    }
  });
}

function extractFaqQuestionCount(document: unknown): number {
  if (!document || typeof document !== "object") {
    return 0;
  }

  const node = document as {
    "@type"?: unknown;
    mainEntity?: unknown;
    "@graph"?: unknown;
  };

  if (node["@type"] === "FAQPage" && Array.isArray(node.mainEntity)) {
    return node.mainEntity.length;
  }

  if (Array.isArray(node["@graph"])) {
    for (const graphNode of node["@graph"]) {
      const count = extractFaqQuestionCount(graphNode);
      if (count > 0) {
        return count;
      }
    }
  }

  return 0;
}

test.describe("Session 2 - Landing Pages Basic Loading", () => {
  for (const landing of LANDING_PAGES) {
    test(`${landing.route} loads core shell and reports no runtime errors`, async ({ page }) => {
      const { consoleErrors, pageErrors } = collectRuntimeErrors(page);

      await gotoAndAssertOk(page, landing.route);

      await expect(page.locator("h1").first()).toBeVisible();
      await expect(page.locator("footer").first()).toBeVisible();
      await expect(page.getByRole("navigation").first()).toBeVisible();

      expect(consoleErrors, `Console errors on ${landing.route}`).toEqual([]);
      expect(pageErrors, `Page errors on ${landing.route}`).toEqual([]);
    });
  }
});

test.describe("Session 2 - Landing Pages SEO Metadata", () => {
  for (const landing of LANDING_PAGES) {
    test(`${landing.route} includes complete SEO metadata`, async ({ page }) => {
      await gotoAndAssertOk(page, landing.route);

      const title = (await page.title()).trim();
      expect(title.length).toBeGreaterThan(0);
      expect(title.toLowerCase()).toContain(landing.keyword.toLowerCase());

      const metaDescription = page.locator('meta[name="description"]').first();
      await expect(metaDescription).toHaveCount(1);
      const descriptionContent = (await metaDescription.getAttribute("content"))?.trim() ?? "";
      expect(descriptionContent.length).toBeGreaterThanOrEqual(80);
      expect(descriptionContent.length).toBeLessThanOrEqual(170);

      const canonical = page.locator('link[rel="canonical"]').first();
      await expect(canonical).toHaveCount(1);
      const canonicalHref = (await canonical.getAttribute("href"))?.trim() ?? "";
      expect(canonicalHref.startsWith("https://solaraai.com/")).toBeTruthy();
      expect(canonicalHref).toContain(landing.route);

      await expect(page.locator('meta[property="og:title"]').first()).toHaveCount(1);
      await expect(page.locator('meta[property="og:description"]').first()).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]').first()).toHaveCount(1);
    });
  }
});

test.describe("Session 2 - Landing Pages JSON-LD", () => {
  for (const landing of LANDING_PAGES) {
    test(`${landing.route} includes WebPage, BreadcrumbList, and FAQPage JSON-LD`, async ({ page }) => {
      await gotoAndAssertOk(page, landing.route);

      const documents = await parseJsonLd(page, landing.route);
      const types = new Set<string>();
      for (const doc of documents) {
        collectSchemaTypes(doc, types);
      }

      expect(types.has("WebPage"), `Missing WebPage schema on ${landing.route}`).toBeTruthy();
      expect(types.has("BreadcrumbList"), `Missing BreadcrumbList schema on ${landing.route}`).toBeTruthy();
      expect(types.has("FAQPage"), `Missing FAQPage schema on ${landing.route}`).toBeTruthy();

      const faqQuestionCount = Math.max(...documents.map((doc) => extractFaqQuestionCount(doc)), 0);
      expect(faqQuestionCount, `FAQ questions on ${landing.route}`).toBeGreaterThanOrEqual(4);
    });
  }
});

test.describe("Session 2 - Landing Pages Content Quality", () => {
  test("/ai-marketing-platform includes proof stats", async ({ page }) => {
    await gotoAndAssertOk(page, "/ai-marketing-platform");
    await expect(page.locator("body")).toContainText("131");
    await expect(page.locator("body")).toContainText("$800K");
  });

  test("/ai-ad-generator includes primary hero claim", async ({ page }) => {
    await gotoAndAssertOk(page, "/ai-ad-generator");
    await expect(page.locator("body")).toContainText(/Brief to Launch/i);
  });

  test("/ai-marketing-agency includes managed marketing and proof points", async ({ page }) => {
    await gotoAndAssertOk(page, "/ai-marketing-agency");
    await expect(page.locator("body")).toContainText("Managed Marketing");
    await expect(page.locator("body")).toContainText("131");
    await expect(page.locator("body")).toContainText("27 days");
  });

  test("/alternatives includes at least 8 comparison article links", async ({ page }) => {
    await gotoAndAssertOk(page, "/alternatives");

    const comparisonLinksCount = await page
      .locator('a[href^="/blog/"]')
      .filter({ hasText: /alternative|alternatives|vs/i })
      .count();

    expect(comparisonLinksCount).toBeGreaterThanOrEqual(8);
  });
});

test.describe("Session 2 - Landing Pages Navigation", () => {
  for (const route of LANDING_ROUTES) {
    test(`${route} has contact CTA, visible navbar, and Case Studies link`, async ({ page }) => {
      await gotoAndAssertOk(page, route);

      const nav = page.getByRole("navigation").first();
      await expect(nav).toBeVisible();

      const contactCta = page
        .locator('a[href="/contact"], a[href="https://solaraai.com/contact"]')
        .first();
      await expect(contactCta).toBeVisible();

      await expect(nav.getByRole("link", { name: /Case Studies/i })).toBeVisible();
    });
  }
});

test.describe("Session 2 - New Blog Articles", () => {
  test("/blog/blaze-ai-alternative loads with 2026 title and meta description", async ({ page }) => {
    await gotoAndAssertOk(page, "/blog/blaze-ai-alternative");

    const title = await page.title();
    expect(title).toContain("2026");

    const metaDescription = page.locator('meta[name="description"]').first();
    await expect(metaDescription).toHaveCount(1);
    const description = (await metaDescription.getAttribute("content"))?.trim() ?? "";
    expect(description.length).toBeGreaterThan(0);
  });

  test("/blog/ai-marketing-automation loads with keyworded title and meta description", async ({ page }) => {
    await gotoAndAssertOk(page, "/blog/ai-marketing-automation");

    const title = (await page.title()).toLowerCase();
    expect(title).toContain("marketing automation");

    const metaDescription = page.locator('meta[name="description"]').first();
    await expect(metaDescription).toHaveCount(1);
    const description = (await metaDescription.getAttribute("content"))?.trim() ?? "";
    expect(description.length).toBeGreaterThan(0);
  });
});

test.describe("Session 2 - Blog Listing Quality", () => {
  test("/blog shows one of newest articles in first card", async ({ page }) => {
    await gotoAndAssertOk(page, "/blog");

    const firstCardHref =
      (await page
        .locator('main a[href^="/blog/"]')
        .filter({ has: page.locator("h2, h3") })
        .first()
        .getAttribute("href")) ?? "";

    expect(firstCardHref).toMatch(/\/(blaze-ai-alternative|ai-marketing-automation|.*-alternative|.*-automation)$/);
  });

  test("/blog article titles are readable and not truncated mid-word", async ({ page }) => {
    await gotoAndAssertOk(page, "/blog");

    const titles = await page
      .locator('main a[href^="/blog/"] h2, main a[href^="/blog/"] h3')
      .allTextContents();

    const visibleTitles = titles.map((value) => value.trim()).filter((value) => value.length > 0);

    expect(visibleTitles.length).toBeGreaterThan(0);

    for (const title of visibleTitles) {
      expect(title.length).toBeLessThanOrEqual(140);
      expect(title.endsWith("...")).toBeFalsy();
      expect(/[\w)\]]$/.test(title)).toBeTruthy();
    }
  });
});

test.describe("Session 2 - Internal Links in Articles", () => {
  test("/blog/best-ai-marketing-tools links to /ai-marketing-platform", async ({ page }) => {
    await gotoAndAssertOk(page, "/blog/best-ai-marketing-tools");

    const link = page.locator('a[href="/ai-marketing-platform"], a[href="https://solaraai.com/ai-marketing-platform"]');
    await expect(link.first()).toBeVisible();

    const href = (await link.first().getAttribute("href")) ?? "";
    expect(href).toContain("/ai-marketing-platform");
  });

  test("/blog/jasper-ai-alternative links to /alternatives", async ({ page }) => {
    await gotoAndAssertOk(page, "/blog/jasper-ai-alternative");

    const link = page.locator('a[href="/alternatives"], a[href="https://solaraai.com/alternatives"]');
    await expect(link.first()).toBeVisible();

    const href = (await link.first().getAttribute("href")) ?? "";
    expect(href).toContain("/alternatives");
  });
});

test.describe("Session 2 - External Tool Links", () => {
  test("/blog/hootsuite-alternatives has external tool links opening in new tab", async ({ page }) => {
    await gotoAndAssertOk(page, "/blog/hootsuite-alternatives");

    const externalLinks = page.locator('article a[href^="http"][target="_blank"]');
    await expect(externalLinks.first()).toBeVisible();
    expect(await externalLinks.count()).toBeGreaterThanOrEqual(5);
  });

  test("/blog/heygen-alternatives has external tool links opening in new tab", async ({ page }) => {
    await gotoAndAssertOk(page, "/blog/heygen-alternatives");

    const externalLinks = page.locator('article a[href^="http"][target="_blank"]');
    await expect(externalLinks.first()).toBeVisible();
    expect(await externalLinks.count()).toBeGreaterThanOrEqual(5);
  });
});

test.describe("Session 2 - Sitemap", () => {
  test("/sitemap.xml includes Session 2 landing pages", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);

    const content = await response.text();
    expect(content).toContain("/ai-marketing-platform");
    expect(content).toContain("/ai-ad-generator");
    expect(content).toContain("/ai-marketing-agency");
    expect(content).toContain("/alternatives");
  });
});

test.describe("Session 2 - Carousel Image", () => {
  test("homepage media switcher loads carousel-ad.webp image", async ({ page }) => {
    await gotoAndAssertOk(page, "/");

    const carouselImage = page.locator('img[src*="carousel-ad.webp"]');
    await expect(carouselImage.first()).toBeVisible();

    const src = (await carouselImage.first().getAttribute("src")) ?? "";
    expect(src).toContain("carousel-ad.webp");
  });
});

test.describe("Session 2 - Mobile Responsive", () => {
  test("/ai-marketing-platform at 375px has no horizontal overflow and visible h1", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await gotoAndAssertOk(page, "/ai-marketing-platform");

    await expect(page.locator("h1").first()).toBeVisible();

    const hasOverflow = await page.evaluate(() => {
      const { scrollWidth, clientWidth } = document.documentElement;
      return scrollWidth > clientWidth;
    });

    expect(hasOverflow).toBe(false);
  });

  test("/alternatives at 375px stacks cards in one column and has no overflow", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await gotoAndAssertOk(page, "/alternatives");

    const cards = page.locator('a[href^="/blog/"]').filter({ hasText: /alternative|alternatives|vs/i });
    const firstCard = cards.nth(0);
    const secondCard = cards.nth(1);

    await expect(firstCard).toBeVisible();
    await expect(secondCard).toBeVisible();

    const firstBox = await firstCard.boundingBox();
    const secondBox = await secondCard.boundingBox();

    expect(firstBox).not.toBeNull();
    expect(secondBox).not.toBeNull();
    expect((secondBox?.y ?? 0) > (firstBox?.y ?? 0)).toBeTruthy();

    const hasOverflow = await page.evaluate(() => {
      const { scrollWidth, clientWidth } = document.documentElement;
      return scrollWidth > clientWidth;
    });

    expect(hasOverflow).toBe(false);
  });
});

test.describe("Session 2 - No Console Errors", () => {
  for (const route of LANDING_ROUTES) {
    test(`${route} emits zero console/page errors`, async ({ page }) => {
      const { consoleErrors, pageErrors } = collectRuntimeErrors(page);

      await gotoAndAssertOk(page, route);

      expect(consoleErrors, `Console errors on ${route}`).toEqual([]);
      expect(pageErrors, `Page errors on ${route}`).toEqual([]);
    });
  }
});
