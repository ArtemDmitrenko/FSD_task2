import "paginationjs";

export default class Pagination {
  constructor(item, amount, pageSize) {
    this.item = item.querySelector(".js-pagination");
    this.init();
    this.callPluginPagination(amount, pageSize);
    this.createSign(1, pageSize);
  }

  init() {
    this.paginationContainer = this.item.querySelector(
      ".js-pagination__container"
    );
  }

  callPluginPagination(amount, pageSize) {
    const options = {
      dataSource: this.createDataSource(amount),
      pageSize: pageSize,
      autoHidePrevious: true,
      autoHideNext: true,
      pageRange: 1,
      nextText: "arrow_forward",
      prevText: "arrow_back",
    };
    $(this.paginationContainer).pagination(options);
  }

  createDataSource(amount) {
    return Array.from({ length: amount }, (e, i) => i + 1);
  }

  createSign(from, to) {
    this.paginationContainer.insertAdjacentHTML(
      "beforeend",
      `<span class="pagination__legend">${from} – ${to} из 100+ вариантов аренды</span>`
    );
  }
}
