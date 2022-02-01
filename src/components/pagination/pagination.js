import "paginationjs";

export default class Pagination {
  constructor(item, total, pageSize, signText) {
    this.item = item.querySelector(".js-pagination");
    this.init();
    this.callPluginPagination(total, pageSize, signText);
  }

  init() {
    this.paginationContainer = this.item.querySelector(
      ".js-pagination__container"
    );
    this.legend = this.item.querySelector(".js-pagination__legend");
  }

  callPluginPagination(total, pageSize, signText) {
    const options = {
      dataSource: this.createDataSource(total),
      pageSize: pageSize,
      autoHidePrevious: true,
      autoHideNext: true,
      pageRange: 1,
      nextText: "arrow_forward",
      prevText: "arrow_back",
      callback: this.updateSign,
      legend: this.legend,
      signText: signText,
    };
    $(this.paginationContainer).pagination(options);
  }

  createDataSource(total) {
    return Array.from({ length: total }, (e, i) => i + 1);
  }

  updateSign(data, pagination) {
    const from = data[0];
    const to = data[data.length - 1];
    const total = pagination.totalNumber;
    if (total)
      this.legend.innerHTML = `${from} – ${to} из ${
        total > 100 ? "100+" : total
      } ${this.signText}`;
  }
}
