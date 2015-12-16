/* 
   Description: Animates the header upon scroll

*/

$(function(){

    //header scroll effect  
    var header = $("header"),
    yOffset = 0,
    triggerPoint = 150;
    $(window).scroll(function(){
        yOffset = $(window).scrollTop();
        if(yOffset >= triggerPoint){
            header.addClass("site-header-min");
        }else{
            header.removeClass("site-header-min");
        }
    });
    
    $("body:not('.front')").find("header").addClass("site-header-min").removeClass("site-header");

    //gallery image animation  
    /*
    $('.project-post a').on('mouseenter',function() {
        $(this).find('.image-wrapper').addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function() {
            $(this).removeClass('animated pulse');
        });
    });
    */

    //front page skills fadein
    $(window).scroll(function(){
        yOffset = $(window).scrollTop();
        if(yOffset >= 300){
            $('.skills-left').removeClass('hide').addClass('animated fadeInLeft');
            $('.skills-right').removeClass('hide').addClass('animated fadeInRight');
        }
    });


});
//end of doc loading

