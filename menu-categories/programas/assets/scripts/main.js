var obj = [];

$(document).ready(function() {
	var toggled = false;
	var navBar = $('#navBar');
	var navbarBrand = $('#navbar-brand');
	var navBarToggler = $('#navBarToggler');
	var navBarTogglerIcon = $('#navBarTogglerIcon');
	navBarText = $('#navBar-text');

	var privadoOne = $('#privadoOne');
	var privadoTwo = $('#privadoTwo');
	var chevronPrivado = $('#chevronPrivado');
	var privadoitem1 = $('#privadoitem1');
	var privadoitem2 = $('#privadoitem2');

	//var prevPrivado = $('#prevPrivado');
	//var nextRightPrivado = $('#nextRightPrivado');
	//var prevRightPrivado = $('#prevRightPrivado');

	var comercialOne = $('#comercialOne');
	var comercialTwo = $('#comercialTwo');
	var comercialThree = $('#comercialThree');
    var chevronComercial =$('#chevronComercial')
	var comercialitem1 = $('#comercialitem1');
	var comercialitem2 = $('#comercialitem2');
	var Toitem3Comercial = $('#Toitem3Comercial');

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

	chevronPrivado.click(function() {
		console.log(privadoOne.css('display'));
		if (privadoOne.css('display') === 'flex') {
			privadoOne.css('display', 'none');
			privadoTwo.css('display', 'flex');
		} else {
			if (privadoitem2.css('display') == 'none') {
				privadoitem2.css('display', 'block');
				privadoitem1.css('display', 'none');
			} else {
				privadoitem2.css('display', 'none');
				privadoitem1.css('display', 'block');
			}
			chevronPrivado.toggleClass('rotated');
		}
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

    Toitem3Comercial.click(function() {
		comercialTwo.css('display', 'none');
		comercialThree.css('display', 'flex');
        chevronComercial.css({'opacity':'0','pointerEvents':'none'});
	});

	chevronComercial.click(function() {
		if (comercialOne.css('display') === 'flex') {
			comercialOne.css('display', 'none');
			comercialTwo.css('display', 'flex');
		} else {
			if (comercialitem2.css('display') == 'none') {
				comercialitem2.css('display', 'block');
				comercialitem1.css('display', 'none');
			} else {
				comercialitem2.css('display', 'none');
				comercialitem1.css('display', 'block');
			}
			chevronComercial.toggleClass('rotated');
		}
	});

});
