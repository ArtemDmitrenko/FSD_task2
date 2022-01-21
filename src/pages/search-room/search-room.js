import CheckboxList from "Components/checkbox-list/checkbox-list";
import DateDropdown from "Components/date-dropdown/date-dropdown";
import Pagination from "Components/pagination/pagination";
import RangeSlider from "Components/range-slider/range-slider";
import Room from "Components/room/room";
import Dropdown from "Components/dropdown/dropdown";
import headerInit from "Components/header/header-init";

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
      new CheckboxList(checkboxList);
    });
    dateDropdowns.forEach((dateDropdown) => {
      new DateDropdown(dateDropdown);
    });
    new Pagination(pagination);
    new RangeSlider(rangeSlider);
    rooms.forEach((room) => {
      new Room(room);
    });
    new Dropdown(guestDropdown);
    new Dropdown(roomDropdown);
    headerInit();
  }
}
