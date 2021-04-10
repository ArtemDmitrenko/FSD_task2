import CheckboxBtn from '../../components/checkbox-btn/checkbox-btn';
import DateDropdown from '../../components/date-dropdown/date-dropdown';
import Header from '../../components/header/header';
import NavMenu from '../../components/nav-menu/nav-menu';
import Pagination from '../../components/pagination/pagination';
import RangeSlider from '../../components/range-slider/range-slider';
import Carousel from '../../components/room/room';
import Dropdown from '../../components/dropdown/dropdown';




import "./../../import-jquery";
import "jquery-ui-dist/jquery-ui.js";
import "jquery.maskedinput/src/jquery.maskedinput.js";
import "air-datepicker/dist/js/datepicker.js";
import "../../components/input/input.js";
import "slick-carousel/slick/slick.min.js";
import "../../components/like-button/like-button.js";
import "paginationjs/src/pagination.js";
import "ion-rangeslider/js/ion.rangeSlider.js";



const checkboxLists = document.querySelectorAll('.js-checkbox-btn');
checkboxLists.forEach((checkboxList) => {
  new CheckboxBtn(checkboxList);
});

const dateDropdowns = document.querySelectorAll('.js-date-dropdown');
dateDropdowns.forEach((dateDropdown, index) => {
  new DateDropdown(dateDropdown, index);
});

const header = document.querySelector('.js-header');
new Header(header);

const navMenu = document.querySelector('.js-nav-menu');
new NavMenu(navMenu);

const pagination = document.querySelector('.js-pagination');
new Pagination(pagination);

const rangeSlider = document.querySelector('.js-range-slider');
new RangeSlider(rangeSlider);

const carousels = document.querySelectorAll('.js-room__card');
carousels.forEach((carousel) => {
  new Carousel(carousel);
});

const dropdowns = document.querySelectorAll('.js-dropdown');
dropdowns.forEach((dropdown) => {
  new Dropdown(dropdown);
});