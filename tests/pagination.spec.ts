import {test,expect} from '@playwright/test';
test("Pagination",async({page})=>{
    await page.goto("https://techwithsuresh.lovable.app/test#pagination");
    await expect(page.getByTestId('section-pagination')).toBeVisible();
    await expect(page.getByTestId("test-pagination-list")).toBeVisible();
    await expect(page.getByTestId('test-pagination')).toBeVisible()
    // Verify the total records on Page 1

    const records= page.getByTestId('test-pagination-list').locator('li');
    const count=await records.count();
    console.log(count)

    // Print all records on the current page

    for(let i=0;i<count;i++)
    {
        const record= await records.nth(i).innerText();
        console.log(record)
    }
})