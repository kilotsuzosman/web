document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const cards = document.querySelectorAll('.service-card, .social-card, .hero-card');
  cards.forEach((card, index) => {
    card.animate(
      [
        { opacity: 0, transform: 'translateY(16px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 700,
        delay: index * 80,
        fill: 'forwards'
      }
    );
  });
});
