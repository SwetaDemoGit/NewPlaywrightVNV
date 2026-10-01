import { test, expect } from '@playwright/test';

test('Mock GET API response', async ({ page }) => {

    await page.route('**/users', async route => {
        //Intercepts any request whose URL ends with /users.
        //page.route() allows us to intercept and control network requests.

        await route.fulfill({
            //Instead of sending the request to the real server, Playwright returns a mock response.
        
            status: 200,
            contentType: 'application/json',

            body: JSON.stringify([
                {
                    id: 101,
                    name: 'Mock User',
                    username: 'mockuser',
                    email: 'mock@example.com'
                }
//                 Provides our fake API data.
// JSON.stringify() converts the JavaScript object into a JSON string.
            ])
        });

    });

    await page.goto(
        'https://jsonplaceholder.typicode.com/users'
    );

    //The /users request is intercepted by Playwright, so the real response is not used.
    const response = await page.locator('body').textContent();

    console.log(response);

    expect(response).toContain('Mock User');

});