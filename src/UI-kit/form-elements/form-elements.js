import CheckboxButton from "Components/checkbox-button/checkbox-button";
import DateDropdown from "Components/date-dropdown/date-dropdown";
import Input from "Components/input/input";
import Review from "Components/review/review";
import RangeSlider from "Components/range-slider/range-slider";
import Dropdown from "Components/dropdown/dropdown";
import Pagination from "Components/pagination/pagination";

export default class FormElements {
  constructor() {
    this.init();
    this.makeLikeOnFigma();
  }

  init() {
    const checkboxLists = document.querySelectorAll(
      ".js-form-elements__checkbox-button"
    );
    const dateDropdowns = document.querySelectorAll(
      ".js-form-elements__datepicker"
    );
    const maskedInput = document.querySelector(
      ".js-form-elements__masked-input"
    );
    const reviews = document.querySelectorAll(".js-form-elements__review");
    const rangeSlider = document.querySelector(
      ".js-form-elements__range-slider"
    );
    const dropdowns = document.querySelectorAll(".js-form-elements__dropdown");
    const pagination = document.querySelector(".js-form-elements__pagination");
    checkboxLists.forEach((checkboxList) => {
      new CheckboxButton(checkboxList);
    });
    dateDropdowns.forEach((dateDropdown, index) => {
      new DateDropdown(dateDropdown, index);
    });
    new Input(maskedInput, "masked");
    reviews.forEach((review) => {
      new Review(review);
    });
    new RangeSlider(rangeSlider);
    dropdowns.forEach((dropdown) => {
      new Dropdown(dropdown);
    });
    new Pagination(pagination);
  }

  makeLikeOnFigma() {
    // Hovered input
    const inputWithHover = document.querySelector('[name="Text"]');
    inputWithHover.classList.add("input__element_hovered");

    // DropdownBeds
    const func3 = () => {
      const dropdownDefault =
        document.querySelectorAll('[name="roomsBeds"]')[0];
      dropdownDefault.value = "2 спальни, 2 кровати...";
    };
    setTimeout(func3, 10);

    // DropdownBeds
    const inputOfdropdownExpanded =
      document.querySelectorAll('[name="roomsBeds"]')[1];
    const dropdownExpanded = document.querySelector(
      ".form-elements__element_expanded"
    );
    const buttonPlusBedrooms = dropdownExpanded.querySelectorAll(
      ".counter__button_value_plus"
    )[0];
    const buttonPlusBeds = dropdownExpanded.querySelectorAll(
      ".counter__button_value_plus"
    )[1];
    setTimeout(function () {
      $(inputOfdropdownExpanded).trigger("click");
      $(buttonPlusBedrooms).trigger("click");
      $(buttonPlusBedrooms).trigger("click");
      $(buttonPlusBeds).trigger("click");
      $(buttonPlusBeds).trigger("click");
    }, 30);

    // Checkbox
    const checkbox = document.querySelectorAll(".checkbox-button")[1];
    const buttonTable = checkbox.querySelectorAll(".checkbox-button__label")[1];
    const buttonChair = checkbox.querySelectorAll(".checkbox-button__label")[2];
    const buttonBed = checkbox.querySelectorAll(".checkbox-button__label")[3];
    setTimeout(function () {
      $(checkbox).trigger("click");
      $(buttonTable).trigger("click");
      $(buttonChair).trigger("click");
      $(buttonBed).trigger("click");
    }, 10);

    // Checkbox buttons
    const checkbox1 = document.querySelectorAll(
      ".form-elements__checkbox-button"
    )[2];
    const checkboxbuttonAnimals = checkbox1.querySelectorAll(
      ".checkbox-button__label"
    )[1];
    const checkboxbuttonGuests = checkbox1.querySelectorAll(
      ".checkbox-button__label"
    )[2];
    setTimeout(function () {
      $(checkboxbuttonAnimals).trigger("click");
      $(checkboxbuttonGuests).trigger("click");
    }, 10);

    // Radio buttons
    const radioButton = document.querySelectorAll(".radio-buttons__label")[0];
    setTimeout(function () {
      $(radioButton).trigger("click");
    }, 10);

    // Toggle label
    const toggleButton = document.querySelectorAll(".toggle__label")[0];
    setTimeout(function () {
      $(toggleButton).trigger("click");
    }, 10);

    // Like button
    const likeButton = document.querySelectorAll(".like-button__button")[1];
    setTimeout(function () {
      $(likeButton).trigger("click");
    }, 10);

    // DropdownGuests
    const dropdowmGuests = document.querySelectorAll(
      ".form-elements__dropdown"
    )[3];
    const dropdownGuestsButton =
      dropdowmGuests.querySelector(".input__element");
    setTimeout(function () {
      $(dropdownGuestsButton).trigger("click");
    }, 30);

    // Buttons
    const buttonRow1 = document.querySelector(".form-elements__button-row1");
    const hoveredButtonInRow1 = buttonRow1.querySelectorAll(".button")[1];
    hoveredButtonInRow1.classList.add("form-elements__button_hovereded");
    const buttonRow2 = document.querySelector(".form-elements__button-row2");
    const hoveredButtonInRow2 =
      buttonRow2.querySelectorAll(".button_bordered")[1];
    hoveredButtonInRow2.classList.add("form-elements__button_hovereded");

    // DropdownGuests
    const inputOfdropdownGuestsExpanded =
      document.querySelectorAll('[name="guests"]')[2];
    const dropdownGuestsExpanded = document.querySelector(
      ".form-elements__dropdown_expandedGuests"
    );
    const buttonPlusAdults = dropdownGuestsExpanded.querySelectorAll(
      ".counter__button_value_plus"
    )[0];
    const buttonPlusChildren = dropdownGuestsExpanded.querySelectorAll(
      ".counter__button_value_plus"
    )[1];
    setTimeout(function () {
      $(inputOfdropdownGuestsExpanded).trigger("click");
      $(buttonPlusAdults).trigger("click");
      $(buttonPlusAdults).trigger("click");
      $(buttonPlusChildren).trigger("click");
    }, 30);

    // Like button in Review
    const review = document.querySelector(".review__like-button");
    const reviewLikeButton = review.querySelector(".like-button__button");
    setTimeout(function () {
      $(reviewLikeButton).trigger("click");
    }, 15);
  }
}
