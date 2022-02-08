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
    this.findElements();
    this.initElements();
  }

  findElements() {
    this.checkboxLists = document.querySelectorAll(
      ".js-form-elements__checkbox-list"
    );
    this.dateDropdowns = document.querySelectorAll(
      ".js-form-elements__datepicker"
    );
    this.maskedInput = document.querySelector(
      ".js-form-elements__masked-input"
    );
    this.reviews = document.querySelectorAll(".js-form-elements__review");
    this.rangeSlider = document.querySelector(
      ".js-form-elements__range-slider"
    );
    this.dropdowns = document.querySelectorAll(".js-form-elements__dropdown");
    this.openedDropdownContainers = document.querySelectorAll(
      ".js-form-elements__opened-dropdown"
    );
    this.pagination = document.querySelector(".js-form-elements__pagination");
    this.hoveredTextInputContainer = document.querySelector(
      ".js-form-elements__hovered-text-field"
    );
    this.openedCheckboxList = document.querySelector(
      ".js-form-elements__opened-checkbox-list"
    );
    this.checkedToggle = document.querySelector(
      ".js-form-elements__toggle_checked"
    );
    this.clickedLikeButtons = document.querySelectorAll(
      ".js-form-elements__like-button_clicked,.js-form-elements__review"
    );
    this.hoveredButtons = document.querySelectorAll(
      ".js-form-elements__button-solid_hovered,.js-form-elements__button-bordered_hovered"
    );
  }

  initElements() {
    this.checkboxLists.forEach((checkboxList) => {
      new CheckboxList(checkboxList);
    });
    this.dateDropdowns.forEach((dateDropdown) => {
      new DateDropdown(dateDropdown);
    });
    new Input(this.maskedInput, "masked");
    this.reviews.forEach((review) => {
      new Review(review);
    });
    new RangeSlider({ item: this.rangeSlider });
    this.dropdowns.forEach((dropdown) => {
      new Dropdown(dropdown);
    });
    const NUMBER_OF_ROOMS = 170;
    const PAGE_SIZE = 12;
    const SIGN_TEXT = "вариантов аренды";
    new Pagination(this.pagination, NUMBER_OF_ROOMS, PAGE_SIZE, SIGN_TEXT);
    new Input(this.hoveredTextInputContainer).makeBorderBright();
    this.openedDropdownContainers.forEach((item) => {
      new Dropdown(item).toggleDropdown();
    });
    new CheckboxList(this.openedCheckboxList).expandCheckbox();
    new Toggle(this.checkedToggle).checkToggle();
    this.clickedLikeButtons.forEach((item) => {
      new LikeButton(item).handleLikeButtonClick();
    });
    this.hoveredButtons.forEach((item) => {
      new Button(item).hoverButton();
    });
  }
}
