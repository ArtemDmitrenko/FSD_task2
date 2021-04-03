$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  // grid: true,
  postfix: "₽",
  values_separator: " - ",
  decorate_both: true,
  hide_min_max: true,
  hide_from_to: true,
  skin: "big",
  extra_classes: "range-slider",
});

// Show sign with values from and to
const sign = document.createElement('div');
sign.classList.add('sign');
const slider = document.querySelector('.range-slider');
slider.append(sign);
const from = $(".js-range-slider").data('from');
const to = $(".js-range-slider").data('to');
updateSign(from, to);

$(".js-range-slider").on('change', function() {
  const from = $(this).data('from');
  const to = $(this).data('to');
  updateSign(from, to)
})

function updateSign(from, to) {
  const prettyFrom = prettify(from)
  const prettyTo = prettify(to)
  sign.textContent = `${prettyFrom}₽ - ${prettyTo}₽`
}

function prettify(num) {
  var n = num.toString();
  var separator = " ";
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}

// Show title of slider
const title = document.createElement('div');
title.classList.add('title');
slider.append(title);
if (document.querySelector('.form-elements__range-slider')) {
  title.textContent = 'Range slider'
} else {
  title.textContent = 'Диапазон цены'
}

// Show description
const description = document.createElement('div');
description.classList.add('description');
slider.append(description);
if (document.querySelector('.form-elements__range-slider')) {
  description.textContent = ''
} else {
  description.textContent = 'Стоимость за сутки пребывания в номере';
}