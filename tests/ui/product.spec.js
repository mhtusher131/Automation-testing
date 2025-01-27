const { test, expect } = require('@playwright/test');
const HomePage = require('../../PageObjects/HomePage');
const MenCategoryPage = require('../../PageObjects/MenCategoryPage');
const ProductPage = require('../../PageObjects/ProductPage');

test.describe('AutomationExercise - Product Tests', () => {
  test('Navigate to Men Category and Select Jeans', async ({ page }) => {
    const homePage = new HomePage(page);
    const menCategoryPage = new MenCategoryPage(page);

   
    await homePage.navigateToHomePage();

   
    await homePage.clickMenCategory();

    
    await menCategoryPage.clickJeansCategory();

   
    await expect(page).toHaveURL(/.*category_products\/6/); 
  });
  
});
