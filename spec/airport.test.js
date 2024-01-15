import Airport from "../src/airport";

/* US1: As an airport manager, I can change the maximum number of planes available in the 
airport so that I can adapt the slots as appropriate. */


// Test 1 - the capacity of the airport should changes when setCapacity is called
let testName = 'US1: Test1 - getCapacity() returns the same that was given to setCapacity(newCapacity)';

// Arrange
let newCapacity = 20;
const testNewCapacity = new Airport();
const expectedOutput = testNewCapacity.setCapacity(newCapacity);
let actualOutput, testResult;

// Act 
actualOutput = testNewCapacity.getCapacity();

// Assert
assertEquals = (actualOutput, expectedOutput) => {
    if (actualOutput !== expectedOutput) throw new Error(`Expected ${expectedOutput}, but got ${actualOutput}`);
    return true;
}
testResult = assertEquals(actualOutput, expectedOutput);

// Report 
console.log('${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}');