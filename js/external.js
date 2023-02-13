"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let favColor = prompt("What is your favorite color?");
if (favColor === "orange") {
    alert(`Awesome, ${favColor} is my favorite color too!`);
} else {
    alert(`${favColor} is a great color!`);
}
/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
how much will you have to pay?
 */
let littleMermaid = parseInt(prompt("How many days did you have The Little Mermaid?"));
let brotherBear = parseInt(prompt("How many days did you have Brother Bear?"));
let hercules = parseInt(prompt("How many days did you have Hercules?"));
let totalCost = (littleMermaid + brotherBear + hercules) * 3;
alert(`The total cost for your movie rentals is ${totalCost.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);

/* Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, ' +
'they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. ' +
'How much will you receive in payment for this week? ' +
'You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */
let googleHours = prompt("How many hours did you work for Google this week?");
let amazonHours = prompt("How many hours did you work for Amazon this week?");
let facebookHours = prompt("How many hours did you work for Facebook this week?");
let weeklyPayment = (facebookHours * 350) + (googleHours * 400) + (amazonHours * 380);
alert(`This week's payment is ${weeklyPayment.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);

/* A student can be enrolled in a class only if the class is
not full and the class schedule does not conflict with her current schedule.
 */
let classSize = prompt("How many people are currently in the class?");
let classSizeCap = 50;
let classConflict = confirm("Does this class interfere with your schedule?");
if ((classSize < classSizeCap) && classConflict === false) {
    alert("You are able to take this class");
} else {
    alert("Sorry, you are not able to take this class");
}

/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
 Premium members do not need to buy a specific amount of products.
 */
let itemsBought = prompt("How many items did you buy?");
let offerValid = confirm("Is the offer still valid?");
let isPremium = confirm("Are you a premium member?");
if((isPremium || itemsBought >= 2) && offerValid === true){
    alert("The offer can be applied!");
} else {
    alert("Sorry, the offer cannot be applied");
}
console.log(productOffer);

