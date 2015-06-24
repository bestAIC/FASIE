// Inits
$(document).ready(function() {

  HideShow();

  if($('.map_big').length){
    CustomMap();
  }
  
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

  $('.accordeon dt').click(function(){
    $('.accordeon dt').removeClass('selected');
    $(this).addClass('selected');
    $('.accordeon dd').slideUp();
    $(this).next('dd').slideDown();
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

  if($('.float_point').length || $('.scroll_btn').length){
    var startBlock = $('.float_point').offset().top;
    var endBlock = ($('.scroll_btn').offset().top)-($('.floating_nav').height());

    if ($(window).scrollTop() < startBlock ) {
      $(".floating_nav").css({
        position: 'absolute',
        top: 'auto',
        bottom: 'auto'
      });
    } else if ($(window).scrollTop() < endBlock) {
      $(".floating_nav").css({
        position: 'fixed',
        top: 0,
        bottom: 'auto'
      });
    } else if ($(window).scrollTop() > endBlock) {
      $(".floating_nav").css({
        position: 'absolute',
        top: 'auto',
        bottom: '100px'
      });
    }
  }
} 


// MAP 
function CustomMap() {
  var mapCanvas = document.getElementById('map_canvas');
  var mapOptions = {
    center: new google.maps.LatLng(55.7428136,37.6043123),
    zoom: 16,
    zoomControl: false,
    scrollwheel: false,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
} 

   

