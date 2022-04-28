var obj = [];
var carouselIndicators = $('#carouselIndicators');
var flotaSelected = 1;
var programaSelected = 1;
var i = 0;
var counterBack = setInterval('progressGrow()', 200);
var maxEventos = 0;
var maxAlumnos = 0;
var maxFlota = 4
function toggleShowAlumnoCard(id) {
	let index = parseInt(id.split('-')[id.split('-').length - 1]);
	$('#alumno-card-default-hidden-body-' + index).attr('style', 'opacity:1;height:auto');
	$('#alumno-card-default-show-body-' + index).attr('style', 'display: none!important');
	$('#alumno-card-default-hidden-footer-' + index).attr('style', 'opacity:1;height:auto');
	$('#alumno-card-default-show-footer-' + index).attr('style', 'display: none!important');
}

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

const sliderFlota = document.getElementById('sliderFlota');

function handleGestureFlota() {
	let id = $('.imagen.center').attr('id');
	let centerElement = parseInt(id.split('-')[id.split('-').length - 1]);

	if (touchendX < touchstartX && centerElement < maxFlota) {
		selectFlota((centerElement + 1).toString());
	}
	if (touchendX > touchstartX && centerElement > 1) {
		selectFlota((centerElement - 1).toString());
	}
}

sliderFlota.addEventListener('touchstart', (e) => {
	touchstartX = e.changedTouches[0].screenX;
});

sliderFlota.addEventListener('touchend', (e) => {
	touchendX = e.changedTouches[0].screenX;
	handleGestureFlota();
});

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

const sliderProgramas = document.getElementById('sliderProgramas');

function handleGestureProgramas() {
	let id = $('.icon.selected').attr('id');
	let centerElement = parseInt(id.split('-')[id.split('-').length - 1]);

	if (touchendX < touchstartX && centerElement < maxEventos) {
		selectPrograma((centerElement + 1).toString());
	}
	if (touchendX > touchstartX && centerElement > 1) {
		selectPrograma((centerElement - 1).toString());
	}
}

sliderProgramas.addEventListener('touchstart', (e) => {
	touchstartX = e.changedTouches[0].screenX;
});

sliderProgramas.addEventListener('touchend', (e) => {
	touchendX = e.changedTouches[0].screenX;
	handleGestureProgramas();
});

let touchstartX = 0;
let touchendX = 0;

const sliderAlumnos = document.getElementById('sliderAlumnos');

function handleGestureAlumnos() {
	let id = $('.alumnocard.center').attr('id');
	let centerElement = parseInt(id.split('-')[id.split('-').length - 1]);

	if (touchendX < touchstartX && centerElement < maxAlumnos) {
		$('#alumno-card-' + (centerElement - 1).toString()).attr('class', 'alumnocard left out');
		$('#alumno-card-' + centerElement).attr('class', 'alumnocard left');
		$('#alumno-card-' + (centerElement + 1).toString()).attr('class', 'alumnocard center');
		$('#alumno-card-' + (centerElement + 2).toString()).attr('class', 'alumnocard right');
		$('#alumno-card-' + (centerElement + 3).toString()).attr('class', 'alumnocard right out');
		$('#indicator-alumnos').text(centerElement + 1);
	}
	if (touchendX > touchstartX && centerElement > 1) {
		$('#alumno-card-' + (centerElement + 1).toString()).attr('class', 'alumnocard right out');
		$('#alumno-card-' + centerElement).attr('class', 'alumnocard right');
		$('#alumno-card-' + (centerElement - 1).toString()).attr('class', 'alumnocard center');
		$('#alumno-card-' + (centerElement - 2).toString()).attr('class', 'alumnocard left');
		$('#alumno-card-' + (centerElement - 3).toString()).attr('class', 'alumnocard left out');
		$('#indicator-alumnos').text(centerElement - 1);
	}
}

sliderAlumnos.addEventListener('touchstart', (e) => {
	touchstartX = e.changedTouches[0].screenX;
});

sliderAlumnos.addEventListener('touchend', (e) => {
	touchendX = e.changedTouches[0].screenX;
	handleGestureAlumnos();
});

function togglePositionAlumnos(id) {
	let clicked = parseInt(id.split('-')[id.split('-').length - 1]);
	$('#indicator-alumnos').text(clicked);
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

const sliderEventos = document.getElementById('sliderEventos');

function handleGestureEventos() {
	let id = $('.eventocard.center').attr('id');
	let centerElement = parseInt(id.split('-')[id.split('-').length - 1]);

	if (touchendX < touchstartX && centerElement < maxEventos) {
		$('#indicator-evento-' + centerElement.toString()).toggleClass('selected');
		$('#indicator-evento-' + (centerElement + 1).toString()).toggleClass('selected');
		$('#evento-card-' + (centerElement - 1).toString()).attr('class', 'eventocard left out');
		$('#evento-card-' + centerElement).attr('class', 'eventocard left');
		$('#evento-card-' + (centerElement + 1).toString()).attr('class', 'eventocard center');
		$('#evento-card-' + (centerElement + 2).toString()).attr('class', 'eventocard right');
		$('#evento-card-' + (centerElement + 3).toString()).attr('class', 'eventocard right out');
		$('#indicator-eventos').text(centerElement + 1);
	}
	if (touchendX > touchstartX && centerElement > 1) {
		$('#indicator-evento-' + centerElement.toString()).toggleClass('selected');
		$('#indicator-evento-' + (centerElement - 1).toString()).toggleClass('selected');
		$('#evento-card-' + (centerElement + 1).toString()).attr('class', 'eventocard right out');
		$('#evento-card-' + centerElement).attr('class', 'eventocard right');
		$('#evento-card-' + (centerElement - 1).toString()).attr('class', 'eventocard center');
		$('#evento-card-' + (centerElement - 2).toString()).attr('class', 'eventocard left');
		$('#evento-card-' + (centerElement - 3).toString()).attr('class', 'eventocard left out');
		$('#indicator-eventos').text(centerElement - 1);
	}
}

sliderEventos.addEventListener('touchstart', (e) => {
	touchstartX = e.changedTouches[0].screenX;
});

sliderEventos.addEventListener('touchend', (e) => {
	touchendX = e.changedTouches[0].screenX;
	handleGestureEventos();
});

function togglePositionEventos(id) {
	let clicked = parseInt(id.split('-')[id.split('-').length - 1]);

	$('#indicator-eventos').text(clicked);
	const elementClicked = $(`#evento-card-${clicked}`);
	const rightOneClicked = $(`#evento-card-${parseInt(clicked) + 1}`);
	const rightTwoClicked = $(`#evento-card-${parseInt(clicked) + 2}`);
	const leftOneClicked = $(`#evento-card-${parseInt(clicked) - 1}`);
	const leftTwoClicked = $(`#evento-card-${parseInt(clicked) - 2}`);
	const indicatorElementClicked = $(`#indicator-evento-${clicked}`);
	const indicatorRightOneClicked = $(`#indicator-evento-${clicked + 1}`);
	const indicatorLeftOneClicked = $(`#indicator-evento-${clicked - 1}`);

	indicatorElementClicked.toggleClass('selected');
	if (elementClicked.attr('class') === 'eventocard right') {
		indicatorLeftOneClicked.toggleClass('selected');

		elementClicked.attr('class', 'eventocard center');
		rightOneClicked.attr('class', 'eventocard right');
		leftOneClicked.attr('class', 'eventocard left');
		leftTwoClicked.attr('class', 'eventocard left out');
	} else if (elementClicked.attr('class') === 'eventocard left') {
		indicatorRightOneClicked.toggleClass('selected');

		elementClicked.attr('class', 'eventocard center');
		leftOneClicked.attr('class', 'eventocard left');
		rightOneClicked.attr('class', 'eventocard right');
		rightTwoClicked.attr('class', 'eventocard right out');
	}
}

function scrollContainerAlumnosDesktop(id) {
	let clicked = parseInt(id.split('-')[id.split('-').length - 1]);

	$('.indicator.active').removeClass('active');
	$('#' + id).addClass('active');

	document.getElementById('ContainerAlumnosDesktop').scrollTo({
		top: 0,
		left: window.innerWidth * (clicked - 1),
		behavior: 'smooth'
	});
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
	var elipseSVGContainer = $('#elipseSVGContainer');
	var sectionLabelProgramas = $('#sectionLabelProgramas');
	carouselIndicators = $('#carouselIndicators');

	horasDeInstruccion.innerHTML = '00000';
	instructores.innerHTML = '00';
	aeronaves.innerHTML = '00';
	alumnos.innerHTML = '000';

	$(window).bind('scroll', function() {
		if (
			$(this).scrollTop() > $('#bienvenida').offset().top - 10 &&
			!fired &&
			$('#bienvenida').height() + $('#bienvenida').offset().top > $(this).scrollTop()
		) {
			fired = true;
			horasDeInstruccion.innerHTML = '15000';
			instructores.innerHTML = '25';
			aeronaves.innerHTML = '11';
			alumnos.innerHTML = '250';
		} else if (fired && $('#bienvenida').height() + $('#bienvenida').offset().top < $(this).scrollTop()) {
			horasDeInstruccion.innerHTML = '00000';
			instructores.innerHTML = '00';
			aeronaves.innerHTML = '00';
			alumnos.innerHTML = '000';
			fired = false;
		}
	});

	LoadJson(testimonios, 1);
	LoadJson(eventos, 2);
	const titles = [
		'Licencia de piloto privado',
		'Habilitación de vuelo por Instrumentos',
		'Habilitación de vuelo nocturno',
		'Habilitacion de vuelo multimotor',
		'Licencia de Piloto Comercial',
		'Licencia Instructor de Vuelo'
	];

	carouselProgramas.on('slide.bs.carousel', function(e) {
		elipseProgramas.attr('src', `assets/images/components/Elipse${e.to}.svg`);
		elipseSVGContainer.attr('class',`step-${e.to+1}`)
		sectionLabelProgramas.html(titles[e.to]);
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
	maxAlumnos = obj.length;

	//desktop
	obj.forEach(function(testimonio, i) {
		let half = Math.ceil(maxAlumnos / 2);
		if (i < half) {
			$('#containerTestimoniosRow1').append(`
				<div class="alumnoCard">
					<div class="card h-100">
						<Container class="img-container d-flex justify-content-center">
							<div class="p-relative w-50 img-container2">
								<img src="menu-categories/testimonios/assets/images/testimonio/profile/${testimonio.nombre}.png" class="img-fluid" alt="...">
								<img src="menu-categories/testimonios/assets/images/testimonio/bandera/${testimonio.origen.toUpperCase()}.svg" class="flag hidden" alt="-">
							</div>
						</Container>  
						<div class="card-body mt-2 mb-0 py-0">
							<h5 class="card-title">${testimonio.nombre}</h5>
							<p class="hidden testimonio card-text mb-0 me-0">${testimonio.testimonioAdelanto}</p>
							<p class="show nacionalidad card-text d-flex align-items-center justify-content-center mt-3">
								${testimonio.origen}
								<img src="menu-categories/testimonios/assets/images/testimonio/bandera/${testimonio.origen.toUpperCase()}.svg" alt="-">
							</p>
						</div>
						<div class="py-0 my-0 card-footer">
						<a class="show mt-0 py-0 mb-3" href="#">Ver testimonio</a>
						<a class="hidden my-0 py-0 " href="menu-categories/testimonios/?pais=${testimonio.origen.toLowerCase()}&alumno=${testimonio.nombre}">continuar leyendo</a>
						</div>
					</div>
				</div>
			`);
		} else {
			$('#containerTestimoniosRow2').append(`
				<div class="alumnoCard">
					<div class="card h-100">
						<Container class="img-container d-flex justify-content-center">
							<div class="p-relative w-50 img-container2">
								<img src="menu-categories/testimonios/assets/images/testimonio/profile/${testimonio.nombre}.png" class="img-fluid" alt="...">
								<img src="menu-categories/testimonios/assets/images/testimonio/bandera/${testimonio.origen.toUpperCase()}.svg" class="flag hidden" alt="-">
							</div>
						</Container>  
						<div class="card-body mt-2 mb-0 py-0">
							<h5 class="card-title">${testimonio.nombre}</h5>
							<p class="hidden testimonio card-text mb-0 me-0">${testimonio.testimonioAdelanto}</p>
							<p class="show nacionalidad card-text d-flex align-items-center justify-content-center">${testimonio.origen}
							<img src="menu-categories/testimonios/assets/images/testimonio/bandera/${testimonio.origen.toUpperCase()}.svg" alt="-"></p>
						</div>
						<div class="py-0 my-0 card-footer">
						<a class="show mt-0 py-0 mb-3" href="#">Ver testimonio</a>
						<a class="hidden my-0 py-0 " href="menu-categories/testimonios/?pais=${testimonio.origen.toLowerCase()}&alumno=${testimonio.nombre}">continuar leyendo</a>
						</div>
					</div>
				</div>
			`);
		}
	});

	//mobile
	obj.forEach(function(testimonio, i) {
		$('#sliderAlumnos').append(
			`<div class="alumnocard ${i === 0 ? 'center' : i === 1 ? 'right' : 'right out'}" id="alumno-card-${i +
				1}" onclick="togglePositionAlumnos(id)">
			<div class="alumnoCard">
				<div class="card h-100">
					<Container class="img-container d-flex justify-content-center">
						<div class="p-relative w-50 img-container2">
							<img src="menu-categories/testimonios/assets/images/testimonio/profile/${testimonio.nombre}.png" class="img-fluid" alt="...">
							<img src="menu-categories/testimonios/assets/images/testimonio/bandera/${testimonio.origen.toUpperCase()}.svg" class="flag hidden" alt="-">
						</div>
					</Container>  
					<div class="card-body mt-2 mb-0 py-0">
						<h5 class="card-title">${testimonio.nombre}</h5>
						<p id="alumno-card-default-hidden-body-${i}" class="hidden testimonio card-text mb-0 me-0">
							${testimonio.testimonioAdelanto}
						</p>
						<p id="alumno-card-default-show-body-${i}" class="show nacionalidad card-text d-flex align-items-center justify-content-center mt-3">
							${testimonio.origen}
							<img src="menu-categories/testimonios/assets/images/testimonio/bandera/${testimonio.origen.toUpperCase()}.svg" alt="-">
						</p>
					</div>
					<div class="py-0 my-0 card-footer">
					<a id="alumno-card-default-show-footer-${i}"  class="show mt-0 py-0 mb-3 footerLink" id="verTestimonio-${i}" onclick="toggleShowAlumnoCard(id)">Ver testimonio</a>
					<a id="alumno-card-default-hidden-footer-${i}"  class="hidden my-0 py-0 " href="menu-categories/testimonios/?pais=${testimonio.origen.toLowerCase()}&alumno=${testimonio.nombre}">continuar leyendo</a>
					</div>
				</div>
			</div>       
		</div>`
		);
	});

	$('#sliderAlumnos').append(
		`<div class="alumnocard placeholder">
			<div class="alumnoCard">
				<div class="card h-100">
					<Container class="img-container d-flex justify-content-center">
						<div class="p-relative w-50 img-container2">
							<img src="menu-categories/testimonios/assets/images/testimonio/profile/${obj[0].nombre}.png" class="img-fluid" alt="...">
							<img src="menu-categories/testimonios/assets/images/testimonio/bandera/${obj[0].origen.toUpperCase()}.svg" class="flag hidden" alt="-">
						</div>
					</Container>  
					<div class="card-body mt-2 mb-0 py-0">
						<h5 class="card-title">${obj[0].nombre}</h5>
						<p class="hidden testimonio card-text mb-0 me-0">${obj[0].testimonioAdelanto}</p>
						<p class="show nacionalidad card-text d-flex align-items-center justify-content-center">${obj[0]
							.origen}<img src="menu-categories/testimonios/assets/images/testimonio/bandera/${obj[0].origen.toUpperCase()}.svg" alt="-"></p>
					</div>
					<div class="py-0 my-0 card-footer">
					<a class="show mt-0 py-0 mb-3">Ver testimonio</a>
					<a class="hidden my-0 py-0 " href="menu-categories/testimonios/?pais=${obj[0].origen.toLowerCase()}&alumno=${obj[0]
			.nombre}">continuar leyendo</a>
					</div>
				</div>
			</div>       
		</div>`
	);

	$('#alumnosTotal').text('/' + obj.length);
}

function indicators(obj) {
	let string = '';
	const pages = Math.ceil(obj.length / 8);

	for (let index = 0; index < pages; index++) {
		string += `
        <button type="button" id='indicator-alumno-desktop-page-${index +
			1}' onclick="scrollContainerAlumnosDesktop(id)"
		 ${index === 0 ? 'class="indicator active"' : 'class="indicator"'}></button>
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
                            <a class="btn btn-primary px-4 py-2 mx-auto m-2 mt-auto" href="menu-categories/eventos/?pais=${obj.origen.toLowerCase()}" >Inscribirse</a>
                        </div>
                    </div>
                    <div class="show">
                        <img src="menu-categories/eventos/assets/images/evento/bandera/${obj.origen.toUpperCase()}.svg" class=" img-fluid" alt="...">
                        <p class="mb-0 resumen card-text">${obj.ciudad}, ${obj.origen}</p>
                        <p class=" resumen fecha card-text pb-5"> ${obj.fecha}</p>                    
                    </div>
            </div>
        </div>
        `);
		}
	});

	maxEventos = obj.length;

	obj.forEach(function(evento, i) {
		$('#sliderEventos').append(
			`
			<div id="evento-card-${i + 1}" class="eventocard ${i === 0
				? 'center'
				: i === 1 ? 'right' : 'right out'}" onclick="togglePositionEventos(id)">
				<div class="flagContainer">
					<img class="image" alt=""
					src="menu-categories/eventos/assets/images/evento/bandera/${evento.origen.toUpperCase()}.svg" >
				</div>
				<h1 class="title">
					${evento.nombre}
				</h1>
				<p class="content">
					<span class="emphasis">
						${evento.origen}, ${evento.mes.substring(0, 3)} ${evento.año}
					</span>
					<br>${evento.fecha}<br>${evento.inicio}HS ${evento.zonaHoraria}<br>${evento.ciudad}, ${evento.origen.toLowerCase()}
				</p>
				<div class="d-flex justify-content-center">
					<a class="btn btn-primary" type="submit" href="menu-categories/eventos/?pais=${evento.origen.toLowerCase()}">Inscribirse</a>
				</div>                            
			</div>
			`
		);

		$('#indicatorEventosMobile').append(`
		<div id="indicator-evento-${i + 1}" class="indicator ${i === 0 ? 'selected' : ''}"></div>
		`);
	});
	$('#sliderEventos').append(
		`<div id="evento-card-${i + 1}" class="eventocard placeholder" onclick="togglePositionEventos(id)">
		<div class="flagContainer">
			<img class="image" alt=""
			src="menu-categories/eventos/assets/images/evento/bandera/${obj[0].origen.toUpperCase()}.svg" >
		</div>
		<h1 class="title">
			${obj[0].descripcion}
		</h1>
		<p class="content">
			<span class="emphasis">
				PERÚ, DIC 2021
			</span>
			<br>1 DIC 2021<br>17:30HS GMT-5<br>Lima, Perú
		</p>
		<div class="d-flex justify-content-center">
			<button class="btn btn-primary" type="submit">Inscribirse</button>
		</div>                            
	</div>`
	);
}
