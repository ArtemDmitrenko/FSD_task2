import Diagram from "Components/diagram/diagram";
import headerInit from "Components/header/header-init";
import Review from "Components/review/review";
import СonfirmationForm from "Components/confirmation-form/confirmation-form";

export default class RoomDetails {
  constructor() {
    this.init();
  }

  init() {
    const сonfirmationForm = document.querySelector(
      ".js-room-details__confirmation-form"
    );
    const diagram = document.querySelector(".js-room-details__diagram");
    const reviews = document.querySelectorAll(
      ".js-room-details__review-block-item"
    );
    new СonfirmationForm(сonfirmationForm);
    new Diagram(diagram);
    headerInit();
    reviews.forEach((review) => {
      new Review(review);
    });
  }
}
