import { test, expect } from '@playwright/test';

test('Contact Us Form Submission', async ({ page }) => {
  
  await page.goto('https://automationexercise.com/contact_us');

  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Hasan');

  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('hasan1060@gmail.com');

  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('Test Subject');

  const fileInput = page.locator('input[name="upload_file"]');
  await fileInput.setInputFiles('./tests/ui/file.txt');  

  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });

  
  await page.getByRole('button', { name: 'Submit' }).click();

});
