import SignInPage from "../../pom/page/signInPage";
import SignUpPage from "../../pom/page/SignUpPage";
import BasePage from "../../pom/page/basePage";
const signUpPage = new SignUpPage();
const signInPage = new SignInPage();
const basePage = new BasePage();
describe("Trello Sign UP", () => {
  before(async () => {
    await basePage.open("/");
  });

  it("Open signUp page", async () => {
    await basePage.openSignUp();
    await expect(browser).toHaveTitle(
      "Sign up - Log in with Atlassian account",
    );
  });

  it("Enter email and click submit button", async () => {
    await signUpPage.signUp.enterEmail();
    await signUpPage.signUp.submitButton.click();
    await signUpPage.signUp.handleCaptcha(); // If captcha is displayed solve it manually without clicking signup
    await signUpPage.workSpaceHeader.waitForDisplayed({ timeout: 17000 }); // I set 17 sec becuase from time to time a have a big time for redirection to the next page
    await expect(browser).toHaveTitle("Create your first Workspace | Trello");
    await expect(signUpPage.workSpaceHeader).toHaveText(
      "What brings you here today?",
    );
  });
});

describe("Trello Sign IN", () => {
  before(async () => {
    await browser.reloadSession();
    await basePage.open("/");
    await basePage.signInButton.waitForClickable();
    await basePage.openSignIn();
  });
  it("Check SignIn page title", async () => {
    await expect(browser).toHaveTitle(
      "Log in to continue - Log in with Atlassian account",
    );
  });
  it("Signin with valid email and password", async () => {
    await signInPage.signIn.setEmail();
    await signInPage.signIn.loginSumbitButton.click();
    await signInPage.signIn.password.waitForDisplayed({ timeout: 30000 }); // Sometimes I have a big timer when password is displayed
    await signInPage.signIn.setPassword();
    await signInPage.signIn.loginSumbitButton.click();
    await signInPage.signIn.checkForCodeVerification();
    await expect(browser).toHaveTitle("Boards | Trello");
    await expect(signInPage.homeContainer).toBeDisplayed();
  });
});
