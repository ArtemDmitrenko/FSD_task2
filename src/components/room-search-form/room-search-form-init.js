import FormRoomSearch from "./room-search-form";

export default class RoomSearchFormInit {
  constructor() {
    document.querySelectorAll(".js-room-search-form").forEach((item) => {
      new FormRoomSearch(item);
    });
  }
}
