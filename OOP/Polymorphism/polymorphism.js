class Truck {
    constructor(model, hPower) {
        this.model = model;
        this.hPower = hPower;
    }
    displayStats() {
        console.log(`I am truck, my model is ${this.model} and my horse power is ${this.hPower}`);
    }
}
class Sedan {
    constructor(model, hPower) {
        this.model = model;
        this.hPower = hPower;
    }
    displayStats() {
        console.log(`I am sedan, my model is ${this.model} and my horse power is ${this.hPower}`);
    }
}
let Kia = new Sedan("2023 Kia Rio", 120);
let Jeep = new Truck("2020 Jeep Gladiator", 640);
let carsList = [Kia, Jeep];
function carsCheck(cars) {
    for (let i = 0; i < cars.length; i++) {
        cars[i].displayStats();
    }
}
carsCheck(carsList);
