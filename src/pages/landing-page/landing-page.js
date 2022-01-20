import HeaderInit from "Components/header/header-init";
import RoomSearchFormInit from "Components/room-search-form/room-search-form-init";

export default class LandingPage {
  constructor() {
    this.init();
  }

  init() {
    new HeaderInit();
    new RoomSearchFormInit();
  }
}
