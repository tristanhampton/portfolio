
//--- Menu
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
});



//--- JS Keyboard
//--------------------------------------------//

//--- Constants
const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

//--- Functions
const getKey = (keyEvent) => {
    let key = keyEvent.key;
    key = key.toUpperCase();
    return key;
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomKey = () => {
    let i = getRandomNumber(25);
    return keys[i];
}

const getActiveKeyObj = () => {
    return key = document.querySelector('.js-keyboard__key.active');
}

const activateKey = (key) => {
    let activeKey = document.querySelector(`#${key}`);
    activeKey.classList.add('active');
}

//--- Listeners

//-- Page Load
window.addEventListener('load', () => {

    //- Activate a key
    activateKey(getRandomKey());
});

//-- Keypress
document.addEventListener('keydown', function(evt) {
    evt.preventDefault();

    let pressedKey = getKey(evt);
    let activeKey = getActiveKeyObj();

    if(pressedKey == activeKey.id) {
        activeKey.classList.remove('active');
        activeKey.classList.remove('angry')
        activateKey(getRandomKey());
    } else {
        activeKey.classList.add('angry');
    }
});