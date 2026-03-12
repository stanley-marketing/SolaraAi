import { test } from '@playwright/test';

test('capture case study redesign screenshots', async ({ page }) => {
  // Set desktop viewport
  await page.setViewportSize({ width: 1440, height: 900 });
  
  // Navigate to case study
  console.log('Navigating to case study page...');
  await page.goto('http://localhost:3000/case-study/maison-remodeling-group', {
    waitUntil: 'networkidle'
  });
  
  // Full page desktop screenshot
  console.log('Taking full-page desktop screenshot...');
  await page.screenshot({ 
    path: '/tmp/screenshots/redesign-full-desktop.png', 
    fullPage: true 
  });
  
  // Get page height
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`Page height: ${pageHeight}px`);
  
  // Hero section (top)
  console.log('Capturing hero section...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshots/redesign-hero.png' });
  
  // Metrics section
  console.log('Capturing metrics section...');
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshots/redesign-metrics.png' });
  
  // Content/narrative section
  console.log('Capturing content section...');
  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshots/redesign-content.png' });
  
  // Pull quote section
  console.log('Capturing quote section...');
  await page.evaluate(() => window.scrollTo(0, 2400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshots/redesign-quote.png' });
  
  // Results/FAQ section
  console.log('Capturing results section...');
  await page.evaluate(() => window.scrollTo(0, 3200));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshots/redesign-results.png' });
  
  // CTA section (bottom)
  console.log('Capturing CTA section...');
  const ctaScrollPos = Math.max(0, pageHeight - 1000);
  await page.evaluate((pos) => window.scrollTo(0, pos), ctaScrollPos);
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/screenshots/redesign-cta.png' });
  
  // Mobile screenshot
  console.log('Capturing mobile full-page screenshot...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/case-study/maison-remodeling-group', {
    waitUntil: 'networkidle'
  });
  await page.screenshot({ 
    path: '/tmp/screenshots/redesign-full-mobile.png', 
    fullPage: true 
  });
  
  console.log('All screenshots captured successfully!');
});
