$(document).ready(function () {
  $('.header__catalog').on('click', function () {
    $('.popup-menu').addClass('popup-menu_active');
  });
  $('.header__catalog_popup').on('click', function () {
    $('.popup-menu').removeClass('popup-menu_active');
  });
});