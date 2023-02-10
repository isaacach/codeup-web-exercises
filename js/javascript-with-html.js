"use strict";

console.log("Hello, World!");

alert("Good morning from JavaScript!");

let didConfirm = confirm("Would you like to confirm?");
if (didConfirm){
    didConfirm = "Yes"
} else{
    "Cancel"
}
console.log(`The user clicked ${didConfirm}`);

let username = prompt("What is your name?");
console.log(`The user's name is ${username}`);