let rail = document.getElementById('rail');
let body = document.querySelector('body');
let textLogo = document.querySelector('.text-logo');
let navLinks = document.querySelectorAll('.nav-link');
let navBar = document.querySelector('.nav-bar');
let dropdownMenu = document.querySelectorAll('.dropdown-menu');

rail.addEventListener('click', () => {
  rail.classList.toggle('dark');
  body.classList.toggle('dark');
  textLogo.classList.toggle('dark');
  navBar.classList.toggle('dark');

  navLinks.forEach((navLink) => {
    navLink.classList.toggle('dark');
  });

  dropdownMenu.forEach((dropdownMenu) => {
    dropdownMenu.classList.toggle('dark');
  });
});