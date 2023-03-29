

// const countingWords = str => {
//     let words = str.split(' ');
//     return words.reduce((count, word) => {
//         count[word] = (count[word] || 0) +1
//         return count;
//     }, {})
// }

const countingWords = arr => {
    arr.reduce((acc, curr) => {
        return {...acc, [curr]: (acc[curr] || 0) + 1}
    }, {})
}

console.log(countingWords('Mary had a little lamb little lamb little lamb'));

const nums = [29.76, 41.85, 46.5, 11.2, 99.5, 5];

const averageOfArr = arr => {
    return arr.reduce((total, current, index, array) => {
        total += current;
        if (index === array.length - 1) {
            return total / array.length;
        } else {
            return total;
        }
    });
}

let head = document.createElement('h1');
document.body.appendChild(head);
head.innerText = 'Prices without tax';
let list = document.createElement('ul');

nums.forEach(num => list.innerHTML +=`<li> $${num} </li>`);

document.body.appendChild(list);

console.log(averageOfArr(nums));

let newHead = document.createElement('h1');
document.body.appendChild(newHead);
newHead.innerText = 'Prices with tax';
let newList = document.createElement('ul');

let priceWithTax = arr => arr.map(element => (element * 1.0825).toFixed(2));

priceWithTax(nums).forEach(num =>newList.innerHTML +=`<li> $${num} </li>`);

document.body.appendChild(newList);

let numbers = [12, 3, 56 ,2, 7, 77, 34, 9, 11, 0, 23, 90, 3];
let squared = numbers.map(num => num ** 2);
console.log(squared);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

let mileage = cars.map(car => car.mileage);
let makeModel = cars.map(car => `${car.make} ${car.model}`)
console.log(makeModel)
console.log(mileage);

const books = [
    {
        title: "Mexican Gothic",
        author: {
            firstName: "Sylvia",
            lastName: "Moreno"
        }
    },
    {
        title: "All Systems Red",
        author: {
            firstName: "Martha",
            lastName: "Wells"
        }
    },
    {
        title: "1177 B.C.: The Year Civilization Collapsed",
        author: {
            firstName: "Eric",
            lastName: "Cline"
        }
    },
    {
        title: "Version Control With Git",
        author: {
            firstName: "Jon",
            lastName: "Loeliger"
        }
    },
    {
        title: "Data Structures the Fun Way",
        author: {
            firstName: "Jeremy",
            lastName: "Kubica"
        }
    }
]

let author = books.map(book => `${book.author.firstName} ${book.author.lastName}`);
console.log(author);

const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox",
    "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff", "Peach", "Daisy", "Bowser",
    "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina",
    "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight",
    "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle",
    "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario",
    "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma",
    "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man",
    "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta",
    "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant",
    "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra",
    "Mythra", "Kazuya", "Sora"];

let fiveLetters = smashers.filter(a => a.length === 5).sort();

let tenLetters = smashers.filter(a => a.length > 10).sort();

console.log(fiveLetters);
console.log(tenLetters);

const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];

let totalAmount = aHundredNums.reduce((a, b) => a + b);

let average = aHundredNums.reduce((total, current, index, array) => {
    total += current;
    return index === array.length-1 ? total/array.length: total;
})
console.log(average);