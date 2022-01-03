export default class Dropdown {
  constructor(item) {
    this.item = item;
    this.init();
    this.addEventListeners();
    this.disableMinusButton();
  }

  init() {
    this.dropdownList = this.item.querySelector(".js-dropdown__list");
    this.input = this.item.querySelector(".js-input__element");
    this.dropdownInput = this.item.querySelector(".js-dropdown__input");
    this.isApplied = false;
    this.counterArr = this.dropdownList.querySelectorAll(".js-counter");
    this.counterValueArr =
      this.dropdownList.querySelectorAll(".js-counter__value");
    if (this.isWithButtons) {
      this.infants = this.item.querySelector('input[name = "infants"]');
      this.buttonApply = this.dropdownList.querySelector(
        'button[name = "apply"]'
      );
      this.buttonClear = this.dropdownList.querySelector(
        'button[name = "clear"]'
      );
      this.defaultValue = this.dropdownInput.dataset.value;
    }
  }

  addEventListeners() {
    this.dropdownInput.addEventListener("click", this.toggleDropdown);
    document.addEventListener("click", this.handleDocumentClick);
    this.dropdownList.addEventListener("click", this.handleMinusOrPlusClick);
    if (this.isWithButtons) {
      this.buttonClear.addEventListener("click", this.handleButtonClearClick);
    }
  }

  toggleDropdown = () => {
    this.input.classList.toggle("input__element_border-radius_0");
    this.input.classList.toggle("input__element_with-bright-border");
    this.dropdownList.classList.toggle("dropdown__list_opened");
    if (this.isDropdownOpened()) {
      this.updateInput();
    }
  };

  handleDocumentClick = (e) => {
    const { target } = e;
    const closestDropdown = target.closest(".js-dropdown");
    const conditionForClosingDropdown1 =
      this.isDropdownOpened() && !closestDropdown;
    const conditionForClosingDropdown2 =
      this.isDropdownOpened() &&
      this.isWithButtons &&
      target === this.buttonApply;
    if (conditionForClosingDropdown1) {
      this.closeDropdown();
    }
    if (conditionForClosingDropdown2) {
      this.isApplied = true;
      this.toggleDropdown();
    }
  };

  closeDropdown() {
    if (this.isApplied) {
      this.toggleDropdown();
    } else {
      if (this.isWithButtons) {
        this.input.value = this.defaultValue;
      }
      this.toggleDropdown();
    }
  }

  handleMinusOrPlusClick = (e) => {
    const { target } = e;
    const counter = target.closest(".js-counter__enter");
    if (counter) {
      const minus = counter.querySelector(".js-counter__button");
      const counterValue = counter.querySelector(".js-counter__value");
      if (target.innerHTML === "+") {
        this.increment(counterValue, minus);
      }
      if (target.innerHTML === "-") {
        this.decrement(counterValue, minus);
      }
      this.updateInput();
    }
  };

  increment(counterValue, minus) {
    counterValue.value = Number(counterValue.value) + 1;
    minus.removeAttribute("disabled", "disabled");
  }

  decrement(counterValue, minus) {
    counterValue.value = Number(counterValue.value) - 1;
    if (Number(counterValue.value) === 0) {
      minus.setAttribute("disabled", "disabled");
    }
  }

  handleButtonClearClick = () => {
    this.input.value = this.defaultValue;
    this.counterValueArr.forEach((item) => {
      item.value = 0;
    });
    this.disableMinusButton();
    this.hideButtonClear();
  };

  isDropdownOpened() {
    return this.input.classList.contains("input__element_border-radius_0");
  }

  get isWithButtons() {
    return this.item.dataset.buttons === "";
  }

  hideButtonClear() {
    this.buttonClear.classList.add("button_hidden");
  }

  disableMinusButton() {
    this.counterValueArr.forEach((item) => {
      if (Number(item.value) === 0) {
        item.previousElementSibling.setAttribute("disabled", "disabled");
      }
    });
  }

  updateInput() {
    if (this.isWithButtons) {
      let infants = Number(this.infants.value);
      let sum = 0;
      this.counterValueArr.forEach((item) => {
        sum += Number(item.value);
      });
      const declinationArr = this.dropdownInput.dataset.declination.split(", ");
      const infantsDeclinationArr =
        this.infants.dataset.declination.split(", ");
      const mainText = this.declinate(declinationArr, sum);
      const infantsText = this.declinate(infantsDeclinationArr, infants);
      if (infants === 0) {
        this.input.value = `${mainText}`;
      } else {
        this.input.value = `${mainText}, ${infantsText}`;
      }
      if (sum === 0) {
        this.input.value = this.defaultValue;
        this.hideButtonClear();
      } else {
        this.buttonClear.classList.remove("button_hidden");
      }
    } else {
      const itemsText = [];
      this.counterValueArr.forEach((item) => {
        const numberItemValue = Number(item.value);
        if (numberItemValue !== 0) {
          const declinationArr = item.dataset.declination.split(", ");
          itemsText.push(this.declinate(declinationArr, numberItemValue));
        }
      });
      if (itemsText.length === 1) {
        this.input.value = itemsText[0];
      } else if (itemsText.length === 2) {
        this.input.value = `${itemsText[0]}, ${itemsText[1]}`;
      } else if (itemsText.length >= 3) {
        this.input.value = `${itemsText[0]}, ${itemsText[1]}...`;
      } else {
        this.input.value = "";
      }
    }
  }

  declinate(type, sum) {
    const remain = sum % 10 === 2 || sum % 10 === 3 || sum % 10 === 4;
    let result;
    if (sum > 10 && sum < 15) {
      result = `${sum} ${type[2]}`;
    } else if (sum % 10 === 1) {
      result = `${sum} ${type[0]}`;
    } else if (remain) {
      result = `${sum} ${type[1]}`;
    } else {
      result = `${sum} ${type[2]}`;
    }
    return result;
  }
}
