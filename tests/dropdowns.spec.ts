import { test, expect } from '@playwright/test';


test('Select Country',async({page})=>{


await page.goto("https://techwithsuresh.lovable.app/test#dropdowns");

const lang= page.locator('#test-course-dropdown');
await lang.selectOption('JavaScript');
// await country.selectOption({label:'JavaScript'})

await expect(lang).toHaveValue('JavaScript');




});
