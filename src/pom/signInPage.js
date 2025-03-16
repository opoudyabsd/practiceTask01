import BasePage from "./basePage"
class SignIn extends BasePage {
    get userName() {
        return $("#username")
    }
    get password() {
        return $("#password")
    }
    get loginSumbitButton() {
        return $("#login-submit")
    }
    get homeContainer() {
        return $('.home-sticky-container')
    }
    async loginSumbitButtonClick() {
        await this.loginSumbitButton.click()
    }

    async setEmail() {
        await this.userName.setValue(process.env.EMAIL)
    }
    async setPassword() {
        await this.password.setValue(process.env.PASSWORD)
    }
}

export default SignIn