const input = document.querySelector('#input');

window.addEventListener('click', (event) => {
  if (event.target === input) {
    document.querySelector('.newsletter__input').classList.add('active');
  } else if (event.target !== input && input.value === '') {
    document.querySelector('.newsletter__input').classList.remove('active');
  }
});
