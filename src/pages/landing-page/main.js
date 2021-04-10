import DateDropdown from '../../components/date-dropdown/date-dropdown';
import Header from '../../components/header/header';
import NavMenu from '../../components/nav-menu/nav-menu';
import Dropdown from '../../components/dropdown/dropdown';





import "./../../import-jquery";

import "jquery-ui-dist/jquery-ui.js";
import "jquery.maskedinput/src/jquery.maskedinput.js";
import "air-datepicker/dist/js/datepicker.js";
import "../../components/input/input.js";
// import "../../components/dropdown/dropdown.js";


const dateDropdowns = document.querySelectorAll('.js-date-dropdown');
dateDropdowns.forEach((dateDropdown, index) => {
  new DateDropdown(dateDropdown, index);
});

const header = document.querySelector('.js-header');
new Header(header);

const navMenu = document.querySelector('.js-nav-menu');
new NavMenu(navMenu);

const dropdowns = document.querySelectorAll('.js-dropdown');
dropdowns.forEach((dropdown) => {
  new Dropdown(dropdown);
});