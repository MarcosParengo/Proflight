var obj = [];

$(document).ready(function () {
    var toggled=false;
    var navbarSupportedContent= $("#navbarSupportedContent")
    var navBarBrandImage= $("#navBarBrandImage")
    var navBarToggler=$("#navBarToggler")
    var navBarTogglerIcon=$("#navBarTogglerIcon")

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