export default class NavMenu {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    this.findAllElements();
    this.openMenuDropdown();
    this.closeMenuDropdown();
  }

  findAllElements() {
    this.dropdownButtons = this.item.querySelectorAll(".js-nav-menu__item_dropdown");
    this.subLists = this.item.querySelectorAll(".js-nav-menu__sub-list");
    this.checkmarks = this.item.querySelectorAll(".js-checkmark");
  }

  openMenuDropdown() {
    for (let i = 0; i < this.dropdownButtons.length; i++) {
      this.dropdownButtons[i].addEventListener('click', this.openMenu.bind(this, i));
    }
  }

  openMenu(i) {
    this.subLists[i].classList.toggle("show");
    this.checkmarks[i].classList.toggle("checkmark__down");
    this.checkmarks[i].classList.toggle("checkmark__up");
  }

  closeMenuDropdown() {
    document.addEventListener('click', this.closeMenu.bind(this));
  }

  closeMenu(event) {
    for (let i = 0; i < this.dropdownButtons.length; i++) {
      if (!document.getElementsByClassName('nav-menu__item_dropdown')[i].contains(event.target)) {
        if (this.subLists[i].classList.contains('show')) {
          this.subLists[i].classList.remove('show');
          this.checkmarks[i].classList.toggle("checkmark__down");
          this.checkmarks[i].classList.toggle("checkmark__up");
        }
      }
    }
  }
}