import BasePage from '../../pom/basePage';
import SignIn from '../../pom/signInPage';
const basePage = new BasePage()
const signInPage = new SignIn()
import workspacePage from '../../pom/workspacePage';
describe("Edit workspace", () => {
    before(async () => {
        await basePage.open("/")
        await expect(browser).toHaveTitle("Capture, organize, and tackle your to-dos from anywhere | Trello")
        await basePage.openSignIn()
        await expect(browser).toHaveTitle("Log in to continue - Log in with Atlassian account")
        await signInPage.setEmail()
        await signInPage.loginSumbitButtonClick()
        await expect(signInPage.password).toBeDisplayed()
        await signInPage.setPassword()
        await signInPage.loginSumbitButtonClick()
        await browser.pause(5000) // Because of timeout delay 
        await expect(browser).toHaveTitle("Boards | Trello")
        await expect(signInPage.homeContainer).toBeDisplayed()
    })
    it("Open workspace editing form", async () => {
        await workspacePage.openHomePage()
        await browser.pause(2000)
        await workspacePage.workspaceEditButton.click()
        await expect(workspacePage.workspaceEditForm).toBeDisplayed()
    })
    it("Change name of the workspace", async () => {
        await workspacePage.editWorkspaceName(workspacePage.workspaceNewName)
        await expect(workspacePage.workspaceEditForm).not.toBeDisplayed();
        await expect(workspacePage.workspaceUsername).toHaveText(workspacePage.workspaceNewName)
    })


})