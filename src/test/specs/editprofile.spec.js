import EditProfile from "../../pom/editProfilePage";
import { loginToTrello } from "../../utils/authHelper";


describe("Edit Trello user profile", () => {
  before(async () => {
    await loginToTrello();
  });
  it("Open a profile page", async () => {
    await EditProfile.avatarMenuButton.waitForClickable({ timeout: 5000 });
    await EditProfile.avatarMenuButton.click();
    await EditProfile.profileButton.click();
    await expect(browser).toHaveTitle("Profile | Trello")
    await expect(EditProfile.h1Header).toHaveText("Manage your personal information")
  });
  it("Change username", async () => {
    await EditProfile.changeUsername();
    await expect(EditProfile.savedMessage).toBeDisplayed()
    await expect(EditProfile.savedMessage).toHaveText("Saved")
  });
});
