import "air-datepicker";

export default class dateDropdown {
  constructor(item, index) {
    this.item = item;
    this.index = index;
    this.init();
  }

  init() {
    this.rangeDropdown = this.item.querySelector(
      ".js-input__date-dropdown_with-range"
    );
    if (this.rangeDropdown) {
      this.addDateDropdownForRangeInOneInput(this.index);
    } else {
      this.inputFrom = this.item.querySelector(
        ".js-input__date-dropdown_value_from"
      );
      this.inputTo = this.item.querySelector(
        ".js-input__date-dropdown_value_to"
      );
      this.addDateDropdownForTwoInputs(this.index);
    }
    this.datepickerContainer = document.querySelector(
      `.datepicker${this.index}`
    );
    this.btnApply = this.datepickerContainer.querySelector(
      'span[data-action="today"]'
    );

    this.addEventListenerToBtnApply();
  }

  addDateDropdownForRangeInOneInput(index) {
    const options = {
      clearButton: true,
      todayButton: true,
      range: true,
      multipleDatesSeparator: " - ",
      dateFormat: "dd M",
      classes: `datepicker${index}`,
      prevHtml: `<span class="arrow_direction_left arrow_color_purple"></span>`,
      nextHtml: `<span class="arrow_direction_right arrow_color_purple"></span>`,
    };
    this.myDatapicker = $(this.rangeDropdown)
      .datepicker(options)
      .data("datepicker");
  }

  addDateDropdownForTwoInputs(index) {
    const options = {
      clearButton: true,
      todayButton: true,
      range: true,
      classes: `datepicker${index}`,
      bindedInputFrom: this.inputFrom,
      bindedInputTo: this.inputTo,
      prevHtml: `<span class="arrow_direction_left arrow_color_purple"></span>`,
      nextHtml: `<span class="arrow_direction_right arrow_color_purple"></span>`,
      onSelect: function (fd, d, picker) {
        $(this.bindedInputFrom).val(fd.split(",")[0]);
        $(this.bindedInputTo).val(fd.split(",")[1]);
      },
    };
    this.myDatapicker = $(this.inputFrom)
      .datepicker(options)
      .data("datepicker");
    this.addEventListenerToSecondInput();
  }

  addEventListenerToBtnApply() {
    this.btnApply.textContent = "Применить";
    this.btnApply.addEventListener("click", this.dateApply);
  }

  addEventListenerToSecondInput() {
    this.inputTo.addEventListener("click", this.showDatepicker);
  }

  dateApply = () => {
    this.myDatapicker.hide();
  };

  showDatepicker = () => {
    this.myDatapicker.show();
  };
}
