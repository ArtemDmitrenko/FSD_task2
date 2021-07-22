import "paginationjs";

export default class Pagination {
  constructor(item) {
    this.item = item;
    this.init();
    this.callPluginPagination();
    this.createSign(1, 12);
  }

  init() {
    this.paginationContainer = this.item.querySelector(
      ".js-pagination__container"
    );
    this.paginationData = this.item.querySelector(".js-pagination__data");
    this.pagCon = this.item.querySelector(".paginationjs");
  }

  simpleTemplating(data) {
    let html = "<ul>";
    $.each(data, function (index, item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ul>";
    return html;
  }

  callPluginPagination() {
    const options = {
      dataSource: function (done) {
        let result = [];
        for (let i = 1; i < 170; i++) {
          result.push(i);
        }
        done(result);
      },
      pageSize: 12,
      autoHidePrevious: true,
      autoHideNext: true,
      pageRange: 1,
      nextText: "arrow_forward",
      prevText: "arrow_back",
      bindedSimpleTemplating: this.simpleTemplating,
      callback: function (data, pagination) {
        var html = this.bindedSimpleTemplating(data);
        $(this.paginationData).html(html);
      },
    };
    $(this.paginationContainer).pagination(options);
  }

  createSign(from, to) {
    $(this.pagCon).after(
      $("<div>", {
        class: "paginationjs__legend",
        text: from + " – " + to + " из 100+ вариантов аренды",
      })
    );
  }
}
