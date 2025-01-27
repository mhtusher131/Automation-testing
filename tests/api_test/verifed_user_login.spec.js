import { test, expect } from '@playwright/test';


test('Verify User Login', async ({ request }) => {
  const email = 'hasan1060@gmail.com';
  const password = 'test@123';

  const response = await request.post('https://automationexercise.com/api/verifyLogin', {
    form: {
      email: email,
      password: password
    },
  });

  const responseBody = await response.json();

  expect(responseBody.message).toBe('User exists!');


  console.log('Test passed: User login verified successfully!');
});
