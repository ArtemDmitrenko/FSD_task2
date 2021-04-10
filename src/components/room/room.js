import "./../../import-jquery";
import "slick-carousel/slick/slick.min.js";

export default class Carousel {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    $(this.item).slick({
      dots: true
    });
  }
}