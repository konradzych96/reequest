import * as $ from 'jquery'

$(window).scroll(function(event) {

    if($('#content-brick1').length){

    if ($('#content-brick1').offset().top - $(window).outerHeight() < $(window).scrollTop()) {
        $("#content-brick1").css("background-size", (100 + 100 * $(window).scrollTop() / 15000) + "%");
    }
    if ($('#content-brick2').offset().top - $(window).outerHeight() < $(window).scrollTop()) {
        $("#content-brick2").css("background-size", (100 + 100 * $(window).scrollTop() / 15000) + "%");
    }
    if ($('#content-brick3').offset().top - $(window).outerHeight() < $(window).scrollTop()) {
        $("#content-brick3").css("background-size", (100 + 100 * $(window).scrollTop() / 15000) + "%");
    }
}
}); 