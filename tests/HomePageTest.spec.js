import { test, expect } from '@playwright/test';

test('Home Page', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = page.title();
    console.log('Page title is:', pageTitle)

    await expect(page).toHaveTitle('STORE');

    const pageUrl = page.url()
    console.log('This is the page url:', pageUrl)

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    page.close();
})