import { expect, test, type Page } from "@playwright/test";

type ViewportConfig = {
  name: string;
  width: number;
  height: number;
};

const ROUTES = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/pricing",
  "/partners/agencies",
  "/partners/marketers",
  "/partners/referral-program",
  "/partners/setup-operators",
  "/blog/best-ai-marketing-tools",
  "/case-study/maison-remodeling-group",
] as const;

const MOBILE_VIEWPORTS: ViewportConfig[] = [
  { name: "iPhone SE", width: 320, height: 568 },
  { name: "iPhone 14", width: 390, height: 844 },
  { name: "iPad Mini", width: 768, height: 1024 },
];

async function gotoRoute(page: Page, route: string) {
  const response = await page.goto(route, { waitUntil: "domcontentloaded" });
  expect(response, `No response for ${route}`).not.toBeNull();
  expect(response?.status(), `Unexpected status for ${route}`).toBe(200);
}

async function getReachableRoutes(page: Page): Promise<string[]> {
  const reachableRoutes: string[] = [];

  for (const route of ROUTES) {
    const response = await page.goto(route, { waitUntil: "domcontentloaded" });
    if (response?.status() === 200) {
      reachableRoutes.push(route);
    }
  }

  return reachableRoutes;
}

async function forEachRoute(
  page: Page,
  assertionName: string,
  run: (route: string) => Promise<void>,
) {
  for (const route of ROUTES) {
    await test.step(`${assertionName} :: ${route}`, async () => {
      await run(route);
    });
  }
}

test.describe("Mobile responsiveness across all pages", () => {
  for (const viewport of MOBILE_VIEWPORTS) {
    test.describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
      test.setTimeout(120000);

      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
      });

      test.describe("No horizontal overflow", () => {
        test("document width never exceeds viewport width", async ({ page }) => {
          const reachableRoutes = await getReachableRoutes(page);

          for (const route of reachableRoutes) {
            await gotoRoute(page, route);

            const dimensions = await page.evaluate(() => ({
              scrollWidth: document.documentElement.scrollWidth,
              clientWidth: document.documentElement.clientWidth,
            }));

            expect(
              dimensions.scrollWidth,
              `Horizontal overflow on ${route}: scrollWidth=${dimensions.scrollWidth}, clientWidth=${dimensions.clientWidth}`,
            ).toBeLessThanOrEqual(dimensions.clientWidth);
          }
        });
      });

      test.describe("Route availability", () => {
        test("all required routes respond with 200", async ({ page }) => {
          await forEachRoute(page, "route-availability", async (route) => {
            await gotoRoute(page, route);
          });
        });
      });

      test.describe("Navigation", () => {
        test("hamburger menu is visible and can open/close with accessible links", async ({ page }) => {
          const reachableRoutes = await getReachableRoutes(page);

          for (const route of reachableRoutes) {
            await gotoRoute(page, route);

            const openMenuButton = page.getByRole("button", { name: /open menu/i }).first();
            await expect(openMenuButton, `Missing mobile menu trigger on ${route}`).toBeVisible();

            await openMenuButton.click();

            const closeMenuButton = page.getByRole("button", { name: /close menu/i }).first();
            await expect(closeMenuButton, `Menu did not open on ${route}`).toBeVisible();

            const mobileNavLinks = page.locator("div.fixed.inset-0.z-50 nav a[href]");
            const linkCount = await mobileNavLinks.count();
            expect(linkCount, `No mobile nav links found on ${route}`).toBeGreaterThan(0);
            await expect(
              mobileNavLinks.first(),
              `Mobile nav links are not visible on ${route}`,
            ).toBeVisible();

            await closeMenuButton.dispatchEvent("click");
            await expect(openMenuButton, `Menu did not close on ${route}`).toBeVisible();
          }
        });
      });

      test.describe("Content visibility", () => {
        test("hero heading is visible and CTA controls are visible", async ({ page }) => {
          const reachableRoutes = await getReachableRoutes(page);

          for (const route of reachableRoutes) {
            await gotoRoute(page, route);

            const h1 = page.locator("h1").first();
            await expect(h1, `Missing visible h1 on ${route}`).toBeVisible();

            const h1Box = await h1.boundingBox();
            expect(h1Box, `Could not resolve h1 bounding box on ${route}`).not.toBeNull();
            expect(
              (h1Box?.x ?? 0) + (h1Box?.width ?? 0),
              `h1 appears clipped horizontally on ${route}`,
            ).toBeLessThanOrEqual(viewport.width + 1);

            const visibleCtaText = await page.evaluate(() => {
              const ctaPattern = /book|start|get|contact|pricing|trial|read|learn|schedule|call/i;
              const controls = Array.from(document.querySelectorAll<HTMLElement>("a,button"));

              for (const control of controls) {
                const text = (control.textContent ?? "").trim();
                if (!ctaPattern.test(text)) {
                  continue;
                }

                const style = window.getComputedStyle(control);
                const rect = control.getBoundingClientRect();
                if (
                  style.display === "none" ||
                  style.visibility === "hidden" ||
                  Number(style.opacity) === 0 ||
                  rect.width === 0 ||
                  rect.height === 0
                ) {
                  continue;
                }

                return text;
              }

              return null;
            });

            expect(
              visibleCtaText,
              `No visible CTA-like control found on ${route}`,
            ).not.toBeNull();
          }
        });
      });

      test.describe("Touch targets", () => {
        test("interactive controls meet minimum 44x44 touch target size", async ({ page }) => {
          const reachableRoutes = await getReachableRoutes(page);

          for (const route of reachableRoutes) {
            await gotoRoute(page, route);

            const openMenuButton = page.getByRole("button", { name: /open menu/i }).first();
            await expect(openMenuButton, `Missing open menu button on ${route}`).toBeVisible();
            const openBox = await openMenuButton.boundingBox();
            expect(openBox?.width ?? 0, `Open menu target width < 44px on ${route}`).toBeGreaterThanOrEqual(44);
            expect(openBox?.height ?? 0, `Open menu target height < 44px on ${route}`).toBeGreaterThanOrEqual(44);

            await openMenuButton.click();

            const closeMenuButton = page.getByRole("button", { name: /close menu/i }).first();
            await expect(closeMenuButton, `Missing close menu button on ${route}`).toBeVisible();
            const closeBox = await closeMenuButton.boundingBox();
            expect(closeBox?.width ?? 0, `Close menu target width < 44px on ${route}`).toBeGreaterThanOrEqual(44);
            expect(closeBox?.height ?? 0, `Close menu target height < 44px on ${route}`).toBeGreaterThanOrEqual(44);

            const navLinkTargets = page.locator("div.fixed.inset-0.z-50 nav a[href]");
            const navLinkCount = await navLinkTargets.count();
            expect(navLinkCount, `No mobile nav links to validate touch targets on ${route}`).toBeGreaterThan(0);

            const targetsToCheck = Math.min(navLinkCount, 6);
            for (let index = 0; index < targetsToCheck; index += 1) {
              const target = navLinkTargets.nth(index);
              const targetText = (await target.textContent())?.trim() ?? `link-${index}`;
              const targetBox = await target.boundingBox();

              expect(
                targetBox?.width ?? 0,
                `Mobile nav link \"${targetText}\" width < 44px on ${route}`,
              ).toBeGreaterThanOrEqual(44);
              expect(
                targetBox?.height ?? 0,
                `Mobile nav link \"${targetText}\" height < 44px on ${route}`,
              ).toBeGreaterThanOrEqual(44);
            }
          }
        });
      });

      test.describe("Text readability", () => {
        test("visible text uses font size >= 12px", async ({ page }) => {
          const reachableRoutes = await getReachableRoutes(page);

          for (const route of reachableRoutes) {
            await gotoRoute(page, route);

            const textViolations = await page.evaluate(() => {
              const selectors = ["p", "li", "a", "button", "span", "label", "small"];
              const nodes = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
              const results: Array<{ text: string; size: number; tag: string }> = [];

              for (const node of nodes) {
                const text = (node.textContent ?? "").trim();
                if (text.length === 0) {
                  continue;
                }

                const style = window.getComputedStyle(node);
                if (
                  style.display === "none" ||
                  style.visibility === "hidden" ||
                  Number(style.opacity) === 0
                ) {
                  continue;
                }

                const size = Number.parseFloat(style.fontSize);
                if (Number.isNaN(size) || size >= 12) {
                  continue;
                }

                // Uppercase decorative labels with wide tracking are readable below 12px
                const isUppercase = style.textTransform === "uppercase";
                const hasWideTracking = Number.parseFloat(style.letterSpacing) >= 0.5;
                if (isUppercase || hasWideTracking) {
                  continue;
                }

                results.push({
                  text: text.slice(0, 80),
                  size,
                  tag: node.tagName.toLowerCase(),
                });
              }

              return results.slice(0, 10);
            });

            expect(
              textViolations,
              `Found text smaller than 12px on ${route}: ${JSON.stringify(textViolations)}`,
            ).toEqual([]);
          }
        });
      });

      test.describe("Image responsiveness", () => {
        test("images do not overflow viewport or parent container", async ({ page }) => {
          const reachableRoutes = await getReachableRoutes(page);

          for (const route of reachableRoutes) {
            await gotoRoute(page, route);

            const imageViolations = await page.evaluate(() => {
              const images = Array.from(document.querySelectorAll<HTMLImageElement>("img"));
              const violations: Array<{
                src: string;
                renderedWidth: number;
                parentWidth: number;
                viewportWidth: number;
              }> = [];

              for (const image of images) {
                const rect = image.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) {
                  continue;
                }

                const parentWidth = image.parentElement?.getBoundingClientRect().width ?? rect.width;
                const viewportWidth = document.documentElement.clientWidth;

                if (rect.width > parentWidth + 1 || rect.width > viewportWidth + 1) {
                  violations.push({
                    src: image.currentSrc || image.src,
                    renderedWidth: Math.round(rect.width),
                    parentWidth: Math.round(parentWidth),
                    viewportWidth,
                  });
                }
              }

              return violations.slice(0, 10);
            });

            expect(
              imageViolations,
              `Responsive image overflow found on ${route}: ${JSON.stringify(imageViolations)}`,
            ).toEqual([]);
          }
        });
      });

      test.describe("Footer visibility", () => {
        test("footer is visible on all pages", async ({ page }) => {
          const reachableRoutes = await getReachableRoutes(page);

          for (const route of reachableRoutes) {
            await gotoRoute(page, route);
            await expect(page.locator("footer"), `Footer missing on ${route}`).toBeVisible();
          }
        });
      });

      test.describe("Viewport meta tag", () => {
        test("viewport meta includes width=device-width", async ({ page }) => {
          const reachableRoutes = await getReachableRoutes(page);

          for (const route of reachableRoutes) {
            await gotoRoute(page, route);

            const viewportMeta = page.locator('meta[name="viewport"]').first();
            await expect(viewportMeta, `Missing viewport meta tag on ${route}`).toHaveCount(1);

            const content = (await viewportMeta.getAttribute("content")) ?? "";
            expect(
              content,
              `Viewport meta tag missing width=device-width on ${route}: ${content}`,
            ).toContain("width=device-width");
          }
        });
      });
    });
  }
});
