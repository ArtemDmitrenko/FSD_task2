export default class Dropdown {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    this.findElements();
    this.dropdownInput.addEventListener("click", this.toggleDropdown);
    document.addEventListener("click", this.closeDropdown);
    this.dropdownList.addEventListener("click", this.counter);
    this.item.addEventListener("click", this.changeover);
    this.disableBtn();
  }

  findElements() {
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

  isDropdownOpened() {
    return this.input.classList.contains("input__element_border-radius_0");
  }

  isGuestsDropdown() {
    return this.input.getAttribute("name") === "guests";
  }

  toggleDropdown = () => {
    this.input.classList.toggle("input__element_border-radius_0");
    this.input.classList.toggle("input__element_with-bright-border");
    this.dropdownList.classList.toggle("dropdown__list_show");
  };

  hideBtnClear() {
    this.btnClear.classList.add("btn_hidden");
  }

  closeDropdown = (e) => {
    const { target } = e;
    const closestDropdown = target.closest(".js-dropdown");
    const conditionForClosingDropdown1 =
      this.isDropdownOpened() && !closestDropdown;
    const conditionForClosingDropdown2 =
      this.isDropdownOpened() &&
      this.isGuestsDropdown() &&
      target == this.btnApply;
    if (conditionForClosingDropdown1) {
      if (this.isApplied) {
        this.toggleDropdown();
      } else {
        if (this.isGuestsDropdown()) {
          this.input.value = "Сколько гостей";
        }
        this.toggleDropdown();
      }
    }
    if (conditionForClosingDropdown2) {
      this.isApplied = true;
      this.toggleDropdown();
    }
  };

  disableBtn() {
    this.counterValueArr.forEach((item) => {
      if (Number(item.value) === 0) {
        item.previousElementSibling.setAttribute("disabled", "disabled");
      }
    });
  }

  counter = (e) => {
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
    }
  };

  changeover = (e) => {
    const { target } = e;
    if (this.isGuestsDropdown()) {
      let infants = Number(this.infants.value);
      let sum = 0;
      this.counterValueArr.forEach((item) => {
        sum += Number(item.value);
      });
      let remainderSum = sum % 10 === 2 || sum % 10 === 3 || sum % 10 === 4;
      if (sum > 10 && sum < 15) {
        this.allGuests.value = sum + " гостей";
      } else if (sum % 10 === 1) {
        this.allGuests.value = sum + " гость";
      } else if (remainderSum) {
        this.allGuests.value = sum + " гостя";
      } else {
        this.allGuests.value = sum + " гостей";
      }
      let remainderInfants =
        infants % 10 === 2 || infants % 10 === 3 || infants % 10 === 4;
      if (infants > 10 && infants < 15) {
        this.allGuests.value =
          this.allGuests.value + ", " + infants + " младенцев";
      } else if (infants % 10 === 1) {
        this.allGuests.value =
          this.allGuests.value + ", " + infants + " младенец";
      } else if (remainderInfants) {
        this.allGuests.value =
          this.allGuests.value + ", " + infants + " младенца";
      } else if (infants) {
        this.allGuests.value =
          this.allGuests.value + ", " + infants + " младенцев";
      }

      if (sum === 0) {
        this.allGuests.value = "Сколько гостей";
        this.hideBtnClear();
      } else {
        this.btnClear.classList.remove("btn_hidden");
        if (target === this.btnClear) {
          this.allGuests.value = "Сколько гостей";
          this.counterValueArr.forEach((item) => {
            item.value = 0;
          });
          this.disableBtn();
          this.hideBtnClear();
        }
      }
    } else {
      this.bedrooms = Number(this.bedroomsInput.value);
      this.beds = Number(this.bedsInput.value);
      this.bathrooms = Number(this.bathroomsInput.value);
      let sum = 0;
      this.counterValueArr.forEach((item) => {
        sum += Number(item.value);
      });
      this.bedroomsDeclination();
      this.bedsAmount = 0;
      this.bedsDeclination();
      if (sum !== 0) {
        if (this.bedrooms !== 0) {
          this.bedroomsDeclination();
          if (this.beds !== 0) {
            this.bedsDeclination();
            this.allRoomsBeds.value =
              this.allRoomsBeds.value + ", " + this.bedsAmount + "...";
          }
        } else {
          if (this.beds !== 0) {
            this.bedsDeclination();
            this.allRoomsBeds.value = this.bedsAmount;
          }
        }
      } else {
        this.allRoomsBeds.value = "";
      }
    }
  };

  bedroomsDeclination() {
    this.bedroomsSum =
      this.bedrooms % 10 === 2 ||
      this.bedrooms % 10 === 3 ||
      this.bedrooms % 10 === 4;
    if (this.bedrooms > 10 && this.bedrooms < 15) {
      this.allRoomsBeds.value = this.bedrooms + " спален";
    } else if (this.bedrooms % 10 === 1) {
      this.allRoomsBeds.value = this.bedrooms + " спальня";
    } else if (this.bedroomsSum) {
      this.allRoomsBeds.value = this.bedrooms + " спальни";
    } else {
      this.allRoomsBeds.value = this.bedrooms + " спален";
    }
  }

  bedsDeclination() {
    this.bedsSum =
      this.beds % 10 === 2 || this.beds % 10 === 3 || this.beds % 10 === 4;
    if (this.beds > 10 && this.beds < 15) {
      this.bedsAmount = this.beds + " кроватей";
    } else if (this.beds % 10 === 1) {
      this.bedsAmount = this.beds + " кровать";
    } else if (this.bedsSum) {
      this.bedsAmount = this.beds + " кровати";
    } else {
      this.bedsAmount = this.beds + " кроватей";
    }
  }
}
