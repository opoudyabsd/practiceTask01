import BasePage from "./basePage";
import { faker } from "@faker-js/faker";
import chai from "chai";
const { expect, assert } = chai;
chai.should();
class SignUp extends BasePage {
  get email() {
    return $("#email");
  }
  get submitButton() {
    return $("#signup-submit");
  }
  get workSpaceHeader() {
    return $(".IxRgeAVbrErAiv");
  }

  get captchaElement() {
    return $("#rc-anchor-container");
  }
  async enterEmail() {
    const newEmail = faker.internet.email();
    await this.email.setValue(newEmail);
    expect(await this.email.getValue()).to.equal(newEmail);
  }
  async isWorkspacePageLoaded() {
    await this.workSpaceHeader.waitForDisplayed({ timeout: 17000 });
  }
  async getSignUPTitle() {
    await browser.waitUntil(async () => {
      return (
        (await browser.getTitle()) === "Sign up - Log in with Atlassian account"
      );
    });
    return await browser.getTitle();
  }

  async getWorkspaceTitle() {
    await browser.waitUntil(async () => {
      return (
        (await browser.getTitle()) === "Create your first Workspace | Trello"
      );
    });
    return await browser.getTitle();
  }
  async handleCaptcha() {
    if (this.captchaElement.isExisting()) {
      console.log("CAPTCHA detected, pausing test...");
      browser.pause(40000); // Pause for manual CAPTCHA solving
      this.submitButton.click(); // Click after solving CAPTCHA (if required)
    } else {
      console.log("No CAPTCHA, continuing test...");
    }
  }
}

export default new SignUp();
