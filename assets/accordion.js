document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.querySelector('.accordion');
  if (!accordion) return;

  const isMultiple = accordion.dataset.multiple === 'true';
  const items = accordion.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    const arrow = title.querySelector('.accordion-arrow');

    title.addEventListener('click', () => {
      if (!isMultiple) {
        items.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.querySelector('.accordion-content').classList.remove('active');
            otherItem.querySelector('.accordion-arrow').style.transform = 'rotate(0deg)';
          }
        });
      }
      content.classList.toggle('active');
      arrow.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  });
});