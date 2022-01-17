var obj = [];
var carouselIndicators = $('#carouselIndicators');
var flotaSelected = 1;
var programaSelected = 1;

function selectFlota(selector) {
	const id = parseInt(selector.charAt(selector.length - 1));
	$(`#icon-flota-${flotaSelected}`).attr('src', `assets/images/mobile/Nuestra Flota/selector/${flotaSelected}.svg`);
	$(`#icon-flota-${id}`).attr('src', `assets/images/mobile/Nuestra Flota/selector/${id}-selected.svg`);
	$(`#flota-selector-${id}`).toggleClass('selected');
	$(`#flota-selector-${flotaSelected}`).toggleClass('selected');

	$(`#flota-imagen-${id}`).attr('class', 'imagen center');
	$(`#flota-imagen-${id + 1}`).attr('class', 'imagen right');
	$(`#flota-imagen-${id - 1}`).attr('class', 'imagen left');
	$(`#flota-imagen-${id + 2}`).attr('class', 'imagen right out');
	$(`#flota-imagen-${id - 2}`).attr('class', 'imagen left out');
	$(`#flota-imagen-${id + 3}`).attr('class', 'imagen right out');
	$(`#flota-imagen-${id - 3}`).attr('class', 'imagen left out');
	$(`#flota-imagen-${id + 4}`).attr('class', 'imagen right out');
	$(`#flota-imagen-${id - 4}`).attr('class', 'imagen left out');

	flotaSelected = id;
}

var i = 0;

var counterBack = setInterval('progressGrow()', 200);

function progressGrow() {
	i++;
	if (i <= 100) {
		$(`#programas-progressBar-${programaSelected}`).css('width', i + '%');
	} else {
		if (programaSelected < 5) {
			selectPrograma((programaSelected + 1).toString());
		} else {
			selectPrograma('1');
		}
	}
}

function selectPrograma(selector) {
	const id = parseInt(selector.charAt(selector.length - 1));
	clearInterval(counterBack);
	$(`#programas-progressBar-${programaSelected}`).css('width', '0%');
	$(`#programas-selector-${programaSelected}`).toggleClass('selected');
	$(`#programas-selector-${id}`).toggleClass('selected');
	$(`#programas-content-tab-${programaSelected}`).toggleClass('active');
	$(`#programas-content-tab-${id}`).toggleClass('active');

	programaSelected = id;
	i = 0;
	counterBack = setInterval('progressGrow()', 200);
}

function selectPreviousPrograma() {
	if (programaSelected > 1) {
		selectPrograma((programaSelected - 1).toString());
	} else {
		selectPrograma('5');
	}
}

function selectNextPrograma() {
	if (programaSelected <= 5) {
		selectPrograma((programaSelected + 1).toString());
	} else {
		selectPrograma('0');
	}
}

let touchstartX = 0;
let touchendX = 0;

const sliderAlumnos = document.getElementById('sliderAlumnos');

function handleGesture() {
	let id = $('.alumnocard.center').attr('id');
	let centerElement = parseInt(id.charAt(id.length - 1))

	if (touchendX < touchstartX && centerElement < 10) {
		$('#alumno-card-' + (centerElement - 1).toString()).attr('class', 'alumnocard left out');
		$('#alumno-card-' + centerElement).attr('class', 'alumnocard left');
		$('#alumno-card-' + (centerElement + 1).toString()).attr('class', 'alumnocard center');
		$('#indicator').text(centerElement + 1);
		$('#alumno-card-' + (centerElement + 2).toString()).attr('class', 'alumnocard right');
		$('#alumno-card-' + (centerElement + 3).toString()).attr('class', 'alumnocard right out');
	}
	if (touchendX > touchstartX && centerElement > 1) {
		$('#alumno-card-' + (centerElement + 1).toString()).attr('class', 'alumnocard right out');
		$('#alumno-card-' + centerElement).attr('class', 'alumnocard right');
		$('#' + (centerElement - 1).toString()).attr('class', 'alumnocard center');
		$('#indicator').text(centerElement - 1);
		$('#alumno-card-' + (centerElement - 2).toString()).attr('class', 'alumnocard left');
		$('#alumno-card-' + (centerElement - 3).toString()).attr('class', 'alumnocard left out');
	}
}

sliderAlumnos.addEventListener('touchstart', (e) => {
	touchstartX = e.changedTouches[0].screenX;
});

sliderAlumnos.addEventListener('touchend', (e) => {
	touchendX = e.changedTouches[0].screenX;
	handleGesture();
});

function togglePosition(id) {
	let clicked = parseInt(id.charAt(id.length - 1))
	console.log(clicked)
	//$('#indicator').text(clicked);
	const elementClicked = $(`#alumno-card-${clicked}`);
	const rightOneClicked = $(`#alumno-card-${parseInt(clicked) + 1}`);
	const rightTwoClicked = $(`#alumno-card-${parseInt(clicked) + 2}`);
	const leftOneClicked = $(`#alumno-card-${parseInt(clicked) - 1}`);
	const leftTwoClicked = $(`#alumno-card-${parseInt(clicked) - 2}`);

	if (elementClicked.attr('class') === 'alumnocard right') {
		elementClicked.attr('class', 'alumnocard center');
		rightOneClicked.attr('class', 'alumnocard right');
		leftOneClicked.attr('class', 'alumnocard left');
		leftTwoClicked.attr('class', 'alumnocard left out');
	} else if (elementClicked.attr('class') === 'alumnocard left') {
		elementClicked.attr('class', 'alumnocard center');
		leftOneClicked.attr('class', 'alumnocard left');
		rightOneClicked.attr('class', 'alumnocard right');
		rightTwoClicked.attr('class', 'alumnocard right out');
	}
}

$(document).ready(function() {
	var toggled = false;
	var fired = false;
	var navBar = $('#navBar');
	var navbarBrand = $('#navbar-brand');
	var navBarToggler = $('#navBarToggler');
	var navBarTogglerIcon = $('#navBarTogglerIcon');

	containerTestimonios = $('#containerTestimonios');
	containerEventos = $('#containerEventos');
	var testimonios = 'menu-categories/data/testimonios.json';
	var eventos = 'menu-categories/data/eventos.json';
	var carouselProgramas = $('#carouselProgramas');
	var elipseProgramas = $('#elipseProgramas');
	var sectionLabelProgramas = $('#sectionLabelProgramas');
	var sectionLabelProgramas = $('#sectionLabelProgramas');
	carouselIndicators = $('#carouselIndicators');
	var bienvenidaTimeout;
	var bienvenidaTimeout2;
	$(window).bind('scroll', function() {
		if (
			$(this).scrollTop() > $('#bienvenida').offset().top &&
			!fired &&
			$('#bienvenida').height() + $('#bienvenida').offset().top > $(this).scrollTop()
		) {
			fired = true;
			bienvenidaTimeout = setTimeout(function() {
				$('#BienvenidaFirstSection').toggleClass('inactive');
				$('#BienvenidaFirstSection').toggleClass('active');

				$('#BienvenidaSecondSection').toggleClass('inactive');
				$('#BienvenidaSecondSection').toggleClass('active');

				bienvenidaTimeout2 = setTimeout(function() {
					$('#BienvenidaSecondSection').toggleClass('inactive');
					$('#BienvenidaThirdSection').toggleClass('inactive');
					$('#BienvenidaSecondSection').toggleClass('active');
					$('#BienvenidaThirdSection').toggleClass('active');
					horasDeInstruccion.innerHTML = 15000;
					instructores.innerHTML = 25;
					aeronaves.innerHTML = 11;
					alumnos.innerHTML = 250;
				}, 3000);
			}, 3000);
		} else if (fired && $('#bienvenida').height() + $('#bienvenida').offset().top < $(this).scrollTop()) {
			clearTimeout(bienvenidaTimeout);
			clearTimeout(bienvenidaTimeout2);

			$('#BienvenidaFirstSection').removeClass('inactive');
			$('#BienvenidaSecondSection').removeClass('active');
			$('#BienvenidaThirdSection').removeClass('active');

			$('#BienvenidaFirstSection').addClass('active');
			$('#BienvenidaSecondSection').addClass('inactive');
			$('#BienvenidaThirdSection').addClass('inactive');

			horasDeInstruccion.innerHTML = 0;
			instructores.innerHTML = 0;
			aeronaves.innerHTML = 0;
			alumnos.innerHTML = 0;

			fired = false;
		}
	});

	LoadJson(testimonios, 1);
	LoadJson(eventos, 2);
	const titles = [
		'Licencia de piloto privado',
		'Licencia de piloto comercial',
		'Habilitación de vuelo multimotor',
		'Instructor de vuelo',
		'Licencia de Piloto Comercial'
	];

	carouselProgramas.on('slide.bs.carousel', function(e) {
		elipseProgramas.attr('src', `assets/images/components/Elipse${e.to}.svg`);
		sectionLabelProgramas.html(titles[e.to]);
	});

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
});

function LoadJson(url, selector) {
	$.ajax({
		method: 'get',
		url: url,
		dataType: 'json'
	})
		.done(function(data) {
			obj = data;
			switch (selector) {
				case 1:
					fillContainerTestimonios(obj);
					indicators(obj);
					break;
				case 2:
					fillContainerEventos(obj);
					break;
			}
		})
		.fail(function(error) {
			console.log(error);
		});
}

function fillContainerTestimonios(obj) {
	let string = '';
	obj.forEach(function(testimonio, i) {
		if (i % 6 === 0) {
			if (i === 0) {
				string += `
                <div class='carousel-item active'>
                    <div class="container-fluid mb-5">
                        <div class="row d-flex justify-content-center">
                `;
			} else {
				string += `
            <div class='carousel-item'}>
                <div class="container-fluid mb-5">
                    <div class="row d-flex justify-content-center ">
            `;
			}
		}

		string += `
        <div class="alumnoCard col-sm-12 col-md-6 col-lg-4 col-xl-4 p-md-3 p-sm-0">
            <div class="card h-100">
                <Container class="img-container d-flex justify-content-center">
                    <div class="p-relative w-50 img-container2">
                        <img src="menu-categories/testimonios/assets/images/testimonio/profile/${testimonio.nombre}.png" class="img-fluid" alt="...">
                        <img src="assets/images/testimonio/bandera/${testimonio.origen.toUpperCase()}.png" class="flag hidden" alt="-">
                    </div>
                </Container>  
                <div class="card-body mt-2 mb-0 py-0">
                    <h5 class="card-title">${testimonio.nombre}</h5>
                    <p class="hidden testimonio card-text mb-0 me-0">${testimonio.testimonioAdelanto}</p>
                    <p class="show nacionalidad card-text d-flex align-items-center justify-content-center">${testimonio.origen}<img src="assets/images/testimonio/bandera/${testimonio.origen.toUpperCase()}.png" alt="-"></p>
                </div>
                <div class="py-0 my-0 card-footer">
                <a class="show mt-0 py-0 mb-3" href="#">Ver testimonio</a>
                <a class="hidden my-0 py-0 " href="menu-categories/testimonios/?pais=${testimonio.origen.toLowerCase()}&alumno=${testimonio.nombre}">continuar leyendo</a>
                </div>
            </div>
        </div>
        `;

		if ((i + 1) % 6 === 0) {
			string += `
                    </div>
                </div>
            </div>
        `;
		}
	});

	containerTestimonios.html(string);
}

function indicators(obj) {
	let string = '';
	const pages = Math.ceil(obj.length / 6);

	for (let index = 0; index < pages; index++) {
		string += `
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to=${index} class=${index === 0
			? 'active'
			: null}
        aria-current="true" aria-label="Slide ${index + 1}"></button>
        `;
	}
	carouselIndicators.html(string);
}

function fillContainerEventos(obj) {
	obj.forEach(function(obj, i) {
		if (i < 3) {
			containerEventos.append(`
        <div class="col-sm-4 p-md-3 p-sm-0 mt-5">
            <div class="card h-100 " >
                <div class="card-body text-center">
                    <div class="hidden ">
                        <div class="d-flex flex-column h-100">
                            <p class="ampliado titulo card-text mb-0 " style="padding-top: 29.9%;">${obj.origen}, ${obj.dia} ${obj.mes} ${obj.año}</p>
                            <p class="ampliado fecha card-text mb-0"> ${obj.fecha}</p>
                            <p class="ampliado fecha card-text mb-0">${obj.horario}</p>
                            <p class="ampliado card-text mb-0">${obj.ciudad}, ${obj.origen}</p>
                            <p class="ampliado card-text mt-4 mb-0">${obj.descripcion}</p>
                            <button class="btn btn-primary px-4 py-2 mx-auto m-2 mt-auto" type="submit">Inscribirse</button>
                        </div>
                    </div>
                    <div class="show">
                        <img src="menu-categories/eventos/assets/images/evento/bandera/${obj.origen.toUpperCase()}.png" class=" img-fluid" alt="...">
                        <p class="mb-0 resumen card-text">${obj.ciudad}, ${obj.origen}</p>
                        <p class=" resumen fecha card-text pb-5"> ${obj.fecha}</p>                    
                    </div>
            </div>
        </div>
        `);
		}
	});
}
