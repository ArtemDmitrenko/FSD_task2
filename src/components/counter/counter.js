export default class Counter {
  constructor(item) {
    this.counterInput = item.querySelector(".js-counter__value");
    this.minus = item.querySelector(".js-counter__decrement");
    this.plus = item.querySelector(".js-counter__increment");
    this.addEventListeners();
  }

  addEventListeners() {
    this.minus.addEventListener("click", this.handleMinusClick);
    this.plus.addEventListener("click", this.handlePlusClick);
  }

  handlePlusClick = () => {
    this.counterInput.value = Number(this.counterInput.value) + 1;
    this.minus.removeAttribute("disabled", "disabled");
  };

  handleMinusClick = () => {
    this.counterInput.value = Number(this.counterInput.value) - 1;
    if (Number(this.counterInput.value) === 0) {
      this.minus.setAttribute("disabled", "disabled");
    }
  };

  disableMinusButton() {
    if (Number(this.counterInput.value) === 0) {
      this.minus.setAttribute("disabled", "disabled");
    }
  }

  clearInput() {
    this.counterInput.value = 0;
  }

  getDatasetArray() {
    return this.counterInput.dataset.declination.split(", ");
  }

  isAttributeNameInfants() {
    return this.counterInput.name === "infants";
  }

  get counterValue() {
    return Number(this.counterInput.value);
  }
}
