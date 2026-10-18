'use strict';

const instagramUrl = 'https://www.instagram.com/macacosas._/';
const products = [
  { title: 'Una pausa para ti', category: 'VELITAS', description: 'Una idea de velita para regalarte un instante de calma y volver a disfrutar de lo simple.' },
  { title: 'Pequeño gran detalle', category: 'PARA REGALAR', description: 'Una propuesta de regalo pensado para expresar cariño a través de pequeños gestos.' },
  { title: 'Luz de tarde', category: 'VELITAS', description: 'Inspiración para dar calidez a tus espacios con una luz acogedora y un aroma especial.' },
  { title: 'Un momento especial', category: 'MOMENTOS', description: 'Detalles para compartir, celebrar y hacer de lo cotidiano un recuerdo bonito.' },
  { title: 'Con cariño', category: 'PARA REGALAR', description: 'Una selección visual de objetos decorativos con la intención de sorprender.' },
  { title: 'Hecho de momentos', category: 'MOMENTOS', description: 'Una idea inspirada en el oficio y el valor de las cosas creadas con dedicación.' }
];

// Respaldo visual integrado para imágenes externas.
document.querySelectorAll('img[data-fallback]').forEach(img => {
  img.addEventListener('error', () => {
    const fallback = img.dataset.fallback;
    if (img.getAttribute('src') !== fallback) img.src = fallback;
  });
  if (img.complete && img.naturalWidth === 0) img.src = img.dataset.fallback;
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('menu-navegacion');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
}));

const cards = Array.from(document.querySelectorAll('.product-card'));
const filterButtons = document.querySelectorAll('.filter-btn');
const productCount = document.getElementById('product-count');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  cards.forEach(card => {
    const show = filter === 'todos' || card.dataset.category === filter;
    card.hidden = !show;
    if (show) visible += 1;
  });
  productCount.textContent = `Mostrando ${visible} ${visible === 1 ? 'idea' : 'ideas'}`;
}));

const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
function openProduct(card) {
  const product = products[Number(card.dataset.product)];
  if (!product) return;
  const photo = card.querySelector('.product-media img');
  modalImage.src = photo.currentSrc || photo.src;
  modalImage.alt = photo.alt;
  modalImage.onerror = () => { modalImage.onerror = null; modalImage.src = photo.dataset.fallback || ''; };
  modalTitle.textContent = product.title;
  modalCategory.textContent = product.category;
  modalDescription.textContent = product.description;
  if (typeof modal.showModal === 'function') modal.showModal();
}
cards.forEach(card => card.querySelectorAll('.product-media, .arrow-button').forEach(button => button.addEventListener('click', () => openProduct(card))));
document.getElementById('modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  // Solo cierra al hacer clic realmente fuera del rectángulo del diálogo.
  const rect = modal.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close();
});
document.getElementById('current-year').textContent = String(new Date().getFullYear());
