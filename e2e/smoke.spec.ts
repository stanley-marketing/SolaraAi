import { expect, test } from "@playwright/test";

const CASE_STUDY_PATH = "/case-study/maison-remodeling-group";

test.describe("Maison Remodeling Group homepage", () => {
  test("homepage loads", async ({ page }) => {
    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Solara/i);
  });

  test("case study section is visible", async ({ page }) => {
    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.locator("body")).toContainText("View the full case study");
  });

  test("homepage CTA navigates to the Maison detail page", async ({ page }) => {
    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    const cta = page.locator(`a[href="${CASE_STUDY_PATH}"]`).first();
    await expect(cta).toContainText("View the full case study");
    await cta.click();

    await expect(page).toHaveURL(new RegExp(`${CASE_STUDY_PATH}$`));
  });

  test("homepage shows the 131 lead metric", async ({ page }) => {
    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.locator("body")).toContainText("131");
  });
});

test.describe("Maison Remodeling Group detail page", () => {
  test("detail page loads", async ({ page }) => {
    const response = await page.goto(CASE_STUDY_PATH);

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
  });

  test("detail page shows hero content", async ({ page }) => {
    const response = await page.goto(CASE_STUDY_PATH);

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.locator("body")).toContainText("Maison Remodeling Group");
  });

  test("detail page shows key metrics", async ({ page }) => {
    const response = await page.goto(CASE_STUDY_PATH);

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.locator("body")).toContainText("131");
    await expect(page.locator("body")).toContainText("$800k+");
  });

  test("detail page shows FAQ content", async ({ page }) => {
    const response = await page.goto(CASE_STUDY_PATH);

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.locator("body")).toContainText(
      "What did Solara AI deliver for Maison Remodeling Group in 90 days?",
    );
  });

  test("detail page shows strategy call CTA", async ({ page }) => {
    const response = await page.goto(CASE_STUDY_PATH);

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await expect(page.locator('a:has-text("Book a strategy call")').first()).toBeVisible();
  });

  test("detail page renders JSON-LD scripts", async ({ page }) => {
    const response = await page.goto(CASE_STUDY_PATH);

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);
    await page.waitForLoadState("networkidle");

    const jsonLdCount = await page.locator('script[type="application/ld+json"]').count();
    expect(jsonLdCount).toBeGreaterThan(0);
  });
});

test.describe("Maison Remodeling Group routing", () => {
  test("base route redirects to the Maison detail page", async ({ page }) => {
    await page.goto("/case-study");

    await expect(page).toHaveURL(new RegExp(`${CASE_STUDY_PATH}$`));
  });

  test("unknown case study slug returns 404", async ({ page }) => {
    const response = await page.goto("/case-study/unknown-slug");

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(404);
    await expect(page.locator("body")).toContainText(/404|not found/i);
  });
});

test.describe("Maison Remodeling Group mobile", () => {
  test("detail page renders without horizontal overflow at 375px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    const response = await page.goto(CASE_STUDY_PATH);

    expect(response).not.toBeNull();
    expect(response?.status()).toBe(200);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(375);
  });
});
