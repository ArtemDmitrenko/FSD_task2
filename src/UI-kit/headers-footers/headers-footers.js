import Header from "Components/header/header";

export default class HeadersFooters {
  constructor() {
    this.init();
  }

  init() {
    const headers = document.querySelectorAll(".js-header");
    headers.forEach((header) => {
      new Header(header);
    });
  }
}
