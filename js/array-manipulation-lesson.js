"use strict";

let daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

daysOfTheWeek.unshift('Sunday'); // adds Sunday to the beginning of the array
daysOfTheWeek.push('Friday', 'Saturday'); // adds Friday and Saturday to the end of the array

console.log(daysOfTheWeek);


let todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];

let removedItem = todoList.pop(); // removes the last item of the array
console.log(`Completed items: ${removedItem}`);
let doneItem = todoList.shift(); // removes the first item in the array
console.log(`Done item: ${doneItem}`);


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
let index = colors.indexOf('blue'); // 4
index = colors.indexOf('red'); // 0
index = colors.lastIndexOf('red') // 7


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let slice = colors.slice(2, 4); // ['yellow', 'green']


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let removed = colors.splice(2, 1);
console.log(colors);
console.log(removed);


