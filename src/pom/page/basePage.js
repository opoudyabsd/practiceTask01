import { browser, expect } from "@wdio/globals";

class BasePage {
  get signUpButton() {
    return $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_signup"]');
  }
  get signInButton() {
    return $('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]');
  }
  async open(link) {
    await browser.url(link);
    await browser.maximizeWindow();
  }
  async openSignUp() {
    await this.signUpButton.click();
  }
  async openSignIn() {
    await this.signInButton.click();
  }
}

export default BasePage;
