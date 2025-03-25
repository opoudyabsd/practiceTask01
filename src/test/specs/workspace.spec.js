import WorkspacePage from "../../pom/page/workspacePage";
import { loginToTrello } from "../../utils/authHelper";
const workspacePage = new WorkspacePage();

describe("Edit workspace", () => {
  before(async () => {
    await loginToTrello();
  });

  it("Open workspace editing form", async () => {
    await workspacePage.openHomePage();
    await workspacePage.editButton.click();

    await expect(workspacePage.workspaceEdit.editForm).toBeDisplayed();
  });

  it("Change name of the workspace", async () => {
    await workspacePage.workspaceEdit.editUsername(
      workspacePage.workspaceEdit.newUsername
    );

    await expect(workspacePage.workspaceEdit.editForm).not.toBeDisplayed();
    await expect(workspacePage.usernameHeader).toHaveText(
      workspacePage.workspaceEdit.newUsername
    );
  });
});
