var obj = [];
var containerAgent;
var containerValores
var contador = 0;
var aver;


$(document).ready(function () {
    var toggled=false;
    var navbarSupportedContent= $("#navbarSupportedContent")
    var navBarBrandImage= $("#navBarBrandImage")
    var navBarToggler=$("#navBarToggler")
    var navBarTogglerIcon=$("#navBarTogglerIcon")
    containerTestimonios = $("#containerTestimonios")
    var testimonios = "assets/data/testimonios.json"
    LoadJson(testimonios, 2)

    //Cambio de navBar brand on over
    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }
    $(function () {
        navBarBrandImage.hover(sourceSwap, sourceSwap);
    });
    navBarToggler.click(function () {
        var algo=navbarSupportedContent.is(":visible")
        console.log(algo)
        var newSource = navBarTogglerIcon.data('alt-src');
        navBarTogglerIcon.data('alt-src', navBarTogglerIcon.attr('src'));
        navBarTogglerIcon.attr('src', newSource);
        if(toggled==false){
            navBarToggler.css('background-color', 'rgba(200,200,200,0.5)');
            toggled=true;
        }else{
            navBarToggler.css('background-color', 'rgba(0,0,0,0.0)');
            toggled=false;
    }
    })
})   
function LoadJson(url) {
    $.ajax({
        method: "get",
        url: url,
        dataType: "json"
    }).done(function (data) {
        obj = data
        fillContainerTestimonios(obj)
    })
        .fail(function (error) {
            console.log(error)
        })
}
function fillContainerTestimonios(obj) {
    obj.forEach(function (obj) {
        containerTestimonios.append(`
        <div class="col-sm-3 p-4 mt-5">
            <div class="card h-100">
                <img src="assets/images/testimonio/profile/${obj.nombre}.png" class="img-fluid" alt="...">
                <div class="card-body">
                <h5 class="card-title">${obj.nombre}</h5>
                <p class="hidden testimonio card-text">${obj.testimonioAdelanto}</p>
                    <p class="show nacionalidad card-text">${obj.origen}<img src="assets/images/testimonio/bandera/${obj.origen}.png" alt="-"></p>
                </div>
                <div class="card-footer">
                <a class="show" href="#">Ver testimonio</a>
                <a class="hidden" href="#">continuar leyendo</a>
                </div>
            </div>
        </div>
        `)
    })
}
