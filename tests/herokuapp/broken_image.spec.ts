import{test as it} from '@playwright/test'

it('Testing Broken images', async({page}) =>{
   await page.goto('https://the-internet.herokuapp.com/broken_images') 

   await page.route('**/*', route =>{
    route.continue().catch(() =>{})
   })
   const image = await page.evaluate(async() =>{
    const brokenImages = Array.from(document.querySelectorAll('img'))
    const arrayOfImages = []

    for(const img of brokenImages){
      const response = await fetch(img.src).catch(()=>null)

       if(img.naturalHeight === 0 || img.naturalWidth === 0){
        arrayOfImages.push(img.src)
       }
    }
    return arrayOfImages
})
   console.log(image.length, 'length')
   for(const src of image){
    console.log(src, 'src')
   }
})