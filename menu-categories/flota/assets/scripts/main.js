var obj = [];

function toggleImage(tab){
    aux=($(`#${tab}-1`).attr('src'))
    $(`#${tab}-1`).attr('src',($(`#${tab}-2`).attr('src')))
    $(`#${tab}-2`).attr('src',aux)
}    


$(document).ready(function () {
    var toggled = false;
    var navBar = $("#navBar")
    var navbarBrand = $("#navbar-brand")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    navBarText = $("#navBar-text")
    
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