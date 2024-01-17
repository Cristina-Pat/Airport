
export const assertEquals = (actualOutput, expectedOutput, testName) => {
    if (actualOutput !== expectedOutput) {
        console.log("\x1b[31m%s\x1b[0m", `\t${testName} fails - expected false, but got ${actualOutput}`);
    } else {
        console.log("\x1b[32m%s\x1b[0m", `\t${testName} passes`);
    }
}

export const assertFalse = (actualOutput, testName) => {
    if (actualOutput !== false){
        console.log("\x1b[31m%s\x1b[0m", `\t${testName} fails - expected false, but got ${actualOutput}`);
    }else {
        console.log("\x1b[32m%s\x1b[0m", `\t${testName} passes`);
    }
}