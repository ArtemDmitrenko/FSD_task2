import Input from "Components/input/input";
import Counter from "Components/counter/counter";
import Button from "Components/button/button";

export default class Dropdown {
  constructor(item) {
    this.item = item.querySelector(".js-dropdown");
    this.init();
    this.addEventListeners();
    this.disableMinusButton();
    this.updateInput();
  }

  init() {
    this.dropdownList = this.item.querySelector(".js-dropdown__list");
    this.inputInstance = new Input(this.item);
    this.input = this.inputInstance.inputElement;
    this.dropdownInput = this.item.querySelector(".js-dropdown__input");
    this.isApplied = false;
    this.withButtons = this.item.hasAttribute("data-buttons");
    const dropdownCounterArray = this.item.querySelectorAll(
      ".js-dropdown__counter-item"
    );

    this.counterArr = Array.from(dropdownCounterArray, (item) => {
      return new Counter(item);
    });
    if (this.withButtons) {
      this.findSeparateInputValue();
      this.buttonApply = this.dropdownList.querySelector(
        ".js-dropdown__button-apply"
      );
      this.buttonClear = this.dropdownList.querySelector(
        ".js-dropdown__button-clear"
      );
      this.buttonClearInstance = new Button(this.buttonClear);
      this.defaultValue = this.dropdownInput.dataset.value;
    }
  }

  findSeparateInputValue() {
    this.separateInput = this.counterArr.find((counter) =>
      counter.isSeparatedOutput()
    );
  }

  addEventListeners() {
    this.dropdownInput.addEventListener("click", this.toggleDropdown);
    document.addEventListener("click", this.handleDocumentClick);
    this.dropdownList.addEventListener("click", this.handleMinusOrPlusClick);
    if (this.withButtons) {
      this.buttonClear.addEventListener("click", this.handleButtonClearClick);
    }
  }

  toggleDropdown = () => {
    this.inputInstance.changeBorder();
    this.dropdownList.classList.toggle("dropdown__list_opened");
    if (this.isDropdownOpened()) {
      this.updateInput();
    }
  };

  handleDocumentClick = (e) => {
    const { target } = e;
    const closestDropdown = target.closest(".js-dropdown");
    const isClickedOutsideDropdown =
      this.isDropdownOpened() && !closestDropdown;
    const isApplyButtonClicked =
      this.isDropdownOpened() &&
      this.withButtons &&
      target.parentNode === this.buttonApply;
    if (isClickedOutsideDropdown) {
      this.closeDropdown();
    }
    if (isApplyButtonClicked) {
      this.isApplied = true;
      this.toggleDropdown();
    }
  };

  closeDropdown() {
    if (this.isApplied) {
      this.toggleDropdown();
    } else {
      if (this.withButtons) {
        this.input.value = this.defaultValue;
      }
      this.toggleDropdown();
    }
  }

  handleMinusOrPlusClick = (e) => {
    const { target } = e;
    if (target.closest(".js-dropdown__counter-item")) {
      this.updateInput();
    }
  };

  handleButtonClearClick = () => {
    this.input.value = this.defaultValue;
    this.counterArr.forEach((item) => {
      item.clearInput();
    });
    this.disableMinusButton();
    this.hideButtonClear();
  };

  isDropdownOpened() {
    return this.inputInstance.isZeroBorderRadius;
  }

  hideButtonClear() {
    this.buttonClearInstance.hideButton();
  }

  disableMinusButton() {
    this.counterArr.forEach((counter) => {
      counter.disableMinusButton();
    });
  }

  updateInput() {
    if (this.withButtons) {
      const separateValue = this.separateInput.counterValue;
      const sum = this.counterArr.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.counterValue;
      }, 0);
      const declinationArr = this.dropdownInput.dataset.declination.split(", ");
      const declinationArrForSeparatedInput =
        this.separateInput.getDeclinationArray();
      const mainText = this.declinate(declinationArr, sum);
      const textForSeparatedInput = this.declinate(
        declinationArrForSeparatedInput,
        separateValue
      );
      if (separateValue === 0) {
        this.input.value = `${mainText}`;
      } else {
        this.input.value = `${mainText}, ${textForSeparatedInput}`;
      }
      if (sum === 0) {
        this.input.value = this.defaultValue;
        this.hideButtonClear();
      } else {
        this.buttonClearInstance.showButton();
      }
    } else {
      const itemsText = Array.from(this.counterArr, (item) => {
        const declinationArr = item.getDeclinationArray();
        const numberItemValue = item.counterValue;
        if (numberItemValue !== 0) {
          return this.declinate(declinationArr, numberItemValue);
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
