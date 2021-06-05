import Header from 'Components/header/header';
import FormRegistration from 'Components/form-registration/form-registration'

export default class Registration {
  constructor() {
    this.init();
  }

  init() {
    const header = document.querySelector('.js-header');
    const formRegistration = document.querySelector('.js-form-registration');
    new Header(header);
    new FormRegistration(formRegistration);
  }
}