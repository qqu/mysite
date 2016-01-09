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
                if(yOffset >= 240){
                    $('.skills-left').removeClass('invisible').addClass('animated flipInX');
                    $('.skills-right').removeClass('invisible').addClass('animated flipInX');
                }

                /*
                   $('section[data-type="background"]').each(function() {
                   var $bgObj = $(this);
                   var distance = $bgObj.offset().top - yOffset;
                   var yPos = (yOffset / $bgObj.data('speed')) ;
                   var bgP = '50% ' + (distance - yPos) + 'px';

                   $bgObj.css("background-position", bgP);    
                   });
                 */
            });

            $("body:not('.front')").find("header").addClass("site-header-min").removeClass("site-header");


            $('.resume-view-btn').hover(function() {
                    $(this).addClass("animated jello");
                }, function() {
                    $(this).removeClass("animated jello");
            });

            $(window).stellar({
                responsive: true,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

            scrollNav();
            $('.your-class').slick({
                slidesToShow: 2,
                  slidesToScroll: 1,
                    autoplay: true,
                      autoplaySpeed: 2000,
            });

});

function scrollNav() {
    $('.site-nav a').click(function(){  
        //Toggle Class
        $(".active").removeClass("active");      
        $(this).closest('a').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('a').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href')  ).offset().top
        }, 200);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
//end of doc loading

