const { test } = require('@playwright/test');
const ProductPage = require('../../PageObjects/ProductPage');

test('View and Update Product', async ({ page }) => {
  const productPage = new ProductPage(page);

 
  await page.goto('https://automationexercise.com');
  await page.waitForLoadState('domcontentloaded');  

  
  await productPage.clickViewProduct();

  await page.waitForLoadState('domcontentloaded');

  await productPage.setQuantity(2);

  await productPage.addToCart();

});
