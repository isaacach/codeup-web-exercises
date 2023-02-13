"use strict";

// traditional method
// function shout(words) {
//     alert(words.toUpperCase() + '!!!');
// }
// let yellAtMe = prompt("What do you want to yell?");
// shout(yellAtMe);

// arrow function method
const shout = (words) => {
    alert(words.toUpperCase() + '!!!');
}
let yellAtMe = prompt("What do you want to yell?");
shout(yellAtMe);


const highFive = (name1, name2) => {
    let message = `${name1} gives ${name2} an high five!`;
    return message;
}
highFive("isaac", "Kyle");

// one-line arrow function
const isEven = num => num % 2 === 0;

console.log(isEven(35));
console.log(isEven(38));

// IIFE
(() => {

})();


