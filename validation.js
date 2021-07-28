const errorAlert = document.createElement('p');
errorAlert.classList.add('alert-errorMsg');
errorAlert.textContent = 'Please add your email using lower case * e.g. username@gmail.com';
const paragraph = document.querySelector('.error-paragraph');
paragraph.appendChild(errorAlert);

const contactForm = document.querySelector('.form');
const userEmail = document.querySelector('#email');

function checkError(e) {
  if (userEmail.value !== userEmail.value.toLowerCase()) {
    paragraph.style.display = 'block';
    e.preventDefault();
  } else {
    paragraph.style.display = 'none';
  }
}

contactForm.addEventListener('submit', checkError);
