/*侧边栏*/
$(window).scroll(function() {
    var scroll_len = $(window).scrollTop();
    if (scroll_len > 0) {
        $('.side_bar').fadeIn();
        $("div.side_bar ul a").addClass('margin20 no-margin-left no-margin-right no-margin-top');
    } else {
        $('.side_bar').fadeOut();        
    };
});

/*CSS设置*/
$(document).ready(function(){
    /*$("div.app-bar").addClass('margin40 no-margin-left no-margin-right no-margin-bottom shadow');*/
    $("div.panel").addClass('margin40 no-margin-left no-margin-right no-margin-bottom shadow');
    $("div.carousel").addClass('square-bullets margin30 no-margin-left no-margin-right no-margin-bottom shadow');
});

$(function(){
    $(".panel").panel();
});

