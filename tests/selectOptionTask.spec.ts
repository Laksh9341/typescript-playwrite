import {test, expect} from "@playwright/test";

test("Drop Down Tasks to select the option by lable for text", async({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    await page.waitForTimeout(3000)

    const dropDown = page.locator('#oldSelectMenu');
    await dropDown.selectOption({ label: 'Green' });
    expect(dropDown).toHaveValue('2');
});


test('Drop Down Tasks to select the option by Value',async({page}) => {
    await page.goto("https://demoqa.com/select-menu");
    await page.waitForTimeout(3000)

    const cardropDown = page.locator('//select[@name = "cars"]');
    await cardropDown.selectOption({ value: 'audi'});
    expect(cardropDown.locator('option:checked')).toHaveText('Audi')

});


test('Drop Down Tasks to select the option by Index',async({page}) => {
    await page.goto("https://demoqa.com/select-menu");
    await page.waitForTimeout(3000)

    const cardropDown = page.locator('//select[@name = "cars"]');
    await cardropDown.selectOption({ index: 1});

    const selectedText = await cardropDown.locator('option:checked').textContent();
    console.log(selectedText)

});


test('Verify the Selected Dropdown Option',async({page}) => {
    await page.goto("https://demoqa.com/select-menu");
    await page.waitForTimeout(3000)

    const cardropDown = page.locator('//select[@name = "cars"]');
    await cardropDown.selectOption({ value: 'audi'});
    const selectedText = await cardropDown.locator('option:checked').textContent();
    console.log(selectedText)
    expect(cardropDown.locator('option:checked')).toHaveText('Audi')

});


test('Verify the Multiple Selected Dropdown Option',async({page}) => {
    await page.goto("https://demoqa.com/select-menu");
    await page.waitForTimeout(3000)

    const cardropDown = page.locator('//select[@name = "cars"]');
    await cardropDown.selectOption([
            { value: 'volvo' },
            { value: 'audi' }
        ]);
    const selectedText = await cardropDown.locator('option:checked').allTextContents();
    console.log(selectedText)
    expect(cardropDown).toHaveValues(['volvo', 'audi'])

});


test('Print All Dropdown Options', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.waitForTimeout(3000)

    const selectBox = page.locator('#dropdown');
    const allOptions = await selectBox.allTextContents();
    console.log(allOptions);
});



test('Count Total Dropdown Options', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.waitForTimeout(3000)

    const selectBox = page.locator('#dropdown');
    const allOptionsCount = await selectBox.locator('option').count();
    console.log(allOptionsCount);
});


test('Verify Default Selected Option', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.waitForTimeout(3000)

    const selectBox = page.locator('#dropdown');

    await expect(selectBox.locator('option:checked')).toHaveText('Please select an option');
});


test('Verify Default Selected Option', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.waitForTimeout(3000)

    const selectBox = page.locator('#dropdown');
    await selectBox.selectOption({ label: 'Option 1' });

    await expect(selectBox.locator('option:checked')).toHaveText('Option 1');
});


test('Verify Default Selected Option', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.waitForTimeout(3000)

    const selectBox = page.locator('#dropdown');
    await selectBox.selectOption({ label: 'Option 1' });

    await expect(selectBox.locator('option:checked')).toHaveText('Option 1');
});



test('Select Every Dropdown Option One by One', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.waitForTimeout(3000)

    const selectBox = page.locator('#dropdown');
    const options = selectBox.locator('option');
    const count = await options.count();

    for(let i = 1; i < count; i++) {
        const option = await options.nth(i)
        const value = await option.getAttribute('value')
        const text = await option.textContent()

        await selectBox.selectOption({ value: value! });
        await expect(selectBox.locator('option:checked')).toHaveText(text!);

        console.log(`Value: ${value}`);
        console.log(`Label: ${text}`);

    }
    
});



test('Handle Country Dropdown', async({page}) => {
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
    await page.waitForTimeout(3000)

    const dropDown = page.locator('//select');
    
    await dropDown.selectOption({ label: 'India' });
    await expect(dropDown).toHaveValue('IND');

});


test('Print the Selected Country', async({page}) => {
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
    await page.waitForTimeout(3000)

    const dropDown = page.locator('//select');
    
    await dropDown.selectOption({ label: 'India' });
    const selectedText = await dropDown.locator('option:checked').textContent();
    console.log(dropDown.locator("option:checked"))

});


test('Verify Dropdown is Enabled', async({page}) => {
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(3000)

    const dropDown = page.locator('#oldSelectMenu');
    await expect(dropDown).toBeEnabled()

    await dropDown.selectOption({ value : '3'})
    await page.waitForTimeout(3000)

});


test('Select Different Values Sequentially', async({page}) => {
    await page.goto('https://demoqa.com/select-menu')
    await page.waitForTimeout(3000)

    const dropDown = page.locator('#oldSelectMenu');

    await dropDown.selectOption({ value : '3'})
    await page.waitForTimeout(3000)
    await dropDown.selectOption({ index : 7})
    await page.waitForTimeout(3000)
    await dropDown.selectOption({ label : 'Black'})
    await page.waitForTimeout(3000)

    await expect(dropDown).toHaveValue('5');
    

});
