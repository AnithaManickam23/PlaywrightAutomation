const {test, expect} = require('@playwright/test');   

test('Browser Controls', async({page})=>
{
  await page.goto('http://www.google.com/');
  await page.goto('https://adactinhotelapp.com/');
  await page.goBack();
  await expect(page).toHaveTitle("Google");
  await page.goForward();
  await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");

}
);