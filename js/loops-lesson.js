"use strict"
//
// // while loop
// let num = 1;
// while (num < 10) {
//     console.log(num);
//     num++;
// }
//
// // do.. while loop
// do {
//     console.log(num);
//     num++;
// } while (num < 10);
//
// // for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

const factorialOf = input => {
    let num = 1;
    for(let i = 1; i <= input; i++) {
        num *= i;
    }
    return num
}
// console.log(factorialOf(9));
//
const buildPyramid = rows => {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= rows - i; j++){
            row += '  ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            row += '* ';
        }
        console.log(row);
    }
}
buildPyramid(5);