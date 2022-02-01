var obj = [];

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

	var PrivadoCircle1=$('#PrivadoCircle1');
	var PrivadoCircle2=$('#PrivadoCircle2');

	var privadoShowInfo = $('#privadoShowInfo');

	//var prevPrivado = $('#prevPrivado');
	//var nextRightPrivado = $('#nextRightPrivado');
	//var prevRightPrivado = $('#prevRightPrivado');

	var comercialTwo = $('#comercialTwo');
	var comercialThree = $('#comercialThree');
	var chevronComercial = $('#chevronComercial');
	var comercialitem1 = $('#comercialitem1');
	var comercialitem2 = $('#comercialitem2');

	var ComercialCircle1=$('#ComercialCircle1');
	var ComercialCircle2=$('#ComercialCircle2');

	var comercialShowInfo = $('#comercialShowInfo');
	var comercialShowInfo2 = $('#comercialShowInfo2');

	//var prevComercial = $('#prevComercial');
	//var nextRightComercial = $('#nextRightComercial');
	//var prevRightComercial = $('#prevRightComercial');

	navbarBrand.click(function() {
		if (toggled) {
			if ($(window).width() < 576) {
				$('#navbarSupportedContent').removeClass('show');
				$('#navbarSupportedContent').addClass('collapsing');
				navBarToggler.css('visibility', 'visible');
				navbarBrand.css('visibility', 'hidden');
				navBar.css('background-color', 'rgba(200,200,200,0.0)');
				navBar.css('backdrop-filter', 'unset');
				navBar.css('-webkit-backdrop-filter', 'unset');
				toggled = !toggled;
			}
		}
	});

	navBarToggler.click(function() {
		if (toggled == false) {
			toggled = !toggled;
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
		} else {
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
			toggled = !toggled;
		}
	});

	/*
    privadoOne.click(function() {
		privadoOne.css('display', 'none');
		privadoTwo.css('display', 'flex');
	});
    
	prevPrivado.click(function() {
		privadoOne.css('display', 'flex');
		privadoTwo.css('display', 'none');
	});

    prevRightPrivado.click(function() {
        privadoitem1.css('display', 'block');
        privadoitem2.css('display', 'none');
    });
	
    */
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

	/*
	comercialOne.click(function() {
		comercialOne.css('display', 'none');
		comercialTwo.css('display', 'flex');
	});
	
	prevComercial.click(function() {
		comercialOne.css('display', 'flex');
		comercialTwo.css('display', 'none');
	});
	nextRightComercial.click(function() {
		comercialitem2.css('display', 'block');
		comercialitem1.css('display', 'none');
	});
	prevRightComercial.click(function() {
		comercialitem1.css('display', 'block');
		comercialitem2.css('display', 'none');
	});
    */

	comercialShowInfo.click(function() {
		if (comercialShowInfo.hasClass('active')) {
			comercialTwo.toggleClass('active');
		} else {
			comercialTwo.toggleClass('active');
		}
		comercialShowInfo.toggleClass('active');
	});

	comercialShowInfo2.click(function() {
		if (comercialShowInfo.hasClass('active')) {
			comercialThree.toggleClass('active');
		} else {
			comercialThree.toggleClass('active');
		}
		comercialShowInfo2.toggleClass('active');
	});

	chevronComercial.click(function() {
		comercialitem2.toggleClass('active');
		comercialitem1.toggleClass('active');
		ComercialCircle1.toggleClass('active');
		ComercialCircle2.toggleClass('active');
		chevronComercial.toggleClass('rotated');
	});

	
});
