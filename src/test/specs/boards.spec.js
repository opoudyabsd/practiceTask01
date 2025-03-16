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
    //     await browser.maximizeWindow()
        await browser.url('/')
    //     await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
    //     await $("#username").setValue(process.env.EMAIL)
    //     await $("#login-submit").click()
    //     await expect($("#password")).toBeDisplayed()
    //     await $("#password").setValue(process.env.PASSWORD)
    //     await $("#login-submit").click()
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

describe("Create a list", () => {
    before(async () => {
        // await browser.maximizeWindow()
        // await browser.url('/')
        // await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
        // await $("#username").setValue(process.env.EMAIL)
        // await $("#login-submit").click()
        // await expect($("#password")).toBeDisplayed()
        // await $("#password").setValue(process.env.PASSWORD)
        // await $("#login-submit").click()
        // await browser.pause(5000)
        // await expect(browser).toHaveTitle("Boards | Trello")
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

describe("Create a card", () => {
    before(async () => {
    //     await browser.maximizeWindow()
        // await browser.url('/')
    //     await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
    //     await $("#username").setValue(process.env.EMAIL)
    //     await $("#login-submit").click()
    //     await expect($("#password")).toBeDisplayed()
    //     await $("#password").setValue(process.env.PASSWORD)
    //     await $("#login-submit").click()
    //     await browser.pause(5000)
        // await expect(browser).toHaveTitle("Boards | Trello")
        await browser.url(process.env.BOARDURL)
    })
    it("Expect a card field to be displayed", async () => {
        await $('[data-testid="list-add-card-button"]').click()
        await expect($('[data-testid="list-card-composer-textarea"]')).toBeDisplayed()
    })
    it("Create a new card", async () => {
        await $('[data-testid="list-card-composer-textarea"]').setValue("newCart")
        await $('[data-testid="list-card-composer-add-card-button"]').click()
        await expect($('[data-testid="card-name"]')).toHaveText("newCart")
        await expect($('.amUfYqLTZOvGsn')).toBeDisplayed()
    })
    
})

describe("Cart sorting", () => {
    before(async () => {
        await browser.maximizeWindow()
        await browser.url('/')
        await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
        await $("#username").setValue(process.env.EMAIL)
        await $("#login-submit").click()
        await browser.pause(5000)
        await expect($("#password")).toBeDisplayed()
        await $("#password").setValue(process.env.PASSWORD)
        await $("#login-submit").click()
        await browser.pause(5000)
        await expect(browser).toHaveTitle("Boards | Trello")
        await browser.url(process.env.BOARDURL)
        await browser.pause(2000)
    })
    it("Expect a list with few card is created", async () => {
        const specificOl = await $('[data-testid="list-cards"]')
        await expect($('[data-testid="list-name"]')).toHaveText("Already created list")
        await expect(specificOl.$$("li")).toBeElementsArrayOfSize(6)
    })
    it("Implement sorting", async () => {
        await $('[data-testid="list-edit-menu-button"]').click()
        await expect($('[title="List actions"]')).toBeDisplayed()
        await $('//span[text()="Sort by…"]').click()
        await expect($('[title="Sort list"]')).toBeDisplayed()
        await $(".js-sort-by-card-name").click()
        await $(".QMKgZFIlTLiEJN").waitForDisplayed(1000)
    })
})


describe.only("Edit workspace", () => {
    before(async () => {
        await browser.maximizeWindow()
        await browser.url('/')
        await $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click()
        await $("#username").setValue(process.env.EMAIL)
        await $("#login-submit").click()
        await browser.pause(5000)
        await expect($("#password")).toBeDisplayed()
        await $("#password").setValue(process.env.PASSWORD)
        await $("#login-submit").click()
        await browser.pause(5000)
        await expect(browser).toHaveTitle("Boards | Trello")
        await browser.url('/w/userworkspace20722308/home')
    })
    it("Open workspace editing form", async () => {
        await $('.Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc').click()
        await expect($('[aria-label="OrganizationDetailForm"]')).toBeDisplayed()
    })
    it("Change name of the workspace", async () => {
        const workspaceName = faker.internet.username()
        await $("#displayName").setValue(workspaceName)
        await expect($('#displayName')).toHaveValue(workspaceName)
        await $('[type="submit"]').click()
        await expect($('[aria-label="OrganizationDetailForm"]')).not.toBeDisplayed();
        await expect($('.SiP6d2d_8FAAkC')).toHaveText(workspaceName)
    })


})