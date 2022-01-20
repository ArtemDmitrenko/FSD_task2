import Diagram from "Components/diagram/diagram";
import HeaderInit from "Components/header/header-init";
import Review from "Components/review/review";
import FormConfirmation from "Components/confirmation-form/confirmation-form";

export default class RoomDetails {
  constructor() {
    this.init();
  }

  init() {
    const formConfirmation = document.querySelector(
      ".js-room-details__confirmation-form"
    );
    const diagram = document.querySelector(".js-room-details__diagram");
    const reviews = document.querySelectorAll(
      ".js-room-details__review-block-item"
    );
    new FormConfirmation(formConfirmation);
    new Diagram(diagram);
    new HeaderInit();
    reviews.forEach((review) => {
      new Review(review);
    });
  }
}
