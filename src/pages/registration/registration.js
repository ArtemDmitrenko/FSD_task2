import Header from '../../components/header/header';
import FormRegistration from '../../components/form-registration/form-registration'

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