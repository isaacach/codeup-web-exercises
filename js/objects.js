(function() {
    "use strict";
    function formatToLocaleString(number, language='en', country='US', currency='USD'){
        return parseFloat(number).toLocaleString(`${language}-${country}`,
            {style: 'currency', currency: currency}
        );
    }
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: 'Isaac',
        lastName: 'Achenbach'
    }

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return 'Hello ' + this.firstName + ' ' + this.lastName;
    }
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(item) {
        if (item.amount > 200) {
            console.log(`${item.name} has spent $${item.amount} and gets a $${(item.amount * .12).toFixed(2)} discount. New amount => ${formatToLocaleString(item.amount * .88)}`);
        } else {
            console.log(`${item.name} has spent $${item.amount} and gets no discount.`);
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
            {title: 'A Tale of Two Cities',
            author: {firstName: 'Charles', lastName: 'Dickens'}},

            {title: 'And Then There Were None',
            author: {firstName: 'Agatha', lastName: 'Christie'}},

            {title: 'The Da Vinci Code',
            author: {firstName: 'Dan', lastName: 'Brown'}},

            {title: 'The Catcher in the Rye',
            author: {firstName: 'J.D.', lastName: 'Salinger'}},

            {title: 'The Alchemist',
            author: {firstName: 'Paulo', lastName: 'Coelho'}}
        ]

    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(book => {
        console.log('Book # ' + parseFloat(books.indexOf(book) + 1));
        console.log('Title: ' + book.title);
        console.log(`Author:  ${book.author.firstName} ${book.author.lastName}`);
        console.log('------------')
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function CreateBook(title, firstName, lastName) {
        this.title = title;
        this.author = {};
        this.author.firstName = firstName;
        this.author.lastName = lastName;
    }
    const newBooks = [];

    newBooks.push(new CreateBook('A Tale of Two Cities', 'Charles', 'Dickens'));
    newBooks.push(new CreateBook('And Then There Were None', 'Agatha', 'Christie'));
    newBooks.push(new CreateBook('The Da Vinci Code', 'Dan', 'Brown'));
    newBooks.push(new CreateBook('The Catcher in the Rye', 'J.D.', 'Salinger'));
    newBooks.push(new CreateBook('The Alchemist', 'Paulo', 'Coelho'));

    function showBookInfo(object) {
        console.log('Book # ' + num );
        console.log('Title: ' + object.title);
        console.log(`Author: ${object.author.firstName} ${object.author.lastName}`);
        console.log('------------')
    }
    let num = 1;
    newBooks.forEach(book => {
        console.log(showBookInfo(book));
        num++
    })
})();