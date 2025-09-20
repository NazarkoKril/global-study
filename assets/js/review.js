document.addEventListener("DOMContentLoaded", () => {
    const maxLength = 118; 

  document.querySelectorAll(".review-card").forEach(review => {
    const textEl = review.querySelector(".review-card-text span");
    const btn = review.querySelector(".review-card-btn");
    const fullText = textEl.textContent.trim();

    if (fullText.length <= maxLength) {
      btn.style.display = "none"; 
      return;
    }

    let isShort = true;

    function updateText() {
      if (isShort) {
        textEl.textContent = fullText.slice(0, maxLength) + "...";
        btn.textContent = "читати більше";
      } else {
        textEl.textContent = fullText;
        btn.textContent = "згорнути";
      }
    }

    btn.addEventListener("click", () => {
      isShort = !isShort;
      updateText();
    });

    updateText(); 
  });
});