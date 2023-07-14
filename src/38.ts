function describe_city(city: string = "Lahore", country: string = "Pakistan") {
    console.log(`${city} is in ${country}`)
}

console.log(describe_city());
console.log(describe_city("Karachi"));
console.log(describe_city("Islamabad", "Pakistan"));
