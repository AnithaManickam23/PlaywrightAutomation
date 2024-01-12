const { test, expect } = require('@playwright/test');
const {LoginPage1} = require('../pages/LoginPage1');
const { SearchHotelPage } = require('../pages/SearchHotelPage');
const { BookHotel } = require('../pages/BookHotel');
 
test.describe.configure({ mode: 'serial' })
let page;
test.beforeAll('Before All', async ({ browser }) => {
    page = await browser.newPage();
})
 
test('Login', async () => {
    const name = "AnithaManicka";
    const pwd = "31AR39";
 
    const lp = new LoginPage1(page);
    await lp.goTo();
    await lp.login(name, pwd);
    
})
 
test('Search Hotel', async () => {
    const nameCity = "Adelaide";
    const hotelIndex = 2;
    const typeRoom = "Deluxe";
    const nosRoom = "2 - Two";
 
    const shp = new SearchHotelPage(page);
    shp.searchHotel(nameCity,hotelIndex,typeRoom,nosRoom);
    await expect(page).toHaveTitle("Adactin.com - Select Hotel");
 
    shp.selectHotel();
    await expect(shp.selectHotelChkBox).toBeChecked()
 
    shp.continueButton();
})
test('Book A Hotel', async()=>
{
    const fstname = "Ani";
    const lstname = "manickam";
    const adres = "India";
    const cardnum = "1234567890123456";
    const cardtype = "VISA";
    const cardmonth ="March"
    const cardyear = "2024"
    const cardccv = "123";
 
    const Htlbk = new BookHotel(page);
    Htlbk.personalDetails(fstname,lstname,adres);
 
    Htlbk.cardDetails(cardnum, cardtype, cardmonth, cardyear, cardccv);
 
    Htlbk.bookButton();
 
})
 