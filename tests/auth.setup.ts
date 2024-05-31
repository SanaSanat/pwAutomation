import { test as setup, expect } from '@playwright/test';

const authFile = './.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://demoqa.com/login');
  await page.getByPlaceholder('UserName').fill('Sana');
  await page.getByPlaceholder('Password').fill('$an@1915%9S');
  await page.getByRole('button', { name: 'Login' }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://demoqa.com/profile/');
  //await page.screenshot({path: 'screen/authentication.png'});
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator('#userName-value')).toHaveText('Sana');

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});