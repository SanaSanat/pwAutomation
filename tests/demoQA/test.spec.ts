import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('https://demoqa.com/login')
})

test('authentication through UI',async({page, browserName})=>{
    const name = page.locator('#submit')
    await expect(name).toHaveText('Log out')
    await page.screenshot({path: `screenShot/${browserName}.png`})
})