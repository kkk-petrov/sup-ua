const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 53,
  navigation: {
    nextEl: '.swiper-controls-next',
    prevEl: '.swiper-controls-prev',
  },
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

const header = document.querySelector('.header');
const defaultOffset = 200;
let lastScroll = 0;

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const isHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !isHide()) {
    // scroll down
    console.log('down');
    header.classList.add('hide');
  } else if (scrollPosition() < lastScroll && isHide()) {
    // scroll up
    console.log('up');
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
});

AOS.init();
