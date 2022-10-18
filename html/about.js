const menu = document.querySelector('.menu-button');
const popUp = document.querySelector('.pop');
const lecture = document.querySelector('.lecture');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    popUp.classList.toggle('active');
});

document.querySelectorAll('.menu-links').forEach((i) => i.addEventListener('click', () => {
    menu.classList.remove('active');
    popUp.classList.remove('active');
}));