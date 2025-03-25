import SignUpComponent from "../component/signUP/signUp.component";
class SignUpPage {
  constructor() {
    this.signUp = new SignUpComponent();
  }
  get workSpaceHeader() {
    return $(".IxRgeAVbrErAiv");
  }

  get captchaElement() {
    return $(".css-165xmen");
  }

  async handleCaptcha() {
    await browser.pause(5000); // To check if CAPTCHA is exist
    if (await this.captchaElement.isExisting()) {
      await browser.pause(40000);
      await this.submitButton.click();
    }
  }
}

export default SignUpPage;
