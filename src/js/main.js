$(document).ready(function () {
    $('ul.category__menu').on('click', 'li:not(.category__list_active)', function() {
        $(this).addClass('category__list_active').siblings().removeClass('category__list_active')
            .closest('div.category__tabs').find('div.category__content').removeClass('category__content_active').eq($(this).index()).addClass('category__content_active');
    });
    $('.burger').on('click',function () {
        $('.header__menu').toggleClass('header__menu_active');
        $('.burger').toggleClass('open')
    });
});