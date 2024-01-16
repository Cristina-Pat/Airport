class Airport {

    #capacity;
    airportPlanes =[];

    constructor(capacity = 0 ){
        // a negative input value set the capacity to 0 
        this.#capacity < 0 ? this.#capacity = 0 : this.#capacity = this.#capacity;
    }

    getCapacity(){
        return this.#capacity;
    }

    setCapacity(newCapacity){
        this.#capacity = newCapacity;
    }

    instructToLand(plane){
        return ((this.airportPlanes.length < this.getCapacity()) && !this.airportPlanes.includes(plane));
    }
}
export default Airport;