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
    return $(".css-165xmen");
  }
  async enterEmail() {
    const newEmail = faker.internet.email();
    await this.email.setValue(newEmail);
    expect(await this.email.getValue()).to.equal(newEmail);
  }
  async getPageTitle(title) {
    await browser.waitUntil(async () => {
      return (
        (await browser.getTitle()) === title
      );
    });
    return await browser.getTitle();
  }
  async handleCaptcha() {
    await browser.pause(5000) // To check if CAPTCHA is exist
    if (await this.captchaElement.isExisting()) {
      await browser.pause(40000); 
      await this.submitButton.click(); 
    }
  }
}

export default new SignUp();
