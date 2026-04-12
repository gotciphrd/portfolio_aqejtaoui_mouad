// header
const nav_items = document.querySelectorAll('.nav');

nav_items.forEach(item => {
    const originalText = item.textContent;

    item.addEventListener('mouseover', () => {
        item.style.textDecoration = 'underline';
    });

    item.addEventListener('mouseout', () => {
        item.style.textDecoration = 'none';
    });
});