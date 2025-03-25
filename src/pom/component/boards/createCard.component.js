
class CreateCardComponent{
    get addCardForm() {
        return $('[data-testid="list-card-composer-textarea"]');
    }
    get createCardButton() {
        return $('[data-testid="list-card-composer-add-card-button"]');
    }  
    async newCard(value) {
        await this.addCardForm.setValue(value);
        await this.createCardButton.click();
    }
}

export default CreateCardComponent