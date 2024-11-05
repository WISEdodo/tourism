// Select the navigation bar
const navbar = document.querySelector('.navbar');
const handleHover = function (e) {
  if (e.target.classList.contains('nav__item')) {
    const link = e.target;
    const siblings = link.closest('.navbar').querySelectorAll('.nav__item a');
    const logo = link.closest('.navbar').querySelector('.logo');

    siblings.forEach(el => {
      if (el !== link.querySelector('a')) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
navbar.addEventListener('mouseover', handleHover.bind(0.5));
navbar.addEventListener('mouseout', handleHover.bind(1));
