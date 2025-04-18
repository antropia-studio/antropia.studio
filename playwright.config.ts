import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  expect: {
    timeout: 15000,
  },
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Big screen',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 2500, height: 1024 },
      },
    },
    {
      name: 'Almost mobile',
      use: {
        ...devices['Desktop Chrome'],
        // 1280 for XL screen size + 1
        viewport: { width: 1281, height: 1024 },
      },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] },
    },
  ],
  reporter: 'html',
  retries: process.env.CI ? 2 : 0,
  testDir: './tests',
  use: {
    trace: 'on-first-retry',
    video: 'on',
    baseURL: 'http://localhost:4321/',
  },
  webServer: {
    command: 'pnpm run dev',
    reuseExistingServer: !process.env.CI,
    url: 'http://localhost:4321',
  },
  workers: process.env.CI ? 1 : undefined,
});
