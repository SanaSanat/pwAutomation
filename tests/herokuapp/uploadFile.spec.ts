import {expect, test as it} from '@playwright/test'

it('upload single file', async ({page}) =>{
   await page.goto('https://the-internet.herokuapp.com/upload')
   await page.setInputFiles('input[type="file"]','upload/1.png')
   await page.click('#file-submit')
   await expect(page.locator('#uploaded-files')).toContainText('1.png')
})

it.only('upload multiple file', async ({page}) =>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')
    await page.setInputFiles('input[type="file"]',['upload/1.png','upload/2.PNG','upload/3.png'])
    const name = await page.locator('p.name').allTextContents()
    console.log(name)
    expect(name).toEqual(['1.png', '2.PNG', '3.png'])
    // await expect(page.locator('p.name')).toContainText('1.png')
    // await expect(page.locator('p.name')).toContainText('2.PNG')
    // await expect(page.locator('p.name')).toContainText('3.png')
 })