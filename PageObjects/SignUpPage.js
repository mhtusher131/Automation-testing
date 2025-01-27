const { expect } = require('@playwright/test');

class SignUpPage {
  constructor(page) {
    this.page = page;

    this.genderRadioButton = 'input#id_gender1';
    this.passwordField = 'input[name="password"]';

   
    this.dobDay = 'select#days';
    this.dobMonth = 'select#months';
    this.dobYear = 'select#years';

    this.newsletterCheckbox = 'input#newsletter';
    this.specialOfferCheckbox = 'input#optin';

    
    this.firstNameField = 'input[name="first_name"]';
    this.lastNameField = 'input[name="last_name"]';
    this.companyField = 'input[name="company"]';
    this.addressField = 'input[name="address1"]';
    this.stateField = 'input[name="state"]';
    this.cityField = 'input[name="city"]';
    this.zipCodeField = 'input[name="zipcode"]';
    this.mobileNumberField = 'input[name="mobile_number"]';

  
    this.createAccountButton = 'button[data-qa="create-account"]';

    
    this.successMessage = '.title';
    this.continueButton = 'a[data-qa="continue-button"]';
  }

  async completeSignUpForm(data) {
   
    await this.page.locator(this.genderRadioButton).waitFor({ state: 'visible' });
    await this.page.locator(this.genderRadioButton).check();
    await this.page.locator(this.passwordField).fill(data.password);

    await this.page.locator(this.dobDay).selectOption(data.dobDay);
    await this.page.locator(this.dobMonth).selectOption(data.dobMonth);
    await this.page.locator(this.dobYear).selectOption(data.dobYear);

   
    await this.page.locator(this.newsletterCheckbox).check();
    await this.page.locator(this.specialOfferCheckbox).check();

    await this.page.locator(this.firstNameField).fill(data.firstName);
    await this.page.locator(this.lastNameField).fill(data.lastName);
    await this.page.locator(this.companyField).fill(data.company);
    await this.page.locator(this.addressField).fill(data.address);
    await this.page.locator(this.stateField).fill(data.state);
    await this.page.locator(this.cityField).fill(data.city);
    await this.page.locator(this.zipCodeField).fill(data.zipCode);
    await this.page.locator(this.mobileNumberField).fill(data.mobileNumber);

    
    await this.page.locator(this.createAccountButton).click();
  }

  async verifyAccountCreation() {
    await expect(this.page.locator(this.successMessage)).toContainText('Account Created!');
    await this.page.locator(this.continueButton).click();
    await expect(this.page).toHaveURL('https://automationexercise.com');
  }
}

module.exports = { SignUpPage };
