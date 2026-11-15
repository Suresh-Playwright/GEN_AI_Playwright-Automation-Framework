import { test, expect } from '@playwright/test';
test('Complete registration form', async ({ page }) => {

    await page.goto(
        'https://techwithsuresh.lovable.app/test'
    );

    await page.getByTestId(
        'test-nav-registration'
    ).click();

    await page.getByTestId(
        'test-reg-first-name'
    ).fill('Suresh');

    await page.getByTestId(
        'test-reg-last-name'
    ).fill('Addagalla');

    await page.getByTestId(
        'test-reg-email'
    ).fill('suresh@example.com');

    await page.getByTestId(
        'test-reg-phone'
    ).fill('9999999999');

    await page.getByTestId(
        'test-reg-password'
    ).fill('Demo@123');

    await page.getByTestId(
        'test-reg-confirm-password'
    ).fill('Demo@123');

    await page.getByTestId(
        'test-reg-gender-male'
    ).check();

    await page.getByTestId(
        'test-reg-experience'
    ).selectOption({
        label: '3–5 Years'
    });

    await page.getByTestId(
        'test-reg-skill-playwright'
    ).check();

    await page.getByTestId(
        'test-reg-skill-typescript'
    ).check();

    await page.getByTestId(
        'test-reg-country'
    ).selectOption('India');

    await page.getByTestId(
        'test-reg-dob'
    ).fill('1999-06-12');

    await page.getByTestId(
        'test-reg-address'
    ).fill('Hyderabad');

    await page.getByTestId(
        'test-reg-comments'
    ).fill(
        'Playwright Automation Testing'
    );

    await page.getByTestId(
        'test-reg-submit'
    ).click();
});