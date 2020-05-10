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

	$(".tab-tool-item").click(function() {
	$(".tab-tool-item").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tool-tab-content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".partner-content__item").click(function() {
	$(".partner-content__item").removeClass("active").eq($(this).index()).addClass("active");
 	$(".partner-content__content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


// 	$(".tool-tab2").click(function() {
// 	$(".tool-tab2").removeClass("active").eq($(this).index()).addClass("active");
//  	$(".tool-tab-content2").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");

// $('.tools__item').click(function(){
// 	$('.tool-tab2').removeClass('tool-tab2-defolt');
// 	})


$('.call-for-action__button').click(function(){
	$('.popup').addClass('active');			
	})
$('.popup .close').click(function(){
	$('.popup').removeClass('active');			
	})

// $('.tool-tab2').click(function(){
// 	$('.tool-tab-content').hide();
// 	$('.tool-tab').removeClass('active');
// 	$('.tool-tab2').removeClass('defolt');
	

					
// 	})
// $('.tool-tab').click(function(){
// 	$('.tool-tab-content2').hide();	
// 	$('.tool-tab2').removeClass('active');
// 	$('.tool-tab2').removeClass('defolt');
	
// 	})
$('.qoestion').click(function(){
	$(this).parent().toggleClass('active');
	$(this).parent().find('.answer').slideToggle();	

	
	})




	$(".training-header__item--w").click(function() {
	$(".training-header__item--w").removeClass("active").eq($(this).index()).addClass("active");
 	$(".training__content-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


	$(".education-tab").click(function() {
	$(".education-tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".education-tab-content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".education-tab2").click(function() {
	$(".education-tab2").removeClass("active").eq($(this).index()).addClass("active");
 	$(".education-tab-content2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".education-tab3").click(function() {
	$(".education-tab3").removeClass("active").eq($(this).index()).addClass("active");
 	$(".education-tab-content3").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".education-tab4").click(function() {
	$(".education-tab4").removeClass("active").eq($(this).index()).addClass("active");
 	$(".education-tab-content4").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".faq__tab").click(function() {
	$(".faq__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".faq-tab-content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");





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