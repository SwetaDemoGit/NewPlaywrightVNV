import { test } from '@playwright/test';

test('Intercept and continue request', async ({ page }) => {

    await page.route('**/users', async route => {

        console.log('Intercepted:', route.request().url());

        await route.continue();

    });

    await page.goto('https://jsonplaceholder.typicode.com/users');

});