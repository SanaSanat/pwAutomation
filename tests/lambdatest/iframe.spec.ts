import { expect, test } from "@playwright/test";

test.describe("IFRAME", () => {
  test("iframe test", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/nested-frames"
    );
    const frameBottom = page.frameLocator('[name="frame-bottom"]');
    const leftFrame = await frameBottom
      .frameLocator('[name="frame-left"]')
      .locator("body")
      .textContent();
      const middleFrame = await frameBottom
      .frameLocator('[name="frame-middle"]')
      .locator("body")
      .textContent();
      const rightFrame = await frameBottom
      .frameLocator('[name="frame-right"]')
      .locator("body")
      .textContent();
      expect(leftFrame).toContain("Left")
      expect(middleFrame).toContain("Middle")
      expect(rightFrame).toContain("Right")
    console.log(leftFrame, 'leftFrame');
    console.log(middleFrame, 'middleFrame');
    console.log(rightFrame, 'rightFrame');
  });
});
