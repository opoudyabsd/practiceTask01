import { faker } from '@faker-js/faker';
class EditProfile {
    get avatarMenuButton() {
        return $('[data-testid="header-member-menu-avatar"]')
    }
    get avatarMenu() {
        return $(".q2PzD_Dkq1FVX3")
    }
    get profileButton() {
        return $('//span[text()="Profile and visibility"]')
    }
    get h1Header() {
        return $('.mkAua9Q8fCTcEM')
    }
    get usernameId() {
        return $('#username')
    }
    get profileSaveButton() {
        return $('[type="submit"]')
    }
    get savedMessage() {
        return $(".a4ZvSL0pjeULBU")
    }

    async changeUsername() {
        let username = faker.internet.username()
        username = username.toLowerCase().replace(/[^a-z0-9]/g, '') + Date.now()
        await this.usernameId.setValue(username)
        await expect(this.usernameId).toHaveValue(username)
        await this.profileSaveButton.click()
    }
}


export default new EditProfile