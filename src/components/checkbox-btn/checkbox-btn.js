export default class CheckboxBtn {
  constructor(checkboxList) {
    this.checkboxList = checkboxList;
    this.init();
  }

  init() {
    this.checkboxList.addEventListener("click", this.checkboxHandler);
    this.cbList = this.checkboxList.querySelector(
      ".js-checkbox-btn__expandableForm"
    );
    this.checkmark = this.checkboxList.querySelector(".js-checkmark");
  }

  checkboxHandler = () => {
    if (this.isExpanded()) {
      this.cbList.classList.toggle("checkbox-btn__expandableForm_show");
      this.checkmark.classList.toggle("checkmark_direction_down");
      this.checkmark.classList.toggle("checkmark_direction_up");
    }
  };

  isExpanded() {
    return this.checkboxList.firstElementChild.classList.contains(
      "js-checkbox-btn__expandableName"
    );
  }
}
