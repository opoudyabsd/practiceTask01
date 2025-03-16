import { faker } from '@faker-js/faker';
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
        await expect(signInPage.password).toBeDisplayed()
        await signInPage.setPassword()
        await signInPage.loginSumbitButtonClick()
        await browser.pause(5000) // Because of timeout delay 
        await expect(browser).toHaveTitle("Boards | Trello")
        await expect(signInPage.homeContainer).toBeDisplayed()
    })
    it("Open a profile page", async () => {
        await expect(browser).toHaveTitle("Boards | Trello")
        await $('[data-testid="header-member-menu-avatar"]').click()
        await expect($(".q2PzD_Dkq1FVX3")).toBeDisplayed()
        await $('//span[text()="Profile and visibility"]').click()
        await expect(browser).toHaveTitle("Profile | Trello")
        await expect($("div h1")).toBeDisplayed()
    })
    it("Change username", async () => {
        let username = faker.internet.username()
        username = username.toLowerCase().replace(/[^a-z0-9]/g, '') + Date.now()
        await $('#username').setValue(username)
        await expect($('#username')).toHaveValue(username)
        await $('[type="submit"]').click()
        await browser.pause(1000)
        await expect($(".a4ZvSL0pjeULBU")).toBeDisplayed()
    })
})