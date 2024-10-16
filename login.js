const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-email-input');
const loginPassword = document.getElementById('login-password-input');
const errorLogin_message = document.getElementById('error-login-message');

loginForm.addEventListener('submit', (e) => {
  if (!checkLoginInputs()) {
    e.preventDefault(); // Prevent form submission if inputs are invalid
  } else {
    window.location.href = 'http://127.0.0.1:5501/index.html'
  }
});

function checkLoginInputs() {
  let valid = true;
  errorLogin_message.innerText = ''; // Clear previous error messages

  // Email validation
  if (loginEmail.value === '' || loginEmail.value === null) {
    loginEmail.parentElement.classList.add('incorrect');
    errorLogin_message.innerText += 'Email is required.\n';
    valid = false;
  } else {
    loginEmail.parentElement.classList.remove('incorrect');
  }

  // Password validation
  if (loginPassword.value === '' || loginPassword.value === null) {
    loginPassword.parentElement.classList.add('incorrect');
    errorLogin_message.innerText += 'Password is required.\n';
    valid = false;
  } else {
    loginPassword.parentElement.classList.remove('incorrect');
  }

  return valid; // Return true if both inputs are valid, otherwise false
}
