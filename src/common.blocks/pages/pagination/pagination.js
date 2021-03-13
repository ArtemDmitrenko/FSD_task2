function simpleTemplating(data) {
  var html = '<ul>';
  $.each(data, function(index, item) {
    html += '<li>' + item + '</li>';
  });
  html += '</ul>';
  return html;
}

$('#pagination-container').pagination({
  dataSource: function(done) {
    var result = [];
    for (var i = 1; i < 170; i++) {
      result.push(i);
    }
    done(result);
  },
  pageSize: 12,
  autoHidePrevious: true,
  autoHideNext: true,
  pageRange: 1,
  callback: function(data, pagination) {
    var html = simpleTemplating(data);
    $('#data-container').html(html);
  },
})

let a = 1;
let b = 12;

$('.paginationjs').after($('<div>', {
  class: 'paginationjs__legend',
  text: a + ' – ' + b + ' из 100+ вариантов аренды'
}));