async function loadComponent(selector, filename) {
    const element = document.querySelector(selector);
    if (!element) return;

    const base = window.location.origin + '/actual0102/';
    const url = base + filename;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Не удалось загрузить ' + url);
        element.innerHTML = await response.text();
    } catch (err) {
        console.error('Ошибка загрузки компонента:', err);
    }
}

async function initComponents() {
    await loadComponent('#header-placeholder', 'header.html');
    await loadComponent('#footer-placeholder', 'footer.html');

    const currentPath = window.location.pathname;

    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        const isRoot = currentPath.endsWith('/') || currentPath.endsWith('/index.html');
        const linkIsRoot = linkPath.endsWith('/index.html');

        if (linkPath === currentPath || (isRoot && linkIsRoot)) {
            link.classList.add('nav-link--active');
        }
    });
}

document.addEventListener('click', function(e) {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobile-menu');
    if (!burger || !menu) return;

    if (e.target.closest('#burger')) {
        burger.classList.toggle('open');
        menu.classList.toggle('open');
    } else if (!e.target.closest('.mobile-menu')) {
        burger.classList.remove('open');
        menu.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', initComponents);
