import "air-datepicker";

import Input from "Components/input/input";

export default class DateDropdown {
  constructor(item) {
    this.item = item.querySelector(".js-date-dropdown");
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
      this.addDateDropdownForTwoInputs();
    } else {
      const input = new Input(this.item);
      this.rangeInput = input.inputElement;
      this.addDateDropdownForRangeInOneInput();
    }
    this.addButtonApply();
  }

  addButtonApply() {
    const buttonApply =
      '<span class="datepicker--button" data-action="hide">Применить</span>';
    const clearButtonsArray = document.querySelectorAll(
      '.datepicker--button[data-action="clear"]'
    );
    clearButtonsArray.forEach((item) => {
      const buttonsContainer = item.closest(".datepicker--buttons");
      const applyButton = buttonsContainer.querySelector(
        '.datepicker--button[data-action="hide"]'
      );
      if (!applyButton) {
        item.insertAdjacentHTML("beforebegin", buttonApply);
      }
    });
  }

  isSeparatedInputs() {
    return this.item.attributes["data-separatedinputs"];
  }

  addEventListeners() {
    if (!this.rangeInput) {
      this.inputTo.addEventListener("click", this.handleInputToClick);
    }
  }

  addDateDropdownForRangeInOneInput() {
    const options = {
      clearButton: true,
      range: true,
      multipleDatesSeparator: " - ",
      dateFormat: "dd M",
      classes: `datepicker date-dropdown__container`,
      prevHtml: `<span class="date-dropdown__arrow">arrow_back</span>`,
      nextHtml: `<span class="date-dropdown__arrow">arrow_forward</span>`,
    };
    this.myDatapicker = $(this.rangeInput)
      .datepicker(options)
      .data("datepicker");
  }

  addDateDropdownForTwoInputs() {
    const options = {
      clearButton: true,
      range: true,
      classes: `datepicker date-dropdown__container`,
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

  selectDate(date) {
    this.myDatapicker.selectDate(date);
  }

  offset(value) {
    this.myDatapicker.update({
      offset: value,
    });
  }

  showDatepicker() {
    this.myDatapicker.show();
  }

  getStayingInputFrom() {
    return this.inputFrom;
  }
}
