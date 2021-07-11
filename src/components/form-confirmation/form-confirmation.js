import DateDropdown from "Components/date-dropdown/date-dropdown";
import Dropdown from "Components/dropdown/dropdown";

export default class FormConfirmation {
  constructor(form) {
    this.form = form;
    this.init();
  }

  init() {
    this.findDateDropdown();
    this.findDropdown();
  }

  findDateDropdown() {
    const dateDropdowns = this.form.querySelectorAll(".js-date-dropdown");
    dateDropdowns.forEach((dateDropdown, index) => {
      new DateDropdown(dateDropdown, index);
    });
  }

  findDropdown() {
    const dropdown = this.form.querySelector(".js-dropdown");
    new Dropdown(dropdown);
  }
}
