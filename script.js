document.querySelector('.gallery-scroll').addEventListener('wheel', function (event) {
    if (event.deltaY !== 0) {
        // Прокручиваем контейнер вправо или влево в зависимости от направления колесика
        this.scrollBy({
            left: event.deltaY < 0 ? -250 : 250, // Скорость прокрутки
            behavior: 'smooth' // Плавная прокрутка
        });
        event.preventDefault(); // Отменяем стандартное поведение прокрутки
    }
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('expanded'); // Добавляем класс expanded при наведении
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");
  gallery.style.transform = "translateX(0)"; // Возвращаем галерею на место
});