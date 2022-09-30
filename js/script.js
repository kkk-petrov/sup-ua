const newsletter = document.querySelector('.newsletter');
const input = document.querySelector('#input');

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

newsletter.addEventListener('click', (event) => {
  if (event.target === input) {
    document.querySelector('.newsletter__input').classList.add('active');
  } else if (event.target !== input && input.value === '') {
    document.querySelector('.newsletter__input').classList.remove('active');
  }
});
