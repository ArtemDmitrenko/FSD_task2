import DateDropdown from '../../components/date-dropdown/date-dropdown';
import Header from '../../components/header/header';




import "./../../import-jquery";

import "jquery-ui-dist/jquery-ui.js";
import "jquery.maskedinput/src/jquery.maskedinput.js";
import "air-datepicker/dist/js/datepicker.js";
import "../../components/nav-menu/nav-menu.js";
import "../../components/input/input.js";
import "../../components/dropdown/dropdown.js";


const dateDropdowns = document.querySelectorAll('.js-date-dropdown');
dateDropdowns.forEach((dateDropdown, index) => {
  new DateDropdown(dateDropdown, index);
});

const header = document.querySelector('.js-header');
new Header(header);