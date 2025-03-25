import { faker } from "@faker-js/faker";

class SignUpComponent{
    get email() {
        return $("#email");
      }
    get submitButton() {
        return $("#signup-submit");
    }
    async enterEmail() {
        const newEmail = faker.internet.email();
        await this.email.setValue(newEmail);
        await expect(this.email).toHaveValue(newEmail)
    }
}

export default SignUpComponent