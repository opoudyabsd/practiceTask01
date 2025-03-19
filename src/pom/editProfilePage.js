import { faker } from "@faker-js/faker";
import chai from "chai";
const { expect, assert } = chai;
chai.should();
class EditProfile {
  get avatarMenuButton() {
    return $('[data-testid="header-member-menu-avatar"]');
  }
  get avatarMenu() {
    return $(".q2PzD_Dkq1FVX3");
  }
  get profileButton() {
    return $('//span[text()="Profile and visibility"]');
  }
  get h1Header() {
    return $("h1.mkAua9Q8fCTcEM");
  }
  get usernameId() {
    return $("#username");
  }
  get profileSaveButton() {
    return $('[type="submit"]');
  }
  get savedMessage() {
    return $(".a4ZvSL0pjeULBU");
  }

  async changeUsername() {
    let username = faker.internet.username();
    username = username.toLowerCase().replace(/[^a-z0-9]/g, "") + Date.now();
    await this.usernameId.setValue(username);
    const getValueFrom = await this.usernameId.getValue();
    expect(getValueFrom).to.equal(username);
    await this.profileSaveButton.waitForClickable({ timeout: 5000 });
    await this.profileSaveButton.click();
  }
  async getHeaderText() {
    await browser.waitUntil(async () => {
      const text = await this.h1Header.getText();
      return text.trim() === "Manage your personal information";
    });
    return await this.h1Header.getText();
  }

  async getProfileTitle() {
    await browser.waitUntil(async () => {
      return (await browser.getTitle()) === "Profile | Trello";
    });
    return await browser.getTitle();
  }
}

export default new EditProfile();
