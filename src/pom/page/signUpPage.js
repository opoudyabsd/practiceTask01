import SignUpComponent from "../component/signUP/signUp.component";
class SignUpPage {
  constructor() {
    this.signUp = new SignUpComponent();
  }
  get workSpaceHeader() {
    return $("div .IxRgeAVbrErAiv");
  }
}

export default SignUpPage;
