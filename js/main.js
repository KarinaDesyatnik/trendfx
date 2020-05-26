$(function(){

  // ------ start mobil menu---
$('.btn__menu').click(function(){
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('active');
		$('.header__account-button').toggleClass('active');
		$('.top-header-nav').toggleClass('active');
		$('.top-header .top-header-nav-sublist').addClass('close');
		$('.header__wrapper').toggleClass('active')		
	})
$('.top-header-nav-item--dropdown .top-header-nav-link').click(function(){
		$(this).parent().find('.top-header-nav-sublist').toggleClass('close');
		$(this).parent().toggleClass('active');
			
	})

$('.slider').slick({
	prevArrow: false,
	nextArrow: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 6000,
	fade: true
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

	$(".current-levels__tab").click(function() {
	$(".current-levels__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".current-levels__tab-content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".account-types__tab").click(function() {
	$(".account-types__tab").removeClass("active").eq($(this).index()).addClass("active");
}).eq(0).addClass("active");

 if($(window).width() < 991) {
$('.account-types__tab:first-child').click(function(){
	$('.account-contetn-tab .account-types__col:first-child').show();
	$('.account-contetn-tab .account-types__col:nth-child(2)').hide();
	$('.account-contetn-tab .account-types__col:nth-child(3)').hide();
	$('.account-contetn-tab .account-types__col:nth-child(4)').hide();			
	})
$('.account-types__tab:nth-child(2)').click(function(){
	$('.account-contetn-tab .account-types__col:nth-child(2)').show();
	$('.account-contetn-tab .account-types__col:first-child').hide();
	$('.account-contetn-tab .account-types__col:nth-child(3)').hide();
	$('.account-contetn-tab .account-types__col:nth-child(4)').hide();			
	})
$('.account-types__tab:nth-child(3)').click(function(){
	$('.account-contetn-tab .account-types__col:nth-child(3)').show();
	$('.account-contetn-tab .account-types__col:first-child').hide();
	$('.account-contetn-tab .account-types__col:nth-child(2)').hide();
	$('.account-contetn-tab .account-types__col:nth-child(4)').hide();			
	})
$('.account-types__tab:nth-child(4)').click(function(){
	$('.account-contetn-tab .account-types__col:nth-child(4)').show();
	$('.account-contetn-tab .account-types__col:first-child').hide();
	$('.account-contetn-tab .account-types__col:nth-child(2)').hide();
	$('.account-contetn-tab .account-types__col:nth-child(3)').hide();			
	})

}


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

$('.popup-duyurular__close').click(function(){
	$('.popup-duyurular').removeClass('active');			
	})
$('.duyurular__item .see-more').click(function(){
	$('.popup-duyurular').addClass('active');			
	})

$('.account-popup__close').click(function(){
	$('.popup2').removeClass('active');
	$('body').removeClass('account-page');				
	})
$('.account-table__btn2').click(function(){
	$('.popup2').addClass('active');
	$('body').addClass('account-page');					
	})
jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".account-popup__content"); 
     var popup = $(".popup2"); 
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     popup.removeClass('active'); 
    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".account-popup__content"); 
     var popup = $(".popup2"); 
     var body = $("body")
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     body.removeClass('account-page'); 
    }
  });
});

$('.account-popup__close').click(function(){
	$('.popup1').removeClass('active');
	$('body').removeClass('account-page');				
	})
$('.account-table__btn1').click(function(){
	$('.popup1').addClass('active');
	$('body').addClass('account-page');					
	})
jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".account-popup__content"); 
     var popup = $(".popup1"); 
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     popup.removeClass('active'); 
    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".account-popup__content"); 
     var popup = $(".popup1"); 
     var body = $("body")
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     body.removeClass('account-page'); 
    }
  });
});

$('.account-popup__close').click(function(){
	$('.popup3').removeClass('active');
	$('body').removeClass('account-page');				
	})
$('.account-table__btn3').click(function(){
	$('.popup3').addClass('active');
	$('body').addClass('account-page');					
	})
jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".account-popup__content"); 
     var popup = $(".popup3"); 
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     popup.removeClass('active'); 
    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".account-popup__content"); 
     var popup = $(".popup3"); 
     var body = $("body")
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     body.removeClass('account-page'); 
    }
  });
});

$('.account-popup__close').click(function(){
	$('.popup4').removeClass('active');
	$('body').removeClass('account-page');				
	})
$('.account-table__btn4').click(function(){
	$('.popup4').addClass('active');
	$('body').addClass('account-page');					
	})
jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".account-popup__content"); 
     var popup = $(".popup4"); 
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     popup.removeClass('active'); 
    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".account-popup__content"); 
     var popup = $(".popup4"); 
     var body = $("body")
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     body.removeClass('account-page'); 
    }
  });
});

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


jQuery(function($){
  $(document).mouseup(function (e){ 
    var popupContent = $(".popup-duyurular__content"); 
     var popup = $(".popup-duyurular"); 
    if (!popupContent.is(e.target) 
        && popupContent.has(e.target).length === 0) { 
     popup.removeClass('active'); 
    }
  });
});



 // ------ start input width calendar---
$( function() {
    $( ".datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "img/calender.svg",
      buttonImageOnly: true,
      buttonText: ""
    });
  } );
// ------ end input width calendar---

$(".platform-col").on('mousemove', function(e) {
	var w = $(".platform-col").width();
	var h = $(".platform-col").height();

	var offsetX = 0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;

	$(".parallax").each(function(i,el){
		//var offset = parseInt($(el).data('offset'));
		$(".parallax").addClass('active')

		var translate = "translate3d(" + Math.round(offsetX * offsetY)
		+ "px," + Math.round(offsetY * offsetY) + "px, 0px";
		$(el).css({
			'transform': translate

		})
	})
})



 if( window.innerWidth <= 991 ){
  $('.platform-col > div').removeClass("parallax");
  $('.parallax-wrapper > div').removeClass("parallax2");
  $('.parallax-wrapper3 > div').removeClass("parallax3");
  $('.parallax-wrapper4 > div').removeClass("parallax4");

}

$('.parallax-wrapper').on('mousemove', function(e) {
	var w = $('.parallax-wrapper').width();
	var h = $('.parallax-wrapper').height();

	var offsetX = 0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;

	$(".parallax2").each(function(i,el){
		var offset = parseInt($(el).data('offset'));
$(".parallax2").addClass('active')
		var translate = "translate3d(" + Math.round(offsetX * offset)
		+ "px," + Math.round(offsetY * offset) + "px, 0px";
		$(el).css({
			'transform':translate

		})
	})
})


$('.parallax-wrapper3').on('mousemove', function(e) {
	var w = $('.parallax-wrapper3').width();
	var h = $('.parallax-wrapper3').height();

	var offsetX = 0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;

	$(".parallax3").each(function(i,el){
		var offset = parseInt($(el).data('offset'));
$(".parallax3").addClass('active')
		var translate = "translate3d(" + Math.round(offsetX * offset)
		+ "px," + Math.round(offsetY * offset) + "px, 0px";
		$(el).css({
			'transform':translate

		})
	})
})

$('.parallax-wrapper4').on('mousemove', function(e) {
	var w = $('.parallax-wrapper4').width();
	var h = $('.parallax-wrapper4').height();

	var offsetX = 0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;

	$(".parallax4").each(function(i,el){
		var offset = parseInt($(el).data('offset'));
$(".parallax4").addClass('active')
		var translate = "translate3d(" + Math.round(offsetX * offset)
		+ "px," + Math.round(offsetY * offset) + "px, 0px";
		$(el).css({
			'transform':translate

		})
	})
})

