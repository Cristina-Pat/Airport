class Airport {

    #capacity;

    constructor(capacity = 0 ){
        this.#capacity < 0 ? this.#capacity = 0 : this.#capacity = this.#capacity;
    }

    getCapacity(){
        return this.#capacity;
    }

    setCapacity(newCapacity){
        this.#capacity = newCapacity;
    }
}
export default Airport;