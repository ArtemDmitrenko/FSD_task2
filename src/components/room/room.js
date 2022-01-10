import "slick-carousel";

export default class Room {
  constructor(item) {
    this.item = item.querySelector(".js-room__card");
    this.init();
  }

  init() {
    $(this.item).slick({
      dots: true,
    });
  }
}
