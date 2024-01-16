
export const assertEquals = (actualOutput, expectedOutput, testName) => {
    if (actualOutput !== expectedOutput) {
        console.log(`${testName} fails - expected ${expectedOutput}, but got ${actualOutput}`);
    } else {
        console.log(`${testName} passes`);
    }
}

export const assertFalse = (actualOutput, testName) => {
    if (actualOutput !== false){
        console.log(`${testName} fails - expected false, but got ${actualOutput}`);
    }else {
        console.log(`${testName} passes`);
    }
}