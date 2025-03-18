import { faker } from '@faker-js/faker';
import BasePage from '../../pom/basePage';
import SignIn from '../../pom/signInPage';
import boardsPage from '../../pom/boardsPage';
const basePage = new BasePage()
const signInPage = new SignIn()
describe("Create a bord", () => {
    before(async () => {
        await basePage.open("/")
        await expect(browser).toHaveTitle("Capture, organize, and tackle your to-dos from anywhere | Trello")
        await basePage.openSignIn()
        await expect(browser).toHaveTitle("Log in to continue - Log in with Atlassian account")
        await signInPage.setEmail()
        await signInPage.loginSumbitButtonClick()
        await browser.pause(2000)
        await expect(signInPage.password).toBeDisplayed()
        await signInPage.setPassword()
        await signInPage.loginSumbitButtonClick()
        await browser.pause(5000) // Make sure if Code Verification is displayed
        await signInPage.checkForCodeVerification()
        await browser.pause(5000) // Because of timeout delay 
        await expect(browser).toHaveTitle("Boards | Trello")
        await expect(signInPage.homeContainer).toBeDisplayed()
    })
    it("Open 'Create board' menu", async () => {
        await boardsPage.boardMenuButton.click()
        await expect(boardsPage.boardMenu).toBeDisplayed()
    })
    it("Create a bord", async () => {
        const titleBoard = process.env.TITLENAME
        await boardsPage.createBoard(titleBoard)
        await expect(browser).toHaveTitle(`${titleBoard} | Trello`)
        await expect(boardsPage.boardNameDisplay).toHaveText(titleBoard)
    })
})

describe("Create a list", () => {
    before(async () => {
        await boardsPage.openPage()
    })
    it("Opening 'Create a list' form", async () => {
        await boardsPage.addListButton.click()
        await expect(boardsPage.addListForm).toBeDisplayed()
    })
    it("Create a new list", async () => {
        await boardsPage.createList()
        await expect(boardsPage.list).toBeDisplayed()

    })
})

describe("Create a card", () => {
    before(async () => {
        await boardsPage.openPage() 
    })
    it("Expect a card field to be displayed", async () => {
        await boardsPage.addCardButton.click()
        await expect(boardsPage.addCardForm).toBeDisplayed()
    })
    it("Create a new card", async () => {
        await boardsPage.createNewCard("newCart")
        await expect(boardsPage.cardName).toHaveText("newCart")
        await expect(boardsPage.newCard).toBeDisplayed()
    })
    
})

describe("Implement sorting for unsorting cards", () => {
    before(async () => {
        await browser.url(process.env.BOARDURL)
        await browser.pause(2000)
    })
    it("Expect a list with few card is created", async () => {
        await expect(boardsPage.listName).toHaveText("Already created list")
        await expect(boardsPage.cardsList.$$("li")).toBeElementsArrayOfSize(7)
    })
    it("Open edit menu section", async () => {
        await boardsPage.listEditMenuButton.click()
        await expect(boardsPage.listActions).toBeDisplayed()
        await boardsPage.sortByButton.click()
        await expect(boardsPage.sortListTitle).toBeDisplayed()
    })
    it("Implement sorting", async () => {
        await boardsPage.sortByCardNameButton.click()
        await boardsPage.sortedMessage.waitForDisplayed(1000)
        await expect(boardsPage.sortedMessage).toHaveText('Successfully sorted list')
    })
})
