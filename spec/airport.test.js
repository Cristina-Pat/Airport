import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import Weather from "../src/weather.js";

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
testName = 'US2: Test2 - should return false if the airport is full and the plane is not at the airport';

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

// Cleanup
someAirport.setCapacity(0);
someAirport.airportPlanes = [];

/* Test 3 - A plane can't be instructed to land at an airport if the airport is not full (isFull() -> True) 
but the plane is at that airport (atAirport(@plane) -> True).*/
testName = 'US2: Test3 - should return false if the airport is not full and the plane is already at the airport';

// Arrange
plane = new Plane('456F');
plane2 = new Plane('789E');
newCapacity = 2;

// Act
someAirport.airportPlanes.push(plane2);
someAirport.setCapacity(newCapacity);
actualOutput = someAirport.instructToLand(plane2);

// Assert and Report
assertFalse(actualOutput,testName);

// Cleanup
someAirport.setCapacity(0);
someAirport.airportPlanes = [];

/*Test 4 - A plane can't be instructed to land at an airport if the airport is full (isFull() -> True) 
and the plane is at that airport (atAirport(@plane) -> True).
 */
testName = 'US2: Test4 - should return false if the airport is full and the plane is already at the airport';

// Arrange
plane = new Plane('456F');
plane2 = new Plane('789E');
newCapacity = 1;

// Act
someAirport.airportPlanes.push(plane2);
someAirport.setCapacity(newCapacity);
actualOutput = someAirport.instructToLand(plane2);

// Assert and Report
assertFalse(actualOutput,testName);

// Cleanup
someAirport.setCapacity(0);
someAirport.airportPlanes = [];

/*
US3 - As a traffic controller in the airport, I want to be able to instruct a plane to take off from 
the airport if the plane is currently at the airport, so there are no errors.
 */
//Test 1 - A plane can be instructed to take off from the airport if the plane is at that airport
testName = 'US3: Test1 - should return true if the plane is at the airport';

// Arrange
plane = new Plane('907F');
expectedOutput = true;

// Act
someAirport.airportPlanes.push(plane);
actualOutput = someAirport.instructToTakeOff(plane);

// Assert and Report
assertEquals(actualOutput, expectedOutput, testName);

// Cleanup
someAirport.airportPlanes = [];

//Test 2 - A plane can't be instructed to take off from the airport if the plane is not at that airport (atAirport(@plane) -> False).
testName = 'US3: Test2 - should return false if the plane is not at the airport';

// Arrange
plane = new Plane('907F');
plane2 = new Plane ('123R')

// Act
someAirport.airportPlanes.push(plane);
actualOutput = someAirport.instructToTakeOff(plane2);

// Assert and Report
assertFalse(actualOutput, testName);

// Cleanup
someAirport.airportPlanes = [];

/*
US4 - As a pilot, I want the system to prevent me from landing the plane when the weather is stormy, so that the landing is safe.
 */

// Test 1 - The system should prevent the plane from landing, returning a status indicating stormy weather
testName = 'US4: Test1 - should return false if the weather is stormy';

// Arrange
const airport = new Airport();
airport.setCapacity(10);
airport.setWeather('stormy');
let plane3 = new Plane ('127R');
airport.instructToLand(plane3);

// Act
const result = airport.landPlane(plane3);

// Assert and Report
assertFalse(result, testName);

/*
US5 - As a pilot, I want the system to prevent me from taking off the plane when the weather is stormy, so that the takeoff is safe.
 */

// Test 1 - The system should prevent the plane from taking off, returning a status indicating stormy weather (false).
testName = 'US5: Test1 - should return false if the weather is stormy';

// Arrange
const airport2 = new Airport();
airport2.setCapacity(10);
airport2.setWeather('stormy');
let plane4 = new Plane ('137O');
airport2.airportPlanes.push(plane4);

// Act
const result2 = airport2.takeOffPlane(plane4);

// Assert and Report
assertFalse(result2, testName);

