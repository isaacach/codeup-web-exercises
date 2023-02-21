"use strict"
// object literal
const currentWeather = {
    temperature: 54.4,
    humidity: 28,
    clouds: 0,
    windDirection: "NNE"
}
// console.log(currentWeather.windDirection); // dot notation

// console.log(currentWeather['windDirection']); // bracket notation

currentWeather.precipitation = 11; // adding a new key with a value

// console.log(currentWeather); // shows object with new precipitation key

function displayWeatherProperty(prop) { // can only use bracket notation for variables
    // console.log(currentWeather[prop]);
}

displayWeatherProperty('humidity');

for (let property in currentWeather) { // for...in loop for object keys
    // // console.log(property);
    // // console.log(currentWeather[property]);
    // console.log(property + ': ' + currentWeather[property]);
}

const hourlyWeather = [
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];

console.log(hourlyWeather[1].time) // 09:00

hourlyWeather.forEach(prop => {
    console.log(prop);
    console.log(prop.temperature);
})

for (let prop of hourlyWeather) { // for...of loop for arrays and strings
    console.log(prop);
}