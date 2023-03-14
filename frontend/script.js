console.log('loaded');

const hamburgerMenuElement = document.querySelector('.hamburger-menu');

hamburgerMenuElement.addEventListener('click', function() {
  console.log('clicked');

  hamburgerMenuElement.classList.toggle('open');
});