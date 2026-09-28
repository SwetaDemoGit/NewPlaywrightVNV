import { test, expect } from '@playwright/test';

test('Slider Demo', async ({ page }) => {

    // Open the practice website
    await page.goto(
        'https://www.playwrightautomation.com/practice.html'
    );

    // Locate the single-value slider using its ID
    const slider = page.locator('#price-slider');

    // Verify that the slider initially has a value of 500
    await expect(slider).toHaveValue('500');

    // Give keyboard focus to the slider
    await slider.focus();

    // Move the slider to its minimum value (0)
    await page.keyboard.press('Home');

    // Verify that the slider value is now 0
    await expect(slider).toHaveValue('0');

    // Press ArrowRight 5 times to increase the slider
    for (let i = 0; i < 5; i++) {
        await page.keyboard.press('ArrowRight');
    }

    // The slider step is 10, so 5 presses move it from 0 to 50
    await expect(slider).toHaveValue('50');

});