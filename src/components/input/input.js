import "./../../import-jquery";
import "jquery.maskedinput/src/jquery.maskedinput.js";


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