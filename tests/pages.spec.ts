import { expect, test } from '@playwright/test';

test('home', async ({ page }) => {
  await page.goto('http://localhost:4321');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('menu', async ({ page }) => {
  await page.goto('http://localhost:4321');

  await page.waitForLoadState('domcontentloaded');
  await page.locator('#menu-toggle').click({ force: true });

  await expect(page).toHaveScreenshot({ fullPage: true });
});
