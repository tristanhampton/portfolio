
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

//--- Variables
const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let activeKey;
let timer;

//--- Functions
const getKey = (keyEvent) => {
    if(keyEvent.type == 'click') {
        let key = keyEvent.target.id;
        key = key.toUpperCase();
        return key;
    }

    if(keyEvent.type == 'keydown') {
        let key = keyEvent.key;
        key = key.toUpperCase();
        return key;
    }
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomKey = () => {
    return keys[getRandomNumber(25)];
}

const getActiveKeyObj = () => {
    return key = document.querySelector('.js-keyboard__key.active');
}

const activateKey = (key) => {
    activeKey = document.querySelector(`#${key}`);
    activeKey.classList.add('active');
}

const startTimer = () => {
    timer = setTimeout(function() {
        activeKey.classList.add('angry');
    }, 2500);
}

const updateKeyboardGame = (evt) => {
    evt.preventDefault();

    let pressedKey = getKey(evt);

    if(pressedKey == activeKey.id) {
        //- Reset key
        activeKey.classList.remove('active');
        activeKey.classList.remove('angry');
        clearTimeout(timer);

        //- Start a new key
        activateKey(getRandomKey());
        startTimer();
        

    } else {
        activeKey.classList.add('angry');
    }
}

//--- Listeners

//-- Page Load
window.addEventListener('load', () => {

    //- Activate a key
    activateKey(getRandomKey());
});

//-- Keypress
document.addEventListener('keydown', function(evt) {
    updateKeyboardGame(evt);
});

//-- Click
document.addEventListener('click', function(evt) {
    updateKeyboardGame(evt);
})




