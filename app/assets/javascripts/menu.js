$(function(){
  $('.fa-bars').each(function(){
      $(this).on('click',function(){
          $("+.submenu",this).slideToggle();
          return false;
      });
  });
});