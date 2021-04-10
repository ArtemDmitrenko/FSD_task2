import Header from '../../components/header/header';
import FormRoomSearch from '../../components/form-roomsearch/form-roomsearch'

export default class LandingPage {
  constructor() {
    this.init();
  }

  init() {
    const header = document.querySelector('.js-header');
    const formRoomSearch = document.querySelector('.js-form-roomsearch');
    new Header(header);
    new FormRoomSearch(formRoomSearch);
  }
}