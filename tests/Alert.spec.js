const {test, expect}=require('@playwright/test');

test.skip('Alert Example', async({page})=>
{
    await page.goto('http://autopract.com/selenium/alert5/');
    page.on('Alert',async dialog => {
        expect (dialog.type()).toContain('Alert');
        expect (dialog.message()).toContain('This is an Alert Box.');
        await dialog.accept();
    });

    await page.locator("//button[text()='Trigger an Alert']").click();
    await expect(page.locator("//p[text()='You clicked on Ok button.']")).toHaveText('You clicked on Ok button.');

}
);

 test.skip('Alert 2', async({page})=>
 
 {

    await page.goto('http://autopract.com/selenium/alert5/');
    page.on('Alert',async dialog => {
        expect (dialog.type()).toContain('Alert');
        expect (dialog.message()).toContain('Do you want to save changes?');
        await dialog.dismiss();
    });

    await page.locator('id=confirm-button').click();
    await expect(page.locator("//p[text()='Save Canceled!']")).toHaveText('Save Canceled!');

 });

 test('Alert 3', async({page})=>
  //test.only
 {

    await page.goto('http://autopract.com/selenium/alert5/');
    page.on('dialog',async dialog => {
        expect (dialog.type()).toContain('prompt');
        expect (dialog.message()).toContain('Please enter any number');
       // await dialog.fill("10");
        await dialog.accept('34');
    });

    await page.locator('id=prompt-button').click();
    await expect(page.locator("//p[text()='You have entered number: 34']")).toHaveText('You have entered number: 34');

 });
