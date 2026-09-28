import { expect } from '@playwright/test';
import { APP_URL } from '../utils/testData.js';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.getStartedButton = page.getByRole('button', { name: 'Get started' });
    this.createVaultButton = page.getByRole('button', { name: 'Create your vault' });
    this.existingAccountButton = page.getByRole('button', { name: 'I already have an account' });
  }

  async open() {
    await this.page.goto(APP_URL);
    await expect(this.getStartedButton).toBeVisible();
  }

  async openLogin() {
    await this.open();
    if (await this.loginButton.isVisible()) {
      await this.loginButton.click();
      return;
    }

    await this.existingAccountButton.click();
  }

  async openRegistration() {
    await this.open();
    await this.getStartedButton.click();
  }

  async expectPublicState() {
    await expect(this.getStartedButton).toBeVisible();
    if (await this.loginButton.isVisible()) {
      await expect(this.loginButton).toBeVisible();
      return;
    }

    await expect(this.existingAccountButton).toBeVisible();
  }
}
