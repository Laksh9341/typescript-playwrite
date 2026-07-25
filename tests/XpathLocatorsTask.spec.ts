import { test, expect } from "@playwright/test";

//Wikipedia
test("Locators using XPATH For Wikepedia Site", async ({ page }) => {
    await page.goto("https://wikipedia.org")
    await page.waitForTimeout(2000)

    await page.locator('//input[@id="searchInput"]').fill('Playwright')
    await page.waitForTimeout(2000)

    const wikipediaText =  page.locator('//h1//span[contains(text(),"Wikipedia")]')
    expect(wikipediaText).toBeVisible;

    await page.locator('//a[@title = "English — Wikipedia — The Free Encyclopedia"]').click()
    expect(page).toHaveURL('https://en.wikipedia.org/wiki/Main_Page')
    await page.waitForTimeout(2000)

    await page.locator('//select[@id = "searchLanguage"]').click()
    await page.waitForTimeout(2000)

    await page.locator('//button[@class = "lang-list-button"]').click()
    await page.waitForTimeout(2000)

    await page.locator('(//div[contains(@class,"langlist")])[1]//li[last()]').click()
    await page.waitForTimeout(2000)

    await page.locator('//a[@class="jsl10n"]').click()
    await page.waitForTimeout(2000)

    //input[@name = 'search' and @type='search']
    await page.locator("//input[@name = 'search' and @type='search']").click()
    await page.waitForTimeout(2000)

    await page.locator("//input[@name = 'search' or @type='search']").click()
    await page.waitForTimeout(2000);

    await page.locator("(//div[contains(@class,'langlist')])[2]//li[text()='Norsk']").click()
    await page.waitForTimeout(2000);

    

})

//Goolge
test('Locators using XPATH For Google Site',async ({ page }) => {
await page.goto("https://www.google.com/")
await page.waitForTimeout(3000);

await page.locator("//textarea[@title='Search']").fill("playwrite");
await page.waitForTimeout(3000);

await page.locator("//textarea[@aria-label='Search']").fill("playwrite");
await page.waitForTimeout(3000);

await page.locator("//textarea[@aria-label='Search']").fill("playwrite");
await page.waitForTimeout(3000);

await page.locator("(//a[@role='button'])[1]").click()
await page.waitForTimeout(3000);

await page.locator("//a[@class='w5hRs']").click()
await page.waitForTimeout(3000);

await page.locator("//div//a[text()='தமிழ்']").click()
await page.waitForTimeout(3000);

//button[@class='UbbAWe' or type='button']
await page.locator("//button[@class='UbbAWe' or type='button']").click()
await page.waitForTimeout(3000);


await page.locator(`(//input[@type='submit' and @value="I'm Feeling Lucky"])[1]`).click();
await page.waitForTimeout(3000);

});

//chatgpt.com
test('Locators using XPATH For Google Site',async ({ page }) => {
await page.goto("https://chatgpt.com/")
await page.waitForTimeout(3000);

//textarea[@placeholder='Ask anything']
await page.locator("//textarea[@placeholder='Ask anything']").fill("playwrite");
await page.waitForTimeout(3000);

const buttons = page.locator('//button');
await expect(buttons.first()).toBeVisible();

const firstButton = page.locator('(//button)[1]');
await expect(firstButton).toBeVisible();

const lastButton = page.locator('(//button)[last()]');
await expect(lastButton).toBeVisible();

const composer = page.locator("//*[contains(@class, 'composer')]");
await expect(composer).toHaveClass(/composer/);

await page.locator("//button[.//span[text()='Create an image']]").click();


});