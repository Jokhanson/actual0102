document.addEventListener(‘DOMContentLoaded’, function () {

```
// ── Горизонтальная прокрутка галереи колесом мыши ─────────
// Элемент есть только на index.html, поэтому проверяем наличие
const galleryScroll = document.querySelector('.gallery-scroll');
if (galleryScroll) {
    galleryScroll.addEventListener('wheel', function (event) {
        if (event.deltaY !== 0) {
            this.scrollBy({
                left: event.deltaY < 0 ? -250 : 250,
                behavior: 'smooth'
            });
            event.preventDefault();
        }
    }, { passive: false }); // passive: false нужен для preventDefault
}


// ── Расширение элементов галереи при наведении ────────────
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('expanded');
    });
    item.addEventListener('mouseleave', () => {
        item.classList.remove('expanded'); // убираем expanded при уходе мыши
    });
});


// ── Начальная позиция галереи ─────────────────────────────
const gallery = document.querySelector('.gallery');
if (gallery) {
    gallery.style.transform = 'translateX(0)';
}
```

});
