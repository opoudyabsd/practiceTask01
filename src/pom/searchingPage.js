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
    getBoardTitleSelector(titleBoard) {
        return $(`//div[@role="presentation"]//*[text()="${titleBoard}"]`);
    }
    async openAdvanceSeach() {
        await this.searchForm.click()
        await this.advanceSeachButton.click()
    }
    async searchBoard() {
        await this.advanceSeachField.setValue(this.seachTitleName)
    }
    async isBoardDisplayed() {
        await expect(this.getBoardTitleSelector(this.seachTitleName)).toBeDisplayed();
    }
}

export default new SearchPage