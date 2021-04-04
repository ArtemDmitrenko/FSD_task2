import Header from '../../components/header/header';



import "./../../import-jquery";

import "jquery-ui-dist/jquery-ui.js";
import "jquery.maskedinput/src/jquery.maskedinput.js";
import "../../components/nav-menu/nav-menu.js";
import "../../components/input/input.js";



const header = document.querySelector('.js-header');
new Header(header);