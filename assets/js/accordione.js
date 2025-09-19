document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content')
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        accordions.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
        
        setTimeout(() => {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + "px";
        }, 10); }
    });
  });
});