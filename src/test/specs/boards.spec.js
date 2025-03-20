import boardsPage from "../../pom/boardsPage";
import { loginToTrello } from "../../utils/authHelper";
import chai from "chai";
const { expect, assert } = chai;
chai.should();

describe("Create a bord", () => {
  before(async () => {
    await loginToTrello();
  });
  it("Open 'Create board' menu", async () => {
    await boardsPage.boardMenuButton.click();
    assert.isTrue(await boardsPage.boardMenu.isDisplayed());
  });
  it("Create a bord", async () => {
    const titleBoard = process.env.TITLENAME;
    await boardsPage.createBoard(titleBoard);
    expect(await boardsPage.getBoardTitle(titleBoard)).to.equal(
      `${titleBoard} | Trello`
    );
    expect(await boardsPage.boardNameDisplay.getText()).to.equal(titleBoard);
  });
});

describe("Create a list", () => {
  before(async () => {
    await boardsPage.openPage();
  });
  it("Opening 'Create a list' form", async () => {
    await boardsPage.addListButton.click();
    expect(await boardsPage.addListForm.isDisplayed()).to.be.true;
  });
  it("Create a new list", async () => {
    await boardsPage.createList();
    assert.isTrue(await boardsPage.list.isDisplayed());
  });
});

describe("Create a card", () => {
  before(async () => {
    await boardsPage.openPage();
  });
  it("Expect a card field to be displayed", async () => {
    await boardsPage.addCardButton.click();
    (await boardsPage.addCardForm.isDisplayed()).should.be.true;
    // await expect(boardsPage.addCardForm).toBeDisplayed();
  });
  it("Create a new card", async () => {
    await boardsPage.createNewCard("newCart");
    expect(await boardsPage.newCard.isDisplayed()).to.be.true;
    expect(await boardsPage.cardName.getText()).to.equal("newCart");
  });
});

describe.only("Implement sorting for unsorting cards", () => {
  before(async () => {
    await loginToTrello();

    await browser.url(process.env.BOARDURL);
    await browser.pause(2000);
  });
  it("Expect a list with few card is created", async () => {
    await boardsPage.list.waitForDisplayed({ timeout: 5000 });
    expect(await boardsPage.list.isDisplayed()).to.be.true;
    expect(await boardsPage.cardsList.$$("li")).to.have.lengthOf(7);
  });
  it("Open edit menu section", async () => {
    await boardsPage.listEditMenuButton.click();
    await boardsPage.listActionsIsDisplayed()
    expect(await boardsPage.listActions.isDisplayed()).to.be.true
    await boardsPage.sortByButton.click();
    await boardsPage.sortListTitle.waitForDisplayed({ timeout: 5000 });
    assert.isTrue(await boardsPage.sortListTitle.isDisplayed());
  });
  it("Implement sorting", async () => {
    await boardsPage.sortByCardNameButton.click();
    await boardsPage.sortedMessage.waitForDisplayed({ timeout: 5000 });
    await browser.pause(1500)
    expect(await boardsPage.sortedMessage.getText()).to.equal(
      "Successfully sorted list"
    );

  });
});
