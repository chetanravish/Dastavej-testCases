import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage.js';
import { LoginPage } from './pages/LoginPage.js';
import { DashboardPage } from './pages/DashboardPage.js';
import { APP_URL, validUser } from './utils/testData.js';

test.describe('Authentication - Logout', () => {
  test('logs out and returns to the public landing page', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await home.openLogin();
    await login.login(validUser.email, validUser.password);
    await dashboard.expectLoaded();
    await dashboard.logout();

    await expect(page).toHaveURL(`${APP_URL}/`);
    await home.expectPublicState();
    await expect(page.getByRole('button', { name: 'Logout' })).toHaveCount(0);
  });

  test('does not expose dashboard controls after logout', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await home.openLogin();
    await login.login(validUser.email, validUser.password);
    await dashboard.expectLoaded();
    await dashboard.logout();

    await page.goto(`${APP_URL}/dashboard`);

    await expect(page.getByRole('button', { name: 'Logout' })).toHaveCount(0);
    await expect(page.getByText('Your secure family vault', { exact: true })).toHaveCount(0);
  });
});
