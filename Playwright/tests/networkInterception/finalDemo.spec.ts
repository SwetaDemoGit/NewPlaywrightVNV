import { test, expect } from '@playwright/test';

test.describe('Network Interception', () => {

    test('1 - Monitor network activity', async ({ page }) => {

        page.on('request', request => {
            console.log(
                'REQUEST:',
                request.method(),
                request.url()
            );
        });

        page.on('response', response => {
            console.log(
                'RESPONSE:',
                response.status(),
                response.url()
            );
        });

        await page.goto(
            'https://jsonplaceholder.typicode.com/users'
        );
    });


    test('2 - Intercept and continue', async ({ page }) => {

        await page.route('**/users', async route => {

            console.log(
                'Intercepted:',
                route.request().url()
            );

            await route.continue();

        });

        await page.goto(
            'https://jsonplaceholder.typicode.com/users'
        );
    });


    test('3 - Mock API response', async ({ page }) => {

        await page.route('**/users', async route => {

            await route.fulfill({
                status: 200,
                contentType: 'application/json',

                body: JSON.stringify([
                    {
                        id: 100,
                        name: 'Mock User',
                        username: 'mockuser',
                        email: 'mock@example.com'
                    }
                ])
            });

        });

        await page.goto(
            'https://jsonplaceholder.typicode.com/users'
        );

        await expect(
            page.locator('body')
        ).toContainText('Mock User');
    });


    test('4 - Modify real response', async ({ page }) => {

        await page.route('**/users', async route => {

            const response = await route.fetch();

            const users = await response.json();

            users.push({
                id: 999,
                name: 'Injected User',
                username: 'injected',
                email: 'injected@example.com'
            });

            await route.fulfill({
                response,
                json: users
            });

        });

        await page.goto(
            'https://jsonplaceholder.typicode.com/users'
        );

        await expect(
            page.locator('body')
        ).toContainText('Injected User');
    });


    test('5 - Block request', async ({ page }) => {

        await page.route('**/users', async route => {

            console.log(
                'Blocked:',
                route.request().url()
            );

            await route.abort();

        });

        await page.goto(
            'https://jsonplaceholder.typicode.com/users'
        );
    });


    test('6 - Direct API testing', async ({ request }) => {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        expect(response.status()).toBe(200);

        const user = await response.json();

        expect(user.id).toBe(1);

        expect(user.name).toBeDefined();

    });

});