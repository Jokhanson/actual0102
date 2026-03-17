document.addEventListener('DOMContentLoaded', function () {

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
        }, { passive: false });
    }

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => item.classList.add('expanded'));
        item.addEventListener('mouseleave', () => item.classList.remove('expanded'));
    });

    const gallery = document.querySelector('.gallery');
    if (gallery) {
        gallery.style.transform = 'translateX(0)';
    }

});
