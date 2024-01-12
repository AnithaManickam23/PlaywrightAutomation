const {test, expect} = require('@playwright/test');    
test('Adactin title assertion', async({page})=>
{
    test.slow();
    await page.goto("https://adactinhotelapp.com/");
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");  
    //await page.locator('//input[@id="username"]').type('IswaryaSivakumar');
    await page.locator('id=username').fill('Anithapapu');
    await page.locator('//input[@id="password"]').type('Anipapu2301@');
    await page.locator('//input[@id="login"]').click();
    //const error = await (await page.locator('//div[@class="auth_error"]//b').textContent()).trim();
    page.waitForTimeout(100000);
    const success = await page.locator('//input[@id="username_show"]').getAttribute('value');
    console.log("Attribute Value: "+success)
    //expect (success).toHaveAttribute('value', 'Hello IswaryaSivakumar!');
    expect (success).toBe('Hello Anithapapu!');


    await page.locator("//select[@id='location']").selectOption('Sydney');
    await page.locator("//select[@id='hotels']").selectOption({index:1});
    await page.locator("//select[@id='room_type']").selectOption({label:'Standard'});
    await page.locator("//select[@id='room_nos']").selectOption('2');
    await page.locator("//input[@id='Submit']").click();

    await page.locator("//input[@id='radiobutton_0']").click();
   // await page.click("//input[@id='radiobutton_0']");
   // await page.check("//input[@id='radiobutton_0']");

   //await expect(page.locator("//input[@id='radiobutton_0']")).toBeChecked();
   expect(await page.locator("//input[@id='radiobutton_0']").isChecked()).toBeTruthy();
  // expect(await page.locator("//input[@id='radiobutton_0']").isChecked()).toBeFalsy();

 // await page.locator("id=continue").click();
















 
}
);