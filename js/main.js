function headerShrink() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
}

function menu() {
    const btn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const closeBtn = document.querySelector('.close-btn');

    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    menu();
    headerShrink();
});