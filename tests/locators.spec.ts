import { test, expect } from '@playwright/test';

test.describe('Locator Playground', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://techwithsuresh.lovable.app/test',
            {
                waitUntil: 'domcontentloaded'
            }
        );

        await page.getByTestId(
            'test-nav-basic-actions'
        ).click();

        await page.getByTestId(
            'test-nav-locators'
        ).click();
    });


    test('Locate element by ID', async ({ page }) => {

        await expect(
            page.locator('#locator-by-id')
        ).toHaveText('Find me by ID');
    });


    test('Locate element by class', async ({ page }) => {

        await expect(
            page.locator('.locator-by-class')
        ).toHaveText('Find me by class');
    });


    test('Locate element by text', async ({ page }) => {

        await expect(
            page.getByText('Find me by text')
        ).toBeVisible();
    });


    test('Locate element by role', async ({ page }) => {

        await expect(
            page.getByRole('button', {
                name: 'Locator Role Button'
            })
        ).toBeVisible();
    });


    test('Locate element by label', async ({ page }) => {

        await page.getByLabel('Locator label')
            .fill('Suresh');
    });


    test('Locate element by placeholder', async ({ page }) => {

        await page.getByPlaceholder(
            'Find me by placeholder'
        ).fill('Playwright');
    });


    test('Locate element by test ID', async ({ page }) => {

        await expect(
            page.getByTestId('locator-testid')
        ).toHaveText(
            'Element with data-testid'
        );
    });


    test('Locate element by data-test', async ({ page }) => {

        await expect(
            page.locator(
                '[data-test="locator-datatest"]'
            )
        ).toHaveText(
            'Element with data-test'
        );
    });


    test('Handle dynamic ID using stable test ID', async ({ page }) => {

        const element =
            page.getByTestId('locator-dynamic');

        await expect(element).toBeVisible();
    });

});