import "./../../import-jquery";
import "paginationjs/src/pagination.js";


export default class Pagination {
  constructor(item) {
    this.item = item;
    this.init();
  }

  init() {
    this.callPluginPagination();
    this.createSign(1, 12)
  }

  simpleTemplating(data) {
    let html = '<ul>';
    $.each(data, function(index, item) {
      html += '<li>' + item + '</li>';
    });
    html += '</ul>';
    return html;
  }

  callPluginPagination() {
    const paginationContainer = this.item.querySelector('.js-pagination__container');
    const paginationData = this.item.querySelector('.js-pagination__data');
    const options = {
      dataSource: function(done) {
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
      bindedSimpleTemplating: this.simpleTemplating,
      callback: function(data, pagination) {
        var html = this.bindedSimpleTemplating(data);
        $(paginationData).html(html);
      }
    }
    $(paginationContainer).pagination(options);
  }

  createSign(from, to) {
    const paginationContainer = this.item.querySelector('.paginationjs');
    $(paginationContainer).after($('<div>', {
      class: 'paginationjs__legend',
      text: from + ' – ' + to + ' из 100+ вариантов аренды'
    }))
  }
}