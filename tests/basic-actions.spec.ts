import { test, expect } from '@playwright/test';
import { TestPlaygroundPage } from '../pages/TestPlaygroundPage';

test.describe('Basic Actions', () => {

    let testPage: TestPlaygroundPage;

    test.beforeEach(async ({ page }) => {

        testPage = new TestPlaygroundPage(page);

        await testPage.navigateToApplication();

        await testPage.navigateToTestPlayground();

        await testPage.navigateToBasicActions();
    });


    test('Verify normal button click', async () => {

        await testPage.clickButton.click();

        // Add assertion based on the application's
        // resulting state/message if available.
    });


    test('Verify double click action', async () => {

        await testPage.doubleClickButton.dblclick();
    });


    test('Verify right click action', async () => {

        await testPage.contextArea.click({
            button: 'right'
        });
    });


    test('Verify disabled button', async () => {

        await expect(
            testPage.disabledButton
        ).toBeDisabled();
    });


    test('Verify target button becomes enabled', async () => {

        await expect(
            testPage.targetButton
        ).toBeDisabled();

        await testPage.enableButton.click();

        await expect(
            testPage.targetButton
        ).toBeEnabled();
    });


    test('Verify dynamic button', async () => {

        await expect(
            testPage.dynamicButton
        ).toHaveAttribute(
            'data-state',
            'idle'
        );

        await testPage.dynamicButton.click();

        // Add state assertion according to
        // the application's resulting state.
    });

});