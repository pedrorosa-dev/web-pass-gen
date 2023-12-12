const navButton = document.querySelector('#hamburger-toggle');

navButton.addEventListener('click', (event) => {
  event.preventDefault();

  const navList = document.querySelector('.nav-list');
  navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
});

const mql = window.matchMedia('(min-width: 768px)');
mql.addEventListener('change', (event) => {
  const navList = document.querySelector('.nav-list');

  if (event.matches) {
    navList.style.display = 'flex';
  } else {
    navList.style.display = 'none';
  }
});