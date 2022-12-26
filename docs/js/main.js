$(function () {

  // $('.slider-blog__inner').slick({
  // 	arrows: false,
  // 	dots: true,
  // 	autoplay: true,
  // 	autoplaySpeed: 3000,
  // 	fade: true
  // });



  $('.slider-blog__inner').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="img/arrow-left.svg" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="img/arrow-right.svg" /></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  });


  $('.menu__btn').on('click', function name() {
    $('.menu__list').toggleClass('menu__list--active');

  });

  var mixer = mixitup('.portfolio__content');
});