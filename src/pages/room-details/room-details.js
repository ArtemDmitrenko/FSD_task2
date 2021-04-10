import Diagram from '../../components/diagram/diagram';
import Header from '../../components/header/header';
import LikeButton from '../../components/like-button/like-button';
import FormConfirmation from '../../components/form-confirmation/form-confirmation'

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