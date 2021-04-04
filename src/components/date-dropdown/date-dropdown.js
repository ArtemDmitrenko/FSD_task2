export default class DateDropdown {
  constructor(item, index) {
    this.item = item;
    this.index = index;
    this.init();
  }

  init() {
    if (this.isRange()) {
      this.addDateDropdownForRangeInOneInput(this.index);
    } else {
      this.addDateDropdownForTwoInputs(this.index);
    }
    this.addEventListenerToBtnApply();
  }

  isRange() {
    this.rangeDropdown = this.item.querySelector('.js-input__dateDropdown_range');
    if (this.rangeDropdown) {
      return true;
    }
    return false;
  }

  addDateDropdownForRangeInOneInput(index) {
    const options = {
      clearButton: true,
      todayButton: true,
      range: true,
      multipleDatesSeparator: ' - ',
      dateFormat: 'dd M',
      classes: `datepicker${index}`,
    };
    this.myDatapicker = $(this.rangeDropdown).datepicker(options).data('datepicker');
  }

  addDateDropdownForTwoInputs(index) {
    this.inputFrom = this.item.querySelector('.js-input__dateDropdown_from');
    this.inputTo = this.item.querySelector('.js-input__dateDropdown_to');
    const options = {
      clearButton: true,
      todayButton: true,
      range: true,
      classes: `datepicker${index}`,
      bindedinputFrom: this.inputFrom,
      bindedinputTo: this.inputTo,
      onSelect: function(fd, d, picker) {
        $(this.bindedinputFrom).val(fd.split(",")[0]);
        $(this.bindedinputTo).val(fd.split(",")[1]);
      },
    };
    this.myDatapicker = $(this.inputFrom).datepicker(options).data('datepicker');
    this.addEventListenerToSecondInput(this.inputTo);
  }

  addEventListenerToBtnApply() {
    const datepickerContainer = document.querySelector(`.datepicker${this.index}`);
    const btnApply = datepickerContainer.querySelector('span[data-action="today"]');
    btnApply.textContent = 'Применить';
    btnApply.addEventListener('click', this.dateApply.bind(this));
  }

  addEventListenerToSecondInput(inputTo) {
    inputTo.addEventListener('click', this.showDatepicker.bind(this));
  }

  dateApply() {
    this.myDatapicker.hide();
  }

  showDatepicker() {
    this.myDatapicker.show();
  }
}