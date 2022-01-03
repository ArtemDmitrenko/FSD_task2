import "air-datepicker";

export default class dateDropdown {
  constructor(item, index) {
    this.item = item;
    this.index = index;
    this.init();
    this.addEventListeners();
  }

  init() {
    if (!this.item.attributes["data-separatedinputs"]) {
      this.rangeDropdown = this.item.querySelector(".js-input__element");
    }
    if (this.rangeDropdown) {
      this.addDateDropdownForRangeInOneInput(this.index);
    } else {
      this.inputFrom = this.item.querySelector(".js-date-dropdown__from input");
      this.inputTo = this.item.querySelector(".js-date-dropdown__to input");
      this.addDateDropdownForTwoInputs(this.index);
    }
    this.datepickerContainer = document.querySelector(
      `.datepicker${this.index}`
    );
    this.buttonApply = this.datepickerContainer.querySelector(
      'span[data-action="today"]'
    );
    this.buttonApply.textContent = "Применить";
  }

  addEventListeners() {
    this.buttonApply.addEventListener("click", this.handleButtonApplyClick);
    if (!this.rangeDropdown) {
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
    this.myDatapicker = $(this.rangeDropdown)
      .datepicker(options)
      .data("datepicker");
  }

  addDateDropdownForTwoInputs(index) {
    const options = {
      clearButton: true,
      todayButton: true,
      range: true,
      classes: `datepicker${index} date-dropdown__container`,
      bindedInputFrom: this.inputFrom,
      bindedInputTo: this.inputTo,
      prevHtml: `<span class="date-dropdown__arrow">arrow_back</span>`,
      nextHtml: `<span class="date-dropdown__arrow">arrow_forward</span>`,
      onSelect: function (fd, d, picker) {
        $(this.bindedInputFrom).val(fd.split(",")[0]);
        $(this.bindedInputTo).val(fd.split(",")[1]);
      },
    };
    this.myDatapicker = $(this.inputFrom)
      .datepicker(options)
      .data("datepicker");
  }

  handleButtonApplyClick = () => {
    this.myDatapicker.hide();
  };

  handleInputToClick = () => {
    this.myDatapicker.show();
  };
}
