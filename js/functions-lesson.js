"use strict";

// // traditional method
// // function shout(words) {
// //     alert(words.toUpperCase() + '!!!');
// // }
// // let yellAtMe = prompt("What do you want to yell?");
// // shout(yellAtMe);
//
// // arrow function method
// const shout = (words) => {
//     alert(words.toUpperCase() + '!!!');
// }
// let yellAtMe = prompt("What do you want to yell?");
// shout(yellAtMe);
//
//
// const highFive = (name1, name2) => {
//     let message = `${name1} gives ${name2} an high five!`;
//     return message;
// }
// highFive("isaac", "Kyle");
//
// // one-line arrow function
// const isEven = num => num % 2 === 0;
//
// console.log(isEven(35));
// console.log(isEven(38));
//
// // IIFE
// (() => {
//
// })();

// function to reverse a string
const reversed = (string) => string.split('').reverse().join('');
console.log(reversed('Isaac'));

// function that accepts a first and last name and returns the full name
const fullName = (firstName, lastName) => `The full name of this person is ${firstName} ${lastName}`;
console.log(fullName('Isaac', 'Achenbach'));

/* Write a function that accepts a number and returns it negative.
[if the number is already negative it should return that number unchanged, and zero should be unchanged] */
// const negativeNumber = (num) => {
//     if (num <= 0) {
//         return num;
//     } else {
//         return -num;
//     }
// }
const negativeNumber = (num) => num <= 0 ? num : -num;

console.log(negativeNumber(-1));
console.log(negativeNumber(0));
console.log(negativeNumber(4));

// Given a month as an integer from 1 to 12, return to which quarter of the year it
// belongs as an integer number.
const yearQuarter = (month) => {
    if (1 <= month && month <= 3) {
        return 'First Quarter';
    } else if (4 <= month && month <= 6) {
        return 'Second Quarter';
    } else if (7 <= month && month <= 9) {
        return 'Third Quarter';
    }  else if (10 <= month && month <= 12) {
        return 'Fourth Quarter';
    } else {
        return 'That is not a number of a month';
    }
}
console.log(yearQuarter(2));
console.log(yearQuarter(4));
console.log(yearQuarter(7));
console.log(yearQuarter(11));
console.log(yearQuarter(32));

