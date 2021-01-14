$(document).ready(function(){
    $('.burger__menu').click(function(event){
        $('.burger__menu, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
$('.offer__inner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
  });
  $('.slider__cart').slick({
   arrows:false,
   dots: true,
   dotsClass: 'big'

  });
  $('.firms__inner').slick({
   arrows:false,
   dots: true,
   dotsClass: 'big'

  });
  
});


