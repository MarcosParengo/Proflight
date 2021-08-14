var obj = [];

$(document).ready(function() {
    var toggled = false;
    var navbarSupportedContent = $("#navbarSupportedContent")
    var navBarBrandImage = $("#navBarBrandImage")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    containerEventos = $("#selectorDeEventos")
    containerEvento = $("#containerEvento")
    var Eventos = "assets/data/eventos.json"
    var EventosCargados

    LoadJson(Eventos, 1)

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
                    EventosCargados = obj
                    fillContainerEventos(obj)
                    Evento(0)
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
    let string = ""

    obj.forEach(function(obj, i) {
        if ((i % 3 === 0)) {
            if (i === 0) {
                string += (`
                <div class='carousel-item active'}>
                    <div class="container mb-5">
                        <div class="row">
                `)
            } else {
                string += (`
            <div class='carousel-item'}>
                <div class="container mb-5">
                    <div class="row">
            `)
            }
        }
        string += (`
            <div class="alumnoCard col-sm-4 p-md-4 p-sm-0">
                <div class="card bg-light h-100">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <img src="assets/images/evento/bandera/${obj.origen}.png" class="flag" alt="-">
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${obj.nombre}</h5>
                        <h5 class="card-info" style="color: rgb(53, 187, 215);">${obj.origen} ${obj.mes} ${obj.año}</h5>
                        <h5 class="card-info" style="color: gray">${obj.dia} ${obj.mes} ${obj.año}</h5>
                        <h5 class="card-info" style="color: gray">${obj.inicio}HS - ${obj.fin}HS ${obj.zonaHoraria}</h5>
                        <h5 class="card-info" style="color: gray;text-transform:capitalize">${obj.ciudad}, ${obj.origen}</h5>
                    </div>
                    <div class="card-footer">
                        <a role="button" class="btn btn-primary" href="../eventosInscripcion/index.html?evento=${i}">Inscribirse</a>
                    </div>
                </div>
            </div>
        `)
        if ((i + 1) % 3 === 0) {
            string += (`
                    </div>
                </div>
            </div>
        `)
        }
    })
    containerEventos.append(string)
}