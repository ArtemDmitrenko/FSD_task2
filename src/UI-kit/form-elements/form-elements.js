import CheckboxList from "Components/checkbox-list/checkbox-list";
import DateDropdown from "Components/date-dropdown/date-dropdown";
import Input from "Components/input/input";
import Review from "Components/review/review";
import RangeSlider from "Components/range-slider/range-slider";
import Dropdown from "Components/dropdown/dropdown";
import Pagination from "Components/pagination/pagination";
import Toggle from "Components/toggle/toggle";
import LikeButton from "Components/like-button/like-button";
import Button from "Components/button/button";

export default class FormElements {
  constructor() {
    this.init();
  }

  init() {
    const checkboxLists = document.querySelectorAll(
      ".js-form-elements__checkbox-list"
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
    const openedDropdownContainers = document.querySelectorAll(
      ".js-form-elements__opened-dropdown"
    );
    const pagination = document.querySelector(".js-form-elements__pagination");
    const hoveredTextInputContainer = document.querySelector(
      ".js-form-elements__hovered-text-field"
    );
    const openedCheckboxList = document.querySelector(
      ".js-form-elements__opened-checkbox-list"
    );
    const checkedToggle = document.querySelector(
      ".js-form-elements__toggle_checked"
    );
    const clickedLikeButtons = document.querySelectorAll(
      ".js-form-elements__like-button_clicked,.js-form-elements__review"
    );
    const hoveredButtons = document.querySelectorAll(
      ".js-form-elements__button-solid_hovered,.js-form-elements__button-bordered_hovered"
    );

    checkboxLists.forEach((checkboxList) => {
      new CheckboxList(checkboxList);
    });
    dateDropdowns.forEach((dateDropdown) => {
      new DateDropdown(dateDropdown);
    });
    new Input(maskedInput, "masked");
    reviews.forEach((review) => {
      new Review(review);
    });
    new RangeSlider({ item: rangeSlider });
    dropdowns.forEach((dropdown) => {
      new Dropdown(dropdown);
    });
    const NUMBER_OF_ROOMS = 170;
    const PAGE_SIZE = 12;
    const SIGN_TEXT = "вариантов аренды";
    new Pagination(pagination, NUMBER_OF_ROOMS, PAGE_SIZE, SIGN_TEXT);
    new Input(hoveredTextInputContainer).makeBorderBright();
    openedDropdownContainers.forEach((item) => {
      new Dropdown(item).toggleDropdown();
    });
    new CheckboxList(openedCheckboxList).expandCheckbox();
    new Toggle(checkedToggle).checkToggle();
    clickedLikeButtons.forEach((item) => {
      new LikeButton(item).handleLikeButtonClick();
    });
    hoveredButtons.forEach((item) => {
      new Button(item).hoverButton();
    });
  }
}
