class HomePage {
    constructor(page) {
      this.page = page;
      this.menCategoryLink = '//a[normalize-space()="Men"]'; 
    }
  
    async navigateToHomePage() {
      await this.page.goto('https://automationexercise.com');
    }
  
    async clickMenCategory() {
      await this.page.locator(this.menCategoryLink).click();
    }
  }
  
  module.exports = HomePage;
  