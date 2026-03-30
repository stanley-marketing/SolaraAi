import { expect, type Page, test } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

const SMOKE_ROUTES = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/pricing",
  "/grow",
  "/partners/agencies",
  "/partners/marketers",
  "/partners/referral-program",
  "/partners/setup-operators",
  "/blog/best-ai-marketing-tools",
  "/case-study/maison-remodeling-group",
] as const;

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

async function assertPageLoadsWithValidStructure(page: Page, route: string) {
  const { consoleErrors, pageErrors } = collectRuntimeErrors(page);

  const response = await page.goto(route, { waitUntil: "domcontentloaded" });

  expect(response).not.toBeNull();
  expect(response?.status(), `Unexpected status for ${route}`).toBe(200);

  const h1 = page.locator("h1");
  await expect(h1.first(), `No visible h1 on ${route}`).toBeVisible();
  expect(await h1.count(), `Expected exactly one h1 on ${route}`).toBe(1);

  await expect(page.locator("footer"), `Missing footer on ${route}`).toBeVisible();

  expect(consoleErrors, `Console errors on ${route}`).toEqual([]);
  expect(pageErrors, `Page errors on ${route}`).toEqual([]);
}

async function getHomepageInternalLinks(page: Page): Promise<string[]> {
  const hrefs = await page.locator("a[href]").evaluateAll((anchors) =>
    anchors
      .map((anchor) => anchor.getAttribute("href") ?? "")
      .filter((href) => href.length > 0),
  );

  const internalLinks = hrefs.filter(
    (href) => href.startsWith("/") && !href.startsWith("//"),
  );

  const normalizedLinks = Array.from(
    new Set(
      internalLinks.map((href) => {
        const parsed = new URL(href, BASE_URL);
        return `${parsed.pathname}${parsed.search}`;
      }),
    ),
  );

  return normalizedLinks.sort((a, b) => a.localeCompare(b));
}

test.describe("All pages smoke checks", () => {
  for (const route of SMOKE_ROUTES) {
    test(`${route} loads with valid structure`, async ({ page }) => {
      await assertPageLoadsWithValidStructure(page, route);
    });
  }
});

test.describe("Homepage internal link integrity", () => {
  test("all discovered internal links return non-404 and exclude /product", async ({ page }) => {
    test.setTimeout(120000);

    const response = await page.goto("/", { waitUntil: "domcontentloaded" });

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    const links = await getHomepageInternalLinks(page);

    expect(links.length).toBeGreaterThan(0);
    expect(links).not.toContain("/product");

    for (const link of links) {
      const linkResponse = await page.request.get(link);
      expect(linkResponse.status(), `Broken internal link found: ${link}`).not.toBe(404);
    }
  });
});

test.describe("Sitemap and robots accessibility", () => {
  test("/sitemap.xml is accessible and served as xml", async ({ request }) => {
    const response = await request.get("/sitemap.xml");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"] ?? "").toContain("xml");
  });

  test("/robots.txt is accessible and contains sitemap declaration", async ({ request }) => {
    const response = await request.get("/robots.txt");

    expect(response.status()).toBe(200);
    await expect(response.text()).resolves.toContain("Sitemap:");
  });
});

test.describe("404 handling", () => {
  test("unknown page returns 404", async ({ page }) => {
    const response = await page.goto("/nonexistent-page-12345");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(404);
  });
});

test.describe("Homepage navigation and layout", () => {
  test("homepage has a visible top navigation", async ({ page }) => {
    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    await expect(page.locator("header nav").first()).toBeVisible();
  });

  test("footer includes key page links", async ({ page }) => {
    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    await expect(footer.locator('a[href="/pricing"]').first()).toBeVisible();
    await expect(footer.locator('a[href="/blog"]').first()).toBeVisible();
    await expect(footer.locator('a[href="/contact"]').first()).toBeVisible();
    await expect(footer.locator('a[href="/about"]').first()).toBeVisible();
  });

  test("homepage has no horizontal overflow at 390x844", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    const hasOverflow = await page.evaluate(() => {
      const { scrollWidth, clientWidth } = document.documentElement;
      return scrollWidth > clientWidth;
    });

    expect(hasOverflow).toBe(false);
  });
});
