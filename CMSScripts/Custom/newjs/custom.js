var owl = $(".hero-carousal");
owl.owlCarousel({
  smartSpeed: 1000,
  items: 1,
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  autoplay:true,
  autoplayTimeout:10000,
  autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


$('.owl-contrl span').on('click', function(){
    $('.owl-contrl span.act').removeClass('act');
    $(this).addClass('act');
});


$(document).on('mouseenter', '[data-toggle="tab"]', function () {
  $(this).tab('show');
});

$(".site-nav ul li a").each(function(){
  if($(this).parent().find('ul').length > 0){
   $(this).parent().prepend('<span class="subDropAlt"></span>');
   $(this).parent().addClass('has-sub');
  }else{
  }
});

$(".tab-left > ul > li a").each(function(){
  if($(this).parent().find('ul').length > 0){
   $(this).parent().prepend('<span class="subDropAltX"></span>');
   $(this).parent().addClass('has-sub');
  }else{
  }
});

var $mq = $('.marquee').marquee({
  allowCss3Support: true,
  pauseOnHover:true,
  duration: 15000
});
$('.pause').click(function(){
  $mq.marquee('pause');
});
$('.resume').click(function(){
  $mq.marquee('resume');
});

$('.tick-close span').on('click', function(){
    $('.tick-close span.act').removeClass('act');
    $(this).addClass('act');
});

$('.subDropAlt').click(function(){
  $(this).parent().find('> ul').slideToggle();
});

$('.subDropAltX').click(function(){
  $(this).parent().find('> ul').slideToggle();
});


$('.mobClick').click(function() {
  $(this).toggleClass('open');
  $('.site-nav').toggleClass('act');
  $('.nav-overlay').toggleClass('act');
});

$('.mobClick2').click(function() {
  $(this).toggleClass('open');
  $('.header-right').toggleClass('act');
  // $('.nav-overlay2').toggleClass('act');
  // $('body').toggleClass('act');
});


// --------------------------------------------------------------
