class Weather {

    #currentWeather;

    constructor(startingWeather = 'sunny') {
        this.#currentWeather = startingWeather;
    }

    getCurrentWeather() {
        return this.#currentWeather;
    }

    setCurrentWeather(newWeather) {
        this.#currentWeather = newWeather;
    } 

    // Function to check if the weather is stormy
    isStormy() {
        return this.getCurrentWeather() === 'stormy';
    }

}

export default Weather;
