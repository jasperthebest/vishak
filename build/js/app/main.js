	/* Build-in */
	window.onbeforeunload = function() {
		window.scrollTo(0,0);
	}
	/* Ready function */
	$(function() {
		/* Rectify Ios fixed bug */
		if(Modernizr.touch) { 
			$(document).on('focus', 'input, textarea', function(e) {
				$('body').addClass('fixfixed');
			}).on('blur', 'input, textarea', function(e) {
				$('body').removeClass('fixfixed');
			});	
		}
		/* Body Animate */
		$('body').animate({'opacity':1}, 1500);
		$('.popForm').fadeOut();
		/* BG intro */
		$('[data-bg]').each(function(){
		var curBg = $(this).data('bg');
		$(this).css({'background-image':'url('+curBg+')','filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+curBg+',sizingMethod=scale)'});
		});
		/* Home Slider */
		$('.sliderHome').slick({
		  autoplay: true,
		  autoplaySpeed: 6000,
		  dots: true,
		  infinite: true,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  adaptiveHeight: true,
		  arrows: false
		});
		$('.gallary').slick({
		  autoplay: true,
		  autoplaySpeed: 6000,
		  dots: false,
		  infinite: true,
		  pauseOnHover: false,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  adaptiveHeight: true,
		  arrows: false /*,
		  prevArrow: '<a href="javascript:void(0);" class="slick-prev slick-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
		  nextArrow: '<a href="javascript:void(0);" class="slick-next slick-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>' */
		});
		$('.productMap').slick({
			autoplay: false,
			arrows: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<a href="javascript:void(0);" class="slick-prev slick-arrow"><</a>',
			nextArrow: '<a href="javascript:void(0);" class="slick-next slick-arrow">></a>',
			 responsive: [
			    {
			      breakpoint: 880,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 640,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }]
		});
		$('.flexSliderm').slick({
			autoplay: true,
		  	autoplaySpeed: 6000,
			arrows: false,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			prevArrow: '<a href="javascript:void(0);" class="slick-prev slick-arrow"><</a>',
			nextArrow: '<a href="javascript:void(0);" class="slick-next slick-arrow">></a>',
			 responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 950,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 840,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 700,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 640,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 500,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    ]
		});
		 $('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: false,
		  asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  arrows: false,
		  dots: false,
		  centerMode: true,
		  focusOnSelect: true
		});
		$(".slideProduct > div").first().show();
		$('.closeProduct').click(function(){
			$('.thirdLayer .productTub').removeClass('active');
			$(this).parent().parent().slideUp();
			return false;
		});
		$('.thirdLayer .productTub').click(function(){
			var block = $(this).data('block');
			if(!$(this).hasClass('active')) {
				$("html, body").animate({ scrollTop: $('#slideTabScroll').offset().top - 71 }, 1000);
				$('.thirdLayer .productTub').removeClass('active');
				$(this).addClass('active');
				$('.slideProduct > div').slideUp();
				$('.'+block).slideDown();
			} else {
				$('.thirdLayer .productTub').removeClass('active');
				$('.slideProduct > div').slideUp();
			}
			return false;
		});
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.element-item',
		  layoutMode: 'fitRows'
		});
		// bind filter button click
		$('.filterSliding > div ul').on('click', 'li', function() {
		  	  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			  $('.filterSliding > div ul li').removeClass('active');
			  $(this).toggleClass('active');
		});
		var widthli = 0;
		var len = $('.filterSliding > div ul li').length - 1;
		$('.filterSliding > div ul li').each(function(index){
			widthli += $(this).innerWidth(); 
			if(len == index){
				$('.filterSliding > div').width(widthli);
			}
		});
		/* Close Pop */
		$('.closePop').click(function(){
			$('.popForm').fadeOut();
			return false;
		});
		/* Open Pop */
		$('.enquireNow').click(function(){
			$('.popForm').fadeIn();
			return false;
		});
		/* Click Menu */
		$('#nav-icon').click(function(){
			$(this).toggleClass('active');
			$('.subMenu').toggleClass('active');
			return false;
		});
		$('.subMenu > ul > li > a').click(function(){
			if($(this).siblings('ul').length != 0) {
				if(!$(this).siblings('ul').hasClass('active')){
					$(this).parent().addClass('active');
					$('.subMenu > ul > li > ul').removeClass('active');
					$(this).siblings('ul').toggleClass('active');
				} else {
					$('.subMenu > ul > li > ul, .subMenu > ul > li').removeClass('active');
				}
				return false;
			} else {
				$('.subMenu > ul > li > ul, .subMenu > ul > li').removeClass('active');
			}
		});
		$('#mobile-icon').click(function(){
			$(this).toggleClass('active');
			$('.mobileMenu').toggleClass('active');
			return false;
		});
		$('.mobileMenu > ul > li > a').click(function(){
			if($(this).siblings('.submenuMobile').length != 0) {
				if(!$(this).siblings('.submenuMobile').hasClass('active')){
					$(this).parent().addClass('active');
					$('.mobileMenu > ul > li .submenuMobile').removeClass('active');
					$('#mobile-icon').addClass('hide');
					$(this).siblings('.submenuMobile').addClass('active');
				} else {
					$('.mobileMenu > ul > li > .submenuMobile').removeClass('active');
				}
				return false;
			} else {
				$('.mobileMenu > ul > li > .submenuMobile').removeClass('active');
			}
		});
		$('.backTo').click(function(){
			$('#mobile-icon').removeClass('hide');
			$(this).parents('.submenuMobile').removeClass('active');
			return false;
		});
		/* Scroll Animation */ 
		$('*[data-animated]').addClass('animated');
			function animated_contents() {
			$(".animated:appeared").each(function (i) {
				var $this    = $(this),
					animated = $(this).data('animated');
				setTimeout(function () {
					$this.addClass(animated);
				}, 70 * i);
			});
		}
		/* Init Function */
		animated_contents();
		$(window).scroll(function() {
			animated_contents();
		});
	});

	/* Scroll */
	$(window).scroll(function() {
		
	});
	
	/* Resize */
	if(!Modernizr.touch) {
	$(window).resize(function(){

		/* Init Function */
	});
	}

	/* Orientation  */
	$(window).on("orientationchange",function(){

		/* Init Function */
	});
