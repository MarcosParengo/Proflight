var obj = [];

$(document).ready(function() {
    var toggled = false;
    var navbarSupportedContent = $("#navbarSupportedContent")
    var navBarBrandImage = $("#navBarBrandImage")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    containerTestimonios = $("#selectorDeTestimonios")
    containerTestimonio = $("#containerTestimonio")
    var testimonios = "../data/testimonios.json"
    var testimoniosCargados

    LoadJson(testimonios, 1)

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
            navBarToggler.css('backdrop-filter', 'blur(10px)');
            navBarToggler.css('-webkit-backdrop-filter', 'blur(10px)');
            toggled = true;
        } else {
            navBarToggler.css('background-color', 'rgba(0,0,0,0.0)');
            navBarToggler.css('backdrop-filter', 'blur(0px)');
            navBarToggler.css('-webkit-backdrop-filter', 'blur(0px)');

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
            <div class="alumnoCard col-sm-3 p-md-4 p-sm-0">
                <div class="card h-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <img src="assets/images/testimonio/profile/${obj.nombre}.png" class="profilePic" alt="...">
                            </div>
                            <div class="col">
                                <img src="assets/images/testimonio/bandera/${obj.origen.toUpperCase()}.png" class="flag" alt="-">
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
      <h2 class="origen mb-2">
        país de origen: <img src="assets/images/components/flags/${testimoniosCargados[numeroDeTestimonio].flag}.png" alt="">
        <span>${testimoniosCargados[numeroDeTestimonio].origen}</span>
      </h2>
    </div>
  </div>
  <div class="line"></div>
  <div class="row d-flex justify-content-center">
    <div class="row d-flex justify-content-center contenedorTestimonio">
      <div class="col-4 d-none d-md-block d-lg-block d-xl-block">
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