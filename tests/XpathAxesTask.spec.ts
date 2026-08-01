import {test, expect} from '@playwright/test'

// test('Task 1', async({page})=> {
//     await page.goto('https://www.facebook.com')
//     await page.waitForTimeout(2000)

//     const email = page.locator("//input[@name='email']")
//     const pass = page.locator("//input[@name='email']/following::input[@name='pass']")

//     await email.fill("laksh9341@gmail.com")
//     await pass.fill('Test12345')
//     await page.waitForTimeout(2000)


//     const precesdingEmail = page.locator("//input[@name='pass']/preceding::input[@name='email']")
//     await expect(precesdingEmail).toBeVisible()
// });


// test('Task 3', async({page}) => {
//     await page.goto('https://www.linkedin.com/login')
//     await page.waitForTimeout(2000)

//     const parentDiv = page.locator("//input[@type='email']/parent::div");
//     await expect(parentDiv).toBeVisible()
    

// });

//No form locator to do this task.
test('Task 4', async({page}) => {
    await page.goto('https://www.linkedin.com/login')
    await page.waitForTimeout(2000)

    const parentDiv = page.locator("//input[@type='email']/parent::div");
    await expect(parentDiv).toBeVisible()
    
});


test('Task 4', async({page}) => {
    await page.goto('https://www.instagram.com/accounts/login/')
    await page.waitForTimeout(2000)

    const parentDiv = page.locator("//input[@type='email']/parent::div");
    await expect(parentDiv).toBeVisible()
    

});