import Input from "Components/input/input";

export default class RegistrationForm {
  constructor(form) {
    this.form = form.querySelector(".js-registration-form");
    this.init();
    this.initMaskedInput();
  }

  init() {
    this.maskedInput = this.form.querySelector(
      ".js-registration-form__birthday"
    );
  }

  initMaskedInput() {
    new Input(this.maskedInput, "masked");
  }
}
