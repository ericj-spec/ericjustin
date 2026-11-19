// Search: filters the drink cards by name
const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const cards = document.querySelectorAll('.drink');
const noResults = document.getElementById('noResults');

function filterDrinks() {
  const q = input.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = card.dataset.name.includes(q);
    card.hidden = !match;
    if (match) visible++;
  });
  noResults.hidden = visible !== 0;
}
input.addEventListener('input', filterDrinks);
form.addEventListener('submit', e => { e.preventDefault(); filterDrinks(); });

// Menu image opens in a lightbox
const lightbox = document.getElementById('lightbox');
document.getElementById('menuBtn').addEventListener('click', () => { lightbox.hidden = false; });
lightbox.addEventListener('click', () => { lightbox.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.hidden = true; });

// Login placeholder (connect to your real login page / backend)
document.getElementById('loginBtn').addEventListener('click', e => {
  e.preventDefault();
  alert('Login page coming soon.');
});
