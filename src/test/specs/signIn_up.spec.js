// process.env.EMAIL
// process.env.PASSWORD
import BasePage from "../../pom/basePage";
import SignUp from "../../pom/SignUpPage";
import SignIn from "../../pom/signInPage";
const basePage = new BasePage();
const signInPage = new SignIn();
describe("Trello Sign UP", () => {
  before(async () => {
    await basePage.open("/");
    });

  it("Open signUp page", async () => {
    await basePage.openSignUp();
    await expect(browser).toHaveTitle("Sign up - Log in with Atlassian account")
  });

  it("Enter email and click submit button", async () => {
    await SignUp.enterEmail();
    await SignUp.submitButton.click();
    await SignUp.handleCaptcha(); // If captcha is displayed solve it manually without clicking signup
    await SignUp.workSpaceHeader.waitForDisplayed({ timeout: 17000 }); // I set 17 sec becuase from time to time a have a big time for redirection to the next page
    await expect(browser).toHaveTitle("Create your first Workspace | Trello")
    await expect(SignUp.workSpaceHeader).toHaveText("What brings you here today?")
  });
});

describe("Trello Sign IN", () => {
  before(async () => {
    await browser.reloadSession();
    await basePage.open("/");
  });
  it("Open SignIn page", async () => {
    await basePage.signInButton.waitForClickable();
    await basePage.openSignIn();
    await expect(browser).toHaveTitle("Log in to continue - Log in with Atlassian account")
  });
  it("Signin with valid email and password", async () => {
    await signInPage.setEmail();
    await signInPage.loginSumbitButtonClick();
    await signInPage.password.waitForDisplayed({timeout: 30000}) // Sometimes I have a big timer when password is displayed
    await signInPage.setPassword();
    await signInPage.loginSumbitButtonClick();
    await signInPage.checkForCodeVerification();
    await expect(browser).toHaveTitle("Boards | Trello")
    await expect(signInPage.homeContainer).toBeDisplayed()
  });
});
