import boardsPage from "../../pom/boardsPage";
import { loginToTrello } from "../../utils/authHelper";
describe("Create a bord", () => {
  before(async () => {
    await loginToTrello();
  });
  it("Open 'Create board' menu", async () => {
    await boardsPage.boardMenuButton.click();
    await expect(boardsPage.boardMenu).toBeDisplayed();
  });
  it("Create a bord", async () => {
    const titleBoard = process.env.TITLENAME;
    await boardsPage.createBoard(titleBoard);
    await expect(browser).toHaveTitle(`${titleBoard} | Trello`);
    await expect(boardsPage.boardNameDisplay).toHaveText(titleBoard);
  });
});

describe("Create a list", () => {
  before(async () => {
    await boardsPage.openPage();
  });
  it("Opening 'Create a list' form", async () => {
    await boardsPage.addListButton.click();
    await expect(boardsPage.addListForm).toBeDisplayed();
  });
  it("Create a new list", async () => {
    await boardsPage.createList();
    await expect(boardsPage.list).toBeDisplayed();
  });
});

describe("Create a card", () => {
  before(async () => {
    await boardsPage.openPage();
  });
  it("Expect a card field to be displayed", async () => {
    await boardsPage.addCardButton.click();
    await expect(boardsPage.addCardForm).toBeDisplayed();
  });
  it("Create a new card", async () => {
    await boardsPage.createNewCard("newCart");
    await expect(boardsPage.newCard).toBeDisplayed();
    await expect(boardsPage.cardName).toHaveText("newCart");
  });
});

describe("Implement sorting for unsorting cards", () => {
  before(async () => {
    await browser.url(process.env.BOARDURL);
  });
  it("Expect a list with few card is created", async () => {
    await boardsPage.list.waitForDisplayed();
    await expect(boardsPage.list).toBeDisplayed();
    await expect(boardsPage.cardsList.$$("li")).toBeElementsArrayOfSize(7);
  });
  it("Open edit menu section", async () => {
    await boardsPage.listEditMenuButton.click();
    await expect(boardsPage.listActions).toBeDisplayed();
    await boardsPage.sortByButton.click();
    await boardsPage.sortListTitle.waitForDisplayed();
    await expect(boardsPage.sortListTitle).toBeDisplayed();
  });
  it("Implement sorting", async () => {
    await boardsPage.sortByCardNameButton.click();
    await boardsPage.sortedMessage.waitForDisplayed();
    await browser.pause(1500); // Because message appear after 1 second
    await expect(boardsPage.sortedMessage).toHaveText(
      "Successfully sorted list"
    );

  });
});
