import Weather from "./weather.js";

class Airport {

    #capacity;
    airportPlanes = [];
    weather = new Weather();

    constructor(capacity = 0) {
        // a negative input value set the capacity to 0 
        this.#capacity < 0 ? this.#capacity = 0 : this.#capacity = capacity;
    }

    getCapacity() {
        return this.#capacity;
    }


    setCapacity(newCapacity) {
        this.#capacity = newCapacity;
    }

    setWeather(newWeather) {
        this.weather.setCurrentWeather(newWeather);
    }
    getWeather(){
        this.weather;
    }

    isFull() {
        return this.airportPlanes.length >= this.getCapacity();
    }

    atAirport(plane) {
        return this.airportPlanes.includes(plane);
    }

    instructToLand(plane) {
        return !this.isFull() && !this.atAirport(plane);
    }

    instructToTakeOff(plane) {
        return this.atAirport(plane);
    }

    landPlane(plane) {
        // Check if it's safe to land based on other conditions
        if (this.instructToLand(plane) && !(this.weather.isStormy())) {
            this.airportPlanes.push(plane);
            return true;
        }

        return false;
    }

    takeOffPlane(plane) {
        // Check if it's safe to take off based on other conditions
        if (this.instructToTakeOff(plane) && !(this.weather.isStormy())) {
            const index = this.airportPlanes.indexOf(plane);
            if (index !== -1) {
                this.airportPlanes.splice(index, 1);
                return true;
            }
        }

        return false;
    }
}
export default Airport;