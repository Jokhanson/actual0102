document.addEventListener(‘DOMContentLoaded’, function () {

```
// ── Прокрутка слайдера коллекций ──────────────────────────
const scrollLeft  = document.querySelector('.scroll-button.left');
const scrollRight = document.querySelector('.scroll-button.right');
const portfolioGrid = document.querySelector('.portfolio-grid');

if (scrollLeft && portfolioGrid) {
    scrollLeft.addEventListener('click', () => {
        portfolioGrid.scrollBy({ left: -400, behavior: 'smooth' });
    });
}

if (scrollRight && portfolioGrid) {
    scrollRight.addEventListener('click', () => {
        portfolioGrid.scrollBy({ left: 400, behavior: 'smooth' });
    });
}


// ── Модальное окно фотобиблиотеки ─────────────────────────
const modal        = document.querySelector('.modal');
const modalImg     = document.getElementById('modal-img');
const closeBtn     = document.querySelector('.close');
const prevBtn      = document.querySelector('.prev');
const nextBtn      = document.querySelector('.next');
const galleryItems = document.querySelectorAll('.photolibrary-item img');

// Если модального окна или фото на странице нет — выходим
if (!modal || !modalImg || !galleryItems.length) return;

let currentIndex = 0;

function openModal() {
    modalImg.src = galleryItems[currentIndex].src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
}

// Открытие по клику на фото
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openModal();
    });
});

// Кнопки закрытия и навигации
if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (prevBtn)  prevBtn.addEventListener('click', showPrev);
if (nextBtn)  nextBtn.addEventListener('click', showNext);

// Клик на фон закрывает модальное окно
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Клавиатурная навигация
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape')     closeModal();
});
```

});
