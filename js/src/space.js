const Space = {
    API_KEY: 'uy1pHXC9UjiFbg3UiUJpMjsk2Q7cftjLdiSQ0m0y',
    ENDPOINT: 'https://api.nasa.gov/planetary/apod?api_key=',
    getPhotoOfTheDay: function() {
        return fetch(`${this.ENDPOINT}${this.API_KEY}`)
            .then(response => {
                return response.json();
            })
    }
}

export {Space}
