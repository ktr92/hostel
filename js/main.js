$(document).ready(function () {

	try {
		$('.mainslider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: true,


		});
	} catch (err) {

	}


	try {
		$('.products__slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: false,
			dots: true,
			/*	prevArrow: $('.products__left'),
			  nextArrow: $('.products__right'),*/

		});


	} catch (err) {

	}

	try {
		$('.related__slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: true,
			dots: false,
			prevArrow: $('.related__left'),
			nextArrow: $('.related__right'),
			responsive: [

				{
					breakpoint: 990,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});
	} catch (err) {

	}

	try {
		$('.product-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			asNavFor: '.product-nav'
		});
		$('.product-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			arrow: true,
			prevArrow: $('.productslider__left'),
			nextArrow: $('.productslider__right'),

		});
	} catch (err) {

	}


	try {
		$('.product-for2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.product-nav2'
		});
		$('.product-nav2').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-for2',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			arrow: true,
			prevArrow: $('.productslider__left'),
			nextArrow: $('.productslider__right'),
		});
	} catch (err) {

	}


	$(".products__right").click(function (e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickNext"); // Switched to '.slick-slider'
	});

	$(".products__left").click(function (e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickPrev"); // Switched to '.slick-slider'
	});


	$(".products-slider__arrow_right").click(function (e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickNext"); // Switched to '.slick-slider'
	});

	$(".products-slider__arrow_left").click(function (e) { // Added a '.'
		$(this).parent().parent().find(".slick-slider").slick("slickPrev"); // Switched to '.slick-slider'
	});

	$("input[type=tel]").mask("+7 (999) 999-99-99");

	$('#mobile-filter').click(function () {
		//развернуть меню
		$('.filter__form').slideToggle('expand');
		$(this).toggleClass('expand');
	});

});


$(function () {

	$('.mobile__search').click(function (event) {

		$('.b-search-box').animate({
			width: 'toggle'
		}, 320).addClass('b-search-box--is-active');
	});

	$('.search-close').click(function (event) {

		$('.b-search-box').animate({
			width: 'toggle'
		}, 0).removeClass('b-search-box--is-active');
	});


	$('.mobile-menu').click(function () {
		$('.mobile__mainmenu').slideToggle('expand');
	});

	$('.mainmenu__close').click(function () {

		$('.mobile__mainmenu').slideToggle('expand');
	});


	$('.products__showmore').on('click', function () {
		$(".products__items_hidden .slick-slider").slick("slickNext").slick("slickPrev");

		$(this).toggle();
		$('.products__items_hidden').toggle();
	});


});


$(document).ready(function () {

	var k = 0
	$('.products__item').each(function () {
		k = $(this).find('ul.slick-dots li').size();
		var myWidth = 100 / k - 2;
		$(this).find('.products__slider .slick-dots li').width(myWidth + '%');
		k = 0;
	});
});


$(document).ready(function () {
	$('.metro__metka').click(function () {
		$('.mask_white').removeClass('active');
		/*$('.products__item_metro').removeClass('active');*/

		/*var x = $(this).attr('data-metka');*/
		/*$('.products__item_metro[data-metka="'+x+'"]').toggleClass('active');*/
		$('.mask_white').toggleClass('active');
	});
	$('.metro__close').click(function () {
		/*$('.products__item_metro').removeClass('active');*/
		$('.mask_white').removeClass('active');
	});
	
});



$(document).ready(function () {

	$('.rating li').mouseover(function(){
		var el = $(this).parent().parent().parent().find('.rating li').index($(this));
		$(this).parent().parent().parent().find('.rating li').each(function(e){
			if(e<=el){
				$(this).children().addClass('is-active');
			}else{
				$(this).children().removeClass('is-active');
			}
		})
	});
	$('.rating').mouseout(function(){
		$('.rating li a').removeClass('is-active');
	});
	$('.rating li a').click(function(){
		var el = $(this).parent().parent().parent().find('.rating li a').index($(this));
		$(this).parent().parent().parent().find('.rating li a').each(function(e){
			if(e<=el){
				$(this).addClass('active');
			}else{
				$(this).removeClass('active');
			}
		})
		$('#inpRating').val(el+1);
		return false;
	});

});









