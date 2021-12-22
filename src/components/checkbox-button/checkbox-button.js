export default class CheckboxButton {
  constructor(checkboxList) {
    this.checkboxList = checkboxList;
    this.init();
    this.addEventListeners();
  }

  init() {
    this.cbList = this.checkboxList.querySelector(
      ".js-checkbox-button__expandableForm"
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
      this.cbList.classList.toggle("checkbox-button__expandableForm_show");
      this.checkmark.classList.toggle(
        "checkbox-button__checkmark_direction_up"
      );
    }
  };

  isExpanded() {
    return this.checkboxList.firstElementChild.classList.contains(
      "js-checkbox-button__expandableName"
    );
  }
}
