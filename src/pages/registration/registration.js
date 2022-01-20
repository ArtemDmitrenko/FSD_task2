import HeaderInit from "Components/header/header-init";
import FormRegistration from "Components/registration-form/registration-form";

export default class Registration {
  constructor() {
    this.init();
  }

  init() {
    const formRegistration = document.querySelector(".js-registration__form");
    new HeaderInit();
    new FormRegistration(formRegistration);
  }
}
