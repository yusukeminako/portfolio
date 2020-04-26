$(function(){
  $(".tooltip p").hover(function() {
    $(this).next("span").animate({opacity: "show", top: "-75"}, "slow");}, function() {
      $(this).next("span").animate({opacity: "hide", top: "-85"}, "fast");
    });
});


// topスクロール

$(function(){
  $('.fa-chevron-circle-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
    return false;
  }); 
});

$(function(){
  var position = $(".main-works").offset().top;
  $('.icon-scroll').click(function () {
    $('body,html').animate({
      scrollTop: position
      
    });
    return false;
  });
});

$(function(){
  var tech = $(".technolog").offset().top;
  $('.icon-scroll2').click(function () {
    $('body,html').animate({
      scrollTop: tech 
    });
    return false;
  });  
});