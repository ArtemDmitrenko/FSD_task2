import DateDropdown from "Components/date-dropdown/date-dropdown";
import Dropdown from "Components/dropdown/dropdown";

export default class RoomSearchForm {
  constructor(form) {
    this.form = form;
    this.init();
    this.initDateDropdowns();
    this.initDropdown();
  }

  init() {
    this.dateDropdowns = this.form.querySelectorAll(
      ".js-room-search-form__dates"
    );
    this.dropdown = this.form.querySelector(".js-room-search-form__guests");
  }

  initDateDropdowns() {
    this.dateDropdowns.forEach((dateDropdown) => {
      new DateDropdown(dateDropdown);
    });
  }

  initDropdown() {
    new Dropdown(this.dropdown);
  }
}
