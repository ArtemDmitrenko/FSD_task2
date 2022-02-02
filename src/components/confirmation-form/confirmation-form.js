import DateDropdown from "Components/date-dropdown/date-dropdown";
import Dropdown from "Components/dropdown/dropdown";

export default class СonfirmationForm {
  constructor(form) {
    this.form = form.querySelector(".js-confirmation-form");
    this.init();
    this.initDateDropdown();
    this.initDropdown();
  }

  init() {
    this.dateDropdown = this.form.querySelector(".js-confirmation-form__dates");
    this.dropdown = this.form.querySelector(".js-confirmation-form__guests");
  }

  initDateDropdown() {
    this.dateDropdown = new DateDropdown(this.dateDropdown);
  }

  initDropdown() {
    new Dropdown(this.dropdown);
  }

  getStayingInputFrom() {
    return this.dateDropdown.getStayingInputFrom();
  }
}
