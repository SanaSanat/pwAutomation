import { test } from "@playwright/test";

test("request failed", async ({ page }) => {
  await page.route("**\/*.{png,jpg,jpeg,svg}", (body) => {
    if (body.request().resourceType() === "image") {
      body.abort();
    } else {
      body.continue();
    }
    // console.log(body, 'body');
  });
  page.on("requestfailed", (req) => {
    console.log(`error: ${req.url()}`);
  });
  await page.goto('https://demoqa.com')
  });
