import Header from "Components/header/header";
import FormRoomSearch from "Components/room-search-form/room-search-form";

export default class LandingPage {
  constructor() {
    this.init();
  }

  init() {
    const header = document.querySelector("header");
    const formRoomSearch = document.querySelector(".js-landing-page__form");
    new Header(header);
    new FormRoomSearch(formRoomSearch);
  }
}
