type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
};

function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }[]): Car {
    const car: Car = {
        manufacturer,
        model,
    };

    for (const arg of args) {
        Object.assign(car, arg);
    }

    return car;
}


const carInfo: Car = createCar('Toyota', 'Camry', { color: 'blue' }, { optionalFeature: 'sunroof' });
console.log(carInfo);
  