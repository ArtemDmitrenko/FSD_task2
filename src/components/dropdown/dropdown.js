export default class Dropdown {
  constructor(item) {
    this.item = item;
    this.init();
    this.addEventListeners();
    this.disableMinusBtn();
  }

  init() {
    this.dropdownList = this.item.querySelector(".js-dropdown__list");
    this.input = this.item.querySelector(".js-input__element");
    this.dropdownInput = this.item.querySelector(".js-dropdown__input");
    this.isApplied = false;
    this.counterValueArr =
      this.dropdownList.querySelectorAll(".js-counter__value");
    if (this.isGuestsDropdown()) {
      this.infants = this.item.querySelector('input[name = "Infants"]');
      this.allGuests = this.item.querySelector('input[name = "guests"]');
      this.btnApply = this.dropdownList.querySelector('button[name = "apply"]');
      this.btnClear = this.dropdownList.querySelector('button[name = "clear"]');
    } else {
      this.bedroomsInput = this.item.querySelector('input[name = "Bedrooms"]');
      this.bedsInput = this.item.querySelector('input[name = "Beds"]');
      this.bathroomsInput = this.item.querySelector(
        'input[name = "Bathrooms"]'
      );
      this.allRoomsBeds = this.item.querySelector('input[name = "roomsBeds"]');
      this.counterValueArr = this.item.querySelectorAll(".js-counter__value");
    }
  }

  addEventListeners() {
    this.dropdownInput.addEventListener("click", this.handleDropdownClick);
    document.addEventListener("click", this.handleDocumentClick);
    this.dropdownList.addEventListener("click", this.handleMinusOrPlusClick);
    if (this.isGuestsDropdown()) {
      this.btnClear.addEventListener("click", this.handleBtnClearClick);
    }
  }

  handleDropdownClick = () => {
    this.input.classList.toggle("input__element_border-radius_0");
    this.input.classList.toggle("input__element_with-bright-border");
    this.dropdownList.classList.toggle("dropdown__list_show");
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
      this.isGuestsDropdown() &&
      target === this.btnApply;
    if (conditionForClosingDropdown1) {
      if (this.isApplied) {
        this.handleDropdownClick();
      } else {
        if (this.isGuestsDropdown()) {
          this.input.value = "Сколько гостей";
        }
        this.handleDropdownClick();
      }
    }
    if (conditionForClosingDropdown2) {
      this.isApplied = true;
      this.handleDropdownClick();
    }
  };

  handleMinusOrPlusClick = (e) => {
    const { target } = e;
    const counter = target.closest(".js-counter__enter");
    if (counter) {
      const minus = counter.querySelector(".js-counter__btn_value_minus");
      const plus = counter.querySelector(".js-counter__btn_value_plus");
      const counterValue = counter.querySelector(".js-counter__value");
      if (target === plus) {
        counterValue.value = Number(counterValue.value) + 1;
        minus.removeAttribute("disabled", "disabled");
      }
      if (target === minus) {
        counterValue.value = Number(counterValue.value) - 1;
        if (Number(counterValue.value) === 0) {
          minus.setAttribute("disabled", "disabled");
        }
      }
      this.updateInput();
    }
  };

  handleBtnClearClick = () => {
    this.allGuests.value = "Сколько гостей";
    this.counterValueArr.forEach((item) => {
      item.value = 0;
    });
    this.disableMinusBtn();
    this.hideBtnClear();
  };

  isDropdownOpened() {
    return this.input.classList.contains("input__element_border-radius_0");
  }

  isGuestsDropdown() {
    return this.input.getAttribute("name") === "guests";
  }

  hideBtnClear() {
    this.btnClear.classList.add("btn_hidden");
  }

  disableMinusBtn() {
    this.counterValueArr.forEach((item) => {
      if (Number(item.value) === 0) {
        item.previousElementSibling.setAttribute("disabled", "disabled");
      }
    });
  }

  updateInput() {
    const guestsArr = ["гостей", "гость", "гостя"];
    const infantsArr = ["младенцев", "младенец", "младенца"];
    const bedroomsArr = ["спален", "спальня", "спальни"];
    const bedsArr = ["кроватей", "кровать", "кровати"];
    const bathroomsArr = ["ванных комнат", "ванная комната", "ванные комнаты"];
    if (this.isGuestsDropdown()) {
      let infants = Number(this.infants.value);
      let sum = 0;
      this.counterValueArr.forEach((item) => {
        sum += Number(item.value);
      });
      const guestsText = this.declinate(guestsArr, sum);
      const infantsText = this.declinate(infantsArr, infants);
      if (infants === 0) {
        this.allGuests.value = `${guestsText}`;
      } else {
        this.allGuests.value = `${guestsText}, ${infantsText}`;
      }
      if (sum === 0) {
        this.allGuests.value = "Сколько гостей";
        this.hideBtnClear();
      } else {
        this.btnClear.classList.remove("btn_hidden");
      }
    } else {
      const bedrooms = Number(this.bedroomsInput.value);
      const beds = Number(this.bedsInput.value);
      const bathrooms = Number(this.bathroomsInput.value);
      let sum = 0;
      this.counterValueArr.forEach((item) => {
        sum += Number(item.value);
      });
      const bedroomsText = this.declinate(bedroomsArr, bedrooms);
      const bedsText = this.declinate(bedsArr, beds);
      const bathroomsText = this.declinate(bathroomsArr, bathrooms);
      const obj = {
        sum,
        bedrooms,
        beds,
        bathrooms,
        bedroomsText,
        bedsText,
        bathroomsText,
      };
      this.allRoomsBeds.value = this.fillRoomsBedsInput(obj);
    }
  }

  fillRoomsBedsInput(obj) {
    if (obj.sum !== 0) {
      switch (obj.sum) {
        case obj.bedrooms:
          return `${obj.bedroomsText}`;
        case obj.beds:
          return `${obj.bedsText}`;
        case obj.bathrooms:
          return `${obj.bathroomsText}`;
        case obj.bedrooms + obj.beds:
          return `${obj.bedroomsText}, ${obj.bedsText}`;
        case obj.bedrooms + obj.bathrooms:
          return `${obj.bedroomsText}, ${obj.bathroomsText}`;
        case obj.beds + obj.bathrooms:
          return `${obj.bedsText}, ${obj.bathroomsText}`;
        case obj.bedrooms + obj.beds + obj.bathrooms:
          return `${obj.bedroomsText}, ${obj.bedsText}...`;
      }
    } else {
      return "";
    }
  }

  declinate(type, sum) {
    const remain = sum % 10 === 2 || sum % 10 === 3 || sum % 10 === 4;
    let result;
    if (sum > 10 && sum < 15) {
      result = `${sum} ${type[0]}`;
    } else if (sum % 10 === 1) {
      result = `${sum} ${type[1]}`;
    } else if (remain) {
      result = `${sum} ${type[2]}`;
    } else {
      result = `${sum} ${type[0]}`;
    }
    return result;
  }
}
