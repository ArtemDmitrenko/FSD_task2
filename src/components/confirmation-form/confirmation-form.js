import DateDropdown from "Components/date-dropdown/date-dropdown";
import Dropdown from "Components/dropdown/dropdown";

export default class FormConfirmation {
  constructor(form) {
    this.form = form;
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
    this.dateDropdowns.forEach((dateDropdown, index) => {
      new DateDropdown(dateDropdown, index);
    });
  }

  findDropdown() {
    new Dropdown(this.dropdown);
  }
}
