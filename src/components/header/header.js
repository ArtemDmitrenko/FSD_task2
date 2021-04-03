$(document).ready(function() {
  $('.js-header__burger').click(function() {
    $('.js-header__burger').toggleClass('header__openedBurger');
    $('.js-header__navMenuButtons').toggleClass('header__openedMenu');
    $('body').toggleClass('fixed-page');
  });
});