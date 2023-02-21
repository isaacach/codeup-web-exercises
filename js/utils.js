
function formatToLocaleString(number, language='en', country='US', currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomNumberArray(size, maxNum) {
    const array = [];
    for (let i = 0; i < size; i++) {
        let newNum = randomNumber(1, maxNum);
        while (array.includes(newNum)) {
            newNum = randomNumber(1, maxNum);
        }
            array.push(newNum);
        }
    return array;
    }
console.log(randomNumberArray(30));
