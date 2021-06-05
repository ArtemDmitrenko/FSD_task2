import Carousel from 'Components/room/room';
import FormConfirmation from 'Components/form-confirmation/form-confirmation'
import FormRoomSearch from 'Components/form-roomsearch/form-roomsearch'
import FormRegistration from 'Components/form-registration/form-registration'


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