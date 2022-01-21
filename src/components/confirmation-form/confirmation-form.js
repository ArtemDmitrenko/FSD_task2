import DateDropdown from "Components/date-dropdown/date-dropdown";
import Dropdown from "Components/dropdown/dropdown";

export default class СonfirmationForm {
  constructor(form) {
    this.form = form.querySelector(".js-confirmation-form");
    this.init();
    this.findDateDropdown();
    this.findDropdown();
  }

  init() {
    this.dateDropdown = this.form.querySelector(".js-confirmation-form__dates");
    this.dropdown = this.form.querySelector(".js-confirmation-form__guests");
  }

  findDateDropdown() {
    this.dateDropdown = new DateDropdown(this.dateDropdown);
  }

  findDropdown() {
    new Dropdown(this.dropdown);
  }

  getStayingInputFrom() {
    this.dateDropdown.getStayingInputFrom();
  }
}
