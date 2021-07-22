export default class NavMenu {
  constructor(item) {
    this.item = item;
    this.init();
    this.addEventListeners();
  }

  init() {
    this.dropdownButtons = this.item.querySelectorAll(
      ".js-nav-menu__item_with-dropdown"
    );
    this.subLists = this.item.querySelectorAll(".js-nav-menu__sub-list");
    this.checkmarks = this.item.querySelectorAll(".js-checkmark");
  }

  addEventListeners() {
    document.addEventListener("click", this.handleDocumentClick);
    for (let i = 0; i < this.dropdownButtons.length; i++) {
      this.dropdownButtons[i].addEventListener(
        "click",
        this.handleMenuItemClick.bind(this, i)
      );
    }
  }

  handleMenuItemClick(i) {
    this.subLists[i].classList.toggle("show");
    this.checkmarks[i].classList.toggle("checkmark_direction_down");
    this.checkmarks[i].classList.toggle("checkmark_direction_up");
  }

  handleDocumentClick = (event) => {
    for (let i = 0; i < this.dropdownButtons.length; i++) {
      if (
        !document
          .getElementsByClassName("js-nav-menu__item_with-dropdown")
          [i].contains(event.target)
      ) {
        if (this.subLists[i].classList.contains("show")) {
          this.subLists[i].classList.remove("show");
          this.checkmarks[i].classList.toggle("checkmark_direction_down");
          this.checkmarks[i].classList.toggle("checkmark_direction_up");
        }
      }
    }
  };
}
