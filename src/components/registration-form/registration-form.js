import Input from "Components/input/input";

export default class FormRegistration {
  constructor(form) {
    this.form = form;
    this.init();
    this.findMaskedInput();
  }

  init() {
    this.maskedInput = this.form.querySelector(
      ".js-registration-form__birthday"
    );
  }

  findMaskedInput() {
    new Input(this.maskedInput, "masked");
  }
}
