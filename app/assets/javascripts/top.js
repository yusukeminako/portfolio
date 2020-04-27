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

//jQueryのoffsetで表示位置の取得と要素の移動
$(window).load(function(){
  //(window).loadで最初に画像を読み込ませる、画像を先に読み込まないと正確な位置を取得できないことがあるので
  var position = $(".main-works").offset().top;
  $('.icon-scroll').click(function () {
    $('body,html').animate({
      scrollTop: position
    });
    return false;
  });
  var tech = $(".technolog").offset().top;
  $('.icon-scroll2').click(function () {
    $('body,html').animate({
      scrollTop: tech
    });
    return false;
  });  

});