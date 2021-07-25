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
if(window.location.pathname == '/playground/keyboard/') {
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
    });    
}




