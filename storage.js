const userName = document.getElementById('name');
const emailId = document.getElementById('email');
const userMsg = document.getElementById('msg');

function populateStorage() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('msg', document.getElementById('msg').value);
  setStorage();
}

function setStorage() {
  const currentName = localStorage.getItem('name');
  const currentEmail = localStorage.getItem('email');
  const currentMsg = localStorage.getItem('msg');
  document.getElementById('name').value = currentName;
  document.getElementById('email').value = currentEmail;
  document.getElementById('msg').value = currentMsg;
}

if (!localStorage.getItem('name')) {
  populateStorage();
} else setStorage();

userName.onchange = populateStorage;
emailId.onchange = populateStorage;
userMsg.onchange = populateStorage;

