const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.cross-arrow');
const openMenu = document.querySelector('.hamburger');

let sideMenu = false;

function OpenSideMenu() {
  if (sideMenu === false) {
    menu.style.display = 'block';
    sideMenu = true;
  }
  else {
    CloseSideMenu()
  }
}

function CloseSideMenu() {
    menu.style.display = 'none';
    sideMenu = false;
}
openMenu.addEventListener('click', OpenSideMenu);
closeMenu.addEventListener('click', CloseSideMenu);
