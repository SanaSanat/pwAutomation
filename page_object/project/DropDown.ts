import { Page, expect } from "@playwright/test"
import { log } from "console";
export class DropDown{
    readonly page:Page
    constructor(page:Page) {
        this.page = page;
    }
    get dropDownInput(){
        return'.header-container .appearance-outline'
    }
    get dropDownList(){
        return '.option-list nb-option'
    }
    get header(){
        return 'nb-layout-header'
    }

    text = ['Light', 'Dark', 'Cosmic', 'Corporate']
    async interactWithDropDown(){
        await this.page.locator(this.dropDownInput).click()
        expect(this.page.locator(this.dropDownList)).toHaveText(this.text)
        console.log(this.page.locator(this.dropDownList).allTextContents())
        await this.page.locator(this.dropDownList).filter({hasText:'Dark'}).click()
        await expect(this.page.locator(this.header)).toHaveCSS('background-color', 'rgb(34, 43, 69)')
    }
}

//this.page.getByRole('list') ul tag
//this.page.getByRole('listithem') li tag