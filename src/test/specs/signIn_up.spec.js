// process.env.EMAIL
// process.env.PASSWORD
import { faker } from '@faker-js/faker';

describe("Trello Sign UP", () => {
    beforeEach(async ()=> {
        await browser.url('/')
        await browser.maximizeWindow()

    })
    it("Succsseful sign Up with new email", async () => {
        const email = faker.internet.email()
        await expect(browser).toHaveTitle("Capture, organize, and tackle your to-dos from anywhere | Trello")
        await $('[type="Submit"]').click()
        await expect(browser).toHaveTitle("Sign up - Log in with Atlassian account")
        await $('#email').setValue(email)
        await expect($("#email")).toHaveValue(email)
        await $('#signup-submit').click()
        await $(".IxRgeAVbrErAiv").waitForDisplayed({ timeout: 15000 })
        await expect(browser).toHaveTitle("Create your first Workspace | Trello")
        await expect($(".IxRgeAVbrErAiv")).toHaveText("What brings you here today?")
    })
})

describe("Trello Sign IN", () => {
    beforeEach(async ()=> {
        await browser.url('/')
        await browser.reloadSession();
        await browser.maximizeWindow()

    })
    it("Successful sign in with registered email", async () => {
        await browser.url('/')
        await expect(browser).toHaveTitle("Capture, organize, and tackle your to-dos from anywhere | Trello")
        await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
        await expect(browser).toHaveTitle("Log in to continue - Log in with Atlassian account")
        await $("#username").setValue(process.env.EMAIL)
        await $("#login-submit").click()
        await expect($("#password")).toBeDisplayed()
        await $("#password").setValue(process.env.PASSWORD)
        await $("#login-submit").click()
        await browser.pause(5000)
        await expect(browser).toHaveTitle("Boards | Trello")
    })
})