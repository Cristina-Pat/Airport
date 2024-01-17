// Make a Plane
// Make an Airport 
// Change the Airport maximum capacity
// Show an Airport with no slots available cannot instruct a Plane to land

import Plane from "./plane.js";
import Airport from "./airport.js";

console.log('Create a Plane');
let plane = new Plane ("706T")
console.log(plane);
console.log('===============')

console.log('Create an Airport');
let airport = new Airport();
console.log(airport);
console.log('The airport is empty:');
console.log(`it has ${airport.getCapacity} capacity and there are no planes - ${airport.airportPlanes}`);
console.log('===============')

console.log('Change the airport capacity');
airport.setCapacity(1);
console.log(`The new maximum capacity of the airport is ${airport.getCapacity}.`)
console.log('===============')

console.log('Show an Airport with no slots available cannot instruct a Plane to land')
airport.airportPlanes.push(plane);
console.log('A plane is at the airport, and the capacity it at maximum.')
let 


