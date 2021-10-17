var obj = [];

function toggleImage(tab){
    aux=($(`#${tab}-1`).attr('src'))
    $(`#${tab}-1`).attr('src',($(`#${tab}-2`).attr('src')))
    $(`#${tab}-2`).attr('src',aux)
}    


$(document).ready(function () {
    var toggled=false;
    var navBarToggler=$("#navBarToggler")
    var navBarTogglerIcon=$("#navBarTogglerIcon")
    
    navBarToggler.click(function () {
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