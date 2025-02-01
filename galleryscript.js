document.querySelector('.scroll-button.left').addEventListener('click', () => {
    document.querySelector('.portfolio-grid').scrollBy({
        left: -400,
        behavior: 'smooth'
    });
});

document.querySelector('.scroll-button.right').addEventListener('click', () => {
    document.querySelector('.portfolio-grid').scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});