import { test, expect } from '@playwright/test';

test.describe('XPath Demo for Freshers', () => {

  test.beforeEach(async ({ page }) => {

    await page.setContent(`
      <!DOCTYPE html>
      <html>
      <body>

        <div id="login-section" class="login-container">

          <h1>Login</h1>

          <label>Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter Email"
          >

          <label>Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter Password"
          >

          <button
            id="login-btn"
            class="btn primary"
            onclick="this.textContent='Login Clicked'"
          >Login</button>

        </div>


        <div id="products">

          <h2>Products</h2>

          <div class="product">
            <h3>iPhone 15</h3>
            <p>Price: ₹70,000</p>
            <button class="add-cart">Add to Cart</button>
          </div>

          <div class="product">
            <h3>Samsung Galaxy</h3>
            <p>Price: ₹60,000</p>
            <button class="add-cart">Add to Cart</button>
          </div>

          <div class="product">
            <h3>Google Pixel</h3>
            <p>Price: ₹55,000</p>
            <button class="add-cart">Add to Cart</button>
          </div>

        </div>


        <div class="buttons">

          <button class="action-btn">Save</button>
          <button class="action-btn">Save</button>
          <button class="action-btn">Save</button>

        </div>

      </body>
      </html>
    `);

  });


  // 1. XPath using attribute
  test('1 - XPath using attribute', async ({ page }) => {

    const email = page.locator("//input[@id='email']");

    await email.fill('swetatest@gmail.com');

    await expect(email).toHaveValue('swetatest@gmail.com');

  });


  // 2. XPath using text()
// 2. XPath using text()
test('2 - XPath using text()', async ({ page }) => {

  const loginButton = page.locator("//button[text()='Login']");

  await expect(loginButton).toBeVisible();

  await loginButton.click();

});


  // 3. XPath using contains() with text
  test('3 - XPath using contains() with text', async ({ page }) => {

    const loginButton = page.locator(
      "//button[contains(text(),'Login')]"
    );

    await expect(loginButton).toBeVisible();

    await loginButton.click();

  });


  // 4. XPath using multiple attributes
  test('4 - XPath using multiple attributes', async ({ page }) => {

    const email = page.locator(
      "//input[@placeholder='Enter Email' and @name='email']"
    );

    await email.fill('sweta@gmail.com');

    await expect(email).toHaveValue('sweta@gmail.com');

  });


  // 5. XPath using contains() with attribute
  test('5 - XPath using contains() with attribute', async ({ page }) => {

    const loginButton = page.locator(
      "//button[contains(@class,'primary')]"
    );

    await expect(loginButton).toBeVisible();

    await loginButton.click();

  });


  // 6. XPath Parent → Child relationship
  test('6 - XPath parent child relationship', async ({ page }) => {

    const email = page.locator(
      "//div[@id='login-section']//input[@name='email']"
    );

    await email.fill('parentchild@gmail.com');

    await expect(email).toHaveValue('parentchild@gmail.com');

  });


  // 7. XPath using position
  test('7 - XPath using position', async ({ page }) => {

    const secondSaveButton = page.locator(
      "(//button[text()='Save'])[2]"
    );

    await expect(secondSaveButton).toBeVisible();

    await secondSaveButton.click();

  });


  // 8. XPath using following-sibling
  test('8 - XPath using following-sibling', async ({ page }) => {

    const password = page.locator(
      "//label[text()='Password']/following-sibling::input[@type='password']"
    );

    await password.fill('Password123');

    await expect(password).toHaveValue('Password123');

  });

});