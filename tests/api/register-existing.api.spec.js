import { test, expect } from '@playwright/test';
import { API_URL } from '../utils/testData.js';
import { generateUser } from '../utils/generateData.js';

test.describe('Authentication API', () => {

  test('TC002 - Register Existing Email', async ({ request }) => {

    const user = generateUser();

    const first = await request.post(`${API_URL}/api/auth/register`, {
      data: user
    });

    expect(first.status()).toBe(201);

    const second = await request.post(`${API_URL}/api/auth/register`, {
      data: user
    });

    expect(second.status()).toBe(409);

    const body = await second.json();

    expect(body.message).toBe('Username or email already exist');

  });

});