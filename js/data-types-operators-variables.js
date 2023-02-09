///////// 1 ////////
/* For each of the following code blocks,
 read the code and predict what the result of evaluating it would be,
 then execute the statement(s) in the Chrome console.
 */
let a = 1;
let b = a++;
let c = ++a;
// what is the value of a, b, and c?
// a = 1, b = 1, c = 2

let d = "hello";
let e = false;

d++; // NaN
e++; // 1

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2; // NaN

let price = 2.7;
price.toFixed(2); // 2.70

let price = "2.7";
price.toFixed(2); // 2.70

isNaN(0) // false

isNaN(1) // false

isNaN("") // false

isNaN("string") // true

isNaN("0") //false

isNaN("1") // false

isNaN("3.145") // false

isNaN(Number.MAX_VALUE) // false

isNaN(Infinity) // false

isNaN("true") // true

isNaN(true) // false

isNaN("false") // true

isNaN(false) // false

// to illustrate why the isNaN() function is needed:
NaN == NaN // false

!true // false

!false // true

!!true // true

!!false // false

!!0 // false

!!-0 // false

!!1 // true

!!-1 // true

!!0.1 // true

!!"hello" // true

!!"" // false

!!'' // false

!!"false" // true

!!"0" // true

///////// 2 /////////
let sample = "Hello Codeup";
// Use .length to find the number of characters in the string.
let sampleLength = sample.length; // 12

// Try to make the sample string all upper or all lower case.
sample.toUpperCase(); // "HELLO CODEUP"
sample.toLowerCase(); // "hello codeup"

// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample += " Students";
console.log(sample); // "Hello Codeup Students"

// Replace "Students" with "Class".
sample = sample.replace("Students", "Class");
console.log(sample); // "Hello Codeup Class"

// Find the index of "c" using .indexOf(). What do you observe?
console.log(sample.indexOf("c")); // -1

// Find the index of "C" using .indexOf().
console.log(sample.indexOf("C")); // 6

// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
console.log(sample.substring(6, 12)); // Codeup

///////// 3 /////////
/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
how much will you have to pay?
 */
let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let totalPrice = (littleMermaid + brotherBear + hercules) * 3;
console.log(totalPrice); // 27

/* Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, ' +
'they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. ' +
'How much will you receive in payment for this week? ' +
'You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */
let googlePerHour = 400;
let amazonPerHour = 380;
let facebookPerHour = 350;
let weeklyPayment = (facebookPerHour * 10) + (googlePerHour * 6) + (amazonPerHour * 4);
console.log(`This week's payment is $${weeklyPayment.toFixed(2)} dollars`); // 7420.00

/* A student can be enrolled in a class only if the class is
not full and the class schedule does not conflict with her current schedule.
 */
let classSize = 30
let classSizeCap = 50
let classConflict = false;
let canEnroll = false;
if (classSize < classSizeCap && classConflict === false) {
    canEnroll = true;
}
console.log(canEnroll); // true

/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
 Premium members do not need to buy a specific amount of products.
 */
let itemsBought = 1;
let productOffer = false;
let offerValid = false
let isPremium = false
if((itemsBought >= 2 && offerValid === true) || isPremium === true){
    productOffer = true;
}
console.log(productOffer);

///////// 4 /////////
let username = 'codeup';
let password = 'notastrongpassword';
// the password must be at least 5 characters
let passwordLength = password.length >= 5; // true

// the password must not include the username
let passwordInclude = password.includes(username); // false

// the username must be no more than 20 characters
let usernameLength = username.length <= 20; // true

// neither the username or password can start or end with whitespace
let whitespace = username === username.trim() && password === password.trim(); // true

console.log(whitespace);