import { test, expect } from '@playwright/test';

test.describe('CSS Selectors Demo', () => { 
  //test.describe() is used to group related Playwright tests together.

  test.beforeEach(async ({ page }) => {

    await page.setContent(` 
      <!-- Create/load a custom HTML page directly inside the Playwright browser page -->
      <!DOCTYPE html>
      <html>
      <body>

        <h1 id="page-title">Login Page</h1>

        <div class="login-form">

          <label for="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
          >

          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
          >

          <button id="login-button" class="login-btn">
            Login
          </button>

        </div>


        <div class="products">

          <h2>Products</h2>

          <div class="product">
            <h3>iPhone 15</h3>
            <button class="add-cart">Add to Cart</button>
          </div>

          <div class="product">
            <h3>Samsung Galaxy</h3>
            <button class="add-cart">Add to Cart</button>
          </div>

        </div>


        <div class="actions">

          <button class="action-button">Save</button>
          <button class="action-button">Cancel</button>

        </div>

      </body>
      </html>
    `);

  });


  // --------------------------------------------------
  // 1. CSS using ID
  // --------------------------------------------------

  test('1 - CSS ID selector', async ({ page }) => {

    const username = page.locator('#username');

    await username.fill('sweta');

    await expect(username).toHaveValue('sweta');

  });


  // --------------------------------------------------
  // 2. CSS using class
  // --------------------------------------------------

  test('2 - CSS class selector', async ({ page }) => {

    const loginButton = page.locator('.login-btn');

    await expect(loginButton).toBeVisible();

    await loginButton.click();

  });


  // --------------------------------------------------
  // 3. CSS using tag
  // --------------------------------------------------

  test('3 - CSS tag selector', async ({ page }) => {

    const heading = page.locator('h1');

    await expect(heading).toHaveText('Login Page');

  });


  // --------------------------------------------------
  // 4. CSS using attribute
  // --------------------------------------------------

  test('4 - CSS attribute selector', async ({ page }) => {

    const password = page.locator(
      'input[type="password"]'
    );

    await password.fill('Password123');

    await expect(password).toHaveValue('Password123');

  });


  // --------------------------------------------------
  // 5. CSS using multiple attributes
  // --------------------------------------------------

  test('5 - CSS multiple attributes', async ({ page }) => {

    const username = page.locator(
      'input[type="text"][placeholder="Enter Username"]'
    );

    await username.fill('sweta');

    await expect(username).toHaveValue('sweta');

  });


  // --------------------------------------------------
  // 6. CSS parent > child
  // --------------------------------------------------

  test('6 - CSS parent child selector', async ({ page }) => {

    const username = page.locator(
      '.login-form > input'
    ).first();

    await username.fill('parent-child');

    await expect(username).toHaveValue('parent-child');

  });


  // --------------------------------------------------
  // 7. CSS descendant selector
  // --------------------------------------------------

  test('7 - CSS descendant selector', async ({ page }) => {

    const loginButton = page.locator(
      '.login-form .login-btn'
    );

    await expect(loginButton).toBeVisible();

  });


  // --------------------------------------------------
  // 8. CSS using class + tag
  // --------------------------------------------------

  test('8 - CSS tag and class', async ({ page }) => {

    const cartButtons = page.locator(
      'button.add-cart'
    );

    await expect(cartButtons).toHaveCount(2);

  });


  // --------------------------------------------------
  // 9. CSS using nth()
  // --------------------------------------------------

  test('9 - CSS selecting second element', async ({ page }) => {

    const cartButtons = page.locator(
      '.add-cart'
    );

    await cartButtons.nth(1).click();

  });


  // --------------------------------------------------
  // 10. CSS using attribute contains
  // --------------------------------------------------

  test('10 - CSS attribute contains', async ({ page }) => {

    const button = page.locator(
      'button[class*="login"]'
    );

    //ind a <button> whose class attribute contains the text login
//     <button class="login-btn">Login</button>
// <button class="primary-login">Login</button>
// <button class="user-login-button">Login</button>

    await expect(button).toBeVisible();

  });

});