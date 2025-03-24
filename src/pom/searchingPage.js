
class SearchPage{
    
    get searchForm() {
        return $('[placeholder="Search"]')
    }
    get advanceSeachButton() {
        return $("[data-test-id='search-dialog-advanced-search-link']")
    }
    get advanceSeachHeader() {
        return $(".cQqOsGGJ_UfxYQ")
    }
    get advanceSeachField() {
        return $('[data-testid="advanced-search-input"]')
    }
    get seachTitleName() {
        return process.env.TITLENAME
    }

    getBoardTitleSelector() {
        return $(`//div[@role="presentation"]//*[text()="${this.seachTitleName}"]`);
    }
    async openAdvanceSeach() {
        await this.searchForm.click()
        await this.advanceSeachButton.click()
    }
    async setValueSearchBoard() {
        await this.advanceSeachField.setValue(this.seachTitleName)
    }

}

export default new SearchPage