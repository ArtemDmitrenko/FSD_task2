export default class CheckboxButton {
  constructor(checkboxList) {
    this.checkboxList = checkboxList.querySelector(".js-checkbox-button");
    this.init();
    this.addEventListeners();
  }

  init() {
    this.cbList = this.checkboxList.querySelector(
      ".js-checkbox-button_expandable .js-checkbox-button__form"
    );
    this.checkmark = this.checkboxList.querySelector(
      ".js-checkbox-button__checkmark"
    );
  }

  addEventListeners() {
    this.checkboxList.addEventListener("click", this.handleCheckboxClick);
  }

  handleCheckboxClick = () => {
    if (this.isExpanded()) {
      this.cbList.classList.toggle("checkbox-button__form_opened");
      this.checkmark.classList.toggle(
        "checkbox-button__checkmark_direction_up"
      );
    }
  };

  isExpanded() {
    return this.checkboxList.classList.contains(
      "js-checkbox-button_expandable"
    );
  }
}
