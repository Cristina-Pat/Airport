import Airport from "../src/airport.js";
import { assertEquals } from "./test.framework.js";

/* US1: As an airport manager, I can change the maximum number of planes available in the 
airport so that I can adapt the slots as appropriate. */


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

// Assert
assertEquals(actualCapacity, expectedCapacity,testName);