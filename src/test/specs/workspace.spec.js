import workspacePage from "../../pom/workspacePage";
import { loginToTrello } from "../../utils/authHelper";

describe("Edit workspace", () => {
  before(async () => {
    await loginToTrello();
  });

  it("Open workspace editing form", async () => {
    await workspacePage.openHomePage();
    await browser.pause(2000);
    await workspacePage.workspaceEditButton.click();
    const isDisplayed = await workspacePage.workspaceEditForm.isDisplayed();
    assert.isTrue(isDisplayed, "Workspace edit form isn't displayed");
  });

  it("Change name of the workspace", async () => {
    await workspacePage.editWorkspaceName(workspacePage.workspaceNewName);
    await browser.waitUntil(
      async () => {
        return !(await workspacePage.workspaceEditForm.isDisplayed());
      },
      { timeout: 5000 }
    );
    expect(await workspacePage.workspaceUsername.getText()).to.equal(
      workspacePage.workspaceNewName
    );
  });
});

///////////////////////// Mocha
// describe("Edit workspace", () => {
//     before(async () => {
//         await basePage.open("/")
//         await expect(browser).toHaveTitle("Capture, organize, and tackle your to-dos from anywhere | Trello")
//         await basePage.openSignIn()
//         await expect(browser).toHaveTitle("Log in to continue - Log in with Atlassian account")
//         await signInPage.setEmail()
//         await signInPage.loginSumbitButtonClick()
//         await browser.pause(2000)
//         await expect(signInPage.password).toBeDisplayed()
//         await signInPage.setPassword()
//         await signInPage.loginSumbitButtonClick()
//         await browser.pause(5000) // Make sure if Code Verification is displayed
//         await signInPage.checkForCodeVerification()
//         await browser.pause(5000) // Because of timeout delay
//         await expect(browser).toHaveTitle("Boards | Trello")
//         await expect(signInPage.homeContainer).toBeDisplayed()
//     })
//     it("Open workspace editing form", async () => {
//         await workspacePage.openHomePage()
//         await browser.pause(2000)
//         await workspacePage.workspaceEditButton.click()
//         assert.isTrue(await expect(workspacePage.workspaceEditForm).toBeDisplayed(), "Workspace edit form isn't displayed")
//     })
//     it("Change name of the workspace", async () => {
//         await workspacePage.editWorkspaceName(workspacePage.workspaceNewName)
//         await expect(workspacePage.workspaceEditForm).not.toBeDisplayed();
//         await expect(workspacePage.workspaceUsername).toHaveText(workspacePage.workspaceNewName)
//     })

// })
