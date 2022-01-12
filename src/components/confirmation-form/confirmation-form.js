import DateDropdown from "Components/date-dropdown/date-dropdown";
import Dropdown from "Components/dropdown/dropdown";

export default class FormConfirmation {
  constructor(form) {
    this.form = form.querySelector(".js-confirmation-form");
    this.init();
    this.findDateDropdown();
    this.findDropdown();
  }

  init() {
    this.dateDropdowns = this.form.querySelectorAll(
      ".js-confirmation-form__dates"
    );
    this.dropdown = this.form.querySelector(".js-confirmation-form__guests");
  }

  findDateDropdown() {
    this.dateDropdowns.forEach((dateDropdown) => {
      new DateDropdown(dateDropdown);
    });
  }

  findDropdown() {
    new Dropdown(this.dropdown);
  }
}
