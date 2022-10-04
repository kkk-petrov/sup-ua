const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1600: {
      slidesPerView: 4,
      spaceBetween: 53,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});
