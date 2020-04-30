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

	$(".tool-tab").click(function() {
	$(".tool-tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tool-tab-content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".tool-tab2").click(function() {
	$(".tool-tab2").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tool-tab-content2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.call-for-action__button').click(function(){
	$('.popup').addClass('active');			
	})
$('.popup .close').click(function(){
	$('.popup').removeClass('active');			
	})

$('.tool-tab2').click(function(){
	$('.tool-tab-content').hide();			
	})
$('.tool-tab').click(function(){
	$('.tool-tab-content2').hide();			
	})
});



jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".popup__content"); 
     var popup = $(".popup"); 
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     popup.removeClass('active'); 
    }
  });
});