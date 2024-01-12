const {test, expect}=require('@playwright/test');

test('Adctin title assertion', async({page})=>

{
    test.slow();
  await page.goto("https://adactinhotelapp.com/");
  await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");

  await page.locator("id=username").type("AnithaManicka");
  await page.locator("id=password").type("31AR39"); 
  await page.locator("id=login").click();

//   const err = await (await page.locator('//div[@class="auth_error"]//b').textContent()).trim();
//   console.log("Error message"+err);
  //expect (err).toBe('Invalid Login details or Your Password might have expired. Click here to reset your password');

  //await expect(page).toHaveTitle("Adactin.com - Search Hotel");

  const welcome_menu = await(page.locator('//input[@name="username_show"]').getAttribute('value'));
    console.log("Attri"+ welcome_menu);



}
);