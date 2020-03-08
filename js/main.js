let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
let header = document.querySelector('header')

const handleMenu = () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('transform')
}

header.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('hamburger') || evt.target.nodeName == 'A'){
        handleMenu();
    }
})