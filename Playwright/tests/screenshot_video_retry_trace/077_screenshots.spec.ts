/*

2 Approaches to capture screenshots in Playwright:

  1. Programmatically 
  2. Globally via Playwright Config File  

*/

import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

//1. Screenshot of only the visible viewport (Default)

test('Viewport Screenshot', async ({ page }) => {
  await page.screenshot({path: 'screenshots/01-viewport.png'});
});


//2. Full Page Screenshot
test('Full Page Screenshot', async ({ page }) => {

  await page.screenshot({ path: 'screenshots/02-fullpage.png',fullPage: true});

});


//3. JPEG Screenshot with Quality
//Quality works only with JPEG.

test('JPEG Screenshot', async ({ page }) => {

  await page.screenshot({
    path: 'screenshots/03-quality.jpg',
    type: 'jpeg',
    quality: 70
  });

});


//4. Capture Specific Area (Clip)
// x,y,width,height
test('Clip Screenshot', async ({ page }) => {

  await page.screenshot({
    path: 'screenshots/04-clip.png',
    clip: {
      x: 100,
      y: 100,
      width: 700,
      height: 400
    }
  });

});

//5. Screenshot of Specific Element

test('Element Screenshot', async ({ page }) => {

  const logo = page.locator('.navbar__brand');  //logo

  await logo.screenshot({
    path: 'screenshots/05-logo.png'
  });

});

//6. Screenshot after Scrolling

test('Screenshot after Scroll', async ({ page }) => {

  await page.evaluate(() => window.scrollBy(0, 600));

  await page.screenshot({
    path: 'screenshots/06-scroll.png'
  });

});

//7. Mask Sensitive Elements

test('Screenshot with Mask', async ({ page }) => {

  const searchBox = page.locator('.DocSearch-Button');

  await page.screenshot({
    path: 'screenshots/07-mask.png',
    mask: [searchBox]
  });

});

