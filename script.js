const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-center');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});