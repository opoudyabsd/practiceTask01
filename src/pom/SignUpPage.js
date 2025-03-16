import BasePage from './basePage';
import { faker } from '@faker-js/faker';
import { browser, expect } from "@wdio/globals";
class SignUp extends BasePage{
    get email() {
        return $('#email')
    }
    get submitButton() {
        return $("#signup-submit")
    }
    get workSpaceHeader() {
        return $(".IxRgeAVbrErAiv")
    }
    async enterEmail() {
        const newEmail = faker.internet.email()
        await this.email.setValue(newEmail)
        await expect(this.email).toHaveValue(newEmail)
    }
    async isWorkspacePageLoaded() {
        await this.workSpaceHeader.waitForDisplayed({ timeout: 17000 });
    }
}

export default new SignUp