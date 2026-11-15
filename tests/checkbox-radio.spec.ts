import { test, expect } from '@playwright/test';
test('Verify checkbox selection', async ({ page }) => {

    await page.goto(
        'https://techwithsuresh.lovable.app/test'
    );

    await page.getByTestId(
        'test-nav-checkboxes-radios'
    ).click();

    const checkbox =
        page.getByTestId('test-single-checkbox');

    await checkbox.check();

    await expect(checkbox).toBeChecked();

    await checkbox.uncheck();

    await expect(checkbox).not.toBeChecked();
});