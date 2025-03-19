import { faker } from '@faker-js/faker';

class WorkspacePage {
    get workspaceEditButton() {
        return $('.Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc')
    }
    get workspaceEditForm() {
        return $('[aria-label="OrganizationDetailForm"]')
    }
    get displayName() {
        return $("#displayName")
    }
    get workspaceSaveButton() {
        return $('[type="submit"]')
    }
    get workspaceUsername() {
        return $('h2.SiP6d2d_8FAAkC')
    }
    get workspaceNewName() {
        return "Debil"
    }
    async openHomePage() {
        await browser.url("/w/userworkspace38492828/home")
    }
    async editWorkspaceName(newName) {
        await this.displayName.setValue(newName)
        await this.workspaceSaveButton.click()
    } 

}

export default new WorkspacePage