
const getChar = async (char = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${char}/`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

(async()=>{

    let character1 = await getChar();
    console.log(`${character1.name}'s birth year is ${character1.birth_year}`);
    console.log(`${character1.name}'s height is ${character1.height}`);
    console.log(`${character1.name}'s hair color is ${character1.hair_color}`);
    console.log(`${character1.name}'s eye color is ${character1.eye_color}`);

    let character2 = await getChar(2);
    console.log(`${character2.name}'s birth year is ${character2.birth_year}`);
    console.log(`${character2.name}'s height is ${character2.height}`);
    console.log(`${character2.name}'s hair color is ${character2.hair_color}`);
    console.log(`${character2.name}'s eye color is ${character2.eye_color}`);

    let character5 = await getChar(5);
    console.log(`${character5.name}'s birth year is ${character5.birth_year}`);
    console.log(`${character5.name}'s height is ${character5.height}`);
    console.log(`${character5.name}'s hair color is ${character5.hair_color}`);
    console.log(`${character5.name}'s eye color is ${character5.eye_color}`);

})();

