const {test, expect}=require('@playwright/test');

test('Frame Example', async({page})=>
{
   // await page.slow(30); milli seconds
    await page.goto("http://autopract.com/selenium/iframe1/");
   
    //await page.screenshot({path:'Screenshots/screenshot1_'+Date.now()+'.png', fullPage:true});

    //const myFrame= page.frame("testframe");
    //const myFrame= page.frame({name:"testframe"});
    const myFrame= page.frame({url: "http://autopract.com/selenium/form1/"});
    //const myFrame= page.frame({url:/form1/});
    await myFrame.fill("(//input[@class='form-control'])[2]", "Anitha");

    //await myFrame.locator("(//input[@class='form-control'])[2]").screenshot({path:'Screenshots/screenshot2.png'}); //particular element screenshot

    await myFrame.locator('//input[@class="form-control"]').nth(0).fill("abcd@gmail.com");
    

}
);