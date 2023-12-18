const users = [
  { username: 'andy', password: '1234'},
  { username: 'bobby', password: '2345'},
  { username: 'candy', password: '34567'}
];

const loginForm = document.querySelector('.login-form');
const inp_username = document.querySelector('#username');
const inp_password = document.querySelector('#password');

const validateForm = () => {
  let isValid = true;

  // Check if every input is not empty and trim leading/trailing spaces
  Array.from(loginForm.elements).forEach(input => {
    if (input.type !== 'submit' && input.value.trim() === '') {
      input.style.borderColor = 'red';
      isValid = false;
    } else {
      input.style.borderColor = '';
    }
  });

  // Additional validation for username and password lengths
  const trimmedUsername = inp_username.value.trim();
  if (trimmedUsername.length <= 3 || /^\d/.test(trimmedUsername) || /\s/.test(trimmedUsername)) {
    inp_username.style.borderColor = 'red';
    isValid = false;
  } else {
    inp_username.style.borderColor = '';
  }

  if (inp_password.value.length <= 4) {
    inp_password.style.borderColor = 'red';
    isValid = false;
  } else {
    inp_password.style.borderColor = '';
  }

  return isValid;
};

const login = () => {
  const username = inp_username.value.trim();
  const password = inp_password.value;

  // Check if username and password match any user in the array
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }
};

const hdlLogin = e => {
  e.preventDefault();

  if (validateForm()) {
    // Additional check for login
    login();
    // Redirect to the specified URL
    window.location.assign('https://www.example.com');
  }
};

loginForm.addEventListener('submit', hdlLogin);
