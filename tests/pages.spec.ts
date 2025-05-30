import { expect, test } from '@playwright/test';

test('home', async ({ page }) => {
  await page.goto('/');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('menu', async ({ page }) => {
  await page.goto('/');

  await page.waitForLoadState('domcontentloaded');
  await page.locator('#menu-toggle div').filter({ hasText: 'Menu' }).click();

  await expect(page).toHaveScreenshot();
});

test('contactform', async ({ page }) => {
  await page.goto('/');

  await page.waitForLoadState('domcontentloaded');
  await page
    .locator('button')
    .filter({ hasText: 'Contact us' })
    .first()
    .click();

  await expect(page).toHaveScreenshot();
});

test('trufario', async ({ page }) => {
  await page.goto('/work/trufario');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('doitmyself', async ({ page }) => {
  await page.goto('/work/doitmyself');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test('muppy', async ({ page }) => {
  await page.goto('/work/muppy');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveScreenshot({ fullPage: true });
});
