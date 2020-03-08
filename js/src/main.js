import {Space} from './space.js';

const setPhotoHeight = () => {
    document.querySelector('.display img').style.height = window.innerHeight+'px';
}

const renderDisplay = (data) => {
    let imageDisplay = document.querySelector('.display img');
    data.then(data => {
        let url = data['hdurl'];
        imageDisplay.src = url;
        setPhotoHeight();
    })
}


window.onload = renderDisplay(Space.getPhotoOfTheDay());