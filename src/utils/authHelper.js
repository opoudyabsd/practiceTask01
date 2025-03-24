import BasePage from "../pom/basePage.js";
import SignIn from "../pom/signInPage.js";
const basePage = new BasePage()
const signInPage = new SignIn()
export async function loginToTrello() {
    await basePage.open("/");

    await basePage.openSignIn();
    await signInPage.setEmail();
    await signInPage.loginSumbitButtonClick();
    await signInPage.password.waitForDisplayed({timeout: 30000})
    // await browser.waitUntil(async () => {
    //     return (await signInPage.password.isDisplayed());
    // }, { timeout: 30000 });

    await signInPage.setPassword();
    await signInPage.loginSumbitButtonClick();
    await signInPage.checkForCodeVerification();
    await expect(browser).toHaveTitle("Boards | Trello")
    // expect(await browser.getTitle()).to.equal("Boards | Trello");
    await expect(signInPage.homeContainer).toBeDisplayed()
    // (await signInPage.homeContainer.isDisplayed()).should.be.true;
}