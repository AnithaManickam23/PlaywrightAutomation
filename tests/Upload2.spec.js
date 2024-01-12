const {test, expect} = require('@playwright/test');    
 
test('Method 2', async({page})=>
{
        await page.goto("http://autopract.com/selenium/upload2/");
        const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('//a[@id="pickfiles"]').click()
])
        //await fileChooser.setFiles('tests/test1.txt');
        await fileChooser.setFiles({name:'file.txt' ,mimetype:'text/plain',buffer:Buffer.from('This is a sample')});
        await page.locator('//a[@id="uploadfiles"]').click();
       
}
);

