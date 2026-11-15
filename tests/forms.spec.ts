import { test, expect } from '@playwright/test';

test.describe('Input Fields', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://techwithsuresh.lovable.app/test',
            {
                waitUntil: 'domcontentloaded'
            }
        );

        await page.getByTestId(
            'test-nav-forms'
        ).click();
    });


    test('Enter text input', async ({ page }) => {

        const nameInput =
            page.getByTestId('test-input-text');

        await nameInput.fill('Suresh Addagalla');

        await expect(nameInput)
            .toHaveValue('Suresh Addagalla');
    });


    test('Enter email', async ({ page }) => {

        const email =
            page.getByTestId('test-input-email');

        await email.fill('suresh@example.com');

        await expect(email)
            .toHaveValue('suresh@example.com');
    });


    test('Enter password', async ({ page }) => {

        await page.getByTestId(
            'test-input-password'
        ).fill('Password@123');
    });


    test('Enter number', async ({ page }) => {

        await page.getByTestId(
            'test-input-number'
        ).fill('50');
    });


    test('Search input', async ({ page }) => {

        await page.getByTestId(
            'test-input-search'
        ).fill('Playwright');
    });


    test('Validate inputs', async ({ page }) => {

        await page.getByTestId(
            'test-input-text'
        ).fill('Suresh');

        await page.getByTestId(
            'test-input-email'
        ).fill('suresh@example.com');

        await page.getByTestId(
            'test-input-password'
        ).fill('Password@123');

        await page.getByTestId(
            'test-input-number'
        ).fill('25');

        await page.getByTestId(
            'test-input-validate'
        ).click();
    });

});