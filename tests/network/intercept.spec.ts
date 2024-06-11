import {test} from '@playwright/test'

test('intercept', async({page}) =>{
    await page.route('**\/8.{png,jpg,jpeg,svg}',(body) =>{
        if(body.request().resourceType() === 'image'){
            body.abort()
        }else{
            body.continue()
        }
      console.log(body, 'body');
    })
    //await page.pause()
    await page.goto('http://coding.pasv.us/')
    //await page.pause()
})