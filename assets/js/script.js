// burger
document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".burger.mob");
	const mobileContainer = document.querySelector(".header__mobile_container");
	const body = document.body;

	if (burger && mobileContainer) {
		burger.addEventListener("click", () => {
			const isMenuOpen = burger.classList.contains("active");

			burger.classList.toggle("active");
			mobileContainer.classList.toggle("active");

			if (!isMenuOpen) {
				body.style.overflow = "hidden";
			} else {
				body.style.overflow = "";
			}
		});
	}
});


// Header Scroll Behavior
const style = document.createElement("style");
style.textContent = `
  .header__container {
    transition: transform 0.6s ease-in-out;
  }
  .header__container.hidden {
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

