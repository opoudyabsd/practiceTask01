import { getVerificationCode } from "../../../utils/emailUtils"

class SignInComponent {
  get userName() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get loginSumbitButton() {
    return $("#login-submit");
  }
  get verificationCodeExist() {
    return $(".css-1pgxbvo");
  }
  get verificationCodeForm() {
    return $(".css-s6tjpp");
  }
  async setEmail() {
    await this.userName.setValue(process.env.EMAIL);
  }
  async setPassword() {
    await this.password.setValue(process.env.PASSWORD);
  }
  async checkForCodeVerification() {
    const isVerificationRequired = await this.verificationCodeExist.isExisting();
    console.log(isVerificationRequired)
    console.log("bibij123")
    if (await isVerificationRequired) {
      console.log("kukaracha")
      const verificationCode = await getVerificationCode();
      console.log(verificationCode)
      await this.verificationCodeForm.setValue(verificationCode);
    }
  }
}

export default SignInComponent
