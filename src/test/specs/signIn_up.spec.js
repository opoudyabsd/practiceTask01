// process.env.EMAIL
// process.env.PASSWORD
import { $, browser,expect } from "@wdio/globals"

import { faker } from '@faker-js/faker';
import BasePage from '../../pom/basePage';
import SignUp from '../../pom/SignUpPage';
import SignIn from "../../pom/signInPage";
const basePage = new BasePage()
const signInPage = new SignIn()
describe("Trello Sign UP", () => {
    before(async ()=> {
        await basePage.open("/")
        await expect(browser).toHaveTitle("Capture, organize, and tackle your to-dos from anywhere | Trello");
    })
    it("Open signUp page", async () => {
        await basePage.openSignUp()
        await expect(browser).toHaveTitle("Sign up - Log in with Atlassian account")
    })
    it('Enter email and click submit button', async () => {
        await SignUp.enterEmail()
        await SignUp.submitButton.click()
        await SignUp.isWorkspacePageLoaded() // I set 17 sec becuase from time to time a have a big time for redirection for next page
        await expect(browser).toHaveTitle("Create your first Workspace | Trello")
        await expect(SignUp.workSpaceHeader).toHaveText("What brings you here today?")
    })
})

describe("Trello Sign IN", () => {
    before(async () => {
        await browser.reloadSession();
        await basePage.open("/")
        await expect(browser).toHaveTitle("Capture, organize, and tackle your to-dos from anywhere | Trello")

    })
    it("Open SignIn page", async () => {
        await basePage.openSignIn()
        await expect(browser).toHaveTitle("Log in to continue - Log in with Atlassian account")
    })
    it("Signin with valid email and password", async () => {
        await signInPage.setEmail()
        await signInPage.loginSumbitButtonClick()
        await expect(signInPage.password).toBeDisplayed()
        await signInPage.setPassword()
        await signInPage.loginSumbitButtonClick()
        await browser.pause(5000) // Because of timeout delay 
        await expect(browser).toHaveTitle("Boards | Trello")
        await expect(signInPage.homeContainer).toBeDisplayed()
    })
})