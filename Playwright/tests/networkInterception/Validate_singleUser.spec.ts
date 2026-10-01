import { test, expect } from '@playwright/test';

test('Validate API response', async ({ request }) => {

    // Send a GET request to the API endpoint
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    // Verify that the API returns HTTP status code 200 (Success)
    expect(response.status()).toBe(200);

    // Convert the API response body from JSON into a JavaScript object
    const user = await response.json();

    // Verify that the user ID is 1
    expect(user.id).toBe(1);

    // Verify that the user's name exists in the response
    expect(user.name).toBeDefined();

    // Verify that the user's email exists in the response
    expect(user.email).toBeDefined();

});