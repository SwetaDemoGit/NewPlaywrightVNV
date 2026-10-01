import { test, expect } from '@playwright/test';

test('Mock 401 API Response', async ({ page }) => {

    await page.route('**/users', async route => {

        await route.fulfill({
            status: 401,
            contentType: 'application/json',
            body: JSON.stringify({
                error: 'Unauthorized',
                message: 'Authentication required'
            })
        });
// page.goto()
//      ↓
// Request → /users
//      ↓
// page.route() intercepts it
//      ↓
// route.fulfill()
//      ↓
// Returns 401
//      ↓
// expect(response.status()).toBe(401)
    });

    const response = await page.goto(
        'https://jsonplaceholder.typicode.com/users'
    );

    console.log('Status:', response?.status());

    expect(response?.status()).toBe(401);
});