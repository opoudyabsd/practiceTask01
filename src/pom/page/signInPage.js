import SignInComponent from "../component/signIn/signIn.component";
class SignInPage {
  constructor() {
    this.signIn = new SignInComponent();
  }
  get homeContainer() {
    return $(".home-sticky-container");
  }
}

export default SignInPage;
