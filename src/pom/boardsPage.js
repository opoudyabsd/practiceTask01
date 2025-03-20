import { faker } from "@faker-js/faker";

class Boards {
  get boardMenuButton() {
    return $(".board-tile.mod-add");
  }
  get boardMenu() {
    return $(".q2PzD_Dkq1FVX3.pt-0");
  }
  get boardsTitleForm() {
    return $(".nch-textfield__input.lsOhPsHuxEMYEb.lsOhPsHuxEMYEb");
  }
  get createButton() {
    return $('[data-testid="create-board-submit-button"]');
  }
  get boardNameDisplay() {
    return $(".HKTtBLwDyErB_o");
  }
  async createBoard(title) {
    await this.boardsTitleForm.setValue(title);
    await this.createButton.click();
    await browser.pause(2000);
  }
  async openPage() {
    const url = await browser.getUrl();
    await browser.url(url);
    await browser.pause(3000);
  }
  async getBoardTitle(title) {
    await browser.waitUntil(async () => {
      return (await browser.getTitle()) === `${title} | Trello`;
    });
    return await browser.getTitle();
  }
  /////////////////////////////////////////////////
  get addListButton() {
    return $('//button[text()="Add a list"]');
  }
  get addListForm() {
    return $(".oe8RymzptORQ7h");
  }
  get listNameForm() {
    return $(".oe8RymzptORQ7h");
  }
  get createListButton() {
    return $('[data-testid="list-composer-add-list-button"]');
  }
  get list() {
    return $('[data-testid="list"]');
  }

  async createList() {
    const newListName = faker.commerce.productName();
    const element = $(
      `//h2[@data-testid="list-name" and contains(text(), "${newListName}")]`
    );
    await this.listNameForm.setValue(newListName);
    await this.createListButton.click();
    await element.waitForDisplayed({ timeout: 2000 });
  }
  //////////////////////////////////////////////////

  get addCardButton() {
    return $('[data-testid="list-add-card-button"]');
  }
  get addCardForm() {
    return $('[data-testid="list-card-composer-textarea"]');
  }
  get createCardButton() {
    return $('[data-testid="list-card-composer-add-card-button"]');
  }
  get cardName() {
    return $('[data-testid="card-name"]');
  }
  get newCard() {
    return $(".amUfYqLTZOvGsn");
  }

  async createNewCard(value) {
    await this.addCardForm.setValue(value);
    await this.createCardButton.click();
  }
  /////////////////////////////////////////////////////

  get cardsList() {
    return $('[data-testid="list-cards"]');
  }
  get listName() {
    return $('[data-testid="list-name"]');
  }
  get listEditMenuButton() {
    return $('[data-testid="list-edit-menu-button"]');
  }
  get listActions() {
    return $('[title="List actions"]');
  }
  get sortByButton() {
    return $('//span[text()="Sort by…"]');
  }
  get sortListTitle() {
    return $('[title="Sort list"]');
  }
  get sortByCardNameButton() {
    return $(".js-sort-by-card-name");
  }
  get sortedMessage() {
    return $(".QMKgZFIlTLiEJN");
  }
  async listActionsIsDisplayed(){
    await browser.waitUntil(async()=>{
        return await this.listActions.isDisplayed()
    })
    return await this.listActions.isDisplayed()
  }
}

export default new Boards();
