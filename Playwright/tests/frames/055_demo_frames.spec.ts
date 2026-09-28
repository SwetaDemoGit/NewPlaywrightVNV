/*
What is an iFrame?
------------------
An iframe (Inline Frame) is an HTML element that allows one web page 
to be embedded inside another web page.

tag:   frame,  iframe
  frameset  --> contains multiple frames

Examples:
- YouTube videos
- Payment gateways
- Advertisements
- External web pages

page.frame(locator)  ---> Not auto waited , not returns promise
page.frameLocator(locator)  --- auto waited , await is not need (special case)
page.frames()  -- retuns all the frames

*/

import { test, expect } from "@playwright/test";

test('handle frames', async ({page})=>{

    // Open the Frames demo application
    await page.goto("https://ui.vision/demo/webtest/frames/");

    //Get all frames available on the page

    const frames=page.frames()
    console.log("Number fo frames:", frames.length)

     // Verify total number of frames
    expect(frames.length).toBe(7)



    // Approach : Using frameLocator()
    // frameLocator() is the recommended approach because it directly
    // locates elements inside an iframe without creating a Frame object.
 
    const txtName=page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await txtName.fill("John")


})


test('inner frames', async ({page})=>{

    // Open the Frames demo application
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Parent frame
    const frame3=page.frameLocator("frame[src='frame_3.html']")
    await frame3.locator("input[name='mytext3']").fill("Welcome")

   //Child/inner frame
   const childFrame=frame3.frameLocator('iframe')

   await childFrame.getByRole('radio',{name:'I am a human'}).check()

   //await childFrame.getByRole('checkbox', { name: 'Form Autofilling' }).check();

})