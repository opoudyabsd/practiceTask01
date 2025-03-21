import { getVerificationCode } from "../utils/emailUtils";

import BasePage from "./basePage";
class SignIn extends BasePage {
  get userName() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get loginSumbitButton() {
    return $("#login-submit");
  }
  get homeContainer() {
    return $(".home-sticky-container");
  }
  get verificationCodeExist() {
    return $(".css-1ndkufm");
  }
  get verificationCodeForm() {
    return $(".css-s6tjpp");
  }
  async loginSumbitButtonClick() {
    await this.loginSumbitButton.click();
  }

  async setEmail() {
    await this.userName.setValue(process.env.EMAIL);
  }
  async setPassword() {
    await this.password.setValue(process.env.PASSWORD);
  }
  async checkForCodeVerification() {
    const isVerificationRequired =
      await this.verificationCodeExist.isExisting();
    if (isVerificationRequired) {
      const verificationCode = await getVerificationCode();
      await this.verificationCodeForm.setValue(verificationCode);
    }
  }
  async getSignInTitle(title) {
    await browser.waitUntil(async () => {
      return (
        (await browser.getTitle()) ===
        title
      );
    }, {timeout: 15000});
    return await browser.getTitle();
  }
}

export default SignIn;
