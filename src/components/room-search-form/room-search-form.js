import DateDropdown from "Components/date-dropdown/date-dropdown";
import Dropdown from "Components/dropdown/dropdown";

export default class FormRoomSearch {
  constructor(form) {
    this.form = form.querySelector(".js-room-search-form");
    this.init();
    this.findDateDropdown();
    this.findDropdown();
  }

  init() {
    this.dateDropdowns = this.form.querySelectorAll(
      ".js-room-search-form__dates"
    );
    this.dropdown = this.form.querySelector(".js-room-search-form__guests");
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
