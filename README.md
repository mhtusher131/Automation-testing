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
Install the required dependencies:

bash
Copy
Edit
npm install
Running Tests
Run All Tests (UI + API)
bash
Copy
Edit
npx playwright test
Run Specific Tests
UI Tests:

bash
Copy
Edit
npx playwright test tests/ui
API Tests:

bash
Copy
Edit
npx playwright test tests/api
Generate and View Test Report
After running the tests, generate and view the report with:

bash
Copy
Edit
npx playwright show-report
Tests Included
UI Testing
Sign-up Process:

Automates sign-up with required and non-required fields, including Date of Birth.
Product Selection and Checkout:

Navigate to the Men’s category and select Jeans.
Add the product to the cart and update the quantity.
Proceed to checkout with dummy payment details.
Contact Us Form:

Fill out the form with Name, Email, Subject, and file attachment.
Verify successful submission.
API Testing
Validate Brand List:

Verify the presence of brands (e.g., Polo, Babyhug, Biba).
Ensure the absence of brands (e.g., Heineken, BMW, Razor).
Verify User Login:

Test login using credentials from the sign-up process.
Verify the response message is: "User exists!".
