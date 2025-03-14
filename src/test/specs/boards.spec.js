import { faker } from '@faker-js/faker';

describe("Create a bord", () => {
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
    })
    it("Open 'Create board' menu", async () => {
        await $(".board-tile.mod-add").click()
        await expect($(".q2PzD_Dkq1FVX3.pt-0")).toBeDisplayed()
    })
    it("Create a bord", async () => {
        const titleBoard = process.env.TITLENAME
        await $(".nch-textfield__input.lsOhPsHuxEMYEb.lsOhPsHuxEMYEb").setValue(titleBoard)
        await $('[data-testid="create-board-submit-button"]').click()
        await browser.pause(500)
        await expect(browser).toHaveTitle(`${titleBoard} | Trello`)
        await expect($('.HKTtBLwDyErB_o')).toHaveText(titleBoard)
    })
})

describe("Search for existing board", () => {
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
    })

    it("Searching for existing board", async () => {
        const titleBoard = process.env.TITLENAME
        await $(".css-s6tjpp").setValue(titleBoard)
        await $("[data-test-id='search-dialog-advanced-search-link']").click()
        await $('[data-testid="advanced-search-input"]').setValue(titleBoard)
        await expect($(`//div[@role="presentation"]//*[text()="${titleBoard}"]`)).toBeDisplayed()
    })
})

describe.only("Create a list", () => {
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
        await browser.url(process.env.BOARDURL)
    })
    it("Opening 'Create a list' form", async () => {
        await $('[data-testid="list-composer-button"]').click()
        await expect($('.oe8RymzptORQ7h')).toBeDisplayed()
    })
    it("Create a new list", async () => {
        const newListName = faker.commerce.productName()
        const element = $(`//h2[@data-testid="list-name" and contains(text(), "${newListName}")]`);
        await $('.oe8RymzptORQ7h').setValue(newListName)
        await $('[data-testid="list-composer-add-list-button"]').click()
        await element.waitForDisplayed({ timeout: 3000 });  // Wait for up to 5 seconds
        await expect(element).toBeDisplayed()
    })


})