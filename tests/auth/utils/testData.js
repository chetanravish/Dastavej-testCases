export const APP_URL = 'https://dastavej-family-vault.vercel.app';

export const validUser = {
  email: 'shrnktest.io@gmail.com',
  password: 'test1234',
};

export const invalidUser = {
  email: 'wronguser@gmail.com',
  password: 'Wrong@123',
};

export function uniqueRegistrationUser() {
  const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  return {
    username: `pw_user_${id}`,
    email: `pw.auth.${id}@gmail.com`,
    password: 'Test@1234',
  };
}
