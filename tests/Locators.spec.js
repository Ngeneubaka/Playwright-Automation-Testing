import { test, expect } from '@playwright/test';

test('Locators', async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html");

    // click on login button - property
    await page.locator('id=login2').click();

    // provide username - css
    await page.locator('#loginusername').fill('pavanol');

    // provide password - css using id and tag
    await page.locator("input[id='loginpassword']").fill('test@123')

    //Click on login button using XPath
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence
    const logoutlink = await page.locator("//a[normalize-space()='Log out']");

    await expect(logoutlink).toBeVisible();

    await page.close();
})
