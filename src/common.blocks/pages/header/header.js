$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger').toggleClass('header__openedBurger');
        $('.header__navMenuButtons').toggleClass('header__openedMenu');
        $('body').toggleClass('fixed-page');
    });
});