import BasePage from '../../pom/basePage';
import searchingPage from '../../pom/searchingPage';
import SignIn from '../../pom/signInPage';
const basePage = new BasePage()
const signInPage = new SignIn()
describe("Search for existing board", () => {
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
    it("Open advanced-search", async () => {
        await searchingPage.openAdvanceSeach()
        await expect(searchingPage.advanceSeachHeader).toHaveText("Search")
    })
    it("Searching for existing board", async () => {
        await searchingPage.searchBoard()
        await searchingPage.isBoardDisplayed()
    })
})