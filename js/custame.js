/*jslint browser: true*/
/*global $, window, WOW */
// eslint-disable-next-line no-console
$(function () {
    "use strict";
    $("body").niceScroll({
        cursorcolor: "#f76006",
        horizrailenabled: false // nicescroll can manage horizontal scroll
    });
});
$(function () { // start relowd page

    "use strict";

    //run menu ul links
    var x = $(window).height();
    $('.nav .menu').click(function () {
        $('.links-ul-mid').fadeIn(1000).height(x);
        $('body').css({
            height: x
        }).addClass('over');
        $('.ul-links i').click(function () {
            $('.links-ul-mid').fadeOut(1000);
            $('body').removeClass('over');
        });
    });
    //end run menu ul links
    // autoslider testymonial
    (function autoslider() {
        $('.active-slider').each(function () {
            if (!$('.active-slider').is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).next().addClass('active-slider').fadeIn(1000).siblings().removeClass('active-slider');
                    autoslider();
                });
            } else {
                $(this).delay(3000).fadeOut(function () {
                    $(this).removeClass('active-slider');
                    $('.overlaye-test div:first-child').fadeIn(1000).addClass('active-slider');
                    autoslider();
                });
            }
        });
    }());
    // END autoslider testymonial
    // wow animation
    new WOW().init();
}); // close relowd page