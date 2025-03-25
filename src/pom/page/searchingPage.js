import SearchComponent from "../component/search/search.component";
class SearchPage {
  constructor() {
    this.search = new SearchComponent();
  }

  get searchForm() {
    return $('[placeholder="Search"]');
  }
  get advanceSeachButton() {
    return $("[data-test-id='search-dialog-advanced-search-link']");
  }
  get titleBoardSelector() {
    return $(
      `//div[@role="presentation"]//*[text()="${this.search.seachTitleName}"]`
    );
  }
  get advanceSeachHeader() {
    return $(".cQqOsGGJ_UfxYQ");
  }

  async openAdvanceSeach() {
    await this.searchForm.click();
    await this.advanceSeachButton.click();
  }
}

export default SearchPage;
