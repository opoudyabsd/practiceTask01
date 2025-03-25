class WorkspaceEditComponent{

    get editForm() {
        return $('[aria-label="OrganizationDetailForm"]')
    }
    get displayName() {
        return $("#displayName")
    }
    get saveButton() {
        return $('[type="submit"]')
    }
    get newUsername() {
        return "newNickName123123"
    }
    async editUsername(newName) {
        await this.displayName.setValue(newName)
        await this.saveButton.click()
    } 
}
export default WorkspaceEditComponent