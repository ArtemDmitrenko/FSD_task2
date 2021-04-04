import CheckboxBtn from '../../components/checkbox-btn/checkbox-btn';
import DateDropdown from '../../components/date-dropdown/date-dropdown';
import Header from '../../components/header/header';



import "./../../import-jquery";
import "jquery-ui-dist/jquery-ui.js";
import "jquery.maskedinput/src/jquery.maskedinput.js";
import "air-datepicker/dist/js/datepicker.js";
import "../../components/nav-menu/nav-menu.js";
import "../../components/input/input.js";
import "../../components/dropdown/dropdown.js";
import "slick-carousel/slick/slick.min.js";
import "../../components/like-button/like-button.js";
import "../../components/room/room.js";
import "paginationjs/src/pagination.js";
import "../../components/pagination/pagination.js";
import "ion-rangeslider/js/ion.rangeSlider.js";
import "../../components/range-slider/range-slider.js";



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