var obj = [];

$(document).ready(function() {
    var toggled = false;
    var navbarSupportedContent = $("#navbarSupportedContent")
    var navBarBrandImage = $("#navBarBrandImage")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    containerTestimonios = $("#containerTestimonios")
    containerEventos = $("#containerEventos")
    var testimonios = "menu-categories/data/testimonios.json"
    var eventos = "menu-categories/data/eventos.json"

    LoadJson(testimonios, 1)
    LoadJson(eventos, 2)

    //Cambio de navBar brand on over
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

function LoadJson(url, selector) {
    $.ajax({
            method: "get",
            url: url,
            dataType: "json"
        }).done(function(data) {
            obj = data
            switch (selector) {
                case 1:
                    fillContainerTestimonios(obj)
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

function fillContainerTestimonios(obj) {
    obj.forEach(function(obj, i) {
        if (i < 4) { containerTestimonios.append(`
        <div class="alumnoCard col-sm-12 col-md-6 col-lg-4 col-xl-3 p-md-4 p-sm-0">
            <div class="card h-100">
                <img src="assets/images/testimonio/profile/${obj.nombre}.png" class="img-fluid" alt="...">
                <div class="card-body">
                <h5 class="card-title">${obj.nombre}</h5>
                <p class="hidden testimonio card-text">${obj.testimonioAdelanto}</p>
                    <p class="show nacionalidad card-text">${obj.origen}<img src="assets/images/testimonio/bandera/${obj.origen}.png" alt="-"></p>
                </div>
                <div class="card-footer">
                <a class="show" href="#">Ver testimonio</a>
                <a class="hidden" href="menu-categories/testimonios/index.html">continuar leyendo</a>
                </div>
            </div>
        </div>
        `) }
    })
}

function fillContainerEventos(obj) {
    console.log(obj)
    obj.forEach(function(obj, i) {
        if (i < 3) {
            containerEventos.append(`
        <div class="col-sm-4 p-4 mt-5">
            <div class="card h-100" style="height: 400px;">
                <div class="card-body text-center">
                <p class="hidden ampliado titulo card-text" style="padding-top: 29.9%;">${obj.origen}, ${obj.dia} ${obj.mes} ${obj.año}</p>
                <p class="hidden ampliado fecha card-text"> ${obj.dia} ${obj.mes} ${obj.año}</p>
                <p class="hidden ampliado fecha card-text">${obj.inicio} ${obj.zonaHoraria}</p>
                <p class="hidden ampliado card-text">${obj.ciudad}, ${obj.origen}</p>
                <p class="hidden ampliado card-text">${obj.descripcion}</p>
                <button class="hidden btn btn-primary mx-auto m-2" type="submit">Inscribirse</button>
                <img src="assets/images/eventos/banderas/${obj.origen.toLowerCase()}.png" class="show img-fluid" alt="...">
                <p class="show resumen card-text">${obj.ciudad}, ${obj.origen}</p>
                <p class="show resumen fecha card-text pb-5" style="color:gray;padding-bottom: 24.7%!important;"> ${obj.dia} ${obj.mes} ${obj.año}</p>                    
                </div>
            </div>
        </div>
        `)
        }
    })
}