import workspacePage from "../../pom/workspacePage";
import { loginToTrello } from "../../utils/authHelper";

describe("Edit workspace", () => {
  before(async () => {
    await loginToTrello();
  });

  it("Open workspace editing form", async () => {
    await workspacePage.openHomePage();
    await workspacePage.workspaceEditButton.waitForClickable()
    await workspacePage.workspaceEditButton.click();
    await expect(workspacePage.workspaceEditForm).toBeDisplayed()
  });

  it("Change name of the workspace", async () => {
    await workspacePage.editWorkspaceName(workspacePage.workspaceNewName);
    await expect(workspacePage.workspaceEditForm).not.toBeDisplayed()
    await expect(workspacePage.workspaceUsername).toHaveText(workspacePage.workspaceNewName)
  });
});

