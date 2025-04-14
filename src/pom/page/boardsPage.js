import CreateBoardComponent from "../component/boards/createBoard.component";
import CreateListComponent from "../component/boards/createList.component";
import CreateCardComponent from "../component/boards/createCard.component";
import SortingComponent from "../component/boards/sorting.component";
class BoardsPage {
  constructor() {
    this.createBoard = new CreateBoardComponent();
    this.createList = new CreateListComponent();
    this.createCard = new CreateCardComponent();
    this.sortingCard = new SortingComponent();
  }

  // Create a Board
  get boardMenuButton() {
    return $(".board-tile.mod-add");
  }
  get boardNameDisplay() {
    return $(".HKTtBLwDyErB_o");
  }

  // Create a list
  get addListButton() {
    return $('//button[text()="Add a list"]');
  }
  get list() {
    return $('[data-testid="list"]');
  }

  async openPage() {
    const url = await browser.getUrl();
    await browser.url(url);
    await browser.pause(1000);
  }

  // Create a card

  get addCardButton() {
    return $('[data-testid="list-add-card-button"]');
  }

  get cardName() {
    return $('[data-testid="card-name"]');
  }
  get newCard() {
    return $(".amUfYqLTZOvGsn");
  }

  // Sorting cards
  get cardsList() {
    return $('[data-testid="list-cards"]');
  }
  get listName() {
    return $('[data-testid="list-name"]');
  }
  get listEditMenuButton() {
    return $('[data-testid="list-edit-menu-button"]');
  }
  get sortedMessage() {
    return $(".QMKgZFIlTLiEJN");
  }
}

export default BoardsPage;
