$(document).ready(function(){
    $('.nav_link_now').parent().css('background-color',"rgba(192, 37, 231, 0.705)");

});
$(function() {
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