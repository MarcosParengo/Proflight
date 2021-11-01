var obj = [];

$(document).ready(function() {
    var toggled = false;
    var navBar = $("#navBar")
    var navbarBrand = $("#navbar-brand")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    navBarText = $("#navBar-text")

    containerTestimonios = $("#selectorDeTestimonios")
    containerTestimonio = $("#containerTestimonio")
    var testimonios = "../data/testimonios.json"

    LoadJson(testimonios, 1)

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
        }).done(function(data) {
            obj = data
            switch (selector) {
                case 1:
                    testimoniosCargados = obj
                    fillContainerTestimonios(obj)
                    testimonio(0)
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
    let string = ""

    obj.forEach(function(obj, i) {
        if ((i % 4 === 0)) {
            if (i === 0) {
                string += (`
                <div class='carousel-item active'>
                    <div class="container-fluid mb-5">
                        <div class="row">
                `)
            } else {
                string += (`
            <div class='carousel-item'}>
                <div class="container-fluid mb-5">
                    <div class="row">
            `)
            }
        }
        string += (`
            <div class="alumnoCard col-sm-3 p-md-4 p-sm-0">
                <div class="card h-100">
                    <div class="d-flex w-100 justify-content-center">
                            <div  class="profilePic p-relative">
                                <img class="w-100 d-block"src="assets/images/testimonio/profile/${obj.nombre}.png" alt="...">
                                <div class="flag">
                                <img class="w-100 d-block" src="assets/images/testimonio/bandera/${obj.origen.toUpperCase()}.png"  alt="-">
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
        `)
        if ((i + 1) % 4 === 0) {
            string += (`
                    </div>
                </div>
            </div>
        `)
        }
    })
    containerTestimonios.append(string)
}

function testimonio(numeroDeTestimonio) {
    containerTestimonio.html(`<div class="row d-flex justify-content-center">
    <div class="contenedorTestimonio">
      <h1 class="title mb-5">${testimoniosCargados[numeroDeTestimonio].nombre}</h1>
      <h2 class="mb-2 d-flex align-items-center">
        <span class="origen">PAÍS DE ORIGEN: </span><img class="mx-2 d-inline-block" style="width:22px" src="assets/images/components/flags/${testimoniosCargados[numeroDeTestimonio].flag}.png" alt="">
        <span class="origen">${testimoniosCargados[numeroDeTestimonio].origen}</span>
      </h2>
    </div>
  </div>
  <div class="line"></div><div class="line" style="margin-left:0.4%"></div>

  <div class="row d-flex justify-content-center">
    <div class="row d-flex justify-content-center contenedorTestimonio">
      <div class="ps-0 col-4 d-none d-md-block d-lg-block d-xl-block">
        <img src="assets/images/testimonio/picture/${testimoniosCargados[numeroDeTestimonio].nombre}.png" alt="" class="img-fluid">
      </div>
      <div class="col xs-12 md-12 lg-8 ms-0 ms-md-4 ms-lg-4 ms-xl-4">
        <p class="paragraph">
          ${testimoniosCargados[numeroDeTestimonio].testimonio}
        </p>
      </div>
    </div>
  </div>`)
}