// fixed svg show
//-----------------------------------------------------------------------------

svg4everybody();
var wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 0,
	mobile: false,
	live: true,
	callback: function (box) {
	},
	scrollContainer: null
});
wow.init();
$(document).mouseup(function (e) {
	var container = $(".header");
	if (container.has(e.target).length === 0) {
		container.find(".header__inner").removeClass('open');
	}
});
$(document).mouseup(function (e) {
	var dropdown_container = $(".dropdown-menu");
	if (dropdown_container.has(e.target).length === 0) {
		dropdown_container.closest('.dropdown-menu').removeClass('is-open');
	}
});
$(window).on('scroll', function () {
	var height = $(window).scrollTop();
	$(".dropdown-menu").removeClass('is-open');
		
	
	if (height > 250) {
		$(".header").addClass('fixed');
	} else {
		$(".header").removeClass('fixed');
	}
});

$(document).ready(function () {
	$('.m-data__row-head').click(function () {
		$(this).closest(".m-data__row").toggleClass('is-open');


	});

	$(".js-chat-list").mCustomScrollbar({
		theme: "dark-1"
	});


	$('.js-title-cut').ellipsis({
		lines: 2,
		ellipClass: 'ellip',
		responsive: true
	});
	$(".items-group__head").click(function () {
		$(this).closest(".items-group").find('.order-item__list').transition("fade", function () {});
		$(this).closest(".items-group").toggleClass('is-open');

	});

	$(".btn-menu").click(function () {
		$(this).closest(".header").toggleClass('open');
		$(this).closest("body").toggleClass('js-block-scroll');
	});
	$("#btn-toogle-filter").click(function () {
		$("#filter").toggleClass('is-open');
		$(this).addClass('is-hidden');
		$(this).closest("body").toggleClass('js-block-scroll');


	});
	$(".close-filter").click(function () {
		$("#btn-toogle-filter").removeClass('is-hidden');
		$("#filter").removeClass('is-open');
		$(this).closest("body").toggleClass('js-block-scroll');

	});

	$('.b-text__head').click(function () {
		var $head = $(this).closest(".b-text");
		var text = $head.hasClass('is-open') ? 'Развернуть' : 'Свернуть'

		$head.toggleClass('is-open');
		$head.find(".b-text__body").transition("fade");

		$head.find('.b-text__head-title').html(text);
	})


	$(".dropdown-menu").click(function () {
		$(this).toggleClass('is-open');
	});
	$('.dropdown').dropdown();

	$('.js-general-experience').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		mobileFirst: true,
		dots: true,
		arrows: false,

		responsive: [{
			breakpoint: 767,
			settings: "unslick"
		}]
	});
	$('.js-general-slider').slick({
		dots: true,
		infinite: true

	});
	// pageWidget
	function pageWidget(pages) {
		var widgetWrap = $('<div class="widget_wrap"><div class="widget_inner"><ul class="widget_list"></ul></div></div>');
		widgetWrap.prependTo("body");
		for (var i = 0; i < pages.length; i++) {
			if (pages[i][0] === '#') {
				$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
			} else {
				$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
			}
		}
		var widgetStilization = $('<style>body {position:relative} .widget_list {max-height:700px} .widget_inner{overflow-y: auto;}.widget_wrap{position:fixed;top:0;left:0;z-index:9999;box-shadow: 0 2px 35px rgba(8, 13, 45, 0.14);padding:20px 20px 10px;background:#0074e4;border-bottom-right-radius:5px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#0074e4 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;pointer-events: all;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 3px}.widget_link{color:#fff;text-decoration:none;font-size:12px;font-weight:400;}.widget_link:hover{text-decoration:underline} </style>');
		widgetStilization.prependTo(".widget_wrap");
	};

	$(document).ready(function ($) {
		pageWidget(['index', 'headers'
		]);
	});
	// pageWidget End
});

function checkHeight(init) {
	if ($(window).height() < 400) {
		$('.header').addClass('small-height');
	} else {
		if (!init) {
			$('.header').removeClass('small-height');
		}
	}
}

$(document).ready(function () {
	$(".faq-item").click(function () {
		$(this).toggleClass("is-open").siblings().removeClass("is-open");
		
	});
	checkHeight(true);

	$(window).resize(function () {
		checkHeight(false);
	});
	// $('.input-calenrad').calendar({
	// 	type: 'date'
	//   });
	$('.cookie__btn').on('click', function () {
		$(this).closest(".cookie").remove();
	});
	$('.btn-remove').on('click', function () {
		$(this).closest(".c-order-general__file").remove();
	});
	$(".widget_inner").mCustomScrollbar({
		// axis:"x",
		theme: "dark-1"
	});
});


$('.js-input-date').datepicker({
	autoClose: true,
	position: "top left"
});
$('.js-input-time').datepicker({
	timepicker: true,
	onlyTimepicker: true
});
$('.tooltip').popup();