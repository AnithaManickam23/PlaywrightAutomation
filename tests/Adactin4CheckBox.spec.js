const {test, expect} = require('@playwright/test');   

test('Adactin title assertion', async({page})=>
{
    test.slow();
    await page.goto("https://adactinhotelapp.com/");
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");  
    await page.locator('id=username').fill('Anithamanicka');
    await page.locator('//input[@id="password"]').type('8J4445');
    await page.locator('//input[@id="login"]').click();


    await page.locator("//a[contains(text(), 'Booked')]").click();
    await page.click("//input[@value='1200264']");
    await page.check("//input[@value='1201648']");
    await page.uncheck("//input[@value='1201648']");
  
    expect(await page.locator("//input[@value='1200264']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@value='1201648']").isChecked()).toBeFalsy();

}
)