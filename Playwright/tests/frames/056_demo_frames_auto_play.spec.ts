import { test, expect } from "@playwright/test";

test("Nested frames", async({page})=>{

await page.goto('https://sdetqa.vercel.app/autoplay');

// page.frameLocator('iframe').nth(0) - deprecated
//page.frameLocator('iframe').first() - deprecated
const outerFrame= page.locator('iframe').first().contentFrame()
//Find the first iframe on the main page and get access to the content inside it.

//outerfrmae-->innerframe-->input element
const inputBox=outerFrame.frameLocator('iframe').locator("#innerInput")
await inputBox.fill("Welcome")
await expect(inputBox).toHaveValue("Welcome")

});