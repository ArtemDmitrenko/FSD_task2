import Inputmask from "inputmask";

export default class Input {
  constructor(item, masked) {
    this.input = item.querySelector(".js-input__element");
    if (masked) {
      this.initWithMask();
    }
  }

  initWithMask() {
    Inputmask({
      placeholder: "ДД.ММ.ГГГГ",
      alias: "datetime",
      inputFormat: "dd.mm.yyyy",
    }).mask(this.input);
  }

  changeBorder() {
    this.input.classList.toggle("input__element_straightened");
    this.input.classList.toggle("input__element_border-color_bright");
  }

  get inputElement() {
    return this.input;
  }

  get isZeroBorderRadius() {
    return this.input.classList.contains("input__element_straightened");
  }
}
