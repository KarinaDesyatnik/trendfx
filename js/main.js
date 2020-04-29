$(function(){

  // ------ start mobil menu---
$('.btn__menu').click(function(){
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('active');
		$('.header__account-button').toggleClass('active');
		$('.top-header-nav').toggleClass('active');
		$('.top-header .top-header-nav-sublist').addClass('close')		
	})
$('.top-header-nav-item--dropdown .top-header-nav-link').click(function(){
		$(this).parent().find('.top-header-nav-sublist').toggleClass('close');
		$(this).parent().toggleClass('active');
			
	})

$('.slider').slick({
	prevArrow: false,
	nextArrow: false,
	dots: true
});
  // ------end mobil menu---

	$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".tab-platform").click(function() {
	$(".tab-platform").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-platform_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

});


