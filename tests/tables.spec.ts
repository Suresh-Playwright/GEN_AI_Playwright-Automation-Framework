import {test,expect} from '@playwright/test';

test("Table Automation",async({page})=>{

    await page.goto("https://techwithsuresh.lovable.app/test#tables");

    // Locate the Employee Table
    const table= page.getByTestId("test-employee-table");
    const rows = table.locator('tbody tr')
    const rowCount=await rows.count();
    console.log("Total Employees: ",rowCount)
    
    const row=rows.filter({hasText:'Diya Patel'});
    await expect(row).toHaveCount(1);
    console.log(await row.innerText())
   


    // Validate Employee Details
    // Validate whether Diya Patel belongs to the Automation Depaertment and works as an SDET.

     await expect(row.locator('td').nth(2)).toHaveText("SDET")
    await expect(row.locator('td').nth(3)).toHaveText("Automation")

    // Find employee using ID

    const employee=page.locator('[data-employee-id="3"]')
    await expect(employee).toBeVisible();
    console.log(await employee.innerText())



   


})