import Header from '../../components/header/header';
import NavMenu from '../../components/nav-menu/nav-menu';




import "./../../import-jquery";

import "jquery-ui-dist/jquery-ui.js";
import "jquery.maskedinput/src/jquery.maskedinput.js";
import "../../components/input/input.js";



const header = document.querySelector('.js-header');
new Header(header);

const navMenu = document.querySelector('.js-nav-menu');
new NavMenu(navMenu);