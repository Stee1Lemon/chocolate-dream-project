$('.products_list').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay:true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
     },
  ],
});