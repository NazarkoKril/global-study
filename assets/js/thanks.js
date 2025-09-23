document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll('.thanks-btn').forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); 
      const popup = document.getElementById("thanks-popup");
      popup.classList.add("active");
      setTimeout(() => {
        popup.classList.remove("active");
      }, 2500); 
    });
});
});