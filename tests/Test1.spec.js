const {test, expect}=require('@playwright/test');

test('Google title assertion', async({page})=>

{
  await page.goto("http://google.com");
  await expect(page).toHaveTitle("Google");
}
);
