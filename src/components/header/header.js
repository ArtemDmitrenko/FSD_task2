import "./../../import-jquery";
import NavMenu from '../nav-menu/nav-menu';

export default class Header {
  constructor(item) {
    this.item = item;
    this.init()
  }

  init() {
    this.burger = this.item.querySelector('.js-header__burger');
    $(this.burger).on('click', this.toggleMenu.bind(this));
    this.findNavMenu();
  }

  toggleMenu() {
    const navMenuButtons = this.item.querySelector('.js-header__navMenuButtons');
    $(this.burger).toggleClass('header__openedBurger');
    $(navMenuButtons).toggleClass('header__openedMenu');
    $('body').toggleClass('fixed-page');
  }

  findNavMenu() {
    const navMenu = this.item.querySelector('.js-nav-menu');
    new NavMenu(navMenu);
  }
}