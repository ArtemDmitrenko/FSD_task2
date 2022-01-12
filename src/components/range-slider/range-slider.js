import "ion-rangeslider";

export default class RangeSlider {
  constructor(item) {
    this.item = item.querySelector(".js-range-slider__item");
    this.init();
  }

  init() {
    this.showRangeSlider();
    this.showSighWithValues();
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
    };
    $(this.item).ionRangeSlider(options);
    $(this.item).on("change", this.getFromAndTo);
  }

  showSighWithValues() {
    this.sign = document.createElement("div");
    this.sign.classList.add("sign");
    this.slider = this.item.previousElementSibling;
    this.slider.append(this.sign);
    const from = $(".js-range-slider__item").data("from");
    const to = $(".js-range-slider__item").data("to");
    this.updateSign(from, to);
  }

  getFromAndTo = () => {
    const from = $(this.item).data("from");
    const to = $(this.item).data("to");
    this.updateSign(from, to);
  };

  updateSign(from, to) {
    const prettyFrom = this.prettify(from);
    const prettyTo = this.prettify(to);
    this.sign.textContent = `${prettyFrom}₽ - ${prettyTo}₽`;
  }

  prettify(num) {
    let n = num.toString();
    let separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
  }
}
