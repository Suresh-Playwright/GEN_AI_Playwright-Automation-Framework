import { Page, Locator, expect } from '@playwright/test';

export class TestPlaygroundPage {

    readonly page: Page;

    // Navigation
    readonly testNavigation: Locator;
    readonly basicActionsNavigation: Locator;

    // Basic Actions
    readonly clickButton: Locator;
    readonly doubleClickButton: Locator;
    readonly contextArea: Locator;
    readonly disabledButton: Locator;
    readonly enableButton: Locator;
    readonly targetButton: Locator;
    readonly dynamicButton: Locator;

    constructor(page: Page) {

        this.page = page;

        // Navigation
        this.testNavigation = page.getByRole('navigation', {
            name: 'Main'
        }).getByRole('link', {
            name: 'Test',
            exact: true
        });

        this.basicActionsNavigation =
            page.getByTestId('test-nav-basic-actions');

        // Basic Actions
        this.clickButton =
            page.getByTestId('test-click-button');

        this.doubleClickButton =
            page.getByTestId('test-double-click-button');

        this.contextArea =
            page.getByTestId('test-context-area');

        this.disabledButton =
            page.getByTestId('test-disabled-button');

        this.enableButton =
            page.getByTestId('test-enable-button');

        this.targetButton =
            page.getByTestId('test-target-button');

        this.dynamicButton =
            page.getByTestId('test-dynamic-button');
    }

    async navigateToApplication() {

        await this.page.goto(
            'https://techwithsuresh.lovable.app/',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    async navigateToTestPlayground() {

        await this.testNavigation.click();

        await expect(this.page).toHaveURL(
            'https://techwithsuresh.lovable.app/test'
        );
    }

    async navigateToBasicActions() {

        await this.basicActionsNavigation.click();

        await expect(
            this.page.getByTestId('section-basic-actions')
        ).toBeVisible();
    }
}