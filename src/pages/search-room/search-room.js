import CheckboxButton from "Components/checkbox-button/checkbox-button";
import DateDropdown from "Components/date-dropdown/date-dropdown";
import Header from "Components/header/header";
import Pagination from "Components/pagination/pagination";
import RangeSlider from "Components/range-slider/range-slider";
import Room from "Components/room/room";
import Dropdown from "Components/dropdown/dropdown";

export default class SearchRoom {
  constructor() {
    this.init();
  }

  init() {
    const checkboxLists = document.querySelectorAll(
      ".js-search-room__checkbox"
    );
    const dateDropdowns = document.querySelectorAll(
      ".js-search-room__filter-date-dropdown"
    );
    const header = document.querySelector("header");
    const pagination = document.querySelector(".js-search-room__pagination");
    const rangeSlider = document.querySelector(".js-search-room__range-slider");
    const rooms = document.querySelectorAll(".js-search-room__card");
    const guestDropdown = document.querySelector(
      ".js-search-room__dropdown-guests"
    );
    const roomDropdown = document.querySelector(
      ".js-search-room__dropdown-rooms"
    );
    checkboxLists.forEach((checkboxList) => {
      new CheckboxButton(checkboxList);
    });
    dateDropdowns.forEach((dateDropdown, index) => {
      new DateDropdown(dateDropdown, index);
    });
    new Header(header);
    new Pagination(pagination);
    new RangeSlider(rangeSlider);
    rooms.forEach((room) => {
      new Room(room);
    });
    new Dropdown(guestDropdown);
    new Dropdown(roomDropdown);
  }
}
