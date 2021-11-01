var obj = [];

$(document).ready(function () {
    var toggled = false;
    var navBar = $("#navBar")
    var navbarBrand = $("#navbar-brand")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")

    containerTestimonios = $("#containerTestimonios")
    containerEventos = $("#containerEventos")
    var testimonios = "menu-categories/data/testimonios.json"
    var eventos = "menu-categories/data/eventos.json"
    var carouselProgramas = $('#carouselProgramas')
    var elipseProgramas = $('#elipseProgramas')
    var sectionLabelProgramas = $('#sectionLabelProgramas')

    LoadJson(testimonios, 1)
    LoadJson(eventos, 2)
    const titles = ["Licencia de piloto privado", "Licencia de piloto comercial", "Habilitación de vuelo multimotor", "Instructor de vuelo", "Licencia de Piloto Comercial"]

    carouselProgramas.on('slide.bs.carousel', function (e) {
        elipseProgramas.attr("src", `assets/images/components/Elipse${e.to}.svg`)
        sectionLabelProgramas.html(titles[e.to])
    })

    navbarBrand.click(function () {
        if(toggled){
            if ($(window).width() < 576) {
                $('#navbarSupportedContent').removeClass('show') 
               $('#navbarSupportedContent').addClass('collapsing') 
                navBarToggler.css('visibility', 'visible')                
                navbarBrand.css('visibility', 'hidden')
                navBar.css('background-color', 'rgba(200,200,200,0.0)');
                navBar.css('backdrop-filter', 'unset');
                navBar.css('-webkit-backdrop-filter', 'unset');
                toggled=!toggled
            }
        }
    })

    navBarToggler.click(function () {

        if (toggled == false) {
            toggled = !toggled;
            if ($(window).width() < 576) {
                navbarBrand.css('visibility', 'visible')
                navBarToggler.css('visibility', 'hidden')
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
                navBarToggler.css('visibility', 'visible')
                navbarBrand.css('visibility', 'hidden')
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
    })
})

function LoadJson(url, selector) {
    $.ajax({
        method: "get",
        url: url,
        dataType: "json"
    }).done(function (data) {
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
        .fail(function (error) {
            console.log(error)
        })
}

function fillContainerTestimonios(obj) {
    obj.forEach(function (obj, i) {
        if (i < 8) {
            containerTestimonios.append(`
        <div class="alumnoCard col-sm-12 col-md-6 col-lg-4 col-xl-3 p-md-3 p-sm-0">
            <div class="card h-100">
                <Container class="img-container d-flex justify-content-center">
                    <div class="p-relative w-50 img-container2">
                        <img src="assets/images/testimonio/profile/${obj.nombre}.png" class="img-fluid" alt="...">
                        <img src="assets/images/testimonio/bandera/${obj.origen.toUpperCase()}.png" class="flag hidden" alt="-">
                    </div>
                </Container>  
                <div class="card-body mt-2 mb-0 py-0">
                    <h5 class="card-title">${obj.nombre}</h5>
                    <p class="hidden testimonio card-text mb-0 me-0">${obj.testimonioAdelanto}</p>
                    <p class="show nacionalidad card-text d-flex align-items-center justify-content-center">${obj.origen}<img src="assets/images/testimonio/bandera/${obj.origen}.png" alt="-"></p>
                </div>
                <div class="py-0 my-0 card-footer">
                <a class="show mt-0 py-0 mb-3" href="#">Ver testimonio</a>
                <a class="hidden my-0 py-0 " href="menu-categories/testimonios/">continuar leyendo</a>
                </div>
            </div>
        </div>
        `)
        }
    })
}

function fillContainerEventos(obj) {
    obj.forEach(function (obj, i) {
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
                        <img src="assets/images/eventos/banderas/${obj.origen.toLowerCase()}.png" class=" img-fluid" alt="...">
                        <p class="mb-0 resumen card-text">${obj.ciudad}, ${obj.origen}</p>
                        <p class=" resumen fecha card-text pb-5"> ${obj.fecha}</p>                    
                    </div>
            </div>
        </div>
        `)
        }
    })
}