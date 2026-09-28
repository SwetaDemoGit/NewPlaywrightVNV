import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test.describe('Multi-Browser Testing', () => {

    test('Chromium Test', async () => {

        const browser = await chromium.launch();
        const page = await browser.newPage();

        await page.goto(
            'https://www.playwrightautomation.com/practice.html'
        );

        await expect(page).toHaveTitle(/Playwright/);

        await browser.close();
    });


    test('Firefox Test', async () => {

        const browser = await firefox.launch();
        const page = await browser.newPage();

        await page.goto(
            'https://www.playwrightautomation.com/practice.html'
        );

        await expect(page).toHaveTitle(/Playwright/);

        await browser.close();
    });


    test('WebKit Test', async () => {

        const browser = await webkit.launch();
        const page = await browser.newPage();

        await page.goto(
            'https://www.playwrightautomation.com/practice.html'
        );

        await expect(page).toHaveTitle(/Playwright/);

        await browser.close();
    });


test("Playwright locators",async ({page})=>{

   await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app.html")
   //await page.goto("http://127.0.0.1:5500/apps/pw-locators-demo-app.html")
   
  
  // 1) getByRole() - Find by semantic role and accessible name
    /* Role locators include buttons, checkboxes, headings, links, lists, tables, 
     and many more and follow W3C specifications for ARIA role.
     Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.
    */

    const projectsLink=page.getByRole('link',{name:'Projects'})
    await expect(projectsLink).toBeVisible()

    const signInButton=page.getByRole('button',{name:'Sign In'})
    await expect(signInButton).toBeVisible()
    await signInButton.click()

  // 2) getByText() - Match visible text content on the page
  // Use this locator to find non-interactive elements like div, span, p, etc. 
  // For interactive elements like button, a, input, etc. use role locators.

   const welcomeText=page.getByText('Welcome, John! 👋')   // Exact mathch / exact string
   //const welcomeText=page.getByText('Welcome, John! 👋',{exact:true})  // Exact math/ default
   //const welcomeText=page.getByText('Welcome, John',{exact:false})  // Exact math/ default

    await expect(welcomeText).toBeVisible()


  // 3) getByLabel() - Locate a form field using its label text
  // When to use: Ideal for form fields with visible labels.

    const emailField=page.getByLabel('Email Address')
    await expect(emailField).toBeVisible()

    await emailField.fill("swrawat111@gmail.com")


    
  // 4) getByPlaceholder() - Locate an input by placeholder text
  // Best for inputs without a label but having a placeholder

    const searchInput=page.getByPlaceholder('Search tests...')
    await expect(searchInput).toBeVisible()

    await searchInput.fill("Locators practice.")


      // 5) getByAltText() - Locate an image by its alt attribute text
  //identifies images (and similar elements) based on the alt attribute.
  // Use this locator when your element supports alt text such as img and area elements.
    await expect(page.getByAltText('Playwright logo')).toBeVisible()

  // 6) getByTitle() - Locate an element using its title attribute
  // When to use: When your element has a meaningful title attribute.


  const totalRunsBox=page.getByTitle('Total test runs')
  await expect(totalRunsBox).toBeVisible()
  await expect(totalRunsBox).toHaveText('4,821Total Runs')
  await expect(totalRunsBox).toContainText('4,821')

    // 7) getByTestId() - Locate elements using the data-testid attribute
  //Locate an element based on its data-testid attribute (other attributes can be configured)
  // When to use: When text or role-based locators are unstable or not suitable.

  const proPlanButton= page.getByTestId('add-to-cart-pro')
  await expect(proPlanButton).toBeVisible()
  await proPlanButton.click()


 const searchButton=page.getByTestId('search-button')
 await expect(searchButton).toBeVisible()
 await searchButton.click()

})

});