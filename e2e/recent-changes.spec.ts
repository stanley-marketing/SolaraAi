import { expect, type Page, test } from "@playwright/test";

test.use({ baseURL: process.env.TEST_BASE_URL || "http://localhost:3334" });

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

test.describe("Recent changes coverage", () => {
  test("/case-study redirects and target page has metadata", async ({ page }) => {
    const response = await page.goto("/case-study", { waitUntil: "domcontentloaded" });

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page).toHaveURL(/\/case-study\/maison-remodeling-group$/);

    const title = await page.title();
    expect(title.trim().length).toBeGreaterThan(0);

    await expect(page.locator("h1").first()).toBeVisible();

    const metaDescription = page.locator('meta[name="description"]').first();
    await expect(metaDescription).toHaveCount(1);
    const descriptionContent = (await metaDescription.getAttribute("content"))?.trim() ?? "";
    expect(descriptionContent.length).toBeGreaterThan(0);
  });

  test("/contact renders key content, metadata, preconnect hints, and no console errors", async ({
    page,
  }) => {
    const { consoleErrors, pageErrors } = collectRuntimeErrors(page);

    const response = await page.goto("/contact", { waitUntil: "domcontentloaded" });

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    await expect(page.getByRole("heading", { level: 1, name: "Book a free strategy call" })).toBeVisible();
    await expect(page.locator(".calendly-inline-widget")).toHaveCount(1);

    await expect(
      page.locator('link[rel="preconnect"][href="https://assets.calendly.com"]'),
    ).toHaveCount(1);

    await expect(page.getByRole("heading", { level: 2, name: "Common questions" })).toBeVisible();

    const title = await page.title();
    expect(title.trim().length).toBeGreaterThan(0);

    const metaDescription = page.locator('meta[name="description"]').first();
    await expect(metaDescription).toHaveCount(1);
    const descriptionContent = (await metaDescription.getAttribute("content"))?.trim() ?? "";
    expect(descriptionContent.length).toBeGreaterThan(0);

    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });

  test("/about renders hero, dynamic section, metadata, no overflow, and no console errors", async ({
    page,
  }) => {
    const { consoleErrors, pageErrors } = collectRuntimeErrors(page);
    await page.setViewportSize({ width: 375, height: 812 });

    const response = await page.goto("/about", { waitUntil: "domcontentloaded" });

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    await expect(page.getByRole("heading", { level: 1, name: "Why Solara AI exists" })).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: /Backed by \$1\.2M in pre-seed funding/i }),
    ).toBeVisible();

    const title = await page.title();
    expect(title.trim().length).toBeGreaterThan(0);

    const metaDescription = page.locator('meta[name="description"]').first();
    await expect(metaDescription).toHaveCount(1);
    const descriptionContent = (await metaDescription.getAttribute("content"))?.trim() ?? "";
    expect(descriptionContent.length).toBeGreaterThan(0);

    const hasOverflow = await page.evaluate(() => {
      const { scrollWidth, clientWidth } = document.documentElement;
      return scrollWidth > clientWidth;
    });
    expect(hasOverflow).toBe(false);

    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });

  test("/blog/hootsuite-alternatives has refreshed 2026 title/content and metadata", async ({ page }) => {
    const response = await page.goto("/blog/hootsuite-alternatives", {
      waitUntil: "domcontentloaded",
    });

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    const title = await page.title();
    expect(title).toContain("2026");

    await expect(page.locator("body")).toContainText("Solara AI");

    const metaDescription = page.locator('meta[name="description"]').first();
    await expect(metaDescription).toHaveCount(1);
    const descriptionContent = (await metaDescription.getAttribute("content"))?.trim() ?? "";
    expect(descriptionContent.length).toBeGreaterThan(0);
  });
});
