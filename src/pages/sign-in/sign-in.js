import Header from "Components/header/header";

export default class SignIn {
  constructor() {
    this.init();
  }

  init() {
    const header = document.querySelector("header");
    new Header(header);
  }
}
