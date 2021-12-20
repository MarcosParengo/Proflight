var obj = [];

$(document).ready(function () {

    var toggled = false;
    var navBar = $("#navBar")
    var navbarBrand = $("#navbar-brand")
    var navBarToggler = $("#navBarToggler")
    var navBarTogglerIcon = $("#navBarTogglerIcon")
    navBarText = $("#navBar-text")

    var myCarousel=$('#myCarousel')
    var viewCarousel=$('#viewCarousel')

    var aFundamentos=$("#aFundamentos")
    var data=$('#data')
    var original=$('#original')
    var one=$('#one')
    var two=$('#two')
    var three=$('#three')
    var four=$('#four')
    var five=$('#five')

    $('#landing').addClass('animated')
    loadSVGInline()
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

    $(window).bind("scroll", function () {
        if ($(this).scrollTop() > $('#containerLinks').offset().top-100) {
            $('#containerLinks').addClass('animated')
        }
    })

    viewCarousel.click(function() {
        aFundamentos.css('display','none');
        $('#carouselIndicatorContainer').css('opacity', '1')
        $('#carouselIndicatorContainer').css('max-height', '150px')

        data.css('display','block');
        original.css('display','none');
        one.css('display','block');
    })
    
    myCarousel.on('slide.bs.carousel', function (e) {
        if(e.from==0 && e.direction=="right"){
            $('#carouselIndicatorContainer').css('opacity', '0')
            $('#carouselIndicatorContainer').css('max-height', '50px')

            aFundamentos.css('display','block');
            data.css('display','none');
            original.css('display','block');
            one.css('display','none'); 
            five.css('display','none'); 
        }else{
            $("#carouselIndicator").removeClass();
            switch(e.to){
                case 0:
                    $('#carouselIndicator').addClass('b firstSelected')
                    five.css('display','none');
                    two.css('display','none');
                    one.css('display','block');  
                break
                case 1:
                    $('#carouselIndicator').addClass('b secondSelected')
                    one.css('display','none');
                    three.css('display','none');
                    two.css('display','block'); 
                break
                case 2:
                    $('#carouselIndicator').addClass('b thirdSelected')
                    two.css('display','none');
                    four.css('display','none');
                    three.css('display','block'); 
                break
                case 3:
                    $('#carouselIndicator').addClass('b fourthSelected')
                    five.css('display','none');
                    three.css('display','none');
                    four.css('display','block'); 
                break
                case 4:
                    $('#carouselIndicator').addClass('b fifthSelected')
                    one.css('display','none');
                    four.css('display','none');
                    five.css('display','block'); 
                break
            }
        }
    })  
    myCarousel.on('slid.bs.carousel', function (e) {
        if(e.from==0 && e.direction=="right"){
            myCarousel.carousel(0)
            one.css('display','none'); 
        }
        
    })  
})   

function loadSVGInline()
{
    var SVGFile="assets/images/mobile/carousel/Enmascarar grupo 110.svg"
    var loadXML = new XMLHttpRequest;
    function handler(){
        if(loadXML.readyState == 4 && loadXML.status == 200)
        {
            carouselIndicatorContainer.innerHTML=loadXML.responseText
        }
    }
    if (loadXML != null){
        loadXML.open("GET", SVGFile, true);
        loadXML.onreadystatechange = handler;
        loadXML.send();
    }
}