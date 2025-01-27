class ProductPage {
    constructor(page) {
        this.page = page;
        this.viewProductButton = 'a:has-text("View Product")'; 
        this.quantityInput = 'input[name="quantity"]';
        this.addToCartButton = 'button:has-text("Add to cart")'; 
        this.modalBody = '.modal-body'; 
    }

    async clickViewProduct() {
        try {
            await this.page.locator(this.viewProductButton).first().click();
        } catch (error) {
            throw new Error(`Failed to click "View Product" button: ${error.message}`);
        }
    }

    async setQuantity(quantity) {
        try {
            await this.page.locator(this.quantityInput).fill(quantity.toString());
        } catch (error) {
            throw new Error(`Failed to set product quantity: ${error.message}`);
        }
    }

    async addToCart() {
        try {
            await this.page.locator(this.addToCartButton).click();
        } catch (error) {
            throw new Error(`Failed to click "Add to Cart" button: ${error.message}`);
        }
    }


}

module.exports = ProductPage;
