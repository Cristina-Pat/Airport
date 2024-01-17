class Weather {

    #currentWeather;

    constructor(badWeather = 'stormy') {
        this.#currentWeather = this.badWeather;
    }

    getCurrentWeather() {
        return this.#currentWeather;
    }

    // Function to check if the weather is stormy
    isStormy() {
        return this.getCurrentWeather() === 'stormy';
    }

}

export default Weather;
