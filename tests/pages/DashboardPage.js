import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.documentsButton = page.getByRole('button', { name: 'Documents' });
    this.familyButton = page.getByRole('button', { name: 'Family' });
    this.secureNotesButton = page.getByRole('button', { name: 'Secure Notes' });
    this.pdfToolsButton = page.getByRole('button', { name: 'PDF Tools' });
    this.settingsButton = page.getByRole('button', { name: 'Settings' });
    this.searchInput = page.getByPlaceholder('Search...');
    this.uploadButton = page.getByRole('button', { name: 'Upload' });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/dashboard$/);
    await expect(this.logoutButton).toBeVisible();
    await expect(this.documentsButton).toBeVisible();
  }

  async expectNavigationVisible() {
    await expect(this.familyButton).toBeVisible();
    await expect(this.secureNotesButton).toBeVisible();
    await expect(this.pdfToolsButton).toBeVisible();
    await expect(this.settingsButton).toBeVisible();
    await expect(this.searchInput).toBeVisible();
    await expect(this.uploadButton).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
