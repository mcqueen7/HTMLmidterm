$(document).ready(function(){
    $('.nav_link_now').parent().css('background-color',"rgba(192, 37, 231, 0.705)");

});

$(function() {
    $(".flexslider").flexslider({
    slideshowSpeed: 3700, //展示时间间隔ms
    animationSpeed: 500, //滚动时间ms
    touch: true //是否支持触屏滑动
  });
  $("#gototop").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
}); 


window.onscroll = function() {
var scrollTop = $(document).scrollTop();
if (scrollTop > 20) {
     $("#gototop").fadeIn();
} else {
    $("#gototop").fadeOut();
};

};