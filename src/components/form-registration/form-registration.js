import Input from '../../components/input/input';

export default class FormRegistration {
  constructor(form) {
    this.form = form;
    this.init();
  }

  init() {
    this.findMaskedInput();
  }

  findMaskedInput() {
    const maskedInput = this.form.querySelector('[name|="birthday"]');
    new Input(maskedInput);
  }
}