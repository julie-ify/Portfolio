const errorAlert = document.createElement('p');
errorAlert.classList.add('alert-errorMsg');
errorAlert.textContent = 'Please add your email using lower case *';
const paragraph = document.querySelector('.error-paragraph');
paragraph.appendChild(errorAlert);

const contactForm = document.querySelector('.form');
const userEmail = document.querySelector('#email');

contactForm.addEventListener('submit', checkError);