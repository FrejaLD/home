const backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    // Show button if scrolled down more than 300px
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
