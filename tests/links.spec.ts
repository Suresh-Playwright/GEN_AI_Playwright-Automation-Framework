import { test, expect } from '@playwright/test';
test('Open new tab', async ({ page }) => {

    await page.goto(
        'https://techwithsuresh.lovable.app/test'
    );

    const newPagePromise =
        page.waitForEvent('popup');

    await page.getByTestId(
        'test-new-tab-link'
    ).click();

    const newPage =
        await newPagePromise;

    await newPage.waitForLoadState();

    console.log(
        await newPage.title()
    );
});