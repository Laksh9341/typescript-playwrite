import {test, expect} from '@playwright/test';


test("Launch the browser and open URL", async({page}) => {

//1. Launch the browser and open https://www.google.com.

    await page.goto("https://www.google.com");
    //await page.waitForTimeout(3000);

//2. Get the page title and print it in the console.
    const title = await page.title();
    console.log("Page title is: " + title);

//3. Get the current URL and print it in the console.
    const url = await page.url();
    console.log("Current URL is: " + url);

//4. Validate that the page title is Google.
    expect(title).toBe("Google");

//5. Validate that the page title contains Google using a regular expression.
    expect(title).toMatch(/Google/);

//6. Validate that the current URL is https://www.google.com/.
    expect(url).toContain("https://www.google.com/");

//7. Open https://playwright.dev and print the page title and URL.
    await page.goto("https://playwright.dev");
    //await page.waitForTimeout(3000);
    

    const playwrightTitle = await page.title();
    const playwrightUrl = await page.url();
    console.log("Playwright page title is: " + playwrightTitle);
    console.log("Playwright current URL is: " + playwrightUrl);
    
//8. Validate that the Playwright page title contains Playwright.
    expect(playwrightTitle).toMatch(/Playwright/);

//9. Validate that the Playwright URL contains playwright.
    expect(playwrightUrl).toContain("playwright");

//10. Compare the page title using an if condition and print Pass or Fail.
    if (playwrightTitle.includes("Playwright")) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }

//11. Compare the current URL using an if condition and print Pass or Fail.
    if (playwrightUrl === "https://playwright.dev") {
        console.log("Pass");
    } else {
        console.log("Fail");
    }

//12. Launch the browser, open a website, print the title and URL, validate both, and close the browser.

    await page.goto("https://www.github.com");
    //await page.waitForTimeout(3000);
    const githubTitle = await page.title();
    const githubUrl = await page.url();
    console.log("GitHub page title is: " + githubTitle);
    console.log("GitHub current URL is: " + githubUrl); 

    expect(githubTitle).toMatch(/GitHub/);
    await expect(page).toHaveURL("https://github.com/");

//13. Open three websites (Google, Amazon, GitHub) and print the title of each.
    const websites = ["https://www.google.com", "https://www.amazon.com", "https://www.github.com"];
    for (const website of websites) {
        await page.goto(website);
        //await page.waitForTimeout(5000);
        const siteTitle = await page.title();
        console.log(`Title of ${website} is: ${siteTitle}`);
    }

//14. Open three websites (Google, Instagram, Playwright) and print the URL of each.
    const websites2 = ["https://www.google.com", "https://www.instagram.com", "https://playwright.dev"];
    for (const website of websites2) {
        await page.goto(website);
        //await page.waitForTimeout(5000);
        const siteUrl = await page.url();
        console.log(`URL of ${website} is: ${siteUrl}`);
    }

})