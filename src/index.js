// Make a Plane
// Make an Airport 
// Change the Airport maximum capacity
// Show an Airport with no slots available cannot instruct a Plane to land
// Show an airplane cannot land if the weather at the airport is stormy

import Plane from "./plane.js";
import Airport from "./airport.js";

console.log('Create a Plane');
let plane = new Plane("706T");
console.log(plane.getId());
console.log('===============')

console.log('Create an Airport');
let airport = new Airport();
console.log(airport);
console.log('The airport is empty:');
console.log(`it has ${airport.getCapacity()} capacity and there are ${airport.airportPlanes.length} planes`);
console.log('===============')

console.log('Change the airport capacity');
airport.setCapacity(1);
console.log(`The new maximum capacity of the airport is ${airport.getCapacity()}.`)
console.log('===============')

console.log('Show an Airport with no slots available cannot instruct a Plane to land')
airport.airportPlanes.push(plane);
let plane2 = new Plane("707T");
let result = airport.instructToLand(plane2);
console.log(`The maximum capacity of the airport is ${airport.getCapacity()}.`)
console.log(`There are ${airport.airportPlanes.length} plane/planes at the airport.`)
console.log(`Can a plane that is not at the airport and the airport capacity is at maximum be instructed to land? - ${result}.`)
console.log('===============')

console.log('Show an airplane cannot land if the weather at the airport is stormy')
const airport3 = new Airport();
let plane3 = new Plane ('127R');
airport3.setCapacity(10);
airport3.instructToLand(plane3);
let weatherAirport3 = airport3.setWeather('stormy');
const resultStormy = airport.landPlane(plane3);
console.log(`If is ${airport3.getWeather()} in the airport, can the plane land? - ${resultStormy} `);
