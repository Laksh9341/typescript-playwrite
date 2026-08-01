import { test,expect } from "@playwright/test"

// test("Task 1 – Handle a Simple Alert", async({page}) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         await dialog.accept()
//         console.log(await dialog.message())
//     })
//     await page.getByRole('button', { name: 'Click for JS Alert' }).click();
//     await expect(page.locator("//p[@id='result']")).toHaveText('You successfully clicked an alert')
// });


// test("Task 2 – Handle a Confirmation Alert",async({page}) => {
//     await page.goto(' https://the-internet.herokuapp.com/javascript_alerts')
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         await dialog.accept()
//     })
//     await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
//     await expect(page.locator("//p[@id='result']")).toHaveText('You clicked: Ok')
// });


// test("Task 3 – Dismiss a Confirmation Alert",async({page}) => {
//     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         await dialog.dismiss()
//     })
//     await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
//     await expect(page.locator("//p[@id='result']")).toHaveText('You clicked: Cancel')
// });


// test("Task 4 – Handle a Prompt Alert", async({page}) => {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         await dialog.accept("laksh9341")
//     })
//     await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
//     await expect(page.locator("//p[@id='result']")).toHaveText('You entered: laksh9341')

// });

// test("Task 5 – Dismiss a Prompt Alert", async({page}) => {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         await dialog.dismiss()
//     })
//     await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
//     await expect(page.locator("//p[@id='result']")).toHaveText('You entered: null')

// });


// test("Task 6 – Print Alert Message", async({page}) => {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         dialog.accept()
//         console.log(dialog.message())
//     })
//     await page.getByRole('button', {name:'Click for JS Alert'}).click()
// });


// test("Task 7 – Print Confirmation Alert Message", async({page}) => {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         console.log(dialog.message())
//         dialog.accept()
//     })
//     await page.getByRole('button', {name:'Click for JS Confirm'}).click()

// });


// test("Task 8 – Verify Prompt Input", async({page}) => {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
//     await page.waitForTimeout(2000)

//         page.on('dialog', async(dialog) => {
//         await dialog.accept("Automation Tester")
//     })
//     await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
//     await expect(page.locator("//p[@id='result']")).toHaveText('You entered: Automation Tester')

// });


// test("Task 9 – Handle Alert and Capture Screenshot", async({page}) => {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         dialog.accept()
//     })
//     await page.getByRole('button', {name:'Click for JS Alert'}).click()
//     await page.screenshot({ path: 'screenshots/alert.png' })
// });


// test("Task 10 – Verify Alert Result Message",async({page}) => {
//     await page.goto(' https://the-internet.herokuapp.com/javascript_alerts')
//     await page.waitForTimeout(2000)

//     await page.on('dialog', async(dialog) => {
//         await dialog.accept()
//     })
//     await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
//     await expect(page.locator("#result")).toHaveText('You clicked: Ok')
// });


// test("Task 11 – Handle Delayed Alert", async({page}) => {
//     await page.goto('https://demoqa.com/alerts')

//     await page.on('dialog', async(dialog) => {
//         await dialog.accept()
//     })
//     await page.locator("//button[text()='Click me' and @id='timerAlertButton']").click();
//     await page.waitForTimeout(6000)
// })

// test("Task 12 – Handle Confirmation Alert on DemoQA", async({page}) => {
//     await page.goto('https://demoqa.com/alerts')

//     page.on('dialog', async(dialog) => {
//         await dialog.dismiss()
//     })
//     await page.locator("//button[text()='Click me' and @id='confirmButton']").click();
//     await expect(page.locator("//span[@id='confirmResult']")).toHaveText('You selected Cancel')
// })


// test("Task 13 – Handle Prompt Alert on DemoQA", async({page}) => {
//     await page.goto('https://demoqa.com/alerts')

//     page.on('dialog', async(dialog) => {
//         await dialog.accept('Alex')
//     })
//     await page.locator("//button[text()='Click me' and @id='promtButton']").click();
//     await expect(page.locator("//span[@id='promptResult']")).toHaveText('You entered Alex')
// })



test("Task 14 – Print Alert Type and Message", async({page}) => {
    await page.goto('https://demoqa.com/alerts')

    page.on('dialog', async(dialog) => {
        
        console.log("Type    :", dialog.type());
        console.log("Message :", dialog.message());

        switch(dialog.type()){
            case 'alert' :
                await dialog.accept();
                break;
            case 'confirm' :
                await dialog.accept();
                break;
            case 'prompt' :
                await dialog.accept('Automation Tester')
        }

    })

    await page.locator("//button[text()='Click me' and @id='alertButton']").click();
    await page.locator("//button[text()='Click me' and @id='timerAlertButton']").click();
    await page.waitForTimeout(6000)

    await page.locator("//button[text()='Click me' and @id='confirmButton']").click();
    await page.locator("//button[text()='Click me' and @id='promtButton']").click();
    
})