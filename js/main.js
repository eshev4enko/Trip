$(document).ready(function(){

    // Show text

    $("#showHideContent").click(function () {
        if ($(".inner-txt").is(":hidden")) {

            $(".inner-txt").show("slow");

        } else {

            $(".inner-txt").hide("slow");

        }
        return false;
    });

     //Details - left panel content

    $(function(){
        var EatPictBox = $('.eat-pict-box');

        $(EatPictBox).hide();
        $(EatPictBox).first().show();
        $('.eat-box').find('.eat-box-inner').click(function(){
            $(this).next().stop().slideDown('normal');
        });

        $('.eat-pict-box').find('.blue-up').click(function(){
            $(this).parent().stop().slideUp('normal');
        });
    });


    // Slide panel

    $(function() {
        var
            $leftArrow = $('.left-yellow-arrow'),
            $rightArrow = $('.right-yellow-arrow'),
            $leftContent = $('.left-content');

        $leftArrow.hide();
        $rightArrow.on('click', function () {
            $leftContent.toggleClass('hidden');
            $rightArrow.toggleClass('hidden-arrow').animate({'opacity' : '0'}, 500);
            $leftArrow.show().animate({'opacity' : '1'}, 500);
        });

        $leftArrow.on('click', function () {
            $leftContent.removeClass('hidden');
            $rightArrow.show().removeClass('hidden-arrow').animate({'opacity' : '1'}, 1500);
            $leftArrow.hide().animate({'opacity' : '0'}, 500);
        });
    });

    // Header active tab

    $(function() {
        var url=document.location.href;
        $.each($(".header-list li a"),function(){
            if(this.href==url){$(this).addClass('header-active-link');};
        });
        $(".header-list li:first-child a").removeClass('header-active-link');
    });

    // Carousel setting/

    $('.carousel').carousel({
        interval: 0
    });

});


