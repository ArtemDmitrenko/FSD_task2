import Header from 'Components/header/header';
import FormRegistration from 'Components/registration-form/registration-form'

export default class Registration {
  constructor() {
    this.init();
  }

  init() {
    const header = document.querySelector('.js-header');
    const formRegistration = document.querySelector('.js-registration-form');
    new Header(header);
    new FormRegistration(formRegistration);
  }
}