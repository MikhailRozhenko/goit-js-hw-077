const inputName = document.querySelector('#name-input');
const textName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
  if (event.currentTarget.value.trim() === '') {
    textName.textContent = 'Anonymous';
  } else {
    textName.textContent = event.currentTarget.value.trim();
  }
});
