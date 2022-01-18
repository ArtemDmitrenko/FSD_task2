export default class CheckboxList {
  constructor(checkboxListContainer) {
    this.checkboxList =
      checkboxListContainer.querySelector(".js-checkbox-list");
    this.init();
    this.addEventListeners();
  }

  init() {
    this.checkboxListForm = this.checkboxList.querySelector(
      ".js-checkbox-list_expandable .js-checkbox-list__form"
    );
    this.checkmark = this.checkboxList.querySelector(
      ".js-checkbox-list__checkmark"
    );
  }

  addEventListeners() {
    if (this.isExpandable()) {
      this.checkboxList.addEventListener("click", this.handleCheckboxClick);
    }
  }

  handleCheckboxClick = () => {
    this.checkboxListForm.classList.toggle("checkbox-list__form_opened");
    this.checkmark.classList.toggle("checkbox-list__checkmark_direction_up");
  };

  isExpandable() {
    return this.checkboxList.classList.contains("js-checkbox-list_expandable");
  }
}
