/**
 * Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
 */

let favorite_transportation_13: string[] = ["Honda Car", "Honda Bike", "Honda Civic", "Honda City", "Honda CD 70", "Benelli Bike", "Yamaha Bike", "Yamaha Car", "Yamaha YBR", "Yamaha YBR 125"];

favorite_transportation_13.forEach((item) => {
    console.log(`I would like to own a ${item}`);
})