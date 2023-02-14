"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// const analyzeColor = (color) => {
//     if (color === 'red') {
//         return 'Clifford is red';
//     } else if (color === 'green') {
//         return 'Grass is green';
//     } else if (color === 'orange') {
//         return 'Orange is the color of pumpkins';
//     } else {
//         return `I don't know anything about ${color}`;
//     }
// }
// console.log(analyzeColor('green'));
// console.log(analyzeColor('red'));
// console.log(analyzeColor('yellow'));

// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// const analyzeColor = (color) => {
//     switch(color.toLowerCase()) {
//         case 'green':
//             return 'Grass is green';
//         case 'red':
//             return 'Clifford is red';
//         case 'orange':
//             return 'Orange is the color of pumpkins';
//         default:
//             return `I don't know anything about ${color}`;
//     }
// }
// console.log(analyzeColor('green'));
// console.log(analyzeColor('red'));
// console.log(analyzeColor('yellow'));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
 // const prefColor = prompt('type in a color');
 // alert(analyzeColor(prefColor.toLowerCase()));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// const calculateTotal = (luckyNum, prePrice) => {
//    let price = 0;
//     switch (luckyNum) {
//         case 0:
//            return prePrice;
//         case 1:
//             return prePrice * .9;
//         case 2:
//             return prePrice * .75;
//         case 3:
//             return prePrice * .65
//         case 4:
//             return prePrice * .5;
//         case 5:
//             return  0;
//         default:
//             alert('Please enter a number from 0 to 5');
//    }
//
// }



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// const billCost = parseFloat(prompt("How much is the total cost of the bill?"));
// alert(`Your bill total prior to the discount => ${billCost.toLocaleString("en-US", {style:"currency", currency:"USD"})}
// Your lucky number => ${luckyNumber}
// Your discounted price => ${calculateTotal(luckyNumber, billCost).toLocaleString("en-US", {style:"currency", currency:"USD"})}`);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//
const evenOrOdd = (number) => parseFloat(number) % 2 === 0 ? `Even` : `Odd`;
const plusOneHundred = (number) => parseFloat(number) + 100;
const positiveOrNegative = (number) => {
        if (number > 0) {
            return `positive`;
        } else if (number < 0) {
            return `Negative`;
        } else {
            return `Neither - zero`;
        }
    }
let numberAsk = confirm('Would you like to enter a number?');
let userNumber;
if (numberAsk) {
    userNumber = prompt('Please type a number');
    if (isNaN(parseFloat(userNumber))) {
        alert('Sorry, we only accept numbers');
    } else {
        alert(`Your number is ${evenOrOdd(userNumber)}`);
        alert(`Your number plus 100 is ${plusOneHundred(userNumber)}`);
        alert(`Your number is ${positiveOrNegative(userNumber)}`);
    }
} else {
    alert('Okay, have a nice day');
}



// Practice /////

// #### Create a function called `getToDestination` which will help determine how
// a person can get to their destination!
//
//     It will accept 4 arguments and the parameter names are:
//
//     - age - the age of the rider
// - isInsured - a boolean telling the function if the rider has insurance
// - hasCar - a boolean describing if the rider has a car
// - canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
//
// ---
//     1. If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// 2. If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare,
// then they call up a rideshare service
// 3. If the rider meets none of the above, they should call a friend for a ride!
//
//     This `getToDestination` should not return any value, but rather console log based on the conditions met.
//
// const getToDestination = (age, isInsured, hasCar, canGetRideshare) => {
//     if (age >= 16 && isInsured && hasCar) {
//         console.log("The rider may use their own vehicle");
//     } else if ((age < 16 || !isInsured|| !hasCar) && canGetRideshare) {
//         console.log("The rider may get a rideshare");
//     } else {
//         console.log("Call your friend for a ride");
//     }
// }
// getToDestination(17, true, true, true);
// getToDestination(13, false, false, true);
// getToDestination(13, true, true, false);
// getToDestination(17, false, false, false);
//
// // #### getToDestination, part 2
// //
// // - Create a function called canGetRideshare() which will *RETURN* a boolean
// // - It will determine if there are drivers nearby and the person has enough money for the ride
// // - Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// // - Call canGetRideshare() in the else if *after* !isLegalDriver &&...
// // - Be sure to log to the user if they can or cannot get a rideshare
// //
// // BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
// // - Consider this: What if mileage determined:
// //     - If the rider has enough funds?
// //     - If there is a driver close enough to service the rider?
//
// const canGetRideshare = (driverNearby, enoughMoney) => driverNearby && enoughMoney;