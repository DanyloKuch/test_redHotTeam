document.addEventListener('DOMContentLoaded', () => {
  const accordion = document.querySelector('.accordion');
  if (!accordion) return;

  const isMultiple = accordion.dataset.multiple === 'true';
  const items = accordion.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', () => {
      if (!isMultiple) {
        // Закриваємо всі інші секції, якщо multiple = false
        items.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.querySelector('.accordion-content').classList.remove('active');
          }
        });
      }
      // Перемикаємо активний стан поточної секції
      content.classList.toggle('active');
    });
  });
});