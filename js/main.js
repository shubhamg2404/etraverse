AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});


function create(obj) {
	this.settings = $.extend({
		'node': 'div'
	}, obj)
	var node = $(document.createElement(settings.node));

	for (var i in settings) {
		var attr = i[0].toLowerCase();

		if (attr === 'a') {
			node.attr(i.slice(1, i.length), settings[i]);
		}
		if (attr === 'e') {
			if (typeof settings[i] === 'function') {
				node.on(i.slice(1, i.length), settings[i]);
			}
		}
	}
	if (settings.class != undefined) {
		node.addClass(settings.class);
	}
	if (settings.html != undefined) {
		node.html(settings.html)
	}
	if (settings.child != undefined) {
		for (var i in settings.child) {
			node.append(settings.child[i]);
		}
	}

	if (settings.position != undefined) {

		node.css({
			'position': 'absolute',
			'top': settings.position.y,
			'left': settings.position.x
		})
	}

	if (settings.parent != undefined) {
		//console.warn($(settings.parent));
		$(settings.parent).append(node);
	}
	return node;
}




jQuery(document).ready(function ($) {

	"use strict";


	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#loader').length > 0) {
				$('#loader').removeClass('show');
			}
		}, 1);
	};
	loader();



	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	};
	// siteSliderRange();



	var siteCarousel = function () {

		if ($('.hero-slide').length > 0) {
			$('.hero-slide').owlCarousel({
				items: 1,
				loop: true,
				margin: 0,
				autoplay: true,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				smartSpeed: 1000
			});
		}

		if ($('.owl-slide-3').length > 0) {
			$('.owl-slide-3').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 10,
				margin: 30,
				autoplay: true,
				smartSpeed: 500,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {
						items: 2
					},
					1000: {
						items: 2
					},
					1200: {
						items: 3
					}
				}
			});
		}

		if ($('.owl-slide').length > 0) {
			$('.owl-slide').owlCarousel({
				center: false,
				items: 2,
				loop: true,
				stagePadding: 0,
				margin: 30,
				autoplay: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {

						nav: true,
						items: 2
					},
					1000: {

						stagePadding: 0,
						nav: true,
						items: 2
					},
					1200: {

						stagePadding: 0,
						nav: true,
						items: 2
					}
				}
			});
		}


		if ($('.nonloop-block-14').length > 0) {
			$('.nonloop-block-14').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {
						margin: 20,
						nav: true,
						items: 2
					},
					1000: {
						margin: 30,
						stagePadding: 0,
						nav: true,
						items: 2
					},
					1200: {
						margin: 30,
						stagePadding: 0,
						nav: true,
						items: 3
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function () {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();

	var siteCountDown = function () {

		$('#date-countdown').countdown('2020/10/10', function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function () {

		if ($('.datepicker').length > 0) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
			// e.preventDefault();

			// var hash = this.hash;

			// $('html, body').animate({
			// 	'scrollTop': $(hash).offset().top
			// }, 600, 'easeInOutCirc', function () {
			// 	window.location.hash = hash;
			// });

		});
	};
	//OnePageNavigation();

	var siteScroll = function () {



		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};

	function createFooter() {
		try {
			var footer = create({
				'class':'footer',
				'parent':'.site-wrap'
			});
			var container = create({
				'class':'container',
				'parent':footer
			});
			var row = create({
				'class':'row',
				'parent':container
			});

			var columns = {
				"Our Offerings":{
					"Dedicated Development Team":"offering_team.html",
					"All-in-One-ERP for Institutions":"offering_erp.html",
					"Learning Management System":"offering_lms.html",
					"Library Management System":"offering_library_management.html"
				},
				"Milestones":{
					"Africa Day- Vibrant Gujarat Global Submit 2019, India":"event_africa_day.html",
					"Women in IT Awards 2019, Singapore":"event_wiit_awards.html",
					"EduTech Africa 2019, Johannesburg, South Africa":"event_edutech_africa.html"
				},
				"Help Center":{
					"Contact Us":"contact.html",
					"info@etraverse.com":"",
					"Skype: info@eTraverse":""
				}
			}

			var numberOfColumns = Number.parseInt(12/(Object.keys(columns).length+1));

			var firstColumn = create({
				'class':'col-lg-$'.replace("$",numberOfColumns),
				'parent':row
			});
			$(firstColumn).append('<p class="mb-4"><img src="images/Footerlogo.png" alt="image" class="img-fluid"></p>');
			
			create({
				"node":"p",
				"html":"Education. Technology. Empowerment",
				"parent":firstColumn
			})



			for(var heading in columns){
				var column = create({
					'class':'col-lg-$'.replace("$",numberOfColumns),
					'parent':row
				})
				var h2 = create({
					'node':"h3",
					"class":"footer-heading",
					"parent":column
				});
				var text = create({
					'node':"span",
					"html":heading,
					"parent":h2
				});
				var orderedList = create({
					"node":"ul",
					"class":"list-unstyled",
					"parent":column
				});
				for(var subheading in columns[heading]){
					if(columns[heading][subheading]){
						$(orderedList).append('<li><a href="#">$</a></li>'.replace("#",columns[heading][subheading]).replace("$",subheading));
					}else{
						$(orderedList).append('<li>$</li>'.replace("$",subheading));
					}
					
				}
			}


			// Credits Section

			var creditRow = create({
				'class':row,
				'parent':footer
			})
			var fullColumn = create({
				'class':'col-12',
				'parent':creditRow
			});
			var copyright = create({
				'class':'copyright',
				'parent':fullColumn
			})
			var year = new Date().getFullYear();
			var para = create({
				'node':'p',
				'html':'Copyright &copy; $year All rights reserved | \
						Designed and Developed with <i class="icon-heart" aria-hidden="true"></i>  by\
						<a target="_blank" class="font-weight-bold" href="https://www.facebook.com/grafictale/"> Henny Shah</a> and <a class="font-weight-bold" href="https://shubhamg2404.github.io/portfolio/" target="_blank">Shubham Gupta</a>'.replace("$year",year),
				"parent":copyright
			})

			



			


		} catch (e) {
		}
	}
	createFooter();

	siteScroll();

	$(function () {
		// $("#bgndVideo").YTPlayer();
	});

});