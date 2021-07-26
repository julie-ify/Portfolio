const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.cross-arrow');
const openMenu = document.querySelector('.hamburger');
const menuList = document.querySelectorAll('.menu-mobile-list');
const list = Array.from(menuList);

let sideMenu = false;

function CloseSideMenu() {
  menu.style.display = 'none';
  sideMenu = false;
}

function OpenSideMenu() {
  if (sideMenu === false) {
    menu.style.display = 'block';
    sideMenu = true;
  } else {
    CloseSideMenu();
  }
}

list.forEach((list) => {
  list.addEventListener('click', CloseSideMenu);
});

openMenu.addEventListener('click', OpenSideMenu);
closeMenu.addEventListener('click', CloseSideMenu);
