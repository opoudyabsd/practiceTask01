
import chai from "chai";
const { expect, assert } = chai;
chai.should();

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
        await browser.waitUntil(async () => {
            return await this.getBoardTitleSelector(this.seachTitleName).isDisplayed();
        }, { timeout: 10000 })
        return await this.getBoardTitleSelector(this.seachTitleName).isDisplayed()
    }

}

export default new SearchPage