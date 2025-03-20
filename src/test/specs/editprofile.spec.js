import EditProfile from "../../pom/editProfilePage";
import { loginToTrello } from "../../utils/authHelper";
import chai from "chai";
const { expect, assert } = chai;
chai.should();

describe("Edit Trello user profile", () => {
  before(async () => {
    await loginToTrello();
  });
  it("Open a profile page", async () => {
    await EditProfile.avatarMenuButton.waitForClickable({ timeout: 5000 });
    await EditProfile.avatarMenuButton.click();
    await EditProfile.avatarMenu.waitForDisplayed();
    // expect(await EditProfile.avatarMenu.isDisplayed()).to.be.true;
    await EditProfile.profileButton.waitForClickable();
    await EditProfile.profileButton.click();
    expect(await EditProfile.getProfileTitle()).to.equal("Profile | Trello");
    expect(await EditProfile.getHeaderText()).to.equal(
      "Manage your personal information"
    );
  });
  it("Change username", async () => {
    await EditProfile.changeUsername();
    // await browser.pause(1000);
    await EditProfile.savedMessage.waitForDisplayed();
    expect(await EditProfile.savedMessage.isDisplayed()).to.be.true;
  });
});
