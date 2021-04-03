$('.input__dateDropdown_from').datepicker({
  clearButton: true,
  todayButton: true,
  range: true,
  onSelect: function(fd, d, picker) {
    $('.input__dateDropdown_from').val(fd.split(",")[0]);
    $('.input__dateDropdown_to').val(fd.split(",")[1]);
  }
});

$('.input__dateDropdown_range').datepicker({
  clearButton: true,
  todayButton: true,
  range: true,
  multipleDatesSeparator: ' - ',
  dateFormat: 'dd M'
});

let myDatapicker = $('.input__dateDropdown_from').datepicker().data('datepicker');
let myDatapickerRange = $('.input__dateDropdown_range').datepicker().data('datepicker');

if (myDatapicker) {
  // Подключаем кнопку 'Применить' в datepicker
  const dateApply = event => {
    const { target } = event;
    const btnApply = document.querySelector('span[data-action="today"]');
    if (target === btnApply) {
      myDatapicker.hide();
    }
  };
  const inputTo = document.querySelector('.input__dateDropdown_to');
  const showDatapicker = () => {
    myDatapicker.show();
  };
  if (inputTo) {
    inputTo.addEventListener("click", showDatapicker);
  }
  document.addEventListener("click", dateApply);
}

if (myDatapickerRange) {
  // Подключаем кнопку 'Применить' в datepickerRange
  const dateApplyRange = event => {
    const { target } = event;
    const btnApply = document.querySelector('span[data-action="today"]');
    if (target === btnApply) {
      myDatapickerRange.hide();
    }
  };
  document.addEventListener("click", dateApplyRange);
}