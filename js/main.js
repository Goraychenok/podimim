jQuery(document).ready(function() {
  $('body').addClass('stop');
	$('.header').addClass('none');
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').addClass('active');
    });
    $('.popup-close').on('click',  function(event) {
      event.preventDefault();
      $('.popup').fadeOut();
			$('body').removeClass('stop');
			$('.header').removeClass('none');
  });
  
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });