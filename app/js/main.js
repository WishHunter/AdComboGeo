$(document).ready(function() {
	$('ul.menu').on('click','a', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href');
		var top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
		if (window.innerWidth < 992) {
			$('.right_nav').toggleClass('active').fadeOut();
		}
	});
	$('.logo').on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({scrollTop: 0}, 1500);
		if (window.innerWidth < 992) {
			$('.right_nav').toggleClass('active').fadeOut();
		}
	});
	$('.menu_burger').on('click', function (event) {
		event.preventDefault();
		$('.right_nav').toggleClass('active').slideToggle();
	});
	$('.language').on('click', function (event) {
		event.preventDefault();
		$('.language_box').toggleClass('active').slideToggle();
	});

	function timer_section2(){
	 	var options_spincrement = {
	  useEasing: true, 
	  useGrouping: true, 
	  separator: ' ', 
	  decimal: '.', 
		};
	  for (let i=1; i<7; i++) {
	    setTimeout( function timer(){
	    	console.log(i);
		  var id = 'spincrement' + i;
			var number = +($('#' + id).html());
			new CountUp(id, 0, number, 0, 8, options_spincrement).start();
		  }, i*1050 );
		};	
	}
	if (window.innerWidth > 991) {
		var el1 = new SimpleBar($('.custom_scroll')[0]);
		var el2 = new SimpleBar($('.step2').find('.tooltip_box')[0]);
	}
  $('.tooltip_button').on('click', function (event) {
		event.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).next('.tooltip_box').hide().removeClass('active');
			$(this).parent('.buttons_block').removeClass('active');
			if (window.innerWidth > 991) {
				el1.recalculate()
			} else {
				$(this).parents('.step2').children('.left_block').children('img').show()
			}
		} else {
			$(this).toggleClass('active');
			$(this).next('.tooltip_box').show().toggleClass('active');
			$(this).parent('.buttons_block').toggleClass('active');
			// $(this).offsetParent().animate({scrollTop: $(this).position().top}, 1500);
			if (window.innerWidth > 991) {
				el1.recalculate()
			} else {
				$(this).parents('.step2').children('.left_block').children('img').slideUp()
			}
			
		}	
	});
	$('.steps_slider').slick({
		adaptiveHeight: false,
		// autoplay: true, 
		// autoplaySpeed: 10000,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
	});

	var $win = $(window);
	var $marker = $('#WhyUs');

	//отслеживаем событие прокрутки страницы
	flag_timer = 0
	$win.scroll(function() {
		// console.log($marker.offset().top + ' = ' + $win.scrollTop() + ' + ' + $win.height())
  	if($win.scrollTop() + $win.height() >= ($marker.offset().top + 200)) {
  		if (flag_timer == 0) {
  			var options_spincrement = {
  			useEasing: true, 
	  		useGrouping: true, 
	  		separator: ' ', 
	  		decimal: '.', 
				};
				if (window.innerWidth > 991) {
		  		for (let i=1; i<7; i++) {
		  		  setTimeout( function timer(){
		  		  	console.log(i);
					  var id = 'spincrement' + i;
						var number = +($('#' + id).html());
						new CountUp(id, 0, number, 0, 7, options_spincrement).start();
					  }, i*800 );
					};
				} else {
					new CountUp('spincrement6', 0, 42000, 0, 7, options_spincrement).start();
				}
				flag_timer = 1;
  		}
  	}
	});

  $('.select_language').on('click', function (event) {
		event.preventDefault();
		var langCurrent = $('body').attr('data-lang-status');
    var langToSwitch = $(this).attr('data-lang-switcher');
    if (langCurrent !== langToSwitch) switchLang(langToSwitch);
    // $('.selected_language').html($(this).html());
    $(this).parent('.language_box').fadeOut();
    if (window.innerWidth < 992) {
    	$('.right_nav').toggleClass('active').fadeOut();
    };
  });
	function switchLang(lang) {
		$('html').css('opacity', '0');
		if (lang === 'vn') {
			$('html').addClass('vn_lang');
		} else {
			$('html').removeClass('vn_lang');
		};
		var activeLang = $('[data-lang-switcher = '+lang+']').html()
		$('.selected_language').html(activeLang);
		$('body').attr('data-lang-status', lang)
		var content = [].slice.call(document.querySelectorAll('[data-lang-id]'))
    content.forEach(function(item) {
			var id = +item.getAttribute('data-lang-id')
			item.innerHTML = data[lang]['content'][id]
		})
		setTimeout(function() { $('html').animate({opacity: "1"}, 500) }, 200);
	}

	var language = window.navigator ? (window.navigator.language ||
	window.navigator.systemLanguage ||
	window.navigator.userLanguage) : "en";
	language = language.substr(0, 2).toLowerCase();
	console.log(language);

	if (language === 'vn') switchLang('vn')
});
