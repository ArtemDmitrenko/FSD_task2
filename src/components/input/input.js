import Inputmask from 'inputmask';

export default class Input {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    Inputmask({
      placeholder: "ДД.ММ.ГГГГ",
      alias: "datetime",
      inputFormat: "dd.mm.yyyy"
    }).mask(this.item);
  }
}