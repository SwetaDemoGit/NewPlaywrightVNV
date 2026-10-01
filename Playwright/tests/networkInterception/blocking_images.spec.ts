import { test, expect } from '@playwright/test';

test('Block Images', async ({ page }) => {

    // Intercept image requests
    await page.route('**/*.{png,jpg,jpeg,webp,gif}', async route => {
        await route.abort();
    });

    // Open a website
    await page.goto('https://www.wikipedia.org/');

    console.log('Images are blocked');

    await expect(page).toHaveTitle(/Wikipedia/);
});