import DateDropdown from "Components/date-dropdown/date-dropdown";
import Dropdown from "Components/dropdown/dropdown";

export default class FormRoomSearch {
  constructor(form) {
    this.form = form;
    this.init();
  }

  init() {
    this.dateDropdowns = this.form.querySelectorAll(".js-date-dropdown");
    this.dropdown = this.form.querySelector(".js-dropdown");
    this.findDateDropdown();
    this.findDropdown();
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
