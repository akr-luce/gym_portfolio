//ナビ開閉
$(function () {
  $('.header_nav').click(function () {
    $(this).toggleClass('on');
  });
});

//ローディング
$(window).on('load', function () {
  $('.loading').addClass('hide');
});