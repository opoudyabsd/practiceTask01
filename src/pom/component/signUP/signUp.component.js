import { faker } from "@faker-js/faker";

class SignUpComponent{
    get email() {
        return $("#email");
      }
    get submitButton() {
        return $("#signup-submit");
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
    async enterEmail() {
        const newEmail = faker.internet.email();
        await this.email.setValue(newEmail);
        await expect(this.email).toHaveValue(newEmail)
    }
}

export default SignUpComponent