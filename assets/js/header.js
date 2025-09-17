const header = document.querySelectorAll(".header_component");
const headerComponent = `
		<header>
            <div class="header-container">
                <button class="burger">
                    <img src="/assets/img/icons/burger.svg" alt="">
                </button>
                <div class="header-logo">
                    <a href="/"><img src="/assets/img/logo.svg" alt="Global Study Logo"></a>
                </div>
                <div class="header-menu">
                    <nav>
                        <ul class="header-menu-list">
                            <li><a class="header-link" href="/">Головна</a></li>
                            <li><a class="header-link" href="/universe.html">Університети</a></li>
                            <li><a class="header-link" href="/lang.html">Вивчення мови</a></li>
                            <li><a class="header-link" href="/service.html">Послуги</a></li>
                            <li><a class="header-link" href="/contact.html">Контакти</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header-btn">
                    <button class="btn btn_light">Передзвоніть мені</button> 
                </div>
            </div>
            <div class="header-mobile-container">
                <button class="header-close">
                    <img src="/assets/img/icons/crose.svg" alt="">
                </button>
                <div class="header-mobile-menu">
                    <ul class="header-mobile-menu-list">
                        <li><a class="header-link" href="/">Головна</a></li>
                        <li><a class="header-link" href="/universe.html">Університети</a></li>
                        <li><a class="header-link" href="/lang.html">Вивчення мови</a></li>
                        <li><a class="header-link" href="/service.html">Послуги</a></li>
                        <li><a class="header-link" href="/contact.html">Контакти</a></li>
                    </ul>
                </div>
            </div>
        </header>`;
header.forEach((el) => {
	return (el.innerHTML = headerComponent);
});
