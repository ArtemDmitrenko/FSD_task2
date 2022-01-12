export default class CheckboxButton {
  constructor(checkboxList) {
    this.checkboxList = checkboxList.querySelector(".js-checkbox-list");
    this.init();
    this.addEventListeners();
  }

  init() {
    this.cbList = this.checkboxList.querySelector(
      ".js-checkbox-list_expandable .js-checkbox-list__form"
    );
    this.checkmark = this.checkboxList.querySelector(
      ".js-checkbox-list__checkmark"
    );
  }

  addEventListeners() {
    this.checkboxList.addEventListener("click", this.handleCheckboxClick);
  }

  handleCheckboxClick = () => {
    if (this.isExpanded()) {
      this.cbList.classList.toggle("checkbox-list__form_opened");
      this.checkmark.classList.toggle("checkbox-list__checkmark_direction_up");
    }
  };

  isExpanded() {
    return this.checkboxList.classList.contains("js-checkbox-list_expandable");
  }
}
