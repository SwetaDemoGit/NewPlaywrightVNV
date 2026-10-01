import { test, expect } from '@playwright/test';

test('Mock Empty API Response', async ({ page }) => {

    await page.route('**/users', async route => {
        //Whenever the browser sends a request to a URL ending in /users, intercept it."

        await route.fulfill({//
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([])
        });

    });

    await page.goto('https://jsonplaceholder.typicode.com/users');

    const response = await page.locator('body').textContent();

    console.log(response);

    expect(response).toContain('[]');
});