export default class Toggle {
  constructor(container) {
    this.toggle = container.querySelector(".js-toggle");
    this.input = this.toggle.querySelector(".js-toggle__input");
  }

  checkToggle() {
    this.input.checked = true;
  }
}
