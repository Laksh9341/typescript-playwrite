import { test, expect } from '@playwright/test';
//import PropertiesReader from 'properties-reader';
import { userdatas } from '../dataDriver/loginInfo.json';

// Load the properties file
//const properties = PropertiesReader(`${process.cwd()}/config/config.properties`);

test("Launch the browser and open URL", async({page}) => {

     for (const user of userdatas) {

    await page.goto('https://www.facebook.com/');

    // Fill username
    await page.locator('[name="email"]').fill(user.email);

    // Fill password
    await page.locator('[name="pass"]').fill(user.password);

    console.log(`Username: ${user.email}`);
    console.log(`Password: ${user.password}`);

    // Click Login
    await page.getByText('Log in').click;

  }


});