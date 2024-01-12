const {test, expect}=require('@playwright/test');

test('Modal Example', async({page})=>
{
    await page.goto("https://demo.cyclos.org/ui/login");
    await page.locator("(//div[text()=' Login '])[1]").click();

    await page.locator('//input[@autocomplete="username"]').fill('demo');
    await page.locator('//input[@autocomplete="password"]').fill('1234');
    await page.locator('//span[text()="Submit"]').click();

    await page.locator("//div[text()=' Pay user ']").click();
    await page.locator('//button[@class="btn btn-icon ml-2"]').click();

    console.log(await page.locator('//a[text()=" Active Walking "]').textContent());

    await page.locator('//a[text()=" Active Walking "]').click();


}
);

