import {test,expect} from '../fixtures/baseTest'

test.describe('Login Tests', () => {

    
    const validEmail = 'demo@shopease.test';
    const validPassword = 'Demo@123';

    test.beforeEach(async ({loginPage}) => {
      
        await loginPage.navigateToLoginPage();
        await loginPage.clickOnLoginLinkButtonLink();
    });
    // TC01: Verify that the user can log in with valid credentials

    test('Login with valid credentials', async ({loginPage,page}) => {

      
        await loginPage.login(validEmail,validPassword);
        await expect(page).toHaveURL('https://techwithsuresh.lovable.app/shop');
    });
    // TC02: Verify that the user cannot log in with invalid credentials
    test('Login with invalid credentials', async ({loginPage,page}) => {
        
        await loginPage.login('demo@shopease.tst','Demo123');
        await expect(page).toHaveURL('https://techwithsuresh.lovable.app/shop/login');
    });

    // TC03 : Invalid Email
    test('Login with invalid email', async ({loginPage,page}) => {
        await loginPage.login('invalid@example.com', validPassword);
        await expect(page).toHaveURL('https://techwithsuresh.lovable.app/shop/login');
    });

    // TC04 : Invalid Password
    test('Login with invalid password', async ({loginPage,page}) => {
        await loginPage.login(validEmail, 'invalidPassword');
        await expect(page).toHaveURL('https://techwithsuresh.lovable.app/shop/login');
    });

    // TC05 : Empty Email and Password
    test('Login with empty email and password', async ({loginPage,page}) => {
        await loginPage.login('', '');
        await expect(page).toHaveURL('https://techwithsuresh.lovable.app/shop/login');
    });
    // TC06 : Empty Email
    test('Login with empty email', async ({loginPage,page}) => {
        await loginPage.login('', validPassword);
        await expect(page).toHaveURL('https://techwithsuresh.lovable.app/shop/login');
    });
    // TC07 : Empty Password
    test('Login with empty password', async ({loginPage,page}) => {
        await loginPage.login(validEmail, '');
        await expect(page).toHaveURL('https://techwithsuresh.lovable.app/shop/login');
    });
});