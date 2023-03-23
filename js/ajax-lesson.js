// let person = {
//     firstName: 'isaac',
//     lastName: 'achenbach',
//     email: 'isaac.achenbach1@gmail.com'
// }
//
// let personJSON = JSON.stringify(person);

// traditional
const getMovie = (movie = 1) => {
    return fetch(`https://swapi.dev/api/films/${movie}/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        }).catch(error => {
             console.log(error);
    });
}

getMovie().then(movie => {
    // continue with movie data
    console.log(movie);
})


// async / await

const getMoviesArrow = async (movie) => {
    let response = await fetch(`https://swapi.dev/api/films/${movie}/`);
    return await response.json();
}

// let newHope = getMoviesArrow();

(async()=>{
    let newHope = await getMoviesArrow();
})();

async function getMoviesAsync() {
    try {
        let response = await fetch('https://swapi.dev/api/films/1/');
        let data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

