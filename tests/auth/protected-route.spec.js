import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage.js';
import { LoginPage } from './pages/LoginPage.js';
import { DashboardPage } from './pages/DashboardPage.js';
import { APP_URL, validUser } from './utils/testData.js';

test.describe('Authentication - Protected Dashboard Access', () => {
  test('does not expose private dashboard controls anonymously', async ({ page }) => {
    await page.goto(`${APP_URL}/dashboard`);

    await expect(page.getByRole('button', { name: 'Logout' })).toHaveCount(0);
    await expect(page.getByText('Your secure family vault', { exact: true })).toHaveCount(0);
  });

  test('allows an authenticated user to access the dashboard', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await home.openLogin();
    await login.login(validUser.email, validUser.password);

    await dashboard.expectLoaded();
    await expect(page.getByText('Welcome back, User', { exact: false })).toBeVisible();
  });

  test('keeps the session while switching dashboard sections', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await home.openLogin();
    await login.login(validUser.email, validUser.password);
    await dashboard.expectLoaded();

    await dashboard.familyButton.click();
    await dashboard.documentsButton.click();

    await dashboard.expectLoaded();
    await expect(dashboard.logoutButton).toBeVisible();
  });

  test.skip('retains the authenticated dashboard after reload', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await home.openLogin();
    await login.login(validUser.email, validUser.password);
    await dashboard.expectLoaded();
    await page.reload();

    await dashboard.expectLoaded();
  });
});
