import Carousel from '../../components/room/room';
import FormConfirmation from '../../components/form-confirmation/form-confirmation'
import FormRoomSearch from '../../components/form-roomsearch/form-roomsearch'
import FormRegistration from '../../components/form-registration/form-registration'


export default class Cards {
  constructor() {
    this.init();
  }

  init() {
    const carousels = document.querySelectorAll('.js-room__card');
    const formConfirmation = document.querySelector('.js-form-confirmation');
    const formRoomSearch = document.querySelector('.js-form-roomsearch');
    const formRegistration = document.querySelector('.js-form-registration');
    carousels.forEach((carousel) => {
      new Carousel(carousel);
    });
    new FormConfirmation(formConfirmation);
    new FormRoomSearch(formRoomSearch);
    new FormRegistration(formRegistration);
  }
}