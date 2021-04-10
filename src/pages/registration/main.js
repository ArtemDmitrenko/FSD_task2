import Input from '../../components/input/input';
import NavMenu from '../../components/nav-menu/nav-menu';



import "./../../import-jquery";
import "jquery-ui-dist/jquery-ui.js";
import "jquery.maskedinput/src/jquery.maskedinput.js";
import "../../components/header/header.js";


const maskedInput = document.querySelectorAll('[name|="birthday"]');
new Input(maskedInput);

const navMenu = document.querySelector('.js-nav-menu');
new NavMenu(navMenu);