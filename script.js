const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.cross-arrow');
const openMenu = document.querySelector('.hamburger');

let sideMenu = false;

function OpenSideMenu() {
  if (sideMenu === false) {
    menu.style.display = 'block';
    sideMenu = true;
  }
}
openMenu.addEventListener('click', OpenSideMenu);
