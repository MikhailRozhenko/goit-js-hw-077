const form = document.querySelector('.login-form');
const emailName = document.querySelector('input[type="email"]');
const passwordName = document.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const passwordValue = passwordName.value.trim();
  const emailValue = emailName.value.trim();
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const arrayObject = {
    email: emailValue,
    passwordName: passwordValue,
  };

  console.log(arrayObject);
  form.reset();
});
