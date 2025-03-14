import { faker } from '@faker-js/faker';

describe("Edit Trello user profile", () => {
    before(async () => {
        await browser.maximizeWindow()
        await browser.url('/')
        await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
        await $("#username").setValue(process.env.EMAIL)
        await $("#login-submit").click()
        await expect($("#password")).toBeDisplayed()
        await $("#password").setValue(process.env.PASSWORD)
        await $("#login-submit").click()
        await browser.pause(5000)
        await expect(browser).toHaveTitle("Boards | Trello")
        await browser.maximizeWindow()
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