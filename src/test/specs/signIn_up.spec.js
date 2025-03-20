// process.env.EMAIL
// process.env.PASSWORD
import BasePage from "../../pom/basePage";
import SignUp from "../../pom/SignUpPage";
import SignIn from "../../pom/signInPage";
const basePage = new BasePage();
const signInPage = new SignIn();
import chai from "chai";
const { expect, assert } = chai;
chai.should();
describe("Trello Sign UP", () => {
  before(async () => {
    await basePage.open("/");
    expect(await browser.getTitle()).to.equal("Capture, organize, and tackle your to-dos from anywhere | Trello");
  });

  it("Open signUp page", async () => {
    await basePage.openSignUp();
    expect(await SignUp.getSignUPTitle()).to.equal("Sign up - Log in with Atlassian account");
  });

  it("Enter email and click submit button", async () => {
    await SignUp.enterEmail();
    await SignUp.submitButton.click();
    await SignUp.handleCaptcha(); // If captcha is displayed solve it manually
    await SignUp.isWorkspacePageLoaded(); // I set 17 sec becuase from time to time a have a big time for redirection to the next page
    expect(await SignUp.getWorkspaceTitle()).to.equal(
      "Create your first Workspace | Trello"
    );
    expect(await SignUp.workSpaceHeader.getText()).to.equal(
      "What brings you here today?"
    );
  });
});

describe.only("Trello Sign IN", () => {
  before(async () => {
    await browser.reloadSession();
    await basePage.open("/");
    expect(await browser.getTitle()).to.equal(
      "Capture, organize, and tackle your to-dos from anywhere | Trello"
    );
  });
  it("Open SignIn page", async () => {
    await basePage.signInButton.waitForClickable();
    await basePage.openSignIn();
    (await signInPage.getSignInTitle()).should.include(
      "Log in to continue - Log in with Atlassian account"
    );
  });
  it("Signin with valid email and password", async () => {
    await signInPage.setEmail();
    await signInPage.loginSumbitButtonClick();
    await browser.waitUntil(
      async () => {
        return await signInPage.password.isDisplayed();
      },
      { timeout: 30000 }
    );
    await signInPage.setPassword();
    await signInPage.loginSumbitButtonClick();

    await browser.pause(5000); // Ensure if Code Verification is displayed
    await signInPage.checkForCodeVerification();
    await browser.pause(5000); // Handle timeout delay

    expect(await browser.getTitle()).to.equal("Boards | Trello");
    (await signInPage.homeContainer.isDisplayed()).should.be.true;
  });
});
