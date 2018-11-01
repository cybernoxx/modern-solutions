(function($) {
  
  "use strict";
  /* 
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall: [1024, 2],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="glyphicon glyphicon-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="glyphicon glyphicon-chevron-right"></i>');

}(jQuery));
