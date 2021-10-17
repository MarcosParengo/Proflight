var obj = [];

$(document).ready(function () {
    var toggled=false;
    var navbarSupportedContent= $("#navbarSupportedContent")
    var navBarBrandImage= $("#navBarBrandImage")
    var navBarToggler=$("#navBarToggler")
    var navBarTogglerIcon=$("#navBarTogglerIcon")
    var viewCarousel=$("#viewCarousel")

    var myCarousel=$('#myCarousel')
    var aFundamentos=$("#aFundamentos")
    var data=$('#data')
    var original=$('#original')
    var one=$('#one')
    var two=$('#two')
    var three=$('#three')
    var four=$('#four')
    var five=$('#five')

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

    viewCarousel.click(function() {
        aFundamentos.css('display','none');
        data.css('display','block');
        original.css('display','none');
        one.css('display','block');
    })
    
    myCarousel.on('slide.bs.carousel', function (e) {
        if(e.from==0 && e.direction=="right"){
            aFundamentos.css('display','block');
            data.css('display','none');
            original.css('display','block');
            one.css('display','none'); 
            five.css('display','none'); 
        }else{
            switch(e.to){
                case 0:
                    five.css('display','none');
                    two.css('display','none');
                    one.css('display','block');  
                break
                case 1:
                    one.css('display','none');
                    three.css('display','none');
                    two.css('display','block'); 
                break
                case 2:
                    two.css('display','none');
                    four.css('display','none');
                    three.css('display','block'); 
                break
                case 3:
                    five.css('display','none');
                    three.css('display','none');
                    four.css('display','block'); 
                break
                case 4:
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