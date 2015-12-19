/* 
   Description: Animates the header upon scroll

*/

$(function(){

    var header = $(".front header"),
    yOffset = 0,
    triggerPoint = 150;
    $(window).scroll(function(){
        yOffset = $(window).scrollTop();
        //header scroll effect  
        if(yOffset >= triggerPoint){
            header.addClass("site-header-min");
        }else{
          header.removeClass("site-header-min");    
        }
        
        //front page skills fadein
        if(yOffset >= 300){
            $('.skills-left').removeClass('hide').addClass('animated flipInX');
            $('.skills-right').removeClass('hide').addClass('animated flipInX');
        }

        $('section[data-type="background"]').each(function() {
        var $bgObj = $(this);
        var yPos = -(yOffset / $bgObj.data('speed'));
        var bgP = '50% ' + yPos + 'px';
        $bgObj.css("background-position", bgP);    
        }); 
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

});
//end of doc loading

