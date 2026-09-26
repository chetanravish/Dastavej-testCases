import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage.js';
import { RegisterPage } from './pages/RegisterPage.js';
import { uniqueRegistrationUser } from './utils/testData.js';

test.describe('Authentication - Registration', () => {
  test('registers a user and stops at the OTP screen', async ({ page }) => {
    const home = new HomePage(page);
    const register = new RegisterPage(page);
    const user = uniqueRegistrationUser();

    await home.openRegistration();
    await register.register(user.username, user.email, user.password);

    await expect(page).toHaveURL(/\?auth=verify$/);
    await register.expectOtpScreen(user.email);

    // Intentionally stop here. No OTP is entered or verified.
  });

  test('keeps the registration form open when submitted empty', async ({ page }) => {
    const home = new HomePage(page);
    const register = new RegisterPage(page);

    await home.openRegistration();
    await register.createAccountButton.click();

    await expect(page).toHaveURL(/\?auth=register$/);
    await expect(register.usernameInput).toBeVisible();
    await expect(register.emailInput).toBeVisible();
    await expect(register.passwordInput).toBeVisible();
  });
});
