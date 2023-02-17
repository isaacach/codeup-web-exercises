"use strict"

const showMultiplicationTable = num => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
// showMultiplicationTable(7);

const randomNumber = () => Math.floor(Math.random() * (200 - 20 + 1) + 20);

const randomOddOrEven = num => {
    for (let i = 1; i <= num; i++) {
        let num = randomNumber()
        let oddEven = num % 2 === 0 ? 'even' : 'odd';
        console.log(`${num} is ${oddEven}`);
    }
}
// randomOddOrEven(10);

const numberPyramid = num => {
    for (let i = 1; i <= num; i++) {
        console.log(String(i).repeat(i));
    }
}
// numberPyramid(9);

const countDown = () => {
    for (let i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}
countDown();

