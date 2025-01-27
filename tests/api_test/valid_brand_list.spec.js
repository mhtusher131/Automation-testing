import { test, expect } from '@playwright/test';


test('Validate Brand List', async ({ request }) => {

  const response = await request.get('https://automationexercise.com/api/brandsList');
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  const brandNames = responseBody.brands.map(brand => brand.brand);

  expect(brandNames).toContain('Polo');
  expect(brandNames).toContain('Babyhug');
  expect(brandNames).toContain('Biba');

  
  expect(brandNames).not.toContain('Heineken');
  expect(brandNames).not.toContain('BMW');
  expect(brandNames).not.toContain('Razor');

  console.log('Test passed: All brand checks passed successfully!');
});
