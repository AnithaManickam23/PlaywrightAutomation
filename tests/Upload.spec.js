const {test, expect} = require('@playwright/test');    
 
test('Adactin title assertion', async({page})=>
{
    await page.goto("http://autopract.com/selenium/upload1/");
    //await page.locator('//input[@type="file"]').setInputFiles('tests/test1.txt');    //single input file - 1st Method
    //.setInputFiles('tests/test1.txt', 'tests/test2.txt'); //Multiple input file
    await page.setInputFiles("//input[@type='file']", 'tests/test1.txt');    //2nd Method
    await page.locator('//button[@type="submit"]').click();
 
 
}
);
