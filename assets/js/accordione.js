document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(item => {
    const header = item.querySelector(':scope > .accordion-header');
    const content = item.querySelector(':scope > .accordion-content');
    header.addEventListener('click', () => {
      const parent = item.parentElement; 
      const siblings = parent.querySelectorAll(':scope > .accordion'); 
      const isActive = item.classList.contains('active');
      
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        siblings.forEach(sibling => {
          sibling.classList.remove('active');
          const siblingContent = sibling.querySelector(':scope > .accordion-content');
          if (siblingContent) siblingContent.style.maxHeight = null;
        });
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
      }
      
      setTimeout(() => {
        updateParentAccordions(item);
      }, 20);
    });
  });
  
  function updateParentAccordions(element) {
    let currentElement = element.parentElement;
    
    while (currentElement) {
      const parentAccordion = currentElement.closest('.accordion');
      
      if (!parentAccordion) break;
      
      const content = parentAccordion.querySelector(':scope > .accordion-content');
      if (content && parentAccordion.classList.contains('active')) {
        const currentMaxHeight = content.style.maxHeight;
        content.style.maxHeight = 'none';
        
        requestAnimationFrame(() => {
          content.style.maxHeight = currentMaxHeight + element.scrollHeight + "px";
        });
      }
      
      currentElement = parentAccordion.parentElement;
    }
  }
});