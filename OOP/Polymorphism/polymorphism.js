// interface Car {
//     model: string;
//     hPower: number;
//     displayStats(): void;
// }
// class Truck implements Car {
//     constructor(model: string, hPower: number) {
//         this.model = model;
//         this.hPower = hPower;
//     }
//     model: string;
//     hPower: number;
//     displayStats() {
//         console.log(`I am truck, my model is ${this.model} and my horse power is ${this.hPower}`);
//     }
// }
// class Sedan implements Car {
//     constructor(model: string, hPower: number) {
//         this.model = model;
//         this.hPower = hPower;
//     }
//     model: string;
//     hPower: number;
//     displayStats() {
//         console.log(`I am sedan, my model is ${this.model} and my horse power is ${this.hPower}`);
//     }
// }
// let Kia: Sedan = new Sedan("2023 Kia Rio", 120);
// let Jeep: Truck = new Truck("2020 Jeep Gladiator", 640);
// let carsList: Car[] = [Kia, Jeep];
// function carsCheck(cars: Car[]) {
//     for (let i = 0; i < cars.length; i++) {
//         cars[i].displayStats();
//     }
// }
// carsCheck(carsList);
