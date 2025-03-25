import WorkspaceEditComponent from "../component/workspace/workspaceEditForm.component";
class WorkspacePage {
  constructor() {
    this.workspaceEdit = new WorkspaceEditComponent();
  }
  get editButton() {
    return $(".Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc");
  }
  get usernameHeader() {
    return $("h2.SiP6d2d_8FAAkC");
  }
  async openHomePage() {
    await browser.url("/w/userworkspace38492828/home");
  }
}

export default WorkspacePage;
