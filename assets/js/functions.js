/* 
   Description: Animates the header upon scroll

 */

$(function(){
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

});
