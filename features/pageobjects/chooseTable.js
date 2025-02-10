class ChooseTable {
    get pageHeading() {
        return $('.ion-text-wrap.md')
    }

    get browseMenuButton() {
        return $('.mt-0')
    }

    get tableNumberField() {
        return $('#ion-input-0')
    }
    get errorText() {
        return $(".error-text")
    }
    get continueButton() {
        return $("ion-button[type='submit']")
    }



    async AssertPage(heading) {

        const pageHead = await this.pageHeading.getText()
        await expect(pageHead).toEqual(heading)

    }

    async ValidateBrowseMenu(string) {
        await expect(this.browseMenuButton).toBeClickable()
        await this.browseMenuButton.click()
        await expect(browser).toHaveUrl(expect.stringContaining(string))
        await browser.back()
        await expect(this.browseMenuButton).toExist()

    }

    async ValidateTableField(value, msg) {
        await browser.refresh()
        await this.tableNumberField.setValue(value)
        await expect(this.errorText).toHaveText(expect.stringContaining(msg))

    }

    async SuccessfulTableNumberEntry(tablenumber, string) {
        await this.tableNumberField.setValue(tablenumber)
        await this.continueButton.click()
        await expect(browser).toHaveUrl(expect.stringContaining(string))

    }

}
export default new ChooseTable();