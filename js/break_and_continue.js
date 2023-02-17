"use strict"
let userNum;
    do {
        userNum = prompt('Type in an odd number between 1 and 50');
        if (userNum % 2 !== 0 && !isNaN(userNum)) {
            break;
        }
    } while (!isNaN(parseFloat(userNum)) || userNum % 2 !== 0);

    for (let i = 1; i <= 50; i += 2){
        if (i !== Number(userNum)) {
            console.log(`Here is an odd number: ${i}`);
        }
        if (i === Number(userNum)) {
            console.log(`Yikes! Skipping number ${userNum}!`);
            continue;
        }
}

