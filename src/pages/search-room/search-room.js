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
    this.findElements();
    this.initElements();
  }

  findElements() {
    this.checkboxLists = document.querySelectorAll(".js-search-room__checkbox");
    this.dateDropdowns = document.querySelectorAll(
      ".js-search-room__filter-date-dropdown"
    );
    this.pagination = document.querySelector(".js-search-room__pagination");
    this.rangeSlider = document.querySelector(".js-search-room__range-slider");
    this.rooms = document.querySelectorAll(".js-search-room__card");
    this.guestDropdown = document.querySelector(
      ".js-search-room__dropdown-guests"
    );
    this.roomDropdown = document.querySelector(
      ".js-search-room__dropdown-rooms"
    );
  }

  initElements() {
    const NUMBER_OF_ROOMS = 170;
    const PAGE_SIZE = 12;
    const SIGN_TEXT = "вариантов аренды";

    new Pagination(this.pagination, NUMBER_OF_ROOMS, PAGE_SIZE, SIGN_TEXT);
    this.checkboxLists.forEach((checkboxList) => {
      new CheckboxList(checkboxList);
    });
    this.dateDropdowns.forEach((dateDropdown) => {
      new DateDropdown(dateDropdown);
    });
    new RangeSlider({ item: this.rangeSlider });
    this.rooms.forEach((room) => {
      new Room(room);
    });
    new Dropdown(this.guestDropdown);
    new Dropdown(this.roomDropdown);
    headerInit();
  }
}
