import BasePage from "../pom/page/basePage.js";
import SignInPage from "../pom/page/signInPage.js";
const basePage = new BasePage();
const signInPage = new SignInPage();
export async function loginToTrello() {
  await basePage.open("/");

  await basePage.openSignIn();
  await signInPage.signIn.setEmail();
  await signInPage.signIn.loginSumbitButton.click();
  await signInPage.signIn.password.waitForDisplayed({ timeout: 40000 }); // Sometimes I have a big timer when password is displayed
  await signInPage.signIn.setPassword();
  await signInPage.signIn.loginSumbitButton.click();
  await signInPage.signIn.checkForCodeVerification();
  await browser.waitUntil(
    async () => {
      return (await browser.getTitle()) === "Boards | Trello";
    },
    { timeout: 30000 },
  );
  await expect(signInPage.homeContainer).toBeDisplayed();
}
