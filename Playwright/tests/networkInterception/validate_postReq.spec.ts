import { test, expect } from '@playwright/test';

test('POST API test', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: {
                name: 'John',
                username: 'john123',
                email: 'john@example.com'
            }
        }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe('John');

});