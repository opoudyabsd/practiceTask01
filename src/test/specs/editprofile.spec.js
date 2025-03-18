import BasePage from '../../pom/basePage';
import SignIn from '../../pom/signInPage';
import EditProfile from '../../pom/editProfilePage';
const basePage = new BasePage()
const signInPage = new SignIn()

describe("Edit Trello user profile", () => {
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
    it("Open a profile page", async () => {
        await EditProfile.avatarMenuButton.click()
        await expect(EditProfile.avatarMenu).toBeDisplayed()
        await EditProfile.profileButton.click()
        await expect(browser).toHaveTitle("Profile | Trello")
        await expect(EditProfile.h1Header).toHaveText("Manage your personal information")
    })
    it("Change username", async () => {
        await EditProfile.changeUsername()
        await browser.pause(1000)
        await expect(EditProfile.savedMessage).toBeDisplayed()
    })
})