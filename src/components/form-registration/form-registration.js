import Input from "Components/input/input";

export default class FormRegistration {
  constructor(form) {
    this.form = form;
    this.init();
    this.findMaskedInput();
  }

  init() {
    this.maskedInput = this.form.querySelector('[name|="birthday"]');
  }

  findMaskedInput() {
    new Input(this.maskedInput);
  }
}
