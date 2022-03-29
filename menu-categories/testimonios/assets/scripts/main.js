var obj = [];
let testimoniosCargados = [];
let tituloPaisSeleccionado = $();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let paisSeleccionado = urlParams.get('pais') || 'COLOMBIA';
let alumnoSeleccionado = urlParams.get('alumno') || 'Juan Andres Rivera';
let indexDelAlumnoSeleccionado = 0;
var countryFiltersMobile = $('#countryFiltersMobile');
var countryFilters = $('#countryFilters');
var mostrandoTestimonios = $('#mostrandoTestimonios');
var containerTestimoniosMobile = $('#containerTestimoniosMobile');

var paises = [];

$(document).ready(function() {
	var toggled = false;
	var navBar = $('#navBar');
	var navbarBrand = $('#navbar-brand');
	var navBarToggler = $('#navBarToggler');
	var navBarTogglerIcon = $('#navBarTogglerIcon');
	tituloPaisSeleccionado = $('#paisSeleccionado');
	navBarText = $('#navBar-text');
	countryFiltersMobile = $('#countryFiltersMobile');
	countryFilters = $('#countryFilters');
	mostrandoTestimonios = $('#mostrandoTestimonios');
	containerTestimonios = $('#selectorDeTestimonios');
	containerTestimonio = $('#containerTestimonio');
	carouselIndicators = $('#carouselIndicators');
	containerTestimoniosMobile = $('#containerTestimoniosMobile');

	var testimonios = '../data/testimonios.json';

	LoadJson(testimonios, 1, paisSeleccionado.toUpperCase());

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

function LoadJson(url, selector, pais) {
	$.ajax({
		method: 'get',
		url: url,
		dataType: 'json'
	})
		.done(function(data) {
			obj = data;
			switch (selector) {
				case 1:
					testimoniosCargados = obj;
					testimoniosFiltrados = obj.filter((testimonio) => testimonio.origen === pais);
					paises = Array.from(new Set(obj.map((testiomonioMap) => testiomonioMap.origen))).sort();
					fillFilterTestimonios();
					fillContainerTestimonios(testimoniosFiltrados);
					fillContainerTestimoniosMobile(testimoniosFiltrados);

					indexDelAlumnoSeleccionado = testimoniosFiltrados.findIndex(
						(alumno) => alumno.nombre === alumnoSeleccionado
					);
					indexDelAlumnoSeleccionado = indexDelAlumnoSeleccionado === -1 ? 0 : indexDelAlumnoSeleccionado;
					testimonio(indexDelAlumnoSeleccionado);
					indicators();
					tituloPaisSeleccionado.text(pais.toLowerCase());
					updateMostrandoTestimonios(pais.toLowerCase());
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
	obj.forEach(function(obj, i) {
		if (i % 4 === 0) {
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
            <div class="alumnoCard col-sm-3 pt-0 p-md-4 p-sm-0  ">
                <div class="card h-100">
                    <div class="d-flex w-100 justify-content-center">
                            <div  class="profilePic p-relative">
                                <img class="w-100 d-block"src="assets/images/testimonio/profile/${obj.nombre}.png" alt="...">
                                <div class="flag">
                                <img class="w-100 d-block" src="assets/images/testimonio/bandera/${obj.origen.toUpperCase()}.svg"  alt="-">
                            </div>
                                </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${obj.nombre}</h5>
                    </div>
                    <div class="card-footer">
                        <a class="show" href="#testimonio" onclick="testimonio(${i})">Ver testimonio</a>
                    </div>
                </div>
            </div>
        `;
		if ((i + 1) % 4 === 0) {
			string += `
                    </div>
                </div>
            </div>
        `;
		}
	});

	containerTestimonios.html(string);
}

function fillContainerTestimoniosMobile(obj) {
	let string = '';
	obj.forEach(function(obj, i) {
		string += `
				<div class="col-10 testimonioCardContainer">
					<div class="testimonioCard">
						<div class="h-0">
							<div class="imageContainer">
								<div class="image">
									<img src="assets/images/testimonio/profile/${obj.nombre}.png" alt=""
										class="profile">
									<img class="flag"  src="assets/images/testimonio/bandera/${obj.origen.toUpperCase()}.svg" alt="">
								</div>
							</div>
						</div>
						<h1 class="name">${obj.nombre}</h1>
						<p class="testimonio">
							${obj.testimonio}
						</p>
					</div>
				</div>
                `;
	});

	containerTestimoniosMobile.html(string);
}

function testimonio(numeroDeTestimonio) {
	indexDelAlumnoSeleccionado = numeroDeTestimonio;

	containerTestimonio.html(`
	<div class="row d-flex justify-content-center">
		<div class="contenedorTestimonio">
		<h1 class="title mb-5">${testimoniosFiltrados[numeroDeTestimonio].nombre}</h1>
		<h2 class="mb-2 d-flex align-items-center">
			<span class="origen">PAÍS DE ORIGEN: </span><img class="mx-2 d-inline-block" style="width:22px" src="assets/images/testimonio/bandera/${testimoniosFiltrados[
				numeroDeTestimonio
			].origen}.svg" alt="">
			<span class="origen">${testimoniosFiltrados[numeroDeTestimonio].origen}</span>
		</h2>
		</div>
  	</div>
  	<div class="line"></div>
	<div class="line" style="margin-left:0.4%"></div>
	<div class="container-fluid px-0">
		<div class="row  mx-0 w-100 d-flex justify-content-center p-relative">
			<div class="chevronLeftContainer" onclick="anteriorTestimonio()">
				<img class="image" src="assets/images/components/Chevron.svg" alt="">
			</div>
			<div class="row d-flex justify-content-center contenedorTestimonio">
				<div class="ps-0 col-4 d-none d-md-block d-lg-block d-xl-block">
					<img src="assets/images/testimonio/picture/${testimoniosFiltrados[numeroDeTestimonio]
						.nombre}.png" alt="" class="img-fluid">
				</div>
				<div class="col xs-12 md-12 lg-8 ms-0 ms-md-4 ms-lg-4 ms-xl-4">
					<p class="paragraph">
					${testimoniosFiltrados[numeroDeTestimonio].testimonio}
					</p>
				</div>
			</div>
			<div class="chevronRightContainer" onclick="proximoTestimonio()">
				<img class="image" src="assets/images/components/Chevron-1.svg" alt="">
			</div>	
		</div>
	</div>
  `);
}

function indicators() {
	let string = '';
	const pages = Math.ceil(testimoniosFiltrados.length / 4);

	if (pages < 2) {
		$('#next').addClass('d-none');
		$('#next').removeClass('d-block');
		$('#prev').addClass('d-none');
		$('#prev').removeClass('d-block');
	} else {
		$('#next').addClass('d-block');
		$('#next').removeClass('d-none');
		$('#prev').addClass('d-block');
		$('#prev').removeClass('d-none');
	}
	for (let index = 0; index < Math.ceil(testimoniosFiltrados.length / 4); index++) {
		string += `
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to=${index} class=${index === 0
			? 'active'
			: null}
        aria-current="true" aria-label="Slide ${index + 1}"></button>
        `;
	}
	carouselIndicators.html(string);
}

function pais(pais) {
	paisSeleccionado = pais;
	tituloPaisSeleccionado.text(pais.toLowerCase());
	updateMostrandoTestimonios(pais.toLowerCase());
	testimoniosFiltrados = testimoniosCargados.filter((testimonio) => testimonio.origen === pais);
	fillContainerTestimonios(testimoniosFiltrados);
	fillContainerTestimoniosMobile(testimoniosFiltrados);
	indexDelAlumnoSeleccionado = 0;
	testimonio(indexDelAlumnoSeleccionado);
	indicators();
}

function anteriorTestimonio() {
	if (indexDelAlumnoSeleccionado > 0) {
		indexDelAlumnoSeleccionado--;
	} else {
		indexDelAlumnoSeleccionado = testimoniosFiltrados.length - 1;
	}
	testimonio(indexDelAlumnoSeleccionado);
}

function proximoTestimonio() {
	if (indexDelAlumnoSeleccionado < testimoniosFiltrados.length - 1) {
		indexDelAlumnoSeleccionado++;
	} else {
		indexDelAlumnoSeleccionado = 0;
	}
	testimonio(indexDelAlumnoSeleccionado);
}

function fillFilterTestimonios() {
	paises.forEach(function(pais, i) {
		countryFilters.append(`
		<img id="${pais.toUpperCase()}" class="countryFlagFilter"
                                            src="assets/images/testimonio/bandera/${pais.toUpperCase()}.svg" onclick="pais(id)"
                                            alt="">

		`);
		countryFiltersMobile.append(`
		<li>
			<a class="dropdown-item" id="${pais.toUpperCase()}" onclick="pais(id)" >
				<img src="assets/images/testimonio/bandera/${pais.toUpperCase()}.svg"  alt="">
				${pais.toLowerCase()}
			</a>
		</li>
		`);
	});
}

function updateMostrandoTestimonios(pais) {
	mostrandoTestimonios.html(
		`<p id="mostrandoTestimonios" class="mostrandoTestimonios">Mostrando testimonios de:<br><img src="assets/images/testimonio/bandera/${pais.toUpperCase()}.svg" alt="">${pais.toLowerCase()}</p>`
	);
}
