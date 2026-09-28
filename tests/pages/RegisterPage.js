import { expect } from '@playwright/test';
import { APP_URL } from '../utils/testData.js';

export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('yourusername');
    this.emailInput = page.getByPlaceholder('you@example.com');
    this.passwordInput = page.getByPlaceholder('Enter your password');
    this.createAccountButton = page.getByRole('button', { name: 'Create account' });
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.otpHeading = page.getByRole('heading', { name: 'OTP Verification' });
    this.verifyEmailButton = page.getByRole('button', { name: 'Verify Email' });
    this.backToLoginButton = page.getByRole('button', { name: 'Back to Login' });
  }

  async open() {
    await this.page.goto(`${APP_URL}/?auth=register`);
    await expect(this.createAccountButton).toBeVisible();
  }

  async register(username, email, password) {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.createAccountButton.click();
  }

  async expectOtpScreen(email) {
    await expect(this.otpHeading).toBeVisible();
    await expect(this.page.getByText(email, { exact: true })).toBeVisible();
    await expect(this.page.getByRole('textbox')).toHaveCount(6);
    await expect(this.verifyEmailButton).toBeVisible();
    await expect(this.backToLoginButton).toBeVisible();
    await expect(this.page.getByText(/Resend in|Resend OTP/)).toBeVisible();
  }
}
