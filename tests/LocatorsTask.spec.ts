import { test, expect } from '@playwright/test';


// Facebook login page locators task
test('Launch the application' , async( {page}) => {
    await page.goto('https://facebook.com/');
    await page.waitForTimeout(2000);


    //getByLabel
    await page.getByLabel('Email address or mobile number').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.waitForTimeout(2000);

    //getByPlaceholder

    //getByTitle
    
    //getByAltText

    //getByTestId

    //getByDisplayValue

    //getByRole
    await page.getByRole('button', { name: 'Log in' }).click();

    //getByText
    await page.getByText('Log in').click();

});

//https://www.wikipedia.org

test('Test Locators on Wikipedia', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.waitForTimeout(2000);

    //getByLabel
    await page.getByLabel('Search Wikipedia').fill('Playwright');
    await page.waitForTimeout(2000);

    //getByRole
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);

    //getByTitle
    await page.getByTitle('English — Wikipedia — The Free Encyclopedia').click();
    await page.waitForTimeout(2000);

    //getByPlaceholder
    await page.getByPlaceholder('Search Wikipedia').fill('Playwright');

    //getByAltText
    await page.getByAltText('Ludwig Ross').click();
    await page.waitForTimeout(2000);

    //getByText
    await page.getByText('Log in').first().click();
    await page.waitForTimeout(2000);

});

//https://demo.opencart.com

// Site restricted by cloudflare, so we cannot access it.
test('Test Locators on OpenCart', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await page.waitForTimeout(3000);

    //  //getByPlaceholder
    await page.getByPlaceholder('Search').fill('MacBook');

    //Locatore
    await page.locator('button').first().click();
});


//https://www.saucedemo.com/

test('Test Locators on SauceDemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(2000);

    //getByPlaceholder
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    //getByRole
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);

    //getByAltText
    await page.getByAltText('Sauce Labs Backpack').click();

    //getByText
    //await page.getByText('Sauce Labs Backpack').click();

    //getByRole
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', { name: 'Back to products' }).click();
    await page.waitForTimeout(2000);

    //getByTestId
    await page.getByTestId('shopping-cart-link').click();
    await page.waitForTimeout(2000);
    
});