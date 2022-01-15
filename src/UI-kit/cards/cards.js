import Room from "Components/room/room";
import FormConfirmation from "Components/confirmation-form/confirmation-form";
import FormRoomSearch from "Components/room-search-form/room-search-form";
import FormRegistration from "Components/registration-form/registration-form";
import DateDropdown from "Components/date-dropdown/date-dropdown";

export default class Cards {
  constructor() {
    this.init();
    this.updateDatepicker();
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
    const dateDropdown = document.querySelector(".js-cards__datepicker");
    this.datepicker = new DateDropdown(dateDropdown);
    setTimeout(function () {
      const formConfirm = document.querySelector(
        ".confirmation-form__check-in"
      );
      const formConfirmInput = formConfirm.querySelector(".input__element");
      formConfirmInput.value = "19.08.2019";
    }, 50);
  }

  updateDatepicker() {
    this.datepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
    this.datepicker.offset(-45);
    this.datepicker.showDatepicker();
  }
}
