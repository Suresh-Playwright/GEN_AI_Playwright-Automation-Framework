import {Page , Locator, expect} from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly clickOnLoginLink: Locator;
    readonly emailInput: Locator
    readonly passwordInput: Locator;
    readonly checkbox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickOnLoginLink = page.getByTestId('nav-login');
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.checkbox = page.getByTestId('remember-me');
        this.loginButton = page.getByTestId('login-submit');
    }
    async navigateToLoginPage() {

        await this.page.goto('https://techwithsuresh.lovable.app/shop')
    }
    async clickOnLoginLinkButtonLink() {
        await this.clickOnLoginLink.click();
    }

    async enterUsername(username: string) {
        await this.emailInput.fill(username);
    }
    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    
}