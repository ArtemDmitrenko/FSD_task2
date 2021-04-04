export default class Header {
  constructor(item) {
    this.item = item;
    this.init()
  }

  init() {
    this.burger = this.item.querySelector('.js-header__burger');
    $(this.burger).on('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    const navMenuButtons = this.item.querySelector('.js-header__navMenuButtons');
    $(this.burger).toggleClass('header__openedBurger');
    $(navMenuButtons).toggleClass('header__openedMenu');
    $('body').toggleClass('fixed-page');
  }
}