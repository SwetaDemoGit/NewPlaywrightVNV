import { test, expect } from '@playwright/test';

test('Mock GET API response', async ({ page }) => {

    await page.route('**/users', async route => {

        await route.fulfill({//Create a fake successful response
            status: 200,
            contentType: 'application/json',

            body: JSON.stringify([
                {
                    id: 101,
                    name: 'Mock User',
                    username: 'mockuser',
                    email: 'mock@example.com'
                }
            ])
        });

    });

//     We are pretending that the server returned:

// HTTP 200 OK
// Content-Type: application/json
// 4. Provide fake user data
// body: JSON.stringify([
//     {
//         id: 101,
//         name: 'Mock User',
//         username: 'mockuser',
//         email: 'mock@example.com'
//     }
// ])
// JSON.stringify() converts the JavaScript object/array into a JSON string because that's what an HTTP response body contains.

    await page.goto(
        'https://jsonplaceholder.typicode.com/users'//The browser requests
    );

    const response = await page.locator('body').textContent();

    console.log(response);

    expect(response).toContain('Mock User');

});
//page.route() intercepts the API request, 
// route.fulfill() supplies a fake response, and 
// the test verifies that the application receives the mocked data.

// Browser
//    ↓
// GET /users
//    ↓
// page.route()
//    ↓
// ❌ Real server is NOT called
//    ↓
// route.fulfill()
//    ↓
// Fake 200 response
//    ↓
// Mock User