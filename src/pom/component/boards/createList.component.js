import { faker } from "@faker-js/faker";

class CreateListComponent {
  get addListForm() {
    return $(".oe8RymzptORQ7h");
  }
  get listNameForm() {
    return $(".oe8RymzptORQ7h");
  }
  get createListButton() {
    return $('[data-testid="list-composer-add-list-button"]');
  }
  async newList() {
    const newListName = faker.commerce.productName();
    const element = $(
      `//h2[@data-testid="list-name" and contains(text(), "${newListName}")]`,
    );
    await this.listNameForm.setValue(newListName);
    await this.createListButton.click();
    await element.waitForDisplayed({ timeout: 2000 });
  }
}
export default CreateListComponent;
