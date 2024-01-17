class Plane {

    #Id;

    constructor(id) {
        this.#Id = id;
    }

    getId() {
        return this.#Id;
    }

}
export default Plane;