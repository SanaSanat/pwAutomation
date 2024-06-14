import { expect, test } from "@playwright/test";

test.describe("ASSERTION", () => {
    test.use({viewport: {width:500, height:500}})
  test("assertions", async ({ page }) => {
   await page.goto("https://www.lambdatest.com/");
    const title = await page.title();
    console.log(title);
    expect(title).toContain("LambdaTest");
    const header = page.locator('h1')
    expect(await header.textContent()).toBe('Next-Generation Mobile Apps and Cross Browser Testing Cloud')
    await expect(page.locator('img[src$="Vimeo.svg"]')).toHaveAttribute('alt', 'vimeo',{timeout:1000})

  });
});
