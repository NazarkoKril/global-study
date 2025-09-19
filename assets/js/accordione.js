document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      if (isActive) {
        item.classList.remove('active');
      } else {
        accordions.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
        
        setTimeout(() => {
          item.classList.add('active');
        }, 10); }
    });
  });
});