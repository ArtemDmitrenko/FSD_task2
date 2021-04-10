import CheckboxBtn from '../../components/checkbox-btn/checkbox-btn';
import DateDropdown from '../../components/date-dropdown/date-dropdown';
import Header from '../../components/header/header';
import Pagination from '../../components/pagination/pagination';
import RangeSlider from '../../components/range-slider/range-slider';
import Carousel from '../../components/room/room';
import Dropdown from '../../components/dropdown/dropdown';

export default class SearchRoom {
  constructor() {
    this.init();
  }

  init() {
    const checkboxLists = document.querySelectorAll('.js-checkbox-btn');
    const dateDropdowns = document.querySelectorAll('.js-date-dropdown');
    const header = document.querySelector('.js-header');
    const pagination = document.querySelector('.js-pagination');
    const rangeSlider = document.querySelector('.js-range-slider');
    const carousels = document.querySelectorAll('.js-room__card');
    const dropdowns = document.querySelectorAll('.js-dropdown');
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