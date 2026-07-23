import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test('Call the page from POM and verfy the Url load', async( {page} ) => {

    const loginpage = new LoginPage(page);
    await loginpage.gotoPage("https://www.saucedemo.com/");
    await loginpage.verifyPageLoad("https://www.saucedemo.com/");

});