import Header from '../../components/header/header';
import NavMenu from '../../components/nav-menu/nav-menu';





import "./../../import-jquery";



const header = document.querySelector('.js-header');
new Header(header);

const navMenu = document.querySelector('.js-nav-menu');
new NavMenu(navMenu);