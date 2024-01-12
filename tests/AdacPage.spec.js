const {test,expect} = require('@playwright/test');
 
const {LoginPage} = require('../pages/LoginPage1');
 
test('Login Test', async({page})=>{
 
const name="AnithaManicka";
const pwd="31AR39";
 
const lp = new LoginPage(page);
await lp.goTo();
await lp.login(name,pwd);
 
 
});