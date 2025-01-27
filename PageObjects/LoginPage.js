class LoginPage {
  constructor(page) {
    this.page = page;
    this.nameField = 'input[name="name"]';
    this.emailField = '//input[@data-qa="signup-email"]';
    this.signupButton = '(//button[normalize-space()="Signup"])[1]';
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/login', {
      timeout: 30000, 
    });
  }

  async fillSignUpDetails(name, email) {
    await this.page.locator(this.nameField).fill(name);
    await this.page.locator(this.emailField).fill(email);
    await this.page.locator(this.signupButton).click();
  }
}

module.exports = { LoginPage };
