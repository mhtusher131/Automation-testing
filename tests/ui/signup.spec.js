

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../PageObjects/LoginPage');
const { SignUpPage } = require('../../PageObjects/SignUpPage');

test('Complete Sign-Up Process in Production on AutomationExercise', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const signUpPage = new SignUpPage(page);

  await loginPage.navigate();

 
  const name = 'Hasan Hasan';
  const email = `hasan${Date.now()}@gmail.com`; 
  console.log(`Generated email: ${email}`);
  await loginPage.fillSignUpDetails(name, email);

 
  const userData = {
    password: 'test@123',
    dobDay: '1',
    dobMonth: '1',
    dobYear: '2007',
    firstName: 'Hasan',
    lastName: 'Hasan',
    company: 'Hasan',
    address: 'Mohammadpur',
    state: 'Kolkata',
    city: 'Kolkata',
    zipCode: '3500',
    mobileNumber: '01944332280',
  };
  await signUpPage.completeSignUpForm(userData);

  
  await signUpPage.verifyAccountCreation();
});
