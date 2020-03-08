import { Space } from './space.js';

var setPhotoHeight = function setPhotoHeight() {
  document.querySelector('.display img').style.height = window.innerHeight + 'px';
};

var renderDisplay = function renderDisplay(data) {
  var imageDisplay = document.querySelector('.display img');
  data.then(function (data) {
    var url = data['hdurl'];
    imageDisplay.src = url;
    setPhotoHeight();
  });
};

window.onload = renderDisplay(Space.getPhotoOfTheDay());