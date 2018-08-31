$(document).ready(function() {

     /*Sliders----------------------------------------------------------*/
    $('.slider__section').owlCarousel({
        items : 1,
        slideBy: 1,
        nav : true,
        loop : true,
        autoplay : true,
        autoplayTimeout:8000,
        fluidSpeed : 1200,
        smartSpeed:1200,
        slideSpeed : 1200,
        autoplaySpeed : 1600,
        navSpeed : 1600,
        navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
    });

	$('.hits__slider').owlCarousel({
        items : 1,
        slideBy: 1,
        nav : true,
        loop : true,
        autoplay : true,
        autoplayTimeout:8000,
        fluidSpeed : 1200,
        smartSpeed:1200,
        slideSpeed : 1200,
        autoplaySpeed : 1600,
        navSpeed : 1600,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        margin:10,
        responsive:{
            0:{
                items : 1,
            },
            576:{
                items : 2,
                slideBy: 2,
            },
            992:{
                items : 3,
                slideBy: 2,
            },  
            1200:{
                items : 4,
                slideBy: 2,
            }, 
        }
    });
    /*Sliders----------------------------------------------------------*/

    /*Nav--------------------------------------------------------------*/

    $('.mobile-btn').click(function() {
        $('.mobile-btn').toggleClass('fa-bars').toggleClass('fa-times');
        $('.header').slideToggle();
    });

    $('.catalog-nav .catalog').clone().appendTo('.header .catalog-nav');
    $('.header__phone').clone().insertBefore('.header__soc');

    $('.header .catalog a').click(function() {
        $('.header .catalog .nav-c').toggleClass('fa-bars').toggleClass('fa-times');
        $('.header .catalog .cat-list').slideToggle();
    });

    $('.header__category-nav .nav').click(function() {
        $('.header__category-nav .header__category').fadeToggle();
    });


     /*Nav--------------------------------------------------------------*/

    /*product-cart events ---------------------------------------------*/

    $('.side-bar-category .title').click(function() {
         $(this).toggleClass('open')
        $(this).next().slideToggle();
    });

    $('.btn-addtoCart').click(function() {
        $(this).addClass('in-cart');
    });

    $('.counter .fa').click(function(e){
        e.preventDefault();
        var currentQty= $(this).parent().parent().find('input').val();
        if( $(this).hasClass('minus') && currentQty>0){
            $(this).parent().parent().find('input').val(parseInt(currentQty, 10) - 1);
        }else{
            if( $(this).hasClass('plus')){
                $(this).parent().parent().find('input').val(parseInt(currentQty, 10) + 1);
            }
        }
    });

    $('.product__detail-card .open-table').click(function() {
        $(this).css('display', 'none');
        $(this).prev('.table-haracteristic').addClass('open');
        
    });

    $('.product__tabs .tab').click(function() {
        $('.product__tabs .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.product__content').hide().eq($(this).index()).fadeIn()
    });

    /*product-cart events ---------------------------------------------*/

    /* filter-price ---------------------------------------------------------------*/
    var filterMinPrice = 0;
    var filterMaxPrice = 5000;

    var $range = $(".price-range");
    var sliderFilter;

    $('.filter .min-price').val(filterMinPrice);
    $('.filter .max-price').val(filterMaxPrice);


    $range.on("change", function () {
        var $this = $(this),
            value = $this.prop("value").split(";");
        $('.filter .min-price').val(value[0]);
        $('.filter .max-price').val(value[1]);
    });

    var createFilter = function (filterMinPrice, filterMaxPrice) {
        $range.ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: filterMinPrice,
            max: filterMaxPrice,
            type: 'double',
            step: 1,
            postfix: "руб.",
            grid: false
        });

        sliderFilter = $range.data("ionRangeSlider");

    };

    function explode(){
        createFilter(filterMinPrice, filterMaxPrice);
    }
    setTimeout(explode, 100);
    /* filter-price ---------------------------------------------------------------*/

    /*Popup events ----------------------------------------------------------------*/

    $('#mask, .close-window').click(function () {
        $('#one-click-window, #successful-window, #backcall-window, #select-town-window').fadeOut();
        $('#mask').fadeOut(300);
        
    });

    $('.btn-oneClick').click(function () {
        $('#mask').fadeIn();
        $('#one-click-window').fadeIn(300);
    });

    $('.back-call').click(function () {
        $('#mask').fadeIn();
        $('#backcall-window').fadeIn(300);
    });

    $('.backcall-form').submit(function() {
        $.ajax({
            type: "POST",
            url: "",
            data: $(this).serialize(),
            success: function(response){
                if (response){ // если есть ответ, то выполняем след. действия
                    $('#one-click-window').fadeOut(); 
                    $('#successful-window').fadeIn(300);
                    setTimeout(function() {
                        $('.backcall-form').trigger('reset');
                    }, 1000);
                } else {
                    $("#successful-window ").addClass('Err');
                    $("#successful-window h4" ).replaceWith('<h4> При отправки произошла ошибка <br/> Поробуйте еще раз </h4>' );
                    $('#one-click-window').fadeOut(300); 
                    $('#successful-window').fadeIn(300);
                    setTimeout(function() {
                        $('.backcall-form').trigger('reset');
                    }, 1000);
                }
            },
            error: function(response){
                $("#successful-window ").addClass('Err');
                    $("#successful-window h4" ).replaceWith('<h4> При отправки произошла ошибка <br/> Поробуйте еще раз </h4>' );
                    $('#one-click-window').fadeOut(300); 
                    $('#successful-window').fadeIn(300);
                    setTimeout(function() {
                        $('.backcall-form').trigger('reset');
                    }, 1000);
            }
        })
        return false;
    });

    $('.backcall-form').submit(function() {
        $.ajax({
            type: "POST",
            url: "",
            data: $(this).serialize(),
            success: function(response){
                if (response){ // если есть ответ, то выполняем след. действия
                    $('#one-click-window').fadeOut(); 
                    $('#backcall-window').fadeIn(300);
                    setTimeout(function() {
                        $('.backcall-form').trigger('reset');
                    }, 1000);
                } else {
                    $("#successful-window ").addClass('Err');
                    $("#successful-window h4" ).replaceWith('<h4> При отправки произошла ошибка <br/> Поробуйте еще раз </h4>' );
                    $('#backcall-window').fadeOut(300); 
                    $('#successful-window').fadeIn(300);
                    setTimeout(function() {
                        $('.backcall-form').trigger('reset');
                    }, 1000);
                }
            },
            error: function(response){
                $("#successful-window ").addClass('Err');
                    $("#successful-window h4" ).replaceWith('<h4> При отправки произошла ошибка <br/> Поробуйте еще раз </h4>' );
                    $('#one-click-window').fadeOut(300); 
                    $('#successful-window').fadeIn(300);
                    setTimeout(function() {
                        $('.backcall-form').trigger('reset');
                    }, 1000);
            }
        })
        return false;
    });

    
});

            