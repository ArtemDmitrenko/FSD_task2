import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput';

export default class Input {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    $(this.item).mask('99.99.9999', {
      autoclear: false
    });
  }
}