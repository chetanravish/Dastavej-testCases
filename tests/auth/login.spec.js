import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage.js';
import { LoginPage } from './pages/LoginPage.js';
import { DashboardPage } from './pages/DashboardPage.js';
import { invalidUser, validUser } from './utils/testData.js';

test.describe('Authentication - Login', () => {
  test('logs in with valid credentials and shows the dashboard', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await home.openLogin();
    await login.login(validUser.email, validUser.password);

    await dashboard.expectLoaded();
    await dashboard.expectNavigationVisible();
    await expect(page.getByText('Your secure family vault', { exact: true })).toBeVisible();
  });

  test('rejects invalid credentials with a generic error', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    await home.openLogin();
    await login.login(invalidUser.email, invalidUser.password);

    await expect(page).toHaveURL(/\?auth=login$/);
    await login.expectInvalidCredentialsError();
    await expect(page.getByRole('button', { name: 'Logout' })).toHaveCount(0);
  });

  test('keeps the login form usable when submitted empty', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    await home.openLogin();
    await login.loginButton.click();

    await expect(page).toHaveURL(/\?auth=login$/);
    await login.expectFormVisible();
  });
});
