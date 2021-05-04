export default class Dropdown {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    this.findElements();
    this.dropdownInput.addEventListener('click', this.toggleDropdown.bind(this));
    document.addEventListener('click', this.closeDropdown.bind(this));
    this.dropdownList.addEventListener('click', this.counter.bind(this));
    this.item.addEventListener('click', this.changeover.bind(this));
  }

  findElements() {
    this.dropdownList = this.item.querySelector('.js-dropdown__list');
    this.input = this.item.querySelector('.js-input__element');
    this.dropdownInput = this.item.querySelector('.js-dropdown__input');
  }

  isDroprownOpened() {
    if (this.input.classList.contains('input__element_border-radius_0')) {
      return true;
    }
    return false;
  }

  isGuestsDropdown() {
    if (this.input.getAttribute('name') === 'guests') {
      this.btnApply = this.dropdownList.querySelector('button[name = "apply"]');
      this.btnClear = this.dropdownList.querySelector('button[name = "clear"]');
      return true;
    }
    return false;
  }

  toggleDropdown() {
    this.input.classList.toggle("input__element_border-radius_0");
    this.input.classList.add("input__element_brightBorder");
    this.dropdownList.classList.toggle("dropdown__list_show");
    this.disableBtn();
  }

  hideBtnClear() {
    const btnClear = this.item.querySelector('button[name = "clear"]');
    btnClear.classList.add('btn_hidden');
  }

  hideDropdown() {
    this.input.classList.remove("input__element_border-radius_0");
    this.input.classList.remove("input__element_brightBorder");
    this.dropdownList.classList.remove("dropdown__list_show");
  }

  closeDropdown(e) {
    const { target } = e;
    const closestDropdown = target.closest('.js-dropdown')
    const conditionForClosingDropdown1 = this.isDroprownOpened() && !closestDropdown;
    const conditionForClosingDropdown2 = this.isDroprownOpened() && this.isGuestsDropdown() && target == this.btnApply;
    if (conditionForClosingDropdown1 || conditionForClosingDropdown2) {
      this.hideDropdown();
    }
  }

  disableBtn() {
    document.addEventListener('DOMContentLoaded', () => {
      const counterValueArr = this.dropdownList.querySelectorAll('.js-counter__value');
      counterValueArr.forEach((item) => {
        if (Number(item.value) === 0) { item.previousSibling.setAttribute("disabled", "disabled") }
      });
    })
  }

  counter(e) {
    const { target } = e;
    const counter = target.closest('.js-counter__enter');
    if (counter) {
      const minus = counter.querySelector('.js-counter__btn_minus');
      const plus = counter.querySelector('.js-counter__btn_plus');
      const counterValue = counter.querySelector('.js-counter__value');

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
  }

  changeover(e) {
    const { target } = e;
    if (this.isGuestsDropdown()) {
      let infants = Number(this.item.querySelector('input[name = "Infants"]').value);
      let counterValueArr = this.item.querySelectorAll('.js-counter__value');
      let allGuests = this.item.querySelector('input[name = "guests"]');
      let sum = 0;
      counterValueArr.forEach((item) => {
        sum += Number(item.value);
      })
      let remainderSum = (sum % 10 === 2 || sum % 10 === 3 || sum % 10 === 4);
      if (sum > 10 && sum < 15) {
        allGuests.value = sum + ' гостей';
      } else if (sum % 10 === 1) {
        allGuests.value = sum + ' гость';
      } else if (remainderSum) {
        allGuests.value = sum + ' гостя';
      } else {
        allGuests.value = sum + ' гостей';
      }
      let remainderInfants = (infants % 10 === 2 || infants % 10 === 3 || infants % 10 === 4);
      if (infants > 10 && infants < 15) {
        allGuests.value = allGuests.value + ', ' + infants + ' младенцев';
      } else if (infants % 10 === 1) {
        allGuests.value = allGuests.value + ', ' + infants + ' младенец';
      } else if (remainderInfants) {
        allGuests.value = allGuests.value + ', ' + infants + ' младенца';
      } else if (infants) {
        allGuests.value = allGuests.value + ', ' + infants + ' младенцев';
      }

      let btnClear = this.item.querySelector('button[name = "clear"]');
      if (sum === 0) {
        allGuests.value = 'Сколько гостей';
        this.hideBtnClear();
      } else {
        btnClear.classList.remove('btn_hidden');
        if (target === btnClear) {
          allGuests.value = 'Сколько гостей';
          counterValueArr.forEach((item) => {
            item.value = 0;
          });
          this.disableBtn();
          this.hideBtnClear();
        }
      }
    } else {
      this.bedrooms = Number(this.item.querySelector('input[name = "Bedrooms"]').value);
      this.beds = Number(this.item.querySelector('input[name = "Beds"]').value);
      this.bathrooms = Number(this.item.querySelector('input[name = "Bathrooms"]').value);
      this.allRoomsBeds = this.item.querySelector('input[name = "roomsBeds"]');
      let counterValueArr = this.item.querySelectorAll(".js-counter__value");
      let sum = 0;
      counterValueArr.forEach((item) => {
        sum += Number(item.value);
      })
      this.bedroomsDeclination();
      this.bedsAmount = 0;
      this.bedsDeclination();
      if (sum !== 0) {
        if (this.bedrooms !== 0) {
          this.bedroomsDeclination();
          if (this.beds !== 0) {
            this.bedsDeclination();
            this.allRoomsBeds.value = this.allRoomsBeds.value + ', ' + this.bedsAmount + '...';
          }
        } else {
          if (this.beds !== 0) {
            this.bedsDeclination();
            this.allRoomsBeds.value = this.bedsAmount;
          }
        }
      } else {
        this.allRoomsBeds.value = '';
      }
    }
  }

  bedroomsDeclination() {
    this.bedroomsSum = (this.bedrooms % 10 === 2 || this.bedrooms % 10 === 3 || this.bedrooms % 10 === 4);
    if (this.bedrooms > 10 && this.bedrooms < 15) {
      this.allRoomsBeds.value = this.bedrooms + ' спален';
    } else if (this.bedrooms % 10 === 1) {
      this.allRoomsBeds.value = this.bedrooms + ' спальня';
    } else if (this.bedroomsSum) {
      this.allRoomsBeds.value = this.bedrooms + ' спальни';
    } else {
      this.allRoomsBeds.value = this.bedrooms + ' спален';
    }
  }

  bedsDeclination() {
    this.bedsSum = ( this.beds % 10 === 2 ||  this.beds % 10 === 3 ||  this.beds % 10 === 4);
    if (this.beds > 10 && this.beds < 15) {
      this.bedsAmount = this.beds + ' кроватей';
    } else if (this.beds % 10 === 1) {
      this.bedsAmount = this.beds + ' кровать';
    } else if (this.bedsSum) {
      this.bedsAmount = this.beds + ' кровати';
    } else {
      this.bedsAmount = this.beds + ' кроватей';
    }
  }

}