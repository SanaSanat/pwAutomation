import { test as it } from "@playwright/test";
import { DragAndDrop } from "../../page_object/DragAndDrop";

it.describe('DRAG AND DROP',()=> {
    it('drag and drop',async ({page})=>{
      let dragAndDrop = new DragAndDrop(page)
      //await page.goto(`${process.env.LAMBDA}/selenium-playground/drag-and-drop-demo`)
      await page.goto(`https://www.lambdatest.com/selenium-playground/drag-and-drop-demo`)
      await dragAndDrop.dragAndDropElement('Draggable 1')
      await dragAndDrop.dragAndDropElement('Draggable 2')
      await page.reload()
      await dragAndDrop.dragAndDropElementOption2('Draggable 1')
      await dragAndDrop.dragAndDropElementOption2('Draggable 2')
    })
})