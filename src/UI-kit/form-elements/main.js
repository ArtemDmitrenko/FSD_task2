var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery-ui-dist/jquery-ui.js");
require("jquery.maskedinput/src/jquery.maskedinput.js");
require("../../components/input/input.js");
require("../../components/dropdown/dropdown.js");
require("../../components/date-dropdown/date-dropdown.js");
require("../../components/checkbox-btn/checkbox-btn.js");
require("../../components/like-button/like-button.js");
require("paginationjs/src/pagination.js");
require("../../components/pagination/pagination.js");
require("ion-rangeslider/js/ion.rangeSlider.js");
require("../../components/range-slider/range-slider.js");

// Hovered input
const inputWithHover = document.querySelector('[name="Text"]');
inputWithHover.classList.add('input__element_hover')

// Datapicker
const func1 = () => {
  const datapickerWithData = document.querySelector('[name="Check-in date"]');
  datapickerWithData.value = '19.08.2019';
};
setTimeout(func1, 15);

// Datapicker with range
const func2 = () => {
  const datapickerWithRange = document.querySelector('[range="true"]');
  datapickerWithRange.value = '19 авг - 23 авг';
}
setTimeout(func2, 20);

// DropdownBeds
const func3 = () => {
  const dropdownDefault = document.querySelectorAll('[name="roomsBeds"]')[0];
  dropdownDefault.value = '2 спальни, 2 кровати...';
}
setTimeout(func3, 10);

// DropdownBeds
const inputOfdropdownExpanded = document.querySelectorAll('[name="roomsBeds"]')[1];
const dropdownExpanded = document.querySelector('.form-elements__element_expanded');
const btnPlusBedrooms = dropdownExpanded.querySelectorAll('.counter__btn_plus')[0];
const btnPlusBeds = dropdownExpanded.querySelectorAll('.counter__btn_plus')[1];
setTimeout(function() {
  $(inputOfdropdownExpanded).trigger('click');
  $(btnPlusBedrooms).trigger('click');
  $(btnPlusBedrooms).trigger('click');
  $(btnPlusBeds).trigger('click');
  $(btnPlusBeds).trigger('click');
}, 30);


// Checkbox
const checkbox = document.querySelectorAll('.checkbox-btn')[1];
const btnTable = checkbox.querySelectorAll('.checkbox-btn__label')[1];
const btnChair = checkbox.querySelectorAll('.checkbox-btn__label')[2];
const btnBed = checkbox.querySelectorAll('.checkbox-btn__label')[3];
setTimeout(function() {
  $(checkbox).trigger('click');
  $(btnTable).trigger('click');
  $(btnChair).trigger('click');
  $(btnBed).trigger('click');
}, 10);

// Checkbox buttons
const checkbox1 = document.querySelectorAll('.form-elements__checkbox-btn')[2];
const checkboxbtnAnimals = checkbox1.querySelectorAll('.checkbox-btn__label')[1];
const checkboxbtnGuests = checkbox1.querySelectorAll('.checkbox-btn__label')[2];
setTimeout(function() {
  $(checkboxbtnAnimals).trigger('click');
  $(checkboxbtnGuests).trigger('click');
}, 10);

// Radio buttons
const radioBtn = document.querySelectorAll('.radio-buttons__label')[0];
setTimeout(function() {
  $(radioBtn).trigger('click');
}, 10);

// Toggle label
const toggleBtn = document.querySelectorAll('.toggle__label')[0];
setTimeout(function() {
  $(toggleBtn).trigger('click');
}, 10);

// Like btn
const likeBtn = document.querySelectorAll('.like-button__button')[1];
setTimeout(function() {
  $(likeBtn).trigger('click');
}, 10);

// DropdownGuests
const dropdowmGuests = document.querySelectorAll('.form-elements__dropdown')[3];
const dropdownGuestsBtn = dropdowmGuests.querySelector('.input__element')
setTimeout(function() {
  $(dropdownGuestsBtn).trigger('click');
}, 30);

// Buttons
const btnRow1 = document.querySelector('.form-elements__btnRow1');
const hoveredBtnInRow1 = btnRow1.querySelectorAll('.btn')[1];
hoveredBtnInRow1.classList.add('form-elements__btn_hovered');
const btnRow2 = document.querySelector('.form-elements__btnRow2');
const hoveredBtnInRow2 = btnRow2.querySelectorAll('.btn_border')[1];
hoveredBtnInRow2.classList.add('form-elements__btn_hovered');

// DropdownGuests
const inputOfdropdownGuestsExpanded = document.querySelectorAll('[name="guests"]')[2];
const dropdownGuestsExpanded = document.querySelector('.form-elements__dropdown_expandedGuests');
const btnPlusAdults = dropdownGuestsExpanded.querySelectorAll('.counter__btn_plus')[0];
const btnPlusChildren = dropdownGuestsExpanded.querySelectorAll('.counter__btn_plus')[1];
setTimeout(function() {
  $(inputOfdropdownGuestsExpanded).trigger('click');
  $(btnPlusAdults).trigger('click');
  $(btnPlusAdults).trigger('click');
  $(btnPlusChildren).trigger('click');
}, 30);

// Like btn in Review
const review = document.querySelector('.review__like-button');
const reviewLikeBtn = review.querySelector('.like-button__button');
setTimeout(function() {
  $(reviewLikeBtn).trigger('click');
}, 15);