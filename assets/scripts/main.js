var obj = [];
var containerAgent;
var containerValores
var contador = 0;
var aver;


$(document).ready(function () {
    var toggled=false;
    var mediaqueryList = window.matchMedia("(max-width: 992px)");
    var mediaqueryListAgent = window.matchMedia("(max-width: 1200px)");
    var navbarSupportedContent= $("#navbarSupportedContent")
    var navBarBrandImage= $("#navBarBrandImage")
    var navBarToggler=$("#navBarToggler")
    var navBarTogglerIcon=$("#navBarTogglerIcon")
    containerAgent = $("#containerAgent")
    var team = "assets/data/agent.json"
    containerValores = $("#containerValores")
    var perfil = "assets/data/perfil.json"
    containerPropuesta = $("#containerPropuesta")
    var propuesta = "assets/data/propuesta.json"
    LoadJson(perfil, 2)

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

function LoadJson(url, which,MQ) {
    $.ajax({
        method: "get",
        url: url,
        dataType: "json"
    }).done(function (data) {
        obj = data
        switch (which) {
            case 1:
                fillContainerAgent(obj,MQ);
                break
            case 2:
                fillContainerValores(obj);
                break
            case 3:
                fillContainerPropuesta(obj,MQ);
                break
        }
    })
        .fail(function (error) {
            console.log(error)
        })
}
function fillContainerPropuesta(obj,MQ) {
    contador = 0;
    if(MQ==0){containerPropuesta.html("");
    obj.forEach(function (obj, index) {
        containerPropuesta.append(`
        <div class="col-sm-12 col-md-4 col-xl-4">
           <div class="block">
                <div class="row">
                    <div class="col-4 col-sm-4">
                        <img src="${obj.image}" class="img-fluid" alt="Responsive image">
                    </div>
                    <div class="col-8 col-sm-8">
                        <h2>${obj.name}</h2>
                    </div>
                </div>
           </div>
        </div>`)
    contador++
    if (contador == 5) {
        containerPropuesta.append(`<div class="w-100"></div>`)
        contador=0;
    }
        
    });}else{containerPropuesta.html("");
    obj.forEach(function (obj, index) {
        containerPropuesta.append(`
        <div class="col-sm-12 col-md-6 col-xl-6">
           <div class="block">
                <div class="row">
                    <div class="col-4 col-sm-4">
                        <img src="${obj.image}" class="img-fluid" alt="Responsive image">
                    </div>
                    <div class="col-8 col-sm-8">
                        <h2>${obj.name}</h2>
                    </div>
                </div>
           </div>
        </div>`)
    });}
}
function fillContainerValores(obj) {
    containerValores.html("");
    obj.forEach(function (obj, index) {
        containerValores.append(`<div class=" col-xs-2 col-sm-4 col-md-3  col-xl-2 ">
                    <article class="agent" >
                        <img src="${obj.image}"
                        <div>
                            <h2>${obj.name}</h2>
                        </div>
                    </article>
                </div>`);
    });
}
function fillContainerAgent(obj,MQ) {
    containerAgent.html("")
    contador = 0;
    if(MQ==0){//Mayor a 1200, construccion compleja
        obj.forEach(function (obj, index) {
            containerAgent.append(`<div class=" col-sm-6 col-md-4  col-xl-2 ">
                        <article class="agent">
                                <a href=${obj.link}
                                target="_blank"><img src="${obj.image}"
                                width="100%"></a>
                                <h2 style="margin-top:1em">${obj.name}</h2>
                                <h2>${obj.phone}</h2>
                        </article>
                    </div>`)
            contador++
            if (contador == 3) {
                containerAgent.append(`<div class="w-100"></div>`)
            } else if (contador == 8) {
                containerAgent.append(`<div class="w-100"></div>`)
            } else if (contador == 19) {
                containerAgent.append(`<div class="w-100"></div>`)
            }
            /*
            if(contador==11){
                containerAgent.append(`<div class="w-100"></div>`)
                contador=0
            }
            */
            /*
            if(contador==2){
                containerAgent.append(`<div class="w-100"></div>`)
            }else if(contador==13){
                containerAgent.append(`<div class="w-100"></div>`)  
            }else if(contador==19){
                contador=0
            }
            */
            /*
            if(contador==5){
                containerAgent.append(`<div class="w-100"></div>`)
            }else if(contador==11){
                contador=0
            }*/
        })
    }  else{//menor a 1200, construccion simple
        console.log("construccion simple")
        obj.forEach(function (obj, index) {
            containerAgent.append(`<div class=" col-sm-4 col-md-3  col-xl-2 ">
                        <article class="agent">
                                <a href=${obj.link}
                                target="_blank"><img src="${obj.image}"></a>
                                <h2 style="margin-top:1em">${obj.name}</h2>
                                <h2>${obj.phone}</h2>
                        </article>
                    </div>`)
            contador++
        })
    }
}

