import headerInit from "Components/header/header-init";
import RegistrationForm from "Components/registration-form/registration-form";

export default class Registration {
  constructor() {
    this.init();
  }

  init() {
    headerInit();
    const registrationForm = document.querySelector(".js-registration__form");
    new RegistrationForm(registrationForm);
  }
}
