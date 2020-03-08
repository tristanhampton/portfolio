var Space = {
  API_KEY: 'uy1pHXC9UjiFbg3UiUJpMjsk2Q7cftjLdiSQ0m0y',
  ENDPOINT: 'https://api.nasa.gov/planetary/apod?api_key=',
  getPhotoOfTheDay: function getPhotoOfTheDay() {
    return fetch("".concat(this.ENDPOINT).concat(this.API_KEY)).then(function (response) {
      return response.json();
    });
  }
};
export { Space };