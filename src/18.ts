/**
 * Seeing the World: Think of at least five places in the world you’d like to visit.
 */

let places_18: string[] = ["Paris", "London", "New York", "Tokyo", "Dubai"];

console.log("Original: ", places_18);

let sorted_places_18: string[] = [...places_18].sort();

console.log("alphabetical order: ",sorted_places_18);
console.log("original: ",places_18);
let reverse_places_18: string[] = [...places_18].sort();
console.log("Reverse order: ",reverse_places_18);
console.log("original: ",places_18);

let reverse_alphabet_places_18: string[] = [...sorted_places_18].reverse();

console.log("Reverse order alphabet: ",reverse_places_18);
console.log("original: ",places_18);