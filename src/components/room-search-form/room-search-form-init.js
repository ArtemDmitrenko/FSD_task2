import RoomSearchForm from "./room-search-form";

export default function roomSearchFormInit() {
  document.querySelectorAll(".js-room-search-form").forEach((item) => {
    new RoomSearchForm(item);
  });
}
