import { test, expect } from '@playwright/test';

test('Tooltip Demo', async ({ page }) => {

  // Open the practice website
  await page.goto('https://www.playwrightautomation.com/practice.html');

  // Locate the button that displays the tooltip
  const deliveryButton = page.getByRole('button', {
    name: 'Delivery estimate'
  });

  // Hover over the button
  await deliveryButton.hover();

  // Verify that the tooltip is displayed
  await expect(
    page.getByText('Standard delivery takes 3–5 working days.')
  ).toBeVisible();

});