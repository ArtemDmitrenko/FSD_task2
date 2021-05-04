import 'slick-carousel';

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