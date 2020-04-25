$(function(){
  $(".tooltip p").hover(function() {
    $(this).next("span").animate({opacity: "show", top: "-75"}, "slow");}, function() {
      $(this).next("span").animate({opacity: "hide", top: "-85"}, "fast");
    });
});


// topに戻る

$(function(){
  $('.fa-chevron-circle-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
    return false;
  });
});