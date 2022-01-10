export default class Counter {
  constructor(item) {
    this.counter = item.querySelector(".js-counter");
    this.counterValue = item.querySelector(".js-counter__value");
    this.minus = item.querySelector("button[data-operator='minus']");
    this.plus = item.querySelector("button[data-operator='plus']");
    this.addEventListeners();
  }

  addEventListeners() {
    this.minus.addEventListener("click", this.handleMinusClick);
    this.plus.addEventListener("click", this.handlePlusClick);
  }

  handlePlusClick = () => {
    this.counterValue.value = Number(this.counterValue.value) + 1;
    this.minus.removeAttribute("disabled", "disabled");
  };

  handleMinusClick = () => {
    this.counterValue.value = Number(this.counterValue.value) - 1;
    if (Number(this.counterValue.value) === 0) {
      this.minus.setAttribute("disabled", "disabled");
    }
  };

  disableMinusButton() {
    if (Number(this.counterValue.value) === 0) {
      this.minus.setAttribute("disabled", "disabled");
    }
  }

  get value() {
    return this.counterValue;
  }

  get isAttributeNameInfants() {
    return this.counterValue.name === "infants";
  }
}
