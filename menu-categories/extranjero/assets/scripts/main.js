var obj = [];

function toggleInfo(section) {
    aux = $(`#${section}1`).attr('class')
    $(`#${section}1`).attr('class', $(`#${section}2`).attr('class'))
    $(`#${section}2`).attr('class', aux)
}

$(document).ready(function () {
    var toggled = false;
    var navBar = $("#navBar")
    var navbarBrand = $("#navbar-brand")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    navBarText = $("#navBar-text")


    var right = document.getElementById("right");
    var left = document.getElementById("left");

    var toggled = false

    $("#right").click(function () {
        swapImage()
    })
    $("#left").click(function () {
        swapImage()
    })

    const swapImage = function () {
        let aux = left.className
        $("#left").attr('class', right.className)
        $('#right').attr('class', aux)
    }



    navbarBrand.click(function () {
        if (toggled) {
            if ($(window).width() < 576) {
                $('#navbarSupportedContent').removeClass('show')
                $('#navbarSupportedContent').addClass('collapsing')
                navBarToggler.css('visibility', 'visible')
                //navbarBrand.css('visibility', 'hidden')
                navBar.css('background-color', 'rgba(200,200,200,0.0)');
                navBar.css('backdrop-filter', 'unset');
                navBar.css('-webkit-backdrop-filter', 'unset');
                toggled = !toggled
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
                //navbarBrand.css('visibility', 'hidden')
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

    $(window).bind("scroll", function () {
        if ($(this).scrollTop() > $('#coverRecibimiento').offset().top) {
            if ($('#coverRecibimiento').hasClass('beforeScroll')) {
                $('#coverRecibimiento').removeClass('beforeScroll')
                $('#coverRecibimiento').addClass('afterScroll')
            }
        } else {
            if ($('#coverRecibimiento').hasClass('afterScroll')) {
                $('#coverRecibimiento').addClass('beforeScroll')
                $('#coverRecibimiento').removeClass('afterScroll')
            }
        }
        if ($(this).scrollTop() > $('#coverAlojamiento').offset().top) {
            if ($('#coverAlojamiento').hasClass('beforeScroll')) {
                $('#coverAlojamiento').removeClass('beforeScroll')
                $('#coverAlojamiento').addClass('afterScroll')
            }
            if ($('#alojamientosDescripcion').hasClass('beforeScroll')) {
                $('#alojamientosDescripcion').removeClass('beforeScroll')
                $('#alojamientosDescripcion').addClass('afterScroll')
            }
        } else {
            if ($('#coverAlojamiento').hasClass('afterScroll')) {
                $('#coverAlojamiento').addClass('beforeScroll')
                $('#coverAlojamiento').removeClass('afterScroll')
            }
            if ($('#alojamientosDescripcion').hasClass('afterScroll')) {
                $('#alojamientosDescripcion').addClass('beforeScroll')
                $('#alojamientosDescripcion').removeClass('afterScroll')
            }
        }
        if ($(this).scrollTop() > $('#landingTitle').offset().top) {
            if ($('#circle').hasClass('beforeScroll')) {
                $('#circle').removeClass('beforeScroll')
                $('#circle').addClass('afterScroll')
            }
        }else{
            if ($('#circle').hasClass('afterScroll')) {
                $('#circle').addClass('beforeScroll')
                $('#circle').removeClass('afterScroll')
            }
        }
    });
})