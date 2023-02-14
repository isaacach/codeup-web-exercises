// This is a comment

//
// let var1 = true;  // boolean
// let var2 = 23.78;  // number
// let var3 = "Hello Codeup"  // string
// let var4 = "23.78";
// let var5 = "2" + "2";  // 22
// let var6 = 'single quote string';
// let var7 = 'Jason\'s been drinking';  // backslash to escape characters
// let var8 = `It wouldn't matter if I "used" single or double`  // back tick allows single or double quotes within the string
//
// let var9;  // undefined
//
// console.log(typeof '1' + 2);
//
// let var10 = "fish";
// console.log(var10.substring(0, 2));
//
// let e = false;
// e++;
// console.log(e);
//
// let perplexed;
// console.log(perplexed + 2)



const everyOther = (string) => {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            newString += string[i].toUpperCase()
        } else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}

console.log(everyOther('hello???'));
console.log(everyOther(' '));
console.log(everyOther('river monster'));
console.log(everyOther('HELLO'));
//     const everyOther = (string) => {
//         counter = 0
//         string = string.split('');
//         for (let i = 2; i <= string.length -1; i++) {
//             if (i % 2 === 0) {
//                 string[counter].toUpperCase()
//                 i++;
//                 counter++;
//             } else{
//                 continue;
//             }
//         }
//     }
//
//
//     console.log(everyOther('apples'));
// }
//
//
// console.log(everyOther('apples'));
//
// let word = 'apple'
// word = word.split('');
// console.log(word[0].toUpperCase());
// console.log(word);

