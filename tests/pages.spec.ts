import { expect, test } from '@playwright/test';

test('home', async ({ page }) => {
  await page.goto('http://localhost:4321/antropia.studio');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveScreenshot({ fullPage: true });
});
