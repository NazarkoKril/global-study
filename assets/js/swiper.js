document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
        slidesPerView: "1",
        grid: {
            rows: 2
        },
        spaceBetween: 20, 
        speed: 1200,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            850: {
                slidesPerView: 2, 
                slidesPerGroup: 1,
                grid: {
                    rows: 1,
                    fill: "row",
                },
                spaceBetween: 32,
            }
        }
    });
});