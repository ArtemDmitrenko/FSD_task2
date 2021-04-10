import Header from '../../components/header/header';

export default class SignIn {
  constructor() {
    this.init();
  }

  init() {
    const header = document.querySelector('.js-header');
    new Header(header);
  }
}