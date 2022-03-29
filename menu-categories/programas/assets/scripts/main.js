var obj = [];

function carouselNormalization() {
	$('#collapseTwoInstructor').addClass('show');
	(window.heights = []), //create empty array to store height values
		window.tallest; //create variable to make note of the tallest slide

	function normalizeHeights() {
		jQuery('.carousel-item').each(function() {
			//add heights to array
			window.heights.push(jQuery(this).outerHeight());
		});
		window.tallest = Math.max.apply(null, window.heights); //cache largest value
		jQuery('.carousel-item').each(function() {
			jQuery(this).css('min-height', tallest + 'px');
		});
	}
	normalizeHeights();

	jQuery(window).on('resize orientationchange', function() {
		(window.tallest = 0), (window.heights.length = 0); //reset vars
		jQuery('.carousel-item').each(function() {
			jQuery(this).css('min-height', '0'); //reset min-height
		});

		normalizeHeights(); //run it again
	});
	$('#collapseTwoInstructor').removeClass('show');
}

function comercialNormalization() {
	let comercialOne = $('#comercialOne');
	let comercialTwo = $('#comercialTwo');
	let comercialThree = $('#comercialThree');
	let comercialFour = $('#comercialFour');

	(window.heights = []), //create empty array to store height values
		window.tallest; //create variable to make note of the tallest slide

	function normalizeHeights() {
		let activeclass;
		if (comercialOne.hasClass('active')) {
			activeclass = comercialOne;
		}
		if (comercialTwo.hasClass('active')) {
			activeclass = comercialTwo;
		}
		if (comercialThree.hasClass('active')) {
			activeclass = comercialThree;
		}

		if (comercialFour.hasClass('active')) {
			activeclass = comercialFour;
		}

		comercialOne.addClass('active');
		comercialTwo.addClass('active');
		comercialThree.addClass('active');
		comercialFour.addClass('active');

		//add heights to array
		window.heights.push(comercialOne.outerHeight());
		window.heights.push(comercialTwo.outerHeight());
		window.heights.push(comercialThree.outerHeight());
		window.heights.push(comercialFour.outerHeight());

		window.tallest = Math.max.apply(null, window.heights); //cache largest value

		comercialOne.css('min-height', tallest + 'px');
		comercialTwo.css('min-height', tallest + 'px');
		comercialThree.css('min-height', tallest + 'px');
		comercialFour.css('min-height', tallest + 'px');

		comercialOne.removeClass('active');
		comercialTwo.removeClass('active');
		comercialThree.removeClass('active');
		comercialFour.removeClass('active');
		activeclass.addClass('active');
	}

	normalizeHeights();
	jQuery(window).on('resize orientationchange', function() {
		comercialOne.css('min-height', '0px');
		comercialTwo.css('min-height', '0px');
		comercialThree.css('min-height', '0px');
		comercialFour.css('min-height', '0px');

		normalizeHeights(); //run it again
	});
}

$(document).ready(function() {
	var toggled = false;
	var navBar = $('#navBar');
	var navbarBrand = $('#navbar-brand');
	var navBarToggler = $('#navBarToggler');
	var navBarTogglerIcon = $('#navBarTogglerIcon');
	navBarText = $('#navBar-text');

	var privadoTwo = $('#privadoTwo');
	var chevronPrivado = $('#chevronPrivado');

	var privadoitem1 = $('#privadoitem1');
	var privadoitem2 = $('#privadoitem2');

	var PrivadoCircle1 = $('#PrivadoCircle1');
	var PrivadoCircle2 = $('#PrivadoCircle2');

	var privadoShowInfo = $('#privadoShowInfo');

	var comercialActive = 1;

	var comercialOne = $('#comercialOne');
	var comercialTwo = $('#comercialTwo');
	var comercialThree = $('#comercialThree');
	var comercialFour = $('#comercialFour');

	var chevronComercialPrev = $('#chevronComercialPrev');
	var chevronComercialNext = $('#chevronComercialNext');

	carouselNormalization();
	comercialNormalization();

	$('#navbarSupportedContent').on('hidden.bs.collapse', function() {
        if ($(window).width() < 576) {
            navBarToggler.css('visibility', 'visible');
            navbarBrand.css('visibility', 'hidden');
            navBar.css('background-color', 'rgba(200,200,200,0.0)');
            navBar.css('backdrop-filter', 'unset');
            navBar.css('-webkit-backdrop-filter', 'unset');
        } else {
            var newSource = navBarTogglerIcon.data('alt-src');
            navBarTogglerIcon.data('alt-src', navBarTogglerIcon.attr('src'));
            navBarTogglerIcon.attr('src', newSource);
            navBarToggler.css('background-color', 'rgba(0,0,0,0.0)');
            navBarToggler.css('backdrop-filter', 'blur(0px)');
            navBarToggler.css('-webkit-backdrop-filter', 'blur(0px)');
        }
    });

    $('#navbarSupportedContent').on('show.bs.collapse', function() {
        if ($(window).width() < 576) {
            navbarBrand.css('visibility', 'visible');
            navBarToggler.css('visibility', 'hidden');
            navBar.css('background-color', 'rgba(50,50,50,0.5)');
            navBar.css('backdrop-filter', 'blur(10px)');
            navBar.css('-webkit-backdrop-filter', 'blur(10px)');
        } else {
            var newSource = navBarTogglerIcon.data('alt-src');
            navBarTogglerIcon.data('alt-src', navBarTogglerIcon.attr('src'));
            navBarTogglerIcon.attr('src', newSource);
            navBarToggler.css('background-color', 'rgba(200,200,200,0.5)');
            navBarToggler.css('backdrop-filter', 'blur(10px)');
            navBarToggler.css('-webkit-backdrop-filter', 'blur(10px)');
        }
    });

	privadoShowInfo.click(function() {
		if (privadoShowInfo.hasClass('active')) {
			privadoTwo.toggleClass('active');
		} else {
			privadoTwo.toggleClass('active');
		}
		privadoShowInfo.toggleClass('active');
	});

	chevronPrivado.click(function() {
		privadoitem2.toggleClass('active');
		privadoitem1.toggleClass('active');
		PrivadoCircle1.toggleClass('active');
		PrivadoCircle2.toggleClass('active');
		chevronPrivado.toggleClass('rotated');
	});

	chevronComercialNext.click(function() {
		switch (comercialActive) {
			case 1:
				comercialOne.toggleClass('active');
				comercialTwo.toggleClass('active');
				chevronComercialPrev.addClass('active');
				comercialActive++;
				break;
			case 2:
				comercialTwo.toggleClass('active');
				comercialThree.toggleClass('active');
				comercialActive++;
				break;
			case 3:
				comercialThree.toggleClass('active');
				comercialFour.toggleClass('active');
				comercialActive++;
				chevronComercialNext.removeClass('active');
				break;
			default:
				console.log('nada');
		}
	});

	chevronComercialPrev.click(function() {
		switch (comercialActive) {
			case 2:
				comercialOne.toggleClass('active');
				comercialTwo.toggleClass('active');
				comercialActive--;
				chevronComercialPrev.removeClass('active');
				break;
			case 3:
				comercialTwo.toggleClass('active');
				comercialThree.toggleClass('active');
				comercialActive--;
				break;
			case 4:
				comercialThree.toggleClass('active');
				comercialFour.toggleClass('active');
				comercialActive--;
				chevronComercialNext.addClass('active');
				break;
			default:
		}
	});
});
