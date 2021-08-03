import CheckboxBtn from "Components/checkbox-btn/checkbox-btn";
import DateDropdown from "Components/date-dropdown/date-dropdown";
import Header from "Components/header/header";
import Pagination from "Components/pagination/pagination";
import RangeSlider from "Components/range-slider/range-slider";
import Carousel from "Components/room/room";
import Dropdown from "Components/dropdown/dropdown";

export default class SearchRoom {
  constructor() {
    this.init();
  }

  init() {
    const checkboxLists = document.querySelectorAll(".js-checkbox-btn");
    const dateDropdowns = document.querySelectorAll(".js-date-dropdown");
    const header = document.querySelector(".js-header");
    const pagination = document.querySelector(".js-pagination");
    const rangeSlider = document.querySelector(".js-range-slider");
    const carousels = document.querySelectorAll(".js-room__card");
    const dropdowns = document.querySelectorAll(".js-dropdown");
    checkboxLists.forEach((checkboxList) => {
      new CheckboxBtn(checkboxList);
    });
    dateDropdowns.forEach((dateDropdown, index) => {
      new DateDropdown(dateDropdown, index);
    });
    new Header(header);
    new Pagination(pagination);
    new RangeSlider(rangeSlider);
    carousels.forEach((carousel) => {
      new Carousel(carousel);
    });
    dropdowns.forEach((dropdown) => {
      new Dropdown(dropdown);
    });
  }
}
