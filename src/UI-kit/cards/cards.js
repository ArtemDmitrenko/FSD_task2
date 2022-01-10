import Room from "Components/room/room";
import FormConfirmation from "Components/confirmation-form/confirmation-form";
import FormRoomSearch from "Components/room-search-form/room-search-form";
import FormRegistration from "Components/registration-form/registration-form";

export default class Cards {
  constructor() {
    this.init();
  }

  init() {
    const rooms = document.querySelectorAll(".js-cards__room");
    const formConfirmation = document.querySelector(".js-cards__confirmation");
    const formRoomSearch = document.querySelector(".js-cards__room-search");
    const formRegistration = document.querySelector(".js-cards__registration");
    rooms.forEach((room) => {
      new Room(room);
    });
    new FormConfirmation(formConfirmation);
    new FormRoomSearch(formRoomSearch);
    new FormRegistration(formRegistration);
  }
}
