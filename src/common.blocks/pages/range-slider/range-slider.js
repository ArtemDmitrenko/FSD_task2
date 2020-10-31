$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    // grid: true,
    postfix: "₽",
    values_separator: " - ",
    decorate_both: true,
    hide_min_max: true,
    hide_from_to: false,
    skin: "big"
});