import{expect, test} from '@playwright/test'

test.describe('POP UP WINDOW',() =>{
    test('popUp window accept', async({page}) =>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog', el => el.accept())
        await page.locator('#confirmbtn').click()
    })
    test('popUp window dismiss', async({page}) =>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog', el => el.dismiss())
        await page.locator('#confirmbtn').click()
    })
})