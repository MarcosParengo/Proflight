var obj = [];


function togglePosition(clicked){
    $("#indicator").text(clicked)
    const elementClicked=$(`#${clicked}`)
    const rightOneClicked=$(`#${parseInt(clicked)+1}`)
    const rightTwoClicked=$(`#${parseInt(clicked)+2}`)
    const leftOneClicked=$(`#${parseInt(clicked)-1}`)
    const leftTwoClicked=$(`#${parseInt(clicked)-2}`)

    if(elementClicked.attr('class')==='imagen right'){
        console.log("derecha")
        elementClicked.attr('class','imagen center')
        rightOneClicked.attr('class','imagen right')
        leftOneClicked.attr('class','imagen left')
        leftTwoClicked.attr('class','imagen left out')
    }else if(elementClicked.attr('class')==='imagen left'){
        console.log("izquierda")

        elementClicked.attr('class','imagen center')
        leftOneClicked.attr('class','imagen left')
        rightOneClicked.attr('class','imagen right')
        rightTwoClicked.attr('class','imagen right out')
        console.log("derecha")
    }
    
} 

$(document).ready(function () {
    var toggled = false;
    var navBar = $("#navBar")
    var navbarBrand = $("#navbar-brand")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    navBarText = $("#navBar-text")

    var contentBG = $("#contentBG")
    contentBG.css({ position: "fixed", top: "0" });
    $(window).scroll(function () {
        var contentHeight = $("#galeria").height();
        if($(window).scrollTop()+$(window).height()<contentHeight){
            contentBG.css({ opacity: 1 });
            console.log(contentHeight,$(window).scrollTop()+$(window).height())
            console.log("No paso footer")
        }else{
            contentBG.css({ opacity: 0 });
            console.log("paso footer")
        }
    });

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