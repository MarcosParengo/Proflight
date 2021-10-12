var obj = [];

$(document).ready(function() {
    var toggled = false;
    var navbarSupportedContent = $("#navbarSupportedContent")
    var navBarBrandImage = $("#navBarBrandImage")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    containerevento = $("#containerEvento")
    var eventos = "../data/eventos.json"

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const evento = urlParams.get('evento')

    LoadJson(eventos, 1, evento)

    var sourceSwap = function() {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }
    $(function() {
        navBarBrandImage.hover(sourceSwap, sourceSwap);
    });
    navBarToggler.click(function() {
        var algo = navbarSupportedContent.is(":visible")
        var newSource = navBarTogglerIcon.data('alt-src');
        navBarTogglerIcon.data('alt-src', navBarTogglerIcon.attr('src'));
        navBarTogglerIcon.attr('src', newSource);
        if (toggled == false) {
            navBarToggler.css('background-color', 'rgba(200,200,200,0.5)');
            toggled = true;
        } else {
            navBarToggler.css('background-color', 'rgba(0,0,0,0.0)');
            toggled = false;
        }
    })
})

function LoadJson(url, selector, evento) {
    $.ajax({
            method: "get",
            url: url,
            dataType: "json"
        }).done(function(data) {
            obj = data
            switch (selector) {
                case 1:
                    eventosCargados = obj
                    fillContainerEventos(obj[evento])
                    evento(0)
                    break;
                case 2:
                    fillContainerEventos(obj)
                    break;
            }
        })
        .fail(function(error) {
            console.log(error)
        })
}

function fillContainerEventos(obj) {
    console.log(obj)
    containerevento.html(`
        <div class="fullPage row d-flex m-0">
            <div class="col-12 col-lg-5 col-xl-5 top d-flex align-items-end justify-content-end px-sm-2 pe-md-5 pe-lg-5 pe-xl-5 mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 pt-5 pt-sm-5 pt-md-5 pt-lg-0 pt-xl-0">
                <h1 class="pais">
                    ${obj.origen}
                </h1>
            </div>
            <div class="col-12 col-lg-7 col-xl-7 px-sm-2  ps-md-5 ps-lg-5 ps-xl-5 top d-flex align-items-end">
                <div>
                    <h1 class="descripcion pb-3">
                        ${obj.tipo}
                    </h1>
                    <h2 class="ubicacion pb-2">
                        <img class="bandera" src="./assets/images/evento/bandera/${obj.origen.toUpperCase()}.png" alt="${obj.origen}">
                        <span class="ps-1">${obj.ciudad}, ${obj.origen}</span>
                    </h2>
                </div>
            </div>
            <div class="col-12 offset-lg-5 offset-xl-5 col-lg-7 col-xl-7 px-sm-2  ps-md-5 ps-lg-5 ps-xl-5 bottom justify-content-start ">
                <div class="mt-5">
                    <h1 class="title">
                        ${obj.ubicacion}
                    </h1>
                    <h2 class="subtitle">
                        ${obj.codigoDeUbicacion}
                    </h2>
                </div>
                <div class="mt-5">
                    <h1 class="title">
                        ${obj.dia} de ${obj.mes} ${obj.año}
                    </h1>
                    <h2 class="subtitle">
                        ${obj.inicio}HS
                    </h2>
                </div>
                <div class="mt-5 mb-5 pb-5">
                    <button class="btn btn-primary inscribirseBtn px-3 px-sm-2 px-md-5 px-xl-5 me-1 me-sm-2 me-md-5 me-xl-5">inscribirse</button>
                    <span class="tipoDeEvento ms-4 ms-sm-2 ms-md-5 ms-xl-5 ">Evento gratuito</span>
                </div>
            </div>
        </div>
        `)
}