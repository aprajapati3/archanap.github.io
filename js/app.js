$(function() {
  $('#hideOnClick').click(function() {
     $(this).hide();
      $('.use_animate').animate({
          height: '+=50'},
          400                        
         );
  });
var owl = $('.owl-carousel');   
owl.owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
    
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
});