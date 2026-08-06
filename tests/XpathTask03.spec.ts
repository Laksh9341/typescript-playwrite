import { test } from "@playwright/test"
import { chromium } from "playwright";


test("flipkart find 3rd list", async({}) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.waitForTimeout(3000)

    const searchSelector = await page.getByPlaceholder("Search for Products, Brands and More").first();
    await page.waitForTimeout(3000)
    await searchSelector.fill("iphone");
    await searchSelector.press("Enter");
    await page.waitForTimeout(3000)

    //Third search element xpath in flipkart
    const pathElement =  page.locator("//div[@class='QSCKDh dLgFEE']/child::*[4]/child::div");
    const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    pathElement.click(),
    ]);
    await newPage.waitForLoadState();

    await newPage.waitForTimeout(3000)

    await newPage.locator("//div[text()='Buy with EMI']").click();
    await newPage.waitForTimeout(3000)

    
});