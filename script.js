setTimeout(() => {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("modalImg");
  const cardImages = document.querySelectorAll(".card_image img");

  // 1. OPENING THE MODAL: When a thumbnail is clicked
  cardImages.forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation(); // Stops it from instantly closing itself
      if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = img.src;
        console.log("Modal opened with image:", img.src);
      }
    });
  });

  // 2. CLOSING THE MODAL: Catching any click on the screen while modal is active
  if (modal) {
    modal.addEventListener("click", () => {
      modal.style.display = "none";
      console.log("Modal closed!");
    });
  }
}, 250);


function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}




document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Look up to the container, then find the textarea inside it
    const container = this.parentElement;
    const textArea = container.querySelector('textarea');
    
    // Copy the text
    navigator.clipboard.writeText(textArea.value).then(() => {
      const originalText = this.textContent;
      this.textContent = "Copied!";
      
      setTimeout(() => {
        this.textContent = originalText;
      }, 1500);
    });
  });
});
