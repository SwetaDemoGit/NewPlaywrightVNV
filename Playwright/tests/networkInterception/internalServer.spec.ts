import { test, expect } from '@playwright/test';

test('Mock 500 API Response', async ({ page }) => {

    await page.route('**/users', async route => {

        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({
                error: 'Internal Server Error',
                message: 'Something went wrong on the server'
            })
        });

    });

    const response = await page.goto(
        'https://jsonplaceholder.typicode.com/users'
    );

    console.log('Status:', response?.status());

    expect(response?.status()).toBe(500);
});