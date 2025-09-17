const footer = document.querySelectorAll('.footer_component')
const footerComponent = `
<footer>
        <div class="footer-container">
            <div class="footer-left">
                <div class="footer-logo">
                    <a href="/"><img src="/assets/img/logo_big.svg" alt="Global Study Logo"></a>
                </div>
                <p class="footer-text desktop">© 2023 Global Study SK</p>
            </div>
            <div class="footer-right">
                <ul class="footer-links">
                    <li><a class="footer-link" href="/">Головна</a></li>
                    <li><a class="footer-link" href="/universe.html">Університети</a></li>
                    <li><a class="footer-link" href="/lang.html">Вивчення мови</a></li>
                    <li><a class="footer-link" href="/service.html">Послуги</a></li>
                    <li><a class="footer-link" href="/contact.html">Контакти</a></li>
                </ul>
                <ul class="footer-socials">
                    <li><a class="footer-social" href="mailto:Globalstudysk@gmai.com">
                        <img src="/assets/img/icons/email.svg" alt="Email"> Globalstudysk@gmai.com
                    </a></li>
                    <li><a class="footer-social" href="tel:+380986537201">
                        <img src="/assets/img/icons/tel.svg" alt="Phone number"> +38 098 653 72 01
                    </a></li>
                    <li><a class="footer-social" href="https://instagram.com/globalstudysk" target="_blank">
                        <img src="/assets/img/icons/instagram.svg" alt="Instagram"> @globalstudysk
                    </a></li>
                    <li><a class="footer-social" href="https://facebook.com/GlobalStudySk" target="_blank">
                        <img src="/assets/img/icons/facebook.svg" alt="Facebook"> Global Study SK
                    </a></li>
                    <li><a class="footer-social" href="https://t.me/globalstudysk" target="_blank">
                        <img src="/assets/img/icons/telegram.svg" alt="Telegram"> @globalstudysk
                    </a></li>
                </ul>
                <a href="#" class="up-btn">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.318191 7.00761L7.23182 0.308326C7.65607 -0.102774 8.34392 -0.102774 8.76818 0.308326L15.6818 7.00761C16.1061 7.41871 16.1061 8.08524 15.6818 8.49634C15.2576 8.90744 14.5697 8.90744 14.1454 8.49634L9.08637 3.59411L9.08637 16.9473C9.08637 17.5287 8.59999 18 8 18C7.40001 18 6.91363 17.5287 6.91363 16.9473L6.91363 3.59411L1.85455 8.49634C1.4303 8.90744 0.742445 8.90744 0.318191 8.49634C-0.106064 8.08524 -0.106064 7.41871 0.318191 7.00761Z" fill="#222A3F"/>
                    </svg>
                </a>
            </div>
            <p class="footer-text mobile">© 2023 Global Study SK</p>
        </div>
    </footer>`
footer.forEach( (el) => {
  return el.innerHTML = footerComponent
}
)

