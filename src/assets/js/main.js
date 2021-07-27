//--- Menu
const menuToggle = document.querySelector('.header__menu-toggle');
const menuToggleClose = document.querySelector('.site__nav button.close');
const navLinks = document.querySelectorAll('.site__nav a');
const nav = document.querySelector('.site__nav');
const header = document.querySelector('.site__header')

const openMenu = () => {
    nav.classList.add('active');
}

const closeMenu = () => {
    nav.classList.remove('active');
}

menuToggle.addEventListener('click', function() {
    openMenu();
});

menuToggleClose.addEventListener('click', function() {
    closeMenu();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => closeMenu());
});

header.addEventListener('click', (evt) => {
    if (evt.target == menuToggle){
        openMenu();
    }

    if(evt.target == menuToggleClose || evt.target.nodeName == 'A') {
        closeMenu();
    }
});