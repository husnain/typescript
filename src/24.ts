let number_24: number = 8;
let string_24: string = "honda";
let boolean_24: boolean = true;
let array_24: string[] = ["honda", "toyota", "suzuki"];

console.log( number_24 == 9);
console.log( number_24 > 7);
console.log( number_24 < 9);
console.log( number_24 >= 8);
console.log( number_24 != 9);

console.log( string_24 == "honda");
console.log( typeof string_24 != "string");

console.log( !boolean_24);
console.log( boolean_24);

console.log( array_24[0] == "honda");
// check if volvo is in array
console.log(array_24.indexOf("volvo") != -1);

console.log(number_24 == 6 || number_24 == 8);
console.log(number_24 == 8 && string_24 == "honda");

console.log(number_24 == 8 && string_24 == "honda" && boolean_24 == true);
console.log(number_24 == 8 && string_24 == "honda" && !boolean_24);