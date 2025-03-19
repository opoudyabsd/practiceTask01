import BasePage from "../pom/basePage.js";
import SignIn from "../pom/signInPage.js";
const basePage = new BasePage()
const signInPage = new SignIn()
import chai from "chai";
const { expect, assert } = chai;
chai.should();

export async function loginToTrello() {
    await basePage.open("/");
    expect(await browser.getTitle()).to.equal("Capture, organize, and tackle your to-dos from anywhere | Trello");

    await basePage.openSignIn();
    await signInPage.setEmail();
    await signInPage.loginSumbitButtonClick();

    await browser.waitUntil(async () => {
        return (await signInPage.password.isDisplayed());
    }, { timeout: 30000 });

    await signInPage.setPassword();
    await signInPage.loginSumbitButtonClick();

    await browser.pause(5000); // Ensure if Code Verification is displayed
    await signInPage.checkForCodeVerification();
    await browser.pause(5000); // Handle timeout delay

    expect(await browser.getTitle()).to.equal("Boards | Trello");
    (await signInPage.homeContainer.isDisplayed()).should.be.true;
}