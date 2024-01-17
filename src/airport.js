class Airport {

    #capacity;
    airportPlanes = [];

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
}
export default Airport;