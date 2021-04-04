import DateDropdown from '../../components/date-dropdown/date-dropdown';





import "./../../import-jquery";
import "jquery-ui-dist/jquery-ui.js";
import "jquery.maskedinput/src/jquery.maskedinput.js";
import "air-datepicker/dist/js/datepicker.js";

import "../../components/input/input.js";
import "../../components/dropdown/dropdown.js";
import "../../components/date-dropdown/date-dropdown.js";
import "slick-carousel/slick/slick.min.js";
import "../../components/room/room.js";
import "../../components/UIkit/cards/cards.js";




const dateDropdowns = document.querySelectorAll('.js-date-dropdown');
dateDropdowns.forEach((dateDropdown, index) => {
  new DateDropdown(dateDropdown, index);
});