import Input from "Components/input/input";

export default class FormRegistration {
  constructor(form) {
    this.form = form;
    this.init();
  }

  init() {
    this.maskedInput = this.form.querySelector('[name|="birthday"]');
    this.findMaskedInput();
  }

  findMaskedInput() {
    new Input(this.maskedInput);
  }
}
