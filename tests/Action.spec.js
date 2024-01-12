const {test, expect}=require('@playwright/test');

test.skip('ActionsKeyboard Example', async({page})=>
{

    //keyBoard Actions

    await page.goto('https://google.com');
    await page.locator("getByLabel('Search', { exact: true })").type("selenium");
    await page.locator ("getByLabel('Search', { exact: true })").press('Control+KeyA+Backspace');
    await page.locator("getByLabel('Search', { exact: true })").type("playwright");
    await page.locator("getByLabel('Search', { exact: true })").press('Enter'); //mouse action

}
);

test('ActionsMouse Example', async({page})=>
{
    //mouse Actions

    await page.goto('https://amazon.in');
    await page.locator('//a[@id="nav-link-accountList"]').hover();  //mouse hover
    await page.locator('//a[@id="nav-link-accountList"]').dblclick();  //double click
    await page.goto('https://amazon.in');
    //await page.locator('//a[@id="nav-link-accountList"]').click({ button: 'right' }); ---> right click
    await page.locator('//a[@id="nav-link-accountList"]').click({ modifiers: ['Shift'] });  //open a link in new window
    await page.locator('//a[@id="nav-link-accountList"]').click({ position: { x: 37, y: 45 } });  //like offset method
}
);
    




