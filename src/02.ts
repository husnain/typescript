/**
 * Problem: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */

let person02: string = "John Doe";
let lowercase_person02: string = person02.toLowerCase();
let uppercase_persn02: string = person02.toUpperCase();


function titleCase(str: string) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

console.log("Lowercase: " + lowercase_person02);
console.log("Uppercase: " + uppercase_persn02);
console.log("Titlecase: " + titleCase(lowercase_person02));