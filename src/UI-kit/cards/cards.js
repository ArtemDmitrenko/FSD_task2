import Room from "Components/room/room";
import СonfirmationForm from "Components/confirmation-form/confirmation-form";
import RegistrationForm from "Components/registration-form/registration-form";
import DateDropdown from "Components/date-dropdown/date-dropdown";
import roomSearchFormInit from "Components/room-search-form/room-search-form-init";

export default class Cards {
  constructor() {
    this.init();
    this.updateDatepicker();
    this.updateConfirmationForm();
  }

  init() {
    const rooms = document.querySelectorAll(".js-cards__room");
    const сonfirmationFormContainer = document.querySelector(
      ".js-cards__confirmation"
    );
    const registrationForm = document.querySelector(".js-cards__registration");
    const dateDropdown = document.querySelector(".js-cards__datepicker");

    rooms.forEach((room) => {
      new Room(room);
    });
    this.confirmationForm = new СonfirmationForm(сonfirmationFormContainer);
    new RegistrationForm(registrationForm);
    this.datepicker = new DateDropdown(dateDropdown);
    roomSearchFormInit();
  }

  updateConfirmationForm() {
    const formConfirmInput = this.confirmationForm.getStayingInputFrom();
    formConfirmInput.value = "19.08.2019";
  }

  updateDatepicker() {
    this.datepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
    this.datepicker.offset(-45);
    this.datepicker.showDatepicker();
  }
}
