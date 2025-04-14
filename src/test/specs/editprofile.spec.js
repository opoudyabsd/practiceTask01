import EditProfilePage from "../../pom/page/editProfilePage";
import { loginToTrello } from "../../utils/authHelper";
const editProfilePage = new EditProfilePage();

describe("Edit Trello user profile", () => {
  before(async () => {
    await loginToTrello();
  });
  it("Open avanar menu", async () => {
    await editProfilePage.avatarMenuButton.click();
    await expect(editProfilePage.avatarMenu).toBeDisplayed();
  });
  it("Open a profile page", async () => {
    await editProfilePage.profileButton.click();
    await expect(browser).toHaveTitle("Profile | Trello");
    await expect(editProfilePage.h1Header).toHaveText(
      "Manage your personal information",
    );
  });
  it("Change username", async () => {
    await editProfilePage.editProfile.changeUsername();
    await expect(editProfilePage.savedMessage).toBeDisplayed();
    await expect(editProfilePage.savedMessage).toHaveText("Saved");
  });
});
