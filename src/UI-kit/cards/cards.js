import Carousel from 'Components/room/room';
import FormConfirmation from 'Components/confirmation-form/confirmation-form'
import FormRoomSearch from 'Components/room-search-form/room-search-form'
import FormRegistration from 'Components/registration-form/registration-form'


export default class Cards {
  constructor() {
    this.init();
  }

  init() {
    const carousels = document.querySelectorAll('.js-room__card');
    const formConfirmation = document.querySelector('.js-confirmation-form');
    const formRoomSearch = document.querySelector('.js-room-search-form');
    const formRegistration = document.querySelector('.js-registration-form');
    carousels.forEach((carousel) => {
      new Carousel(carousel);
    });
    new FormConfirmation(formConfirmation);
    new FormRoomSearch(formRoomSearch);
    new FormRegistration(formRegistration);
  }
}