class SearchComponent{

    get advanceSeachField() {
        return $('[data-testid="advanced-search-input"]')
    }
    get seachTitleName() {
        return process.env.TITLENAME
    }

  
    async setValueSearchBoard() {
        await this.advanceSeachField.setValue(this.seachTitleName)
    }
}
export default SearchComponent