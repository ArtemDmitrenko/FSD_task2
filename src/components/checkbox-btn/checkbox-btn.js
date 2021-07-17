export default class CheckboxBtn {
  constructor(checkboxList) {
    this.checkboxList = checkboxList;
    this.init();
  }

  init() {
    this.checkboxList.addEventListener("click", this.checkboxHandler);
  }

  checkboxHandler = () => {
    if (this.isExpanded()) {
      const cbList = this.checkboxList.querySelector(
        ".js-checkbox-btn__expandableForm"
      );
      const checkmark = this.checkboxList.querySelector(".js-checkmark");
      cbList.classList.toggle("checkbox-btn__expandableForm_show");
      checkmark.classList.toggle("checkmark_direction_down");
      checkmark.classList.toggle("checkmark_direction_up");
    }
  };

  isExpanded() {
    if (
      this.checkboxList.firstElementChild.classList.contains(
        "js-checkbox-btn__expandableName"
      )
    ) {
      return true;
    }
    return false;
  }
}
