var obj = [];

$(document).ready(function () {
    var toggled=false;
    var navbarSupportedContent= $("#navbarSupportedContent")
    var navBarBrandImage= $("#navBarBrandImage")
    var navBarToggler=$("#navBarToggler")
    var navBarTogglerIcon=$("#navBarTogglerIcon")

    var privadoOne=$("#privadoOne")
    var privadoTwo=$("#privadoTwo")
    var prevPrivado=$("#prevPrivado")
    var privadoitem1=$("#privadoitem1")
    var privadoitem2=$("#privadoitem2")
    var nextRightPrivado=$("#nextRightPrivado")
    var prevRightPrivado=$("#prevRightPrivado")

    var comercialOne=$("#comercialOne")
    var comercialTwo=$("#comercialTwo")
    var comercialThree=$("#comercialThree")
    var prevComercial=$("#prevComercial")
    var comercialitem1=$("#comercialitem1")
    var comercialitem2=$("#comercialitem2")
    var nextRightComercial=$("#nextRightComercial")
    var prevRightComercial=$("#prevRightComercial")
    var Toitem3Comercial=$("#Toitem3Comercial")

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
        if(toggled==false){
            navBarToggler.css('background-color', 'rgba(200,200,200,0.5)');
            toggled=true;
        }else{
            navBarToggler.css('background-color', 'rgba(0,0,0,0.0)');
            toggled=false;
    }
    })

    privadoOne.click(function () {
        privadoOne.css('display','none')
        privadoTwo.css('display','flex')
    })
    prevPrivado.click(function () {
        privadoOne.css('display','flex')
        privadoTwo.css('display','none')
    })
    nextRightPrivado.click(function () {
        privadoitem2.css('display','block')
        privadoitem1.css('display','none')
        console.log("algo")
    })
    prevRightPrivado.click(function () {
        privadoitem1.css('display','block')
        privadoitem2.css('display','none')
    })

    comercialOne.click(function () {
        comercialOne.css('display','none')
        comercialTwo.css('display','flex')
    })
    Toitem3Comercial.click(function(){
        console.log("si")
        comercialTwo.css('display','none')
        comercialThree.css('display','flex')
    })
    prevComercial.click(function () {
        comercialOne.css('display','flex')
        comercialTwo.css('display','none')
    })
    nextRightComercial.click(function () {
        comercialitem2.css('display','block')
        comercialitem1.css('display','none')
    })
    prevRightComercial.click(function () {
        comercialitem1.css('display','block')
        comercialitem2.css('display','none')
    })

})   