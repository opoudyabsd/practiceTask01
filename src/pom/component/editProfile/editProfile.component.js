import { faker } from "@faker-js/faker";

class EditProfileComponent{

      get usernameId() {
        return $("#username");
      }
      get profileSaveButton() {
        return $('[type="submit"]');
      }

    
      async changeUsername() {
        let username = faker.internet.username();
        username = username.toLowerCase().replace(/[^a-z0-9]/g, "") + Date.now();
        await this.usernameId.setValue(username);
        await expect(this.usernameId).toHaveValue(username)
        await this.profileSaveButton.click();
      }
}

export default EditProfileComponent