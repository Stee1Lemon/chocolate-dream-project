$('.products_list').slick({
  // infinite: true,
  arrows: false,
  slidesToShow: 4,
  autoplay: true,
  slidesToScroll: 1, // по 1-му слайду проскролливать
  speed: 4000, // медленная смена слайдов - скорость бегущей строки
  autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
  cssEase: 'linear', // делаем анимацию однотонной при смене слайда
  dots: true,
  focusOnSelect: true,
  variableWidth: true,
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
        slidesToShow: 3,
      },
    },
  ],
});
