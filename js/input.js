const input = document.querySelector('#input');
const submit = document.querySelector('.newsletter__input-button');

window.addEventListener('click', (event) => {
  if (event.target === input) {
    document.querySelector('.newsletter__input').classList.add('active');
  } else if (event.target !== input && input.value === '') {
    document.querySelector('.newsletter__input').classList.remove('active');
    submit.classList.remove('send');
  }
});

submit.addEventListener('click', () => {
  if (input.value !== '') {
    submit.classList.add('send');
    setTimeout(() => {
      alert('Success! You have subscribed to the newsletter');
    }, 500);
  } else {
    alert('Enter your email!');
  }
});

input.addEventListener('keyup', (event) => {
  if (input.value !== '' && event.keyCode === 13) {
    submit.classList.add('send');
    setTimeout(() => {
      alert('Success! You have subscribed to the newsletter');
    }, 500);
  }
});
