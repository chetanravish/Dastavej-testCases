import { expect } from '@playwright/test';
import { APP_URL } from '../utils/testData.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('you@example.com');
    this.passwordInput = page.getByPlaceholder('Enter your password');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.createAccountButton = page.getByRole('button', { name: 'Create new account' });
    this.forgotPasswordButton = page.getByRole('button', { name: 'Forgot password?' });
  }

  async open() {
    await this.page.goto(`${APP_URL}/?auth=login`);
    await expect(this.loginButton).toBeVisible();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectFormVisible() {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async expectInvalidCredentialsError() {
    await expect(this.page.getByText('invalid email or password', { exact: true })).toBeVisible();
  }
}
