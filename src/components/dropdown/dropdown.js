// Dropdown appears when click and dissapear when click outside or btn "apply"
let dropdownOpen = (event) => {
    let { target } = event;
    let dropdown = target.closest('.js-dropdown');
    if (dropdown) {
      let input = dropdown.querySelector('.js-input__element');
      let dropdownList = dropdown.querySelector('.js-dropdown__list');
      let dropdownInput = target.closest('.js-dropdown__input');

      if (dropdownInput) {
        input.classList.toggle("input__element_border-radius_0");
        input.classList.add("input__element_brightBorder");
        dropdownList.classList.toggle("dropdown__list_show");
      }
      if (target === dropdownList.querySelector('button[name = "apply"]')) {
        input.classList.remove("input__element_border-radius_0");
        input.classList.remove("input__element_brightBorder");
        dropdownList.classList.remove("dropdown__list_show");
      }
    }
    if (!dropdown) {
      let dropdownInputGuestsArr = document.querySelectorAll('input[name = "guests"]');
      let dropdownInputRoomsBedsArr = document.querySelectorAll('input[name = "roomsBeds"]');
      let dropdownListArr = document.querySelectorAll('.js-dropdown__list');

      dropdownInputGuestsArr.forEach((item) => {
        item.classList.remove("input__element_border-radius_0");
        item.classList.remove("input__element_brightBorder");
      });
      dropdownInputRoomsBedsArr.forEach((item) => {
        item.classList.remove("input__element_border-radius_0");
        item.classList.remove("input__element_brightBorder");
      });
      dropdownListArr.forEach((item) => {
        item.classList.remove("dropdown__list_show");
      });
    }
  }
  // Function counter
let counter = (event) => {
    let { target } = event;
    let dropdown = target.closest('.js-dropdown');
    if (dropdown) {
      let counterValueArr = dropdown.querySelectorAll('.js-counter__value');
      counterValueArr.forEach((item) => {
        if (Number(item.value) === 0) { item.previousSibling.setAttribute("disabled", "disabled") }
      });

      let counter = target.closest('.js-counter__enter');
      if (counter) {
        let minus = counter.querySelector('.js-counter__btn_minus');
        let plus = counter.querySelector('.js-counter__btn_plus');
        let counterValue = counter.querySelector('.js-counter__value');

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
  }
  // Update of input field, where we can see total number of guests
let changeover = (event) => {
  let { target } = event;
  let dropdown = target.closest('.js-dropdown');
  // Dropdown for guests
  if (dropdown && dropdown.querySelector('input[name = "guests"]')) {
    let infants = Number(dropdown.querySelector('input[name = "Infants"]').value);
    let counterValueArr = dropdown.querySelectorAll('.js-counter__value');
    let allGuests = dropdown.querySelector('input[name = "guests"]');
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

    let btnClear = dropdown.querySelector('button[name = "clear"]');
    if (sum === 0) {
      allGuests.value = 'Сколько гостей';
      btnClear.classList.add('btn_hidden');
    } else {
      btnClear.classList.remove('btn_hidden');
      if (target === btnClear) {
        allGuests.value = 'Сколько гостей';
        counterValueArr.forEach((item) => {
          item.value = 0;
        });
        let minusArr = dropdown.querySelectorAll('.js-counter__btn_minus');
        minusArr.forEach((item) => {
          item.setAttribute("disabled", "disabled")
        })
      }
    }
  }
  // Dropdown for rooms and beds
  if (dropdown && dropdown.querySelector('input[name = "roomsBeds"]')) {
    let bedrooms = Number(dropdown.querySelector('input[name = "Bedrooms"]').value);
    let beds = Number(dropdown.querySelector('input[name = "Beds"]').value);
    let bathrooms = Number(dropdown.querySelector('input[name = "Bathrooms"]').value);
    let allRoomsBeds = dropdown.querySelector('input[name = "roomsBeds"]');

    let counterValueArr = dropdown.querySelectorAll(".js-counter__value");
    let sum = 0;
    counterValueArr.forEach((item) => {
      sum += Number(item.value);
    })

    let bedroomsDeclination = () => {
      let bedroomsSum = (bedrooms % 10 === 2 || bedrooms % 10 === 3 || bedrooms % 10 === 4);
      if (bedrooms > 10 && bedrooms < 15) {
        allRoomsBeds.value = bedrooms + ' спален';
      } else if (bedrooms % 10 === 1) {
        allRoomsBeds.value = bedrooms + ' спальня';
      } else if (bedroomsSum) {
        allRoomsBeds.value = bedrooms + ' спальни';
      } else {
        allRoomsBeds.value = bedrooms + ' спален';
      }
    }

    let bedsAmount = 0;
    let bedsDeclination = () => {
      let bedsSum = ( beds % 10 === 2 ||  beds % 10 === 3 ||  beds % 10 === 4);
      if (beds > 10 && beds < 15) {
        bedsAmount = beds + ' кроватей';
      } else if (beds % 10 === 1) {
        bedsAmount = beds + ' кровать';
      } else if (bedsSum) {
        bedsAmount = beds + ' кровати';
      } else {
        bedsAmount = beds + ' кроватей';
      }
    }

    if (sum !== 0) {
      if (bedrooms !== 0) {
        bedroomsDeclination();
        if (beds !== 0) {
          bedsDeclination();
          allRoomsBeds.value = allRoomsBeds.value + ', ' + bedsAmount + '...';
        }
      } else {
        if (beds !== 0) {
          bedsDeclination();
          allRoomsBeds.value = bedsAmount;
        }
      }
    } else {
      allRoomsBeds.value = '';
    }
  }
}

document.addEventListener("click", dropdownOpen);
document.addEventListener("click", counter);
document.addEventListener("click", changeover);