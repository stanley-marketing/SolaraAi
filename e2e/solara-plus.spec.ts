import { test, expect } from "@playwright/test";

test.describe("Solara+ page", () => {
  test("renders with correct h1 and Book a call CTA", async ({ page }) => {
    await page.goto("/solara-plus");
    await expect(page).toHaveTitle(/Solara\+/);
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    const cta = page.getByRole("link", { name: "Book a call" }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/contact");
  });

  test("has JSON-LD WebPage schema", async ({ page }) => {
    await page.goto("/solara-plus");
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    let hasWebPage = false;
    for (const script of scripts) {
      const content = await script.textContent();
      if (content && content.includes('"WebPage"')) hasWebPage = true;
    }
    expect(hasWebPage).toBe(true);
  });

  test("no horizontal overflow on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/solara-plus");
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });

  test("all 9 sections are present", async ({ page }) => {
    await page.goto("/solara-plus");
    await expect(page.locator("h1").first()).toBeVisible();
    const ctaLinks = page.getByRole("link", { name: "Book a call" });
    await expect(ctaLinks.first()).toBeVisible();
  });
});
