
export const assertEquals = (actualOutput, expectedOutput, testName) => {
    if (actualOutput !== expectedOutput) {
        console.log(`${testName} fails`);
        throw new Error(`Expected ${expectedOutput}, but got ${actualOutput}`);
    }
    console.log(`${testName} passes`);
    return true;
}