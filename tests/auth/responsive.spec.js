import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage.js';
import { LoginPage } from './pages/LoginPage.js';
import { RegisterPage } from './pages/RegisterPage.js';

const viewports = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 390, height: 844 },
];

test.describe('Authentication - Responsive Behavior', () => {
  for (const viewport of viewports) {
    test(`renders the landing page at ${viewport.name} size`, async ({ page }) => {
      const home = new HomePage(page);
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await home.open();

      await expect(page.getByRole('banner')).toBeVisible();
      await expect(page.getByRole('heading', {
        name: 'Every family document, exactly where you left it.',
      })).toBeVisible();
      await home.expectPublicState();
    });

    test(`renders login controls at ${viewport.name} size`, async ({ page }) => {
      const home = new HomePage(page);
      const login = new LoginPage(page);
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await home.openLogin();

      await login.expectFormVisible();
      await expect(login.createAccountButton).toBeVisible();
    });

    test(`renders registration controls at ${viewport.name} size`, async ({ page }) => {
      const home = new HomePage(page);
      const register = new RegisterPage(page);
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await home.openRegistration();

      await expect(register.usernameInput).toBeVisible();
      await expect(register.emailInput).toBeVisible();
      await expect(register.passwordInput).toBeVisible();
      await expect(register.createAccountButton).toBeVisible();
    });
  }
});
