$(document).ready(function () {
  $(".scroll").hide();
  $(document).on("scroll", window, function () {
    if ($(window).scrollTop()>700) 
    {
        $(".scroll").show();
    }
    else if($(window).scrollTop()<700)
    {
        $(".scroll").hide();
    }
    });

       // SLIDER INITIALIZATION==================================================
   $(".js-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
      ]
  });
// ===========================================================================
});  
