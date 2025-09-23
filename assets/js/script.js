// burger
document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".burger");
	const mobileContainer = document.querySelector(".header-mobile-container");
	const closeBtn = document.querySelector(".header-close");
	const body = document.body;

	if (burger && mobileContainer && closeBtn) {
		burger.addEventListener("click", () => {
			mobileContainer.classList.add("active");
				body.style.overflow = "hidden";
		});

		closeBtn.addEventListener("click", () => {
			mobileContainer.classList.remove("active");
			body.style.overflow = "";
		});
	}
});


// Header Scroll Behavior
const style = document.createElement("style");
style.textContent = `
  .header-container {
    transition: transform 0.6s ease-in-out;
  }
  .header-container.hidden {
    transform: translateY(-100%);
  }
`;
document.head.appendChild(style);

let lastScrollPosition = 0;
let ticking = false;
const headerContainer = document.querySelector(".header__container");
const SCROLL_THRESHOLD = 20;
const HEADER_HEIGHT = 50;

if (headerContainer) {
	window.addEventListener("scroll", () => {
		const currentScrollPosition = window.pageYOffset;

		if (!ticking) {
			window.requestAnimationFrame(() => {
				if (currentScrollPosition <= 20) {
					headerContainer.classList.remove("hidden");
				} else if (
					Math.abs(currentScrollPosition - lastScrollPosition) >=
					SCROLL_THRESHOLD
				) {
					if (currentScrollPosition > lastScrollPosition) {
						headerContainer.classList.add("hidden");
					} else {
						headerContainer.classList.remove("hidden");
					}
					lastScrollPosition = currentScrollPosition;
				}
				ticking = false;
			});
			ticking = true;
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
AOS.init({
    delay: 100,
    duration: 500, 
    easing: 'ease-out',
    once: true,
	disable: 'mobile'
});
});