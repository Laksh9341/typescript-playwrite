import {Page , Locator , expect} from '@playwright/test';

export class LoginPage {

    readonly loginButton : Locator;

    constructor(readonly page : Page) {
        this.page = page;
        this.loginButton = page.locator('#login-button');
    }

    //Task 1
    async gotoPage(url :string){
        await this.page.goto(url);
    }

    async verifyPageLoad(loadUrl :string){
        await expect(this.page).toHaveURL(loadUrl);
    }

    //Task 2
    async fillText(locator : Locator, text : string){
        await locator.fill(text);
    }

    //Task 3
    async clickElement(locator : Locator){
        await locator.click();
    }

    //Task 4
    async getPageTitle() {
        return await this.page.title();
    }

    //Task 5
    async getCurrentURL() {
        return await this.page.url();
    }

    //Task 6
    async validateTitle(title :string) {
        await expect(this.page).toHaveTitle(title) 
    }

    //Task 7
    async validateUrl(url :string) {
        await expect(this.page).toHaveURL(url) 
    }

    //Task 8
    async selectDropdownOption(locator : Locator, val: string){
        await locator.selectOption({value:val})
        await expect(locator).toHaveValue(val)
    }



}