// ── Загрузка общих компонентов (header, footer) ───────────────
// Работает только при открытии через сервер (GitHub Pages, localhost)

async function loadComponent(selector, url) {
const element = document.querySelector(selector);
if (!element) return;

```
try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Не удалось загрузить ${url}`);
    element.innerHTML = await response.text();
} catch (err) {
    console.error('Ошибка загрузки компонента:', err);
}
```

}

async function initComponents() {
await loadComponent(’#header-placeholder’, ‘./header.html’);
await loadComponent(’#footer-placeholder’, ‘./footer.html’);

```
// Подсвечиваем активный пункт меню по текущему URL
const currentPath = window.location.pathname;

document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = new URL(link.href).pathname;

    const isRoot = currentPath.endsWith('/') || currentPath.endsWith('/index.html');
    const linkIsRoot = linkPath.endsWith('/index.html');

    if (linkPath === currentPath || (isRoot && linkIsRoot)) {
        link.classList.add('nav-link--active');
    }
});
```

}

document.addEventListener(‘DOMContentLoaded’, initComponents);
