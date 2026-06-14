const backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dropdowns on click for mobile users
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    // Only apply on smaller screens
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    }
  });
});
