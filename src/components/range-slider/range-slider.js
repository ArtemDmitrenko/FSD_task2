import "./../../import-jquery";
import "ion-rangeslider/js/ion.rangeSlider.js";

export default class RangeSlider {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    this.showRangeSlider();
    this.showSighWithValues();
    this.showTitleOfSlider();
    this.showDescription();
  }

  showRangeSlider() {
    const options = {
      type: "double",
      min: 0,
      max: 15000,
      from: 5000,
      to: 10000,
      postfix: "₽",
      values_separator: " - ",
      decorate_both: true,
      hide_min_max: true,
      hide_from_to: true,
      skin: "big",
      extra_classes: "js-irs__scale",
    }
    $(this.item).ionRangeSlider(options);
  }

  showSighWithValues() {
    this.sign = document.createElement('div');
    this.sign.classList.add('sign');
    this.slider = this.item.previousElementSibling;
    this.slider.append(this.sign);
    const from = $(".js-range-slider").data('from');
    const to = $(".js-range-slider").data('to');
    this.updateSign(from, to);
  }

  updateSign(from, to) {
    const prettyFrom = this.prettify(from)
    const prettyTo = this.prettify(to)
    this.sign.textContent = `${prettyFrom}₽ - ${prettyTo}₽`
  }

  prettify(num) {
    let n = num.toString();
    let separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
  }

  showTitleOfSlider() {
    const title = document.createElement('div');
    title.classList.add('title');
    this.slider.append(title);
    const parentElement = this.item.parentElement;
    if (parentElement.classList.contains('js-form-elements__range-slider')) {

      title.textContent = 'Range slider'
    } else {
      title.textContent = 'Диапазон цены'
    }
  }

  showDescription() {
    const description = document.createElement('div');
    description.classList.add('description');
    this.slider.append(description);
    const parentElement = this.item.parentElement;
    if (parentElement.classList.contains('js-form-elements__range-slider')) {
      description.textContent = ''
    } else {
      description.textContent = 'Стоимость за сутки пребывания в номере';
    }
  }
}