import Diagram from 'Components/diagram/diagram';
import Header from 'Components/header/header';
import LikeButton from 'Components/like-button/like-button';
import FormConfirmation from 'Components/form-confirmation/form-confirmation'

export default class RoomDetails {
  constructor() {
    this.init();
  }

  init() {
    const formConfirmation = document.querySelector('.js-form-confirmation');
    const diagram = document.querySelector('.js-diagram');
    const header = document.querySelector('.js-header');
    const likeButtons = document.querySelectorAll('.js-like-button__button');
    new FormConfirmation(formConfirmation);
    new Diagram(diagram);
    new Header(header);
    likeButtons.forEach((likeButton) => {
      new LikeButton(likeButton);
    });
  }
}