import NavMenu from "Components/nav-menu/nav-menu";

export default class Header {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    this.burger = this.item.querySelector(".js-header__burger");
    this.navMenuButtons = this.item.querySelector(
      ".js-header__with-nav-menu-buttons"
    );
    this.menuLinks = this.navMenuButtons.querySelectorAll(".js-nav-menu__link");
    this.headerContainer = this.item.querySelector(".js-header__container");
    this.headerBurger =
      this.headerContainer.querySelector(".js-header__burger");
    this.navMenu = this.item.querySelector(".js-nav-menu");
    $(this.burger).on("click", this.toggleMenu);
    this.findNavMenu();
  }

  toggleMenu = () => {
    $(this.burger).toggleClass("header_with-opened-burger");
    $(this.navMenuButtons).toggleClass("header__with-opened-menu");
    $("body").toggleClass("fixed-page");
    this.menuLinks.forEach((element) => {
      element.classList.toggle("nav-menu__link_opened");
    });
    $(this.headerContainer).toggleClass("header__container_opened");
    $(this.headerBurger).toggleClass("header__burger_opened");
  };

  findNavMenu() {
    new NavMenu(this.navMenu);
  }
}
