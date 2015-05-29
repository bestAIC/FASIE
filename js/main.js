// Inits
$(document).ready(function() {

  HideShow();

  $(window).scroll(function() {
    MenuMove();
  });

  $('.scroll_btn').click(function(){  
    $.scrollTo('.scroll_to', 400);
  }); 


  $('.banner_slider .js_slick_slider').slick({
    fade:true,
    arrows:false,
    dots: true,
  });

  $('.news_slider .js_slick_slider').slick({
    dots: false,
  });



});



// Hide_Show
function HideShow() {  

  $('.b-header_user').click(function(){
    $('.b-header_user-settings').fadeToggle();
  }); 

  $('.menu_btn').click(function(){
    $(this).toggleClass('open');
    $('.header_menu_cover').slideToggle();
  });

  $(window).resize(function(){
    var bodyW = $('body').width();
    if(bodyW>1080){
      $('.header_menu_cover').show();
    } else {
      if ($('.menu_btn').hasClass('open')){
        $('.header_menu_cover').show();
      } else {
        $('.header_menu_cover').hide();
      }
    }
  }).resize();      
 
}



// Menu 
function MenuMove() {
  if ($(window).scrollTop() < 1450 ) {
    $(".floating_nav").css({
      position: 'absolute',
      top: 'auto'
    });
  } else if ($(window).scrollTop() < 2380) {
    $(".floating_nav").css({
      position: 'fixed',
      top: 0
    });
  } else if ($(window).scrollTop() > 2380) {
    $(".floating_nav").css({
      position: 'absolute',
      top: '920px'
    });
  }
}   

   

