import BoardsPage from "../../pom/page/boardsPage";
import { loginToTrello } from "../../utils/authHelper";
import { faker } from "@faker-js/faker";
const boardsPage = new BoardsPage();
describe("Create a bord", () => {
  before(async () => {
    await loginToTrello();
  });
  it("Open 'Create board' menu", async () => {
    await boardsPage.boardMenuButton.click();
    await expect(boardsPage.createBoard.menu).toBeDisplayed();
  });
  it("Create a bord", async () => {
    await boardsPage.createBoard.newBoard(boardsPage.createBoard.titleBoardName);
    await expect(browser).toHaveTitle(`${boardsPage.createBoard.titleBoardName} | Trello`);
    await expect(boardsPage.boardNameDisplay).toHaveText(boardsPage.createBoard.titleBoardName);
  });
});

describe("Create a list", () => {
  before(async () => {
    await boardsPage.openPage();
  });
  it("Opening 'Create a list' form", async () => {
    await boardsPage.addListButton.click();
    await expect(boardsPage.createList.addListForm).toBeDisplayed();
  });
  it("Create a new list", async () => {
    await boardsPage.createList.newList();
    await expect(boardsPage.list).toBeDisplayed();
  });
});

describe("Create a card", () => {
  before(async () => {
    await boardsPage.openPage();
  });
  it("Expect a card field to be displayed", async () => {
    await boardsPage.addCardButton.click();
    await expect(boardsPage.createCard.addCardForm).toBeDisplayed();
  });
  it("Create a new card", async () => {
    const randomCardName = faker.internet.username();
    await boardsPage.createCard.newCard(randomCardName);
    await expect(boardsPage.newCard).toBeDisplayed();
    await expect(boardsPage.cardName).toHaveText(randomCardName);
  });
});

describe("Implement sorting for unsorting cards", () => {
  before(async () => {
    await browser.url(process.env.BOARDURL);
  });
  it("Expect a list with few card is created", async () => {
    await boardsPage.list.waitForDisplayed();
    await expect(boardsPage.list).toBeDisplayed();
    await expect(boardsPage.cardsList.$$("li")).toBeElementsArrayOfSize(7); // Question, how to handle dynamic values of array element automatically?
  });
  it("Open edit menu section", async () => {
    await boardsPage.listEditMenuButton.click();
    await expect(boardsPage.sortingCard.listActions).toBeDisplayed();
    await boardsPage.sortingCard.byButton.click();
    await expect(boardsPage.sortingCard.listTitle).toBeDisplayed();
  });
  it("Implement sorting", async () => {
    await boardsPage.sortingCard.byCardNameButton.click();
    await browser.pause(1500); // Because message appear after 1 second
    await expect(boardsPage.sortedMessage).toBeDisplayed()
    await expect(boardsPage.sortedMessage).toHaveText(
      "Successfully sorted list"
    );
  });
});
