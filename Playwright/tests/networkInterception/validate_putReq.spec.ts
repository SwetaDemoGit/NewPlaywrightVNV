import { test, expect } from '@playwright/test';

test('PUT API test', async ({ request }) => {

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data: {
                name: 'Updated User',
                username: 'updateduser',
                email: 'updated@example.com'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe('Updated User');

});