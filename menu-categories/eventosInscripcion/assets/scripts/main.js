var obj = [];

$(document).ready(function() {
	var toggled = false;
	var navBar = $('#navBar');
	var navbarBrand = $('#navbar-brand');
	var navBarToggler = $('#navBarToggler');
	var navBarTogglerIcon = $('#navBarTogglerIcon');
	navBarText = $('#navBar-text');

	containerevento = $('#containerEvento');
	var eventos = '../data/eventos.json';

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const evento = urlParams.get('evento');

	LoadJson(eventos, 1, evento);

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

function LoadJson(url, selector, evento) {
	$.ajax({
		method: 'get',
		url: url,
		dataType: 'json'
	})
		.done(function(data) {
			obj = data;
			switch (selector) {
				case 1:
					eventosCargados = obj;
					fillContainerEventos(obj[evento]);
					evento(0);
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

function fillContainerEventos(obj) {
	console.log(obj);
	containerevento.html(`
        <div class="fullPage row d-block d-md-flex m-0">
            <div class="desktop col-12 col-lg-5 col-xl-5 top d-md-flex align-items-end justify-content-end px-sm-2 pe-md-5 pe-lg-5 pe-xl-5 mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 pt-5 pt-sm-5 pt-md-5 pt-lg-0 pt-xl-0">
                <h1 data-aos="fade-right" class="pais">
                    ${obj.origen}
                </h1>
            </div>
            <div class="px-0 col-12 col-lg-7 col-xl-7 px-sm-2  ps-md-5 ps-lg-5 ps-xl-5 top d-flex align-items-end">
                <div data-aos="fade-left" data-aos-delay="500">
                    <h1 class="rightSpace leftSpace descripcion pb-md-3">
                        ${obj.tipo}
                    </h1>
                    <h2 class="rightSpace leftSpace eventoGratuito mobile">Evento Gratuito</h2>
                    <h2 class="rightSpace leftSpace ubicacion pb-2 d-flex align-items-center">
                        <img class="bandera" src="./assets/images/evento/bandera/${obj.origen.toUpperCase()}.png" alt="${obj.origen}">
                        <span class="ps-1 text"><strong>${obj.origen}</strong>, ${obj.ciudad} </span>
                    </h2>
                </div>
            </div>
            <div class="overflow-hidden rightSpace leftSpace col-12 offset-lg-5 offset-xl-5 col-lg-7 col-xl-7 px-sm-2  ps-md-5 ps-lg-5 ps-xl-5 bottom justify-content-start ">
                <div data-aos="fade-left" data-aos-delay="500" >
                <div class="mt-0 mt-md-5">
                    <h1 class="title">
                        ${obj.ubicacion}
                    </h1>
                    <h2 class="subtitle">
                        ${obj.codigoDeUbicacion}
                    </h2>
                </div>
                <div class="mt-0 mt-md-5">
                    <h1 class="title">
                        ${obj.dia} de ${obj.mes} ${obj.año}
                    </h1>
                    <h2 class="subtitle">
                        ${obj.inicio}HS
                    </h2>
                </div>
                <div class="mt-5 mb-5 pb-5 desktop">
                    <button class="btn btn-primary inscribirseBtn px-3 px-sm-2 px-md-5 px-xl-5 me-1 me-sm-2 me-md-5 me-xl-5">inscribirse</button>
                    <span class="tipoDeEvento ms-4 ms-sm-2 ms-md-5 ms-xl-5 ">Evento gratuito</span>
                </div>
                </div>
            </div>

            <div class="specialRightSpace leftSpace col-12 mobile">
                <div class="form">
                    <h1 class="title">Inscripción a evento</h1>
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6 padding">
                        <div class="row g-0 g-md-5">
                        <div class="col-12 col-md-6">
                                <div class="form-floating">
                                    <input required type="text" class="form-control" id="nombre" placeholder="Nombre">
                                    <label class="label" for="nombre">Nombre</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating">
                                    <input required type="text" class="form-control" id="apellido" placeholder="Apellido">
                                    <label class="label" for="apellido">Apellido</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating">
                                    <input required type="mail" class="form-control" id="mail" placeholder="Correo electronico">
                                    <label class="label" for="mail">Correo electronico</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating">
                                    <input required type="tel" class="form-control" id="Teléfono" placeholder="Teléfono">
                                    <label class="label" for="Teléfono">Teléfono</label>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea 
                                        class="form-control" placeholder="Mensaje opcional" 
                                        id="mensajeOpcional" style="height: 100px"></textarea>
                                    <label for="mensajeOpcional">Mensaje opcional</label>
                                </div>
                            </div>

                            <div class="col">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary inscribirse px-sm-4 py-sm-3">
                                    Inscribirse
                                </button>
                            </div>
                               
                                
                        </div>
                    </div>
                    <div class="sectionLabel rotatedText d-none d-md-none d-lg-block">
                    </div>
                </div>
            </div>
        </div>
        `);
}
