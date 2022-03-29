var obj = [];

let touchstartX = 0;
let touchendX = 0;

const slider = document.getElementById('slider');

function handleGesture() {
	let centerElement=parseInt($('.imagen.center').attr('id'));
	if (touchendX < touchstartX && centerElement<10) {
        $('#'+(centerElement-1).toString()).attr('class', 'imagen left out');
        $('#'+centerElement).attr('class', 'imagen left');
        $('#'+(centerElement+1).toString()).attr('class', 'imagen center');
        $('#indicator').text(centerElement+1);
        $('#'+(centerElement+2).toString()).attr('class', 'imagen right');
        $('#'+(centerElement+3).toString()).attr('class', 'imagen right out');
    }
	if (touchendX > touchstartX && centerElement>1 ) {
        $('#'+(centerElement+1).toString()).attr('class', 'imagen right out');
        $('#'+centerElement).attr('class', 'imagen right');
        $('#'+(centerElement-1).toString()).attr('class', 'imagen center');
        $('#indicator').text(centerElement-1);
        $('#'+(centerElement-2).toString()).attr('class', 'imagen left');
        $('#'+(centerElement-3).toString()).attr('class', 'imagen left out');
        
	}
}

slider.addEventListener('touchstart', (e) => {
	touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
	touchendX = e.changedTouches[0].screenX;
	handleGesture();
});

function togglePosition(clicked) {
	$('#indicator').text(clicked);
	const elementClicked = $(`#${clicked}`);
	const rightOneClicked = $(`#${parseInt(clicked) + 1}`);
	const rightTwoClicked = $(`#${parseInt(clicked) + 2}`);
	const leftOneClicked = $(`#${parseInt(clicked) - 1}`);
	const leftTwoClicked = $(`#${parseInt(clicked) - 2}`);

	if (elementClicked.attr('class') === 'imagen right') {
		console.log('derecha');
		elementClicked.attr('class', 'imagen center');
		rightOneClicked.attr('class', 'imagen right');
		leftOneClicked.attr('class', 'imagen left');
		leftTwoClicked.attr('class', 'imagen left out');
	} else if (elementClicked.attr('class') === 'imagen left') {
		elementClicked.attr('class', 'imagen center');
		leftOneClicked.attr('class', 'imagen left');
		rightOneClicked.attr('class', 'imagen right');
		rightTwoClicked.attr('class', 'imagen right out');
	}
}

$(document).ready(function() {
	var toggled = false;
	var navBar = $('#navBar');
	var navbarBrand = $('#navbar-brand');
	var navBarToggler = $('#navBarToggler');
	var navBarTogglerIcon = $('#navBarTogglerIcon');
	navBarText = $('#navBar-text');

	var contentBG = $('#contentBG');
	contentBG.css({ position: 'fixed', top: '0' });
	$(window).scroll(function() {
		var contentHeight = $('#galeria').height();
		if ($(window).scrollTop() + $(window).height() < contentHeight) {
			contentBG.css({ opacity: 1 });
		} else {
			contentBG.css({ opacity: 0 });
		}
	});

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
});
