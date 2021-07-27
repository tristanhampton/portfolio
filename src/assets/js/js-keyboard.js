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

window.addEventListener('load', () => {
    activateKey(getRandomKey());
});


document.addEventListener('keydown', function(evt) {
    updateKeyboardGame(evt);
});


document.querySelector('.js-keybaord').addEventListener('click', function(evt) {
    updateKeyboardGame(evt);
});    