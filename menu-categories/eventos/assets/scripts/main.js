var obj = [];
let eventos = [];
let eventosFiltrados = [];
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let paisSeleccionado = urlParams.get('pais') || 'COLOMBIA';
let eventoSeleccionado = urlParams.get('alumno') || 'Juan Andres Rivera';
var flags = $('#flags');
var countryFilters = $('#countryFilters');
var countryFiltersMobile = $('#countryFiltersMobile');
var MostrandoEventos = $('#MostrandoEventos');

var paises = [];

$(document).ready(function() {
	var toggled = false;
	var navBar = $('#navBar');
	var navbarBrand = $('#navbar-brand');
	var navBarToggler = $('#navBarToggler');
	var navBarTogglerIcon = $('#navBarTogglerIcon');
	flags = $('#flags');
	countryFilters = $('#countryFilters');
	countryFiltersMobile = $('#countryFiltersMobile');
	MostrandoEventos = $('#MostrandoEventos');
	navBarText = $('#navBar-text');

	containerEventos = $('#selectorDeEventos');
	containerEvento = $('#containerEvento');
	var Eventos = '../data/eventos.json';

	LoadJson(Eventos, 1, paisSeleccionado.toUpperCase());

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
					paises = new Set(obj.map((evento) => evento.origen));
					eventosCargados = obj;
					eventosFiltrados = obj.filter((evento) => evento.origen === pais);
					fillFilterEventos();
					fillContainerEventos();
					updateMostrandoEventos(pais)
					break;
				case 2:
					fillContainerEventos();
					break;
			}
		})
		.fail(function(error) {
			console.log(error);
		});
}

function toggleFilter() {
	flags.toggleClass('hidden');
	$('#buttonFilter').toggleClass('active');
}

function pais(pais) {
	paisSeleccionado = pais;
	eventosFiltrados = eventosCargados.filter((evento) => evento.origen === pais);
	fillContainerEventos();
	updateMostrandoEventos(pais)
}

function fillContainerEventos() {
	let string = '';
	eventosFiltrados.forEach(function(evento, i) {
		if (i % 3 === 0) {
			if (i === 0) {
				string += `
                <div class='carousel-item active'>
                    <div class="container mb-5">
                        <div class="row d-flex justify-content-center">
                `;
			} else {
				string += `
                    <div class='carousel-item'}>
                        <div class="container mb-5">
                            <div class="row d-flex justify-content-center">
                `;
			}
		}
		string += `
            <div class="eventoCard col-sm-4 p-md-4 p-sm-0">
                <div class="card bg-light h-100">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <img src="assets/images/evento/bandera/${evento.origen.toUpperCase()}.png" class="flag" alt="-">
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${evento.nombre}</h5>
                        <h5 class="card-info">${evento.origen}, ${evento.mes} ${evento.año}</h5>
                        <h5 class="card-info alternate" style="color: gray">${evento.dia} ${evento.mes} ${evento.año}</h5>
                        <h5 class="card-info alternate" style="color: gray">${evento.inicio}HS - ${evento.fin}HS ${evento.zonaHoraria}</h5>
                        <h5 class="card-info alternate" style="color: gray;text-transform:capitalize">${evento.ciudad}, ${evento.origen}</h5>
                    </div>
                    <div class="card-footer">
                        <a role="button" class="btn btn-primary px-5 py-3" href="../eventosInscripcion/?evento=${eventosCargados.findIndex(
							(eventoFI) => eventoFI === evento
						)}">Inscribirse</a>
                    </div>
                </div>
            </div>
        `;
		if ((i + 1) % 3 === 0 || i === eventosFiltrados.length - 1) {
			string += `
                    </div>
                </div>
            </div>
        `;
		}
	});
	
	containerEventos.html(string);
}

function fillFilterEventos() {
	paises.forEach(function(pais, i) {
		countryFilters.append(`
		<div class="col-auto country" id="${pais.toUpperCase()}" onclick="pais(id)">
			<h1 class="text m-0">
				<img class="flag me-1" src="assets/images/evento/bandera/${pais.toUpperCase()}.png" alt="">
				${pais.toLowerCase()}
			</h1>
		</div>`);
		countryFiltersMobile.append(`
		<li>
			<a class="dropdown-item" id="${pais.toUpperCase()}" onclick="pais(id)" >
				<img src="assets/images/evento/bandera/${pais.toUpperCase()}.png" alt="">
				${pais.toLowerCase()}
			</a>
		</li>
		`);
	});
}

function updateMostrandoEventos(pais){

	MostrandoEventos.html(`<p id="mostrandoEventos" class="mostrandoEventos">Mostrando eventos de <img src="assets/images/evento/bandera/${pais.toUpperCase()}.png" alt=""> ${pais.toLowerCase()}</p>`);
}