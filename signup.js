const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  if (checkInput() === false) {
    e.preventDefault(); // Prevent form submission if inputs are invalid
  } else{
    window.location.href = "index.html"; 
  }
});

function checkInput() {
  let isValid = true;
  error_message.innerText = ''; // Clear previous error messages
  
  // Firstname validation
  if (firstname_input.value === '' || firstname_input.value === null) {
    firstname_input.parentElement.classList.add('incorrect');
    error_message.innerText += 'First Name is Required.\n';
    isValid = false;
  } else {
    firstname_input.parentElement.classList.remove('incorrect');
  }

  // Email validation
  if (email_input.value === '' || email_input.value === null) {
    email_input.parentElement.classList.add('incorrect');
    error_message.innerText += 'Email is Required.\n';
    isValid = false;
  } else {
    email_input.parentElement.classList.remove('incorrect');
  }

  // Password validation
  if (password_input.value === '' || password_input.value === null) {
    password_input.parentElement.classList.add('incorrect');
    error_message.innerText += 'Password is Required.\n';
    isValid = false;
  } else {
    password_input.parentElement.classList.remove('incorrect');
  }

  // Confirm Password validation
  if (repeat_password_input.value === '' || repeat_password_input.value === null) {
    repeat_password_input.parentElement.classList.add('incorrect');
    error_message.innerText += 'Confirm Password is Required.\n';
    isValid = false;
  } else if (repeat_password_input.value !== password_input.value) {
    repeat_password_input.parentElement.classList.add('incorrect');
    error_message.innerText += 'Passwords do not match.\n';
    isValid = false;
  } else {
    repeat_password_input.parentElement.classList.remove('incorrect');
  }

  return isValid;
}