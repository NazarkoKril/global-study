document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupBtn = document.getElementById("popup-btn");
    const closeBtn = popup.querySelector(".close-btn");

    popupBtn.addEventListener("click", () => {
        popup.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    })


    popup.addEventListener("click", function (e) {
        if (e.target === this) {
            popup.classList.remove("active")
        }
    });
});