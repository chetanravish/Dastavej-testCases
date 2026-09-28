import { test, expect } from '@playwright/test';
import { API_URL } from '../utils/testData.js';
import { generateUser } from '../utils/generateData.js';

test.describe('Authentication API', () => {

  test('TC001 - Register Valid User', async ({ request }) => {

    const user = generateUser();

    const response = await request.post(`${API_URL}/api/auth/register`, {
      data: user
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.message).toBe('User Created Successfully');

  }); 

});