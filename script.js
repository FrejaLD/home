const backToTopButton = document.getElementById("myBtn");

window.addEventListener("scroll", () => {
    // Show button if scrolled down more than 300px
    if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }

    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
});
