document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
    const underline = document.querySelector(".tab-underline");

    function moveUnderline(tab) {
        underline.style.width = tab.offsetWidth + "px";
        underline.style.left = tab.offsetLeft + "px";
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelector(".tab.active").classList.remove("active");
            tab.classList.add("active");
            moveUnderline(tab);

            contents.forEach(c => c.classList.remove("active"));
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });

    moveUnderline(document.querySelector(".tab.active"));
});