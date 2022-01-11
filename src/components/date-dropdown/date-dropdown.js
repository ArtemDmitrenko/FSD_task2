import "air-datepicker";

import Input from "Components/input/input";

export default class DateDropdown {
  constructor(item, index) {
    this.item = item.querySelector(".js-date-dropdown");
    this.index = index;
    this.init();
    this.addEventListeners();
  }

  init() {
    if (this.isSeparatedInputs()) {
      const dateDropdownFrom = this.item.querySelector(
        ".js-date-dropdown__from"
      );
      const dateDropdownTo = this.item.querySelector(".js-date-dropdown__to");
      const from = new Input(dateDropdownFrom);
      const to = new Input(dateDropdownTo);
      this.inputFrom = from.inputElement;
      this.inputTo = to.inputElement;
      this.addDateDropdownForTwoInputs(this.index);
    } else {
      const input = new Input(this.item);
      this.rangeInput = input.inputElement;
      this.addDateDropdownForRangeInOneInput(this.index);
    }
    this.datepickerContainer = document.querySelector(
      `.datepicker${this.index}`
    );
    this.buttonApply = this.datepickerContainer.querySelector(
      'span[data-action="today"]'
    );
    this.buttonApply.textContent = "Применить";
  }

  isSeparatedInputs() {
    return this.item.attributes["data-separatedinputs"];
  }

  addEventListeners() {
    this.buttonApply.addEventListener("click", this.handleButtonApplyClick);
    if (!this.rangeInput) {
      this.inputTo.addEventListener("click", this.handleInputToClick);
    }
  }

  addDateDropdownForRangeInOneInput(index) {
    const options = {
      clearButton: true,
      todayButton: true,
      range: true,
      multipleDatesSeparator: " - ",
      dateFormat: "dd M",
      classes: `datepicker${index} date-dropdown__container`,
      prevHtml: `<span class="date-dropdown__arrow">arrow_back</span>`,
      nextHtml: `<span class="date-dropdown__arrow">arrow_forward</span>`,
    };
    this.myDatapicker = $(this.rangeInput)
      .datepicker(options)
      .data("datepicker");
  }

  addDateDropdownForTwoInputs(index) {
    const options = {
      clearButton: true,
      todayButton: true,
      range: true,
      classes: `datepicker${index} date-dropdown__container`,
      prevHtml: `<span class="date-dropdown__arrow">arrow_back</span>`,
      nextHtml: `<span class="date-dropdown__arrow">arrow_forward</span>`,
      onSelect: this.handleDateClick,
    };
    this.myDatapicker = $(this.inputFrom)
      .datepicker(options)
      .data("datepicker");
  }

  handleDateClick = () => {
    const date = this.myDatapicker._prevOnSelectValue;
    $(this.inputFrom).val(date.split(",")[0]);
    $(this.inputTo).val(date.split(",")[1]);
  };

  handleButtonApplyClick = () => {
    this.myDatapicker.hide();
  };

  handleInputToClick = () => {
    this.myDatapicker.show();
  };
}
