document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    const uiButton = document.querySelector('.UIButton');
    uiButton.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    uiButton.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});
