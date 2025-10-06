document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Закриваємо всі інші
      accordions.forEach(acc => {
        acc.classList.remove('active');
        acc.querySelector('.accordion-content').style.maxHeight = null;
      });

      // Відкриваємо тільки поточний
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
