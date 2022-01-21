import headerInit from "Components/header/header-init";
import roomSearchFormInit from "Components/room-search-form/room-search-form-init";

export default class LandingPage {
  constructor() {
    this.init();
  }

  init() {
    headerInit();
    roomSearchFormInit();
  }
}
