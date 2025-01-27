import { test, expect } from '@playwright/test';

test('Test Checkout Process', async ({ page }) => {
  
  await page.goto('https://automationexercise.com/');
  
  
  const overlayCloseButton = page.locator('.overlay-content .btn-close');
  if (await overlayCloseButton.isVisible()) {
    await overlayCloseButton.click();
  }

  
  await page.locator('.overlay-content > .btn').first().click();

  
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  const tshirtButton = page.getByText('Rs. 400 Men Tshirt Add to cart').nth(1);
  await tshirtButton.scrollIntoViewIfNeeded();
  await tshirtButton.click();
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();

  
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  
  await page.getByRole('link', { name: ' Cart' }).click();
  
  await page.getByText('Proceed To Checkout').click();

 
  await page.getByRole('link', { name: 'Register / Login' }).click();


  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('hasan1060@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test@123');
  await page.getByRole('button', { name: 'Login' }).click();


  await page.getByRole('link', { name: ' Cart' }).click();
  
 
  await page.getByText('Proceed To Checkout').click();

 
  await page.getByRole('link', { name: 'Place Order' }).click();

 
  await page.locator('input[name="name_on_card"]').fill('Hasan');
  await page.locator('input[name="card_number"]').fill('12346789');
  await page.getByRole('textbox', { name: 'ex.' }).fill('301');
  await page.getByRole('textbox', { name: 'MM' }).fill('12');
  await page.getByRole('textbox', { name: 'YYYY' }).fill('2026');

 
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();

  
  await page.getByRole('link', { name: 'Continue' }).click();

  await expect(page.locator('text=Thank you for your order')).toBeVisible();
});
