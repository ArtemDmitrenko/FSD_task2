import Header from "./header";

export default class HeaderInit {
  constructor() {
    document.querySelectorAll(".js-header").forEach((item) => {
      new Header(item);
    });
  }
}
