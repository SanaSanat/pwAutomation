import {expect, test} from '@playwright/test'
test.describe('HIDDEN ELEMENTS',() =>{
    test('hidden element test', async ({page}) =>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await expect(page.locator('#displayed-text')).toBeVisible()
        await page.locator('#hide-textbox').click()
        await expect(page.locator('#displayed-text')).toBeHidden()
    })
})