import { Page, expect } from "@playwright/test";
export class DragAndDrop {
  readonly page:Page
  constructor(page: Page) {
    this.page = page;
  }
  get dragEl(){
    return '[draggable="true"]'
  }
  get drophereEl(){
    return '#mydropzone'
  }
  get dropList(){
    return'#droppedlist'
  }
  public async dragAndDropElement(text:string){
    const dragTo = this.page.locator(this.drophereEl)
    await this.page.locator(this.dragEl, {hasText: text}).dragTo(dragTo)  
    expect(await this.page.locator(this.dropList).textContent()).toContain(text)
    await this.page.pause()
  }
  public async dragAndDropElementOption2(text:string){
    await this.page.locator(this.dragEl, {hasText: text}).hover()
    await this.page.mouse.down()
    await this.page.locator(this.drophereEl).hover()
    await this.page.mouse.up()
    expect(await this.page.locator(this.dropList).textContent()).toContain(text)

  }

}
