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

//