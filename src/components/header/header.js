import NavMenu from 'Components/nav-menu/nav-menu';

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
    const navMenuButtons = this.item.querySelector('.js-header__with-nav-menu-buttons');
    $(this.burger).toggleClass('header_with-opened-burger');
    $(navMenuButtons).toggleClass('header__with-opened-menu');
    $('body').toggleClass('fixed-page');
  }

  findNavMenu() {
    const navMenu = this.item.querySelector('.js-nav-menu');
    new NavMenu(navMenu);
  }
}