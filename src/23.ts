let phone: string = "IPhone";

console.log(phone == "IPhone" ? "I have an IPhone" : "I have an Android");
console.log(phone == "Android" ? "I have an Android" : "I have an IPhone")
console.log(phone == "android"); // false
console.log(phone == "Android"); // false
console.log(phone == "iphone"); // false
console.log(phone == "Apple"); // false
console.log(phone != "IPhone"); // false
console.log(phone == "IPhone"); // true
console.log(phone == "IPhone" || phone == "Android"); // true
console.log(phone == "IPhone" || phone == "Android" || phone == "iphone" || phone == "android"); // true
console.log(phone != "Android"); // true
console.log(phone != "iphone"); // true