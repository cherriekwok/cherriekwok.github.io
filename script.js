// Get the hamburger icon and the navigation menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the "active" class on the navLinks when the hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

