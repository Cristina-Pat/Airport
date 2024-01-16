import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import { assertEquals, assertFalse } from "./test.framework.js";

/* 
US1: As an airport manager, I can change the maximum number of planes available in the 
airport so that I can adapt the slots as appropriate. 
*/


// Test 1 - the capacity of the airport should changes when setCapacity is called
let testName = 'US1: Test1 - getCapacity() returns the same value that was given to setCapacity(newCapacity)';

// Arrange
let newCapacity = 20;
const someAirport = new Airport();
const expectedCapacity = newCapacity;
let actualCapacity;

// Act 
someAirport.setCapacity(newCapacity);
actualCapacity = someAirport.getCapacity();

// Assert and Report
assertEquals(actualCapacity, expectedCapacity,testName);

// Cleanup
someAirport.setCapacity(0);
testName = '';

/*
US2 - As a traffic controller in the airport, I want to be able to instruct a plane to land 
at an airport if the airport is not full and the plane is not already at the airport, so there are no errors.
 */

// Test 1 - a plane can be instructed to land if the airport is not full and the plane is not already at the airport
testName = 'US2: Test1 - should return true if the airport is not full and the plane is not already at the airport';

// Arrange
let plane = new Plane('372F');
let plane2 = new Plane('473E');
let expectedOutput = true;
newCapacity = 2;

// Act
someAirport.airportPlanes.push(plane2);
someAirport.setCapacity(newCapacity);
let actualOutput = someAirport.instructToLand(plane);

// Assert and Report
assertEquals(actualOutput, expectedOutput,testName);

// Cleanup
someAirport.setCapacity(0);
someAirport.airportPlanes = [];

/*Test 2 - A plane can't be instructed to land at an airport if the airport is full (isFull() -> True) 
and the plane is not at that airport (atAirport(@plane) -> False).*/
testName = 'US2: Test2 - should return false if the airport is full and the plane is not already at the airport';

// Arrange
plane = new Plane('456F');
plane2 = new Plane('789E');
newCapacity = 1;

// Act
someAirport.airportPlanes.push(plane2);
someAirport.setCapacity(newCapacity);
actualOutput = someAirport.instructToLand(plane);

// Assert and Report
assertFalse(actualOutput,testName);
