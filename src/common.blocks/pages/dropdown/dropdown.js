let meaning = document.querySelectorAll('.counter__meaning');
let plus = document.querySelectorAll('.counter__btn_plus');
let minus = document.querySelectorAll('.counter__btn_minus');
let allGuests = document.querySelector('.dropdown-guests__meaning');
let dropdown = document.querySelector('.dropdown-guests__list');

// Dropdown appears when click
document.querySelector('.dropdown-guests__input').onclick = function() {
    dropdown.classList.toggle("dropdown-guests__list_show");
    allGuests.classList.toggle("input__element_border-radius_0");
}

// Show the whole number of guests
function summary() {
    let sum = 0;
    for (let i = 0; i < meaning.length; i++) {
        sum = (meaning[i].value | 0) + sum;
    }
    if (sum > 10 && sum < 15) {
        allGuests.value = sum + ' гостей';
    } else if (sum % 10 === 1) {
        allGuests.value = sum + ' гость';
    } else if (sum % 10 === 2 || sum % 10 === 3 || sum % 10 === 4) {
        allGuests.value = sum + ' гостя';
    } else {
        allGuests.value = sum + ' гостей';
    }
    if (sum === 0) {
        allGuests.value = 'Сколько гостей';
    }
}

// Counter of guests with properties of disabled button '-' when meaning is '0'
for (let i = 0; i < meaning.length; i++) {
    plus[i].onclick = () => {
        meaning[i].value = (meaning[i].value | 0) + 1;
        summary();
        if (Number(meaning[i].value) > 0) {
            meaning[i].previousSibling.removeAttribute('disabled', 'disabled');
            meaning[i].previousSibling.classList.remove("counter__btn_opacity_38");
        }
    }
    minus[i].onclick = () => {
        meaning[i].value = (meaning[i].value | 0) - 1;
        if (meaning[i].value < 0) {
            meaning[i].value = 0;
        }
        summary();
        if (Number(meaning[i].value) > 0) {
            meaning[i].previousSibling.removeAttribute('disabled', 'disabled');
            meaning[i].previousSibling.classList.remove("counter__btn_opacity_38");
        } else {
            meaning[i].previousSibling.setAttribute('disabled', 'disabled');
            meaning[i].previousSibling.classList.add("counter__btn_opacity_38");
        }
    }
}