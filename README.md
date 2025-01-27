# Automation Testing Assignment

This project automates **UI and API Testing** for the website [Automation Exercise](https://automationexercise.com/) using **Playwright**. 

---

## Requirements

Before running the tests, ensure the following tools are installed:

- **[Node.js](https://nodejs.org/)** (v14 or higher)
- **Playwright** (installed via `npm` during setup)

---

## Project Setup

1. Clone this repository:

   ```bash
   https://github.com/mhtusher131/Automation-testing.git
   cd automation-testing-assignment
# Automated UI and API Testing using Cypress/Playwright

## Overview  
This document outlines the automated tests for UI and API testing using Cypress or Playwright. The tests are implemented following best practices, including the Page Object Model (POM), with comprehensive assertions.

## Tests Included  

### **UI Testing**

#### **1. Sign-up Process**  
Automates the user sign-up process with the following scenarios:  
- Fill out both required and non-required fields, including Date of Birth.  
- Verify successful account creation.  

---

#### **2. Product Selection and Checkout**  
Tests the e-commerce flow for selecting and purchasing a product:  
- Navigate to the Men’s category and select Jeans.  
- Add the selected product to the cart.  
- Update the product quantity in the cart.  
- Proceed to checkout using dummy payment details.  

---

#### **3. Contact Us Form**  
Automates submission of the "Contact Us" form:  
- Fill out all fields: Name, Email, Subject, and upload a file attachment.  
- Verify successful submission with confirmation feedback.  

---

### **API Testing**

#### **1. Validate Brand List**  
Ensures proper response from the API endpoint for brands:  
- **Verify presence of brands**: Ensure brands such as `Polo`, `Babyhug`, and `Biba` are returned in the API response.  
- **Verify absence of brands**: Confirm brands such as `Heineken`, `BMW`, and `Razor` are not present in the API response.  

---

#### **2. Verify User Login**  
Tests login functionality using credentials from the sign-up process:  
- Perform login using the registered user details.  
- Verify the response message is: **"User exists!"**  

---

