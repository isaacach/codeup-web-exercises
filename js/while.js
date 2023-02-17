"use strict"
let counter = 2
while (counter <= 65536) {
    console.log(counter);
    counter *= 2;
}

// An ice cream seller can't go home until she sells all of her cones. ' +
// 'First write enough code that generates a random number between 50 and 100 ' +
// 'representing the amount of cones to sell before you start your loop. ' +
// 'Inside of the loop your code should generate another random number between 1 and 5, ' +
// 'simulating the amount of cones being bought by her clients. Use a do-while loop to ' +
// 'log to the console the amount of cones sold to each person. ' +
// 'The below code shows how to get the random numbers for this exercise.

// let allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// console.log(allCones);
//
// do {
//     let randomCones = Math.floor(Math.random() * 5) + 1;
//     if (allCones > 0) {
//         console.log(`${randomCones} sold, ${allCones} left`);
//     } else {
//         console.log(`Cannot sell you ${randomCones} cones if I only have ${allCones}`);
//     }
//     allCones -= randomCones;
// } while (allCones > 0);

let conesInventory = Math.floor(Math.random() * 50) + 50;;

do {
    let conesWanted = Math.floor(Math.random() * 5) + 1;;
    if (conesWanted > conesInventory) {
        console.log(`Cannot sell you ${conesWanted}, I only have ${conesInventory}`);
        console.log(`${conesInventory} sold...`);
        conesInventory = 0;
    } else {
        console.log(`${conesWanted} sold...`);
        conesInventory = conesInventory - conesWanted;
    }
    console.log(`${conesInventory} left`);

} while(conesInventory > 0);
console.log("Yay! I've sold them all!");
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones