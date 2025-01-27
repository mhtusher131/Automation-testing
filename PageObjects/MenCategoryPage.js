class MenCategoryPage {
    constructor(page) {
      this.page = page;
      this.jeansCategoryLink = '//a[normalize-space()="Jeans"]'; 
    }
  
    async clickJeansCategory() {
      await this.page.locator(this.jeansCategoryLink).click();
    }
  }
  
  module.exports = MenCategoryPage;
  